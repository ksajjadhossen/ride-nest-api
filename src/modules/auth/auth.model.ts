import mongoose, { Schema } from "mongoose";
import { TLogIn } from "./auth.interface";

const logInSchema = new Schema<TLogIn>({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

export const LogIn = mongoose.model("LogIn", logInSchema);
