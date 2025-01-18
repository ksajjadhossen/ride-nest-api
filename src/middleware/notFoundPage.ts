import { NextFunction, Request, Response } from "express";

const notFoundRoute = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	res.status(404).json({
		success: false,
		message: "page not fund",
		error: "do not found any page",
	});
};

export default notFoundRoute;
