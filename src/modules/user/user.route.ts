import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { userController } from "./user.controller";
import { userValidation } from "./user.validation";

const router = Router();

router.post(
	"/",
	validateRequest(userValidation.createUserValidationSchema),
	userController.createUser
);
router.get("/get-all-users", userController.getAllUsers);
export const userRouter = router;
