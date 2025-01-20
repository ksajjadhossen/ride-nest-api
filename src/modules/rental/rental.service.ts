import httpStatus from "http-status";
import { JwtPayload } from "jsonwebtoken";
import AppError from "../../errors/AppError";
import { Bike } from "../bikeModel/bike.model";
import { User } from "../user/user.model";
import Rental from "./rental.model";

const createRentals = async (
	payload: { bikeId: string; startTime: string },
	userData: JwtPayload
) => {
	const user = await User.findOne({ email: userData.email });

	if (!user) {
		throw new AppError(httpStatus.NOT_FOUND, "User not found");
	}
	const bike = await Bike.findById(payload.bikeId);
	if (!bike) {
		throw new AppError(httpStatus.NOT_FOUND, "Bike not found");
	}
	if (bike.isAvailable === false) {
		throw new AppError(httpStatus.FORBIDDEN, "Bike is not available");
	}
	bike.isAvailable = false;
	const rentalData = await Rental.create({
		userId: user.id,
		startTime: payload.startTime,
		bikeId: bike._id,
	});
	await bike.save();
	const result = await rentalData.populate("userId bikeId");
	return result;
};

const updateRentals = async (payload: string) => {
	const rental = await Rental.findById(payload);
	if (!rental) {
		throw new AppError(httpStatus.NOT_FOUND, " rental not found");
	}
	const bike = await Bike.findById(rental.bikeId);
	if (!bike) {
		throw new AppError(httpStatus.NOT_FOUND, "Bike not found");
	}
	const costCalculation = () => {
		const startTime = rental.startTime;
		const startDate = new Date(startTime).getHours();
		const endDate = new Date().getHours();

		const timeCount = endDate - startDate;
		const costPerHour = bike.pricePerHour * timeCount;
		return costPerHour;
	};
	bike.isAvailable = true;
	const result = await Rental.findByIdAndUpdate(
		payload,
		{ isReturned: true, returnTime: new Date(), totalCost: costCalculation() },
		{ new: true }
	);
	bike.save();
	return result?.populate("userId  bikeId");
};
export const rentalService = {
	createRentals,
	updateRentals,
};
