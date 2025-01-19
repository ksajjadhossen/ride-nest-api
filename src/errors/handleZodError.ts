import { ZodError } from "zod";
import { TErrorSources, TGenericErrorResponse } from "./errorTypes";

const handleZodError = (error: ZodError): TGenericErrorResponse => {
	const errorSources: TErrorSources = error.issues.map((issue) => {
		return {
			path: issue.path.slice(1).join(".") || issue.path[0],
			message: issue.message,
		};
	});

	const statusCode = 400;
	return {
		statusCode,
		message: "Validation Error",
		errorSources,
	};
};

export default handleZodError;
