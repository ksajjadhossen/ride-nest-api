import { Router } from "express";
import Auth from "../../middleware/auth";
import validateRequest from "../../middleware/validateRequest";
import { bikeController } from "./bike.controller";
import { bikeValidation } from "./bike.validation";

const router = Router();

router.post(
	"/bikes",
	Auth("admin"),
	validateRequest(bikeValidation.createBikeModelValidationSchema),
	bikeController.createBike
);

router.patch("/bikes/:bikeId", Auth("admin"), bikeController.updateBike);
router.get("/bikes", bikeController.getAllBike);
router.delete("/bikes/:bikeId", Auth("admin"), bikeController.deleteBike);

export const bikeModelRouter = router;
