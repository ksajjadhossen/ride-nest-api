import { ZodError } from "zod";

const handleZodError = async (error: ZodError) => {
	const errorSources = error.issues.map((issue) => {
		return {
			path: issue?.path[issue.path.length - 1],
			message: issue?.message,
		};
	});
	return errorSources;
};

export default handleZodError;
