import { z } from "zod";

const createUserValidationSchema = z.object({
	body: z.object({
		name: z.string({
			required_error: "Name is required",
		}),
		email: z
			.string({
				required_error: "Email is required",
			})
			.email("Please provide a valid email address"),
		password: z
			.string({
				required_error: "Password is required",
			})
			.min(6, "Password must be at least 6 characters long"),
		phone: z.string({
			required_error: "Phone number is required",
		}),
		address: z.string({
			required_error: "Address is required",
		}),
	}),
});

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
	createUserValidationSchema,
	updateUserValidationSchema,
};
