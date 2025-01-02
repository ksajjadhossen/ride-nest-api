import { TBike } from "./bike.interface";
import { Bike } from "./bike.model";

const createBike = async (payload: TBike) => {
	const result = await Bike.create(payload);
	console.log(result);
	return result;
};

export const bikeService = {
	createBike,
};
