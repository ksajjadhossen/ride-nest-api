import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
import config from "../../config";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { TLogIn } from "./auth.interface";

const createUser = async (payload: TUser) => {
	const isUserExists = await User.findOne({ email: payload.email });
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
	if (!user) {
		throw new Error("this email is not exists");
	}

	const isPasswordMatched = bcrypt.compareSync(payload.password, user.password);
	if (!isPasswordMatched) {
		throw new Error("Invalid password");
	}
	const fooBar = {
		id: user.id,
		name: user.name,
		email: user.email,
	};
	const jwtAccessToken = Jwt.sign(fooBar, config.jwt_secret as string);

	return {
		success: true,
		jwt_access_token: jwtAccessToken,
	};
};

export const authService = {
	createUser,
	logInUser,
};
