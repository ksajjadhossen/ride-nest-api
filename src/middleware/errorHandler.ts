import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import httpStatus from "http-status"; // Ensure http-status is imported
import { JsonWebTokenError } from "jsonwebtoken";
import { ZodError } from "zod";
import AppError from "../errors/AppError";
import { TErrorSources } from "../errors/errorTypes";
import handleMongooseCastError from "../errors/handleMongooseCastError";
import handleMongooseDuplicateIdError from "../errors/handleMongooseDuplicateIdError";
import handleMongooseValidationError from "../errors/handleMongooseValidationError";
import handleZodError from "../errors/handleZodError";

// Not found Error Handler
const notFound = (_req: Request, res: Response, _next: NextFunction) => {
	const err = new AppError(httpStatus.NOT_FOUND, "Resource Not Found");
	res.status(err.statusCode).json({
		success: false,
		statusCode: err.statusCode,
		message: err.message,
	});
};

// Global Error Handler
const global: ErrorRequestHandler = (error, _req, res, _next) => {
	let statusCode = 500;
	let message = "Something went wrong";
	let errorSources: TErrorSources = [
		{
			path: "",
			message: "Something went wrong",
		},
	];

	if (error instanceof ZodError) {
		const simplifiedError = handleZodError(error);

		statusCode = simplifiedError.statusCode;
		message = simplifiedError.message;
		errorSources = simplifiedError.errorSources;
	} else if (error?.name === "ValidationError") {
		const simplifiedError = handleMongooseValidationError(error);

		statusCode = simplifiedError.statusCode;
		message = simplifiedError.message;
		errorSources = simplifiedError.errorSources;
	} else if (error?.name === "CastError") {
		const simplifiedError = handleMongooseCastError(error);

		statusCode = simplifiedError?.statusCode;
		message = simplifiedError?.message;
		errorSources = simplifiedError?.errorSources;
	} else if (error?.code === 11000) {
		const simplifiedError = handleMongooseDuplicateIdError(error);

		statusCode = simplifiedError.statusCode;
		message = simplifiedError.message;
		errorSources = simplifiedError.errorSources;
	} else if (error instanceof JsonWebTokenError) {
		statusCode = 401;
		message = error.name;
		errorSources = [
			{
				path: "",
				message: error.message,
			},
		];
	} else if (error instanceof AppError) {
		statusCode = error.statusCode;
		message = error.message;
		errorSources = [
			{
				path: "",
				message: error.message,
			},
		];
	} else if (error instanceof Error) {
		message = error.message;
		errorSources = [
			{
				path: "",
				message: error.message,
			},
		];
	}

	res.status(statusCode).json({
		success: false,
		message,
		errorSources,
	});
};

export const errorHandler = {
	notFound,
	global,
};
