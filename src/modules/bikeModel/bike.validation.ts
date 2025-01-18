import { z } from "zod";

const createBikeModelValidationSchema = z.object({
	body: z.object({
		name: z.string().nonempty("Name is required."),
		pricePerHour: z
			.number()
			.min(0, "Price per hour must be a positive number."),
		cc: z.number().min(0, "CC must be a positive number."),
		year: z.number().min(1900, "Year must be at least 1900."),
		model: z.string().nonempty("Model is required."),
		brand: z.string().nonempty("Brand is required."),
		weight: z.number().min(0, "Weight must be a positive number."),
		coverImage: z.string().url("Cover image must be a valid URL."),
		isElectric: z
			.boolean()
			.refine((val) => val !== undefined, "Electric status is required."),
		chargeCapacity: z
			.number()
			.min(0, "Charge capacity must be a positive number."),
	}),
});

export const bikeValidation = {
	createBikeModelValidationSchema,
};
