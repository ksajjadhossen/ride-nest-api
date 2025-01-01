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
router.patch(
	"/update-user/:userId",
	validateRequest(userValidation.updateUserValidationSchema),
	userController.updateUser
);
router.delete("/delete-user/:userId", userController.deleteUser);
export const userRouter = router;
