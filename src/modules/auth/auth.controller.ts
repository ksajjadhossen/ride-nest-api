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
		const result = await authService.logInUser(req.body);
		res.send({
			status: httpStatus.OK,
			success: true,
			message: "user logged In successfully",
			data: result,
		});
	}
);

export const authController = {
	createUser,
	loginUser,
};
