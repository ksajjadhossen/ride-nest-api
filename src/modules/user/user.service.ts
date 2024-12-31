import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: TUser) => {
	if (!payload) {
		throw new Error("data could not found");
	}
	const result = await User.create(payload);
	return result;
};

export const userService = {
	createUser,
};
