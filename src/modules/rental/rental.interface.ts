import { ObjectId } from "mongoose";

export type TRental = {
	bikeId: ObjectId;
	userId: ObjectId;
	startTime: Date;
	returnTime: Date;
	totalCost: number;
	isReturned?: boolean;
};
