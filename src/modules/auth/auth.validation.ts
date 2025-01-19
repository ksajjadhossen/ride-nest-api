import { z } from "zod";

const logInValidationSchema = z.object({
	body: z.object({
		email: z.string({ required_error: "email required" }),
		password: z.string({ required_error: "please give the password" }),
	}),
});

export const authValidation = {
	logInValidationSchema,
};
