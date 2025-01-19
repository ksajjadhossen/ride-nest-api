import { Router } from "express";
import Auth from "../../middleware/auth";
import validateRequest from "../../middleware/validateRequest";
import { userController } from "./user.controller";
import { userValidation } from "./user.validation";

const router = Router();

router.get("/", Auth("admin"), userController.getAllUsers);

router.patch(
	"/:userId",
	validateRequest(userValidation.updateUserValidationSchema),
	userController.updateUser
);
router.delete("/:userId", userController.deleteUser);

export const userRouter = router;
