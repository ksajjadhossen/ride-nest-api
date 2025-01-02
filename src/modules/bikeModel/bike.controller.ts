import { Request, RequestHandler, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { bikeService } from "./bike.service";

const createBike: RequestHandler = catchAsync(
	async (req: Request, res: Response) => {
		const result = await bikeService.createBike(req.body);
		res.send({
			status: httpStatus.OK,
			success: true,
			message: "bike created Successfully",
			data: result,
		});
	}
);

const updateBike: RequestHandler = catchAsync(
	async (req: Request, res: Response) => {
		const { bikeId } = req.params;
		const bikeData = req.body;
		const result = await bikeService.updateBike(bikeId, bikeData);
		res.send({
			status: httpStatus.OK,
			success: true,
			message: "bike updated Successfully",
			data: result,
		});
	}
);

const getAllBike: RequestHandler = catchAsync(
	async (req: Request, res: Response) => {
		const result = await bikeService.getAllBike();
		res.send({
			status: httpStatus.OK,
			success: true,
			message: "bike find Successfully",
			data: result,
		});
	}
);

const deleteBike: RequestHandler = catchAsync(
	async (req: Request, res: Response) => {
		const { bikeId } = req.params;
		const result = await bikeService.deleteBike(bikeId);
		res.send({
			status: httpStatus.OK,
			success: true,
			message: "bike deleted Successfully",
			data: result,
		});
	}
);

export const bikeController = {
	createBike,
	updateBike,
	getAllBike,
	deleteBike,
};
