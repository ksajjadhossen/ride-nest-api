import { NextFunction, Request, RequestHandler, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
	const data = req.body;
	try {
		const result = await userService.createUser(data);
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

const getAllUsers: RequestHandler = catchAsync(async (req, res) => {
	const result = await userService.getAllUsers();
	res.send({
		status: httpStatus.NOT_FOUND,
		success: true,
		message: "user Created Successfully",
		data: result,
	});
});
export const userController = {
	createUser,
	getAllUsers,
};
