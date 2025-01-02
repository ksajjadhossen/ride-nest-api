import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../utils/catchAsync";

const createBike: RequestHandler = catchAsync(
	async (req: Request, res: Response) => {
		console.log(req.body);
		const result = "";
		res.send({
			status: httpStatus.OK,
			success: true,
			message: "user updated Successfully",
			data: result,
		});
	}
);

export const bikeController = {
	createBike,
};
