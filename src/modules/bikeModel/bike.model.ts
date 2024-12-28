import mongoose, { Schema } from "mongoose";
import { IUser } from "./bike.interface";

const userSchema = new Schema<IUser>(
	{
		name: {
			type: String,
			required: [true, "Name is required."],
		},
		id: {
			type: String,
			required: [true, "ID is required."],
			match: [/^[0-9a-fA-F]{24}$/, "ID must be a valid MongoDB ObjectId."],
		},
		pricePerHour: {
			type: Number,
			required: [true, "Price per hour is required."],
			min: [0, "Price per hour must be a positive number."],
		},
		isAvailable: {
			type: Boolean,
			required: [true, "Availability is required."],
		},
		cc: {
			type: Number,
			required: [true, "CC (cubic capacity) is required."],
			min: [0, "CC must be a positive number."],
		},
		year: {
			type: Number,
			required: [true, "Year is required."],
			min: [1900, "Year must be at least 1900."],
			max: [
				new Date().getFullYear(),
				`Year must not exceed ${new Date().getFullYear()}.`,
			],
		},
		model: {
			type: String,
			required: [true, "Model is required."],
		},
		brand: {
			type: String,
			required: [true, "Brand is required."],
		},
		weight: {
			type: Number,
			required: [true, "Weight is required."],
			min: [0, "Weight must be a positive number."],
		},
		coverImage: {
			type: String,
			required: [true, "Cover image is required."],
			match: [/^https?:\/\/.+/, "Cover image must be a valid URL."],
		},
		isElectric: {
			type: Boolean,
			required: [true, "Electric status is required."],
		},
		chargeCapacity: {
			type: Number,
			min: [0, "Charge capacity must be a positive number."],
			required: false,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			validate: {
				validator: function (v) {
					return v <= Date.now();
				},
				message: "Created date cannot be in the future.",
			},
		},
		updatedAt: {
			type: Date,
			default: Date.now,
			validate: {
				validator: function (v) {
					return v <= Date.now();
				},
				message: "Updated date cannot be in the future.",
			},
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
