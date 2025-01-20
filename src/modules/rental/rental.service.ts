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
	const rentalData = await Rental.create({
		userId: user.id,
		startTime: payload.startTime,
		bikeId: bike._id,
	});

	const result = await rentalData.populate("userId bikeId");
	return result;
};

export const rentalService = {
	createRentals,
};
