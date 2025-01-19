import { Router } from "express";
import Auth from "../../middleware/auth";
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
router.get("/me", Auth("user"), authController.userProfile);
export const authRouter = router;
