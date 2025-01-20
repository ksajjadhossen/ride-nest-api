import { RequestHandler } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { rentalService } from "./rental.service";

const createRentals: RequestHandler = catchAsync(async (req, res) => {
	const data = req.body;
	const userData = req.user;
	const result = await rentalService.createRentals(data, userData);
	res.send({
		success: true,
		status: httpStatus.OK,
		message: "rental created successfully.",
		data: result,
	});
});

const updateRentals: RequestHandler = catchAsync(async (req, res) => {
	const { id } = req.params;
	const result = await rentalService.updateRentals(id);
	res.send({
		success: true,
		status: httpStatus.OK,
		message: "rental updated successfully.",
		data: result,
	});
});

export const rentalController = {
	createRentals,
	updateRentals,
};
