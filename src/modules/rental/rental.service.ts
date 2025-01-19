import httpStatus from "http-status";
import { JwtPayload } from "jsonwebtoken";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TRental } from "./rental.interface";
import Rental from "./rental.model";

const createRentals = async (
	payload: Partial<TRental>,
	userData: JwtPayload
) => {
	if (userData === undefined) {
		throw new AppError(httpStatus.UNAUTHORIZED, "you are Unauthorized");
	}

	if (userData.role !== "user") {
		throw new AppError(
			httpStatus.FORBIDDEN,
			"you are not authorized to perform this action"
		);
	}
	if (!payload.bikeId || !payload.startTime) {
		throw new AppError(httpStatus.BAD_REQUEST, "Missing required fields");
	}
	const user = await User.findOne({ email: userData.email });

	if (!user) {
		throw new AppError(httpStatus.NOT_FOUND, "User not found");
	}
	payload.userId = user._id;
	const result = await Rental.create(payload);

	return result;
};

export const rentalService = {
	createRentals,
};
