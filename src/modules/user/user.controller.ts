import { RequestHandler } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { userService } from "./user.service";

const getAllUsers: RequestHandler = catchAsync(async (req, res) => {
	const result = await userService.getAllUsers();
	res.send({
		status: httpStatus.OK,
		success: true,
		message: "user Created Successfully",
		data: result,
	});
});

const updateUser: RequestHandler = catchAsync(async (req, res) => {
	const { userId } = req.params;
	const userData = req.body;
	const result = await userService.updateUser(userId, userData);
	res.send({
		status: httpStatus.OK,
		success: true,
		message: "user updated Successfully",
		data: result,
	});
});

const deleteUser: RequestHandler = catchAsync(async (req, res) => {
	const { userId } = req.params;
	const result = await userService.deleteUser(userId);
	res.send({
		status: httpStatus.OK,
		success: true,
		message: "user updated Successfully",
		data: result,
	});
});
export const userController = {
	getAllUsers,
	updateUser,
	deleteUser,
};
