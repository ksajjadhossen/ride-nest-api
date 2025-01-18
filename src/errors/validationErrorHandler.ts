import mongoose from "mongoose";

const validationErrorHandler = (error: mongoose.Error.ValidationError) => {
	const errorFormatter = Object.values(error.errors).map((error) => ({
		path: error.path,
		message: error.message,
	}));
	return errorFormatter;
};

export default validationErrorHandler;
