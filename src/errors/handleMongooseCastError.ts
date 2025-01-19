import mongoose from "mongoose";
import { TErrorSources, TGenericErrorResponse } from "./errorTypes";

const handleMongooseCastError = (
	err: mongoose.Error.CastError
): TGenericErrorResponse => {
	const errorSources: TErrorSources = [
		{
			path: err.path,
			message: err.message,
		},
	];

	const statusCode = 400;

	return {
		statusCode,
		message: "Invalid ID",
		errorSources,
	};
};

export default handleMongooseCastError;
