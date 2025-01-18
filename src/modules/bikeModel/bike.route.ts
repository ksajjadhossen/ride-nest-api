import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { bikeController } from "./bike.controller";
import { bikeValidation } from "./bike.validation";

const router = Router();

router.post(
	"/bikes",
	validateRequest(bikeValidation.createBikeModelValidationSchema),
	bikeController.createBike
);

router.patch("/bikes/:bikeId", bikeController.updateBike);
router.get("/bikes", bikeController.getAllBike);
router.delete("/bikes/:bikeId", bikeController.deleteBike);

export const bikeModelRouter = router;
