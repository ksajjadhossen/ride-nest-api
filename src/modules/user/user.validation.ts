import { z } from "zod";

const updateUserValidationSchema = z.object({
	body: z.object({
		name: z.string().optional(),
		email: z.string().optional(),
		password: z
			.string()
			.min(6, "Password must be at least 6 characters long")
			.optional(),
		phone: z.string().optional(),
		address: z.string().optional(),
	}),
});

export const userValidation = {
	updateUserValidationSchema,
};
