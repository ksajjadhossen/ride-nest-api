import bcrypt from "bcryptjs";
import mongoose, { Schema } from "mongoose";
import config from "../../config";
import { userRoles } from "./user.constant"; // Assuming this is where you define userRoles
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
		},

		email: {
			type: String,
			unique: true,
			required: [true, "Email is required"],
			match: [/\S+@\S+\.\S+/, "Please provide a valid email address"],
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			minlength: [6, "Password must be at least 6 characters long"],
			select: 0, // Hide password field from response
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
			enum: userRoles, // Correct enum usage
			default: "user", // Default value should be one of the values in userRoles
		},
		isDeleted: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

userSchema.pre("save", async function () {
	const plainPassword = this.password;
	const encryptedPassword = await bcrypt.hash(
		plainPassword,
		Number(config.salt_rounds) as number
	);
	return (this.password = encryptedPassword);
});

userSchema.post("save", function (doc, next) {
	doc.password = "";
	next();
});

const User = mongoose.model<TUser>("User", userSchema);

export { User };
