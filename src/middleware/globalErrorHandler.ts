import { ErrorRequestHandler } from "express";
import handleZodError from "../errors/handleZodError";
import validationErrorHandler from "../errors/validationErrorHandler";

const globalErrorHandler: ErrorRequestHandler = async (err, req, res, next) => {
	if (err.name === "ZodError") {
		const error = await handleZodError(err);
		res.status(400).json({
			success: false,
			message: "Validation Error",
			error,
		});

		return; // Explicitly return to end the function
	}

	if (err.name === "ValidationError") {
		const error = validationErrorHandler(err);
		res.status(500).json({
			success: false,
			message: "Something went wrong",
			error,
		});
	}

	res.status(500).json({
		success: false,
		message: "Something went wrong",
		err,
	});
};

export default globalErrorHandler;
