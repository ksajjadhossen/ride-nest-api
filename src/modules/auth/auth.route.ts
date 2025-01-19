import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { authController } from "./auth.controller";
import { authValidation } from "./auth.validation";

const router = Router();

router.post(
	"/signup",
	validateRequest(authValidation.signUpValidation),
	authController.createUser
);
router.post(
	"/login",
	validateRequest(authValidation.logInValidationSchema),
	authController.loginUser
);

export const authRouter = router;
