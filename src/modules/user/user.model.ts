import mongoose, { Schema } from "mongoose";
import { IUser } from "../bike/bike.interface";
import { userRoles } from "./user.constant";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
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
		enum: {
			values: userRoles,
		},
		default: "user",
	},
	isDeleted: {
		type: Boolean,
		required: [true, "isDeleted field is required"],
	},
});

const User = mongoose.model<TUser>("User", userSchema);

export { IUser, User };
