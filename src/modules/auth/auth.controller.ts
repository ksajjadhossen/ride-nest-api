import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { authService } from "./auth.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
	const data = req.body;

	try {
		const result = await authService.createUser(data);
		res.send({
			status: httpStatus.OK,
			success: true,
			message: "user Created Successfully",
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

const loginUser = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const { accessToken, refreshToken } = await authService.logInUser(req.body);

		// send refresh token on cookie
		res.cookie("refresh_token", refreshToken);

		res.status(200).json({
			status: httpStatus.OK,
			success: true,
			message: "user logged In successfully",
			data: {
				token: accessToken,
			},
		});
	}
);

export const authController = {
	createUser,
	loginUser,
};
