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

export const bikeController = {
	createBike,
};
