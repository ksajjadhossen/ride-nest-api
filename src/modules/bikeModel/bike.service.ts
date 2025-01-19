import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TBike } from "./bike.interface";
import { Bike } from "./bike.model";

const createBike = async (payload: TBike) => {
	const result = await Bike.create(payload);
	return result;
};

const updateBike = async (payload: string, bikeData: Partial<TBike>) => {
	const mainData = await Bike.findById(payload);
	if (!mainData) {
		throw new AppError(httpStatus.NOT_FOUND, "Here is no data.");
	}
	const result = await Bike.findByIdAndUpdate(payload, bikeData, {
		success: true,
		new: true,
	});
	return result;
};

const getAllBike = async () => {
	const result = await Bike.find();
	return result;
};

const deleteBike = async (payload: string) => {
	const mainData = await Bike.findById(payload);
	if (!mainData) {
		throw new AppError(httpStatus.NOT_FOUND, "Here is no data.");
	}
	const result = await Bike.findByIdAndUpdate(
		payload,
		{ isDeleted: true },
		{ new: true }
	);
	return result;
};

export const bikeService = {
	createBike,
	updateBike,
	getAllBike,
	deleteBike,
};
