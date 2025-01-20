import { z } from "zod";

const rentalValidationSchema = z.object({
	body: z.object({
		bikeId: z.string(),
		startTime: z.string(),
	}),
});

export const rentalValidation = {
	rentalValidationSchema,
};
