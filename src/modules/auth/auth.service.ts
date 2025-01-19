import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { TLogIn } from "./auth.interface";

const createUser = async (payload: TUser) => {
	const isUserExists = await User.findOne({ email: payload.email });
	console.log(isUserExists);
	if (isUserExists) {
		throw new Error("this email already exists");
	}
	if (!payload) {
		throw new Error("data could not found");
	}
	const result = await User.create(payload);
	return result;
};

const logInUser = async (payload: TLogIn) => {
	const user = await User.findOne({ email: payload.email });
	console.log(user);
};

export const authService = {
	createUser,
	logInUser,
};
