import mongoose, { Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
	name: {
		type: String,
		required: [true, "Name is required"],
	},
	id: {
		type: String,
		required: [true, "ID is required"],
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		match: [/\S+@\S+\.\S+/, "Please provide a valid email address"],
	},
	password: {
		type: String,
		required: [true, "Password is required"],
		minlength: [6, "Password must be at least 6 characters long"],
	},
	phone: {
		type: String,
		required: [true, "Phone number is required"],
	},
	address: {
		type: String,
		required: [true, "Address is required"],
	},
	role: {
		type: String,
		required: [true, "Role is required"],
	},
	isDeleted: {
		type: Boolean,
		required: [true, "isDeleted field is required"],
	},
});

const User = mongoose.model<IUser>("User", userSchema);

export { IUser, User };
