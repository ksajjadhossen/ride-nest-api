import { TRental } from "./rental.interface";
import Rental from "./rental.model";

const createRentals = async (payload: TRental) => {
	const result = await Rental.create(payload);
	return result;
};

export const rentalService = {
	createRentals,
};
