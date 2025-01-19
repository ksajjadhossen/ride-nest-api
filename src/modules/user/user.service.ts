import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TUser } from "./user.interface";
import { User } from "./user.model";
const getAllUsers = async () => {
	const result = User.find();
	return result;
};

const updateUser = async (payload: string, data: Partial<TUser>) => {
	const userData = await User.findOne({ _id: payload });
	if (!userData) {
		throw new AppError(httpStatus.NOT_FOUND, "User not found");
	}
	console.log("here is the userData", userData);
	if (!payload || !data) {
		throw new AppError(httpStatus.NOT_FOUND, "User not found");
	}
	const result = await User.findByIdAndUpdate(payload, data, { new: true });
	return result;
};

const deleteUser = async (payload: string) => {
	const result = await User.findByIdAndUpdate(
		payload,
		{ isDeleted: true },
		{ new: true }
	);
	return result;
};

export const userService = {
	getAllUsers,
	updateUser,
	deleteUser,
};
