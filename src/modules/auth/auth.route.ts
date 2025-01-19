import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { userValidation } from "../user/user.validation";
import { authController } from "./auth.controller";
import { authValidation } from "./auth.validation";

const router = Router();

router.post(
	"/signup",
	validateRequest(userValidation.createUserValidationSchema),
	authController.createUser
);
router.post(
	"/login",
	validateRequest(authValidation.logInValidationSchema),
	authController.loginUser
);

export const authRouter = router;
