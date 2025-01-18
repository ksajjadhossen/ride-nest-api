import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { userValidation } from "../user/user.validation";
import { authController } from "./auth.controller";

const router = Router();

router.post(
	"/signup",
	validateRequest(userValidation.createUserValidationSchema),
	authController.createUser
);

export const authRouter = router;
