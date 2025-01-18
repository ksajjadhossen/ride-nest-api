import { Bike } from "../bikeModel/bike.model";
import { TRental } from "./rental.interface";
import Rental from "./rental.model";

const createRentals = async (payload: TRental) => {
	const bikeData = await Bike.findById(payload.bikeId);
	if (!bikeData) {
		throw new Error("no data found");
	}
	const result = await Rental.create(payload);
	console.log("result", result);
	return result;
};

export const rentalService = {
	createRentals,
};
