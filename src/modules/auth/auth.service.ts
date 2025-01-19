import bcrypt from "bcryptjs";
import httpStatus from "http-status";
import Jwt from "jsonwebtoken";
import config from "../../config";
import AppError from "../../errors/AppError";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";

const createUser = async (payload: TUser) => {
	const isUserExists = await User.findOne({ email: payload.email });
	if (isUserExists) {
		throw new AppError(httpStatus.CONFLICT, "this email already exists");
	}

	const result = await User.create(payload);
	return result;
};

const logInUser = async (payload: TUser) => {
	const user = await User.findOne({ email: payload.email }).select("+password");
	if (!user) {
		throw new AppError(httpStatus.NOT_FOUND, "User not found");
	}

	const isPasswordMatched = bcrypt.compareSync(payload.password, user.password);
	if (!isPasswordMatched) {
		throw new AppError(httpStatus.BAD_REQUEST, "Invalid credentials");
	}
	const jwtPayload = {
		role: user.role,
		name: user.name,
		email: user.email,
	};

	const jwtAccessToken = Jwt.sign(jwtPayload, config.jwt_secret as string, {
		expiresIn: "30d",
	});

	const jwtRefreshToken = Jwt.sign(jwtPayload, config.jwt_secret as string, {
		expiresIn: "90d",
	});

	return {
		accessToken: jwtAccessToken,
		refreshToken: jwtRefreshToken,
	};
};

export const authService = {
	createUser,
	logInUser,
};
