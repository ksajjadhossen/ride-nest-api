import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";

const createUser = async (payload: TUser) => {
	if (!payload) {
		throw new Error("data could not found");
	}
	const result = await User.create(payload);
	return result;
};

export const authService = {
	createUser,
};
