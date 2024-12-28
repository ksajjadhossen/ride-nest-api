import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
	const data = req.body;
	try {
		const result = await userService.createUser(data);
		res.send({
			success: true,
			message: "user Created Successfully",
			data: result,
		});
	} catch (error) {
		console.log(error);
	}
};

export const userController = {
	createUser,
};
