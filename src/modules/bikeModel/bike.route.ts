import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { bikeController } from "./bike.controller";
import { bikeValidation } from "./bike.validation";

const router = Router();

router.post(
	"/",
	validateRequest(bikeValidation.createBikeModelValidationSchema),
	bikeController.createBike
);

export const bikeModelRoute = router;
