import Router from "express";
import Auth from "../../middleware/auth";
import validateRequest from "../../middleware/validateRequest";
import { rentalController } from "./rental.controller";
import { rentalValidation } from "./rental.validation";
const router = Router();

router.post(
	"/",
	Auth("user"),
	validateRequest(rentalValidation.rentalValidationSchema),
	rentalController.createRentals
);
router.patch("/:id/return", Auth("admin"), rentalController.updateRentals);

export const rentalRouter = router;
