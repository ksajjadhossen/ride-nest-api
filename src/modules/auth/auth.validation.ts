import { z } from "zod";

const logInValidationSchema = z.object({
	body: z.object({
		email: z.string({ required_error: "email required" }),
		password: z.string({ required_error: "please give the password" }),
	}),
});

const signUpValidation = z.object({
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

export const authValidation = {
	signUpValidation,
	logInValidationSchema,
};
