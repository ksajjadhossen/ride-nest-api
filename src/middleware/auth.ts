import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import AppError from "../errors/AppError";
import { TUserRole } from "../modules/user/user.interface";
import { User } from "../modules/user/user.model";
import catchAsync from "../utils/catchAsync";

const Auth = (...userRoles: TUserRole[]) => {
	return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
		const accessToken = req.headers.authorization?.split(" ")[1];

		if (!accessToken) {
			throw new AppError(httpStatus.UNAUTHORIZED, "Unauthorized access");
		}

		const decodedToken = jwt.verify(
			accessToken,
			config.jwt_secret as string
		) as JwtPayload;

		const user = await User.findOne({ email: decodedToken?.email });

		if (!user) {
			throw new AppError(httpStatus.NOT_FOUND, "No user found");
		}

		if (userRoles && !userRoles.includes(decodedToken?.role)) {
			res.status(httpStatus.FORBIDDEN).json({
				success: false,
				statusCode: httpStatus.FORBIDDEN,
				message: "Access Forbidden",
				data: undefined,
			});
		}

		req.user = decodedToken;
		next();
	});
};
export default Auth;
