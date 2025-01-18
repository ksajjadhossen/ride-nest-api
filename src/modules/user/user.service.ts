import { TUser } from "./user.interface";
import { User } from "./user.model";

const getAllUsers = async () => {
	const result = User.find();
	return result;
};

const updateUser = async (payload: string, data: Partial<TUser>) => {
	if (!payload || !data) {
		throw new Error("Data could not found");
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
