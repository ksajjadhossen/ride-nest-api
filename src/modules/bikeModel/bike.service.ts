import { TBike } from "./bike.interface";
import { Bike } from "./bike.model";

const createBike = async (payload: TBike) => {
	const result = await Bike.create(payload);
	console.log(result);
	return result;
};

const updateBike = async (payload: string, bikeData: Partial<TBike>) => {
	if (!payload || !bikeData) {
		throw new Error("Data is messing");
	}
	const mainData = await Bike.findById(payload);
	if (!mainData) {
		throw new Error("Here is no data.");
	}
	const result = await Bike.findByIdAndUpdate(payload, bikeData, {
		success: true,
		new: true,
	});
	return result;
};

export const bikeService = {
	createBike,
	updateBike,
};
