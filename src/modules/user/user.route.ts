import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { userController } from "./user.controller";
import { userValidation } from "./user.validation";

const router = Router();

router.get("/users", userController.getAllUsers);
router.patch(
	"/users/:userId",
	validateRequest(userValidation.updateUserValidationSchema),
	userController.updateUser
);
router.delete("/users/:userId", userController.deleteUser);
export const userRouter = router;
