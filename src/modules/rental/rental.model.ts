import { model, Schema } from "mongoose";
import { TRental } from "./rental.interface";

const rentalSchema = new Schema<TRental>({
	bikeId: {
		type: String,
		required: true,
	},
	userId: {
		type: String,
		default: "here is the user id;",
	},
	startTime: {
		type: Date,
		default: Date.now(),
	},
	returnTime: {
		type: Date,
	},
	totalCost: {
		type: Number,
	},
	isReturned: { type: Boolean, default: false },
});

const Rental = model<TRental>("Rental", rentalSchema);

export default Rental;
