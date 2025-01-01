import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: TUser) => {
	if (!payload) {
		throw new Error("data could not found");
	}
	const result = await User.create(payload);
	return result;
};

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

export const userService = {
	createUser,
	getAllUsers,
	updateUser,
};
