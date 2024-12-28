import { z } from "zod";
import { userRoles } from "./user.constant";

const userSchema = z.object({
	name: z.string({
		required_error: "Name is required",
	}),
	id: z.string({
		required_error: "ID is required",
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
	role: z.enum([...userRoles] as [string, ...string[]]),
	isDeleted: z.boolean({
		required_error: "isDeleted field is required",
	}),
});

export { userSchema };
