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

router.patch("/update-bike/:bikeId", bikeController.updateBike);
router.get("/get-all-bike", bikeController.getAllBike);
router.delete("/delete-bike/:bikeId", bikeController.deleteBike);

export const bikeModelRoute = router;
