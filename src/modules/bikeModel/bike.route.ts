import { Router } from "express";
import { bikeController } from "./bike.controller";

const router = Router();

router.post("/", bikeController.createBike);

export const bikeModelRoute = router;
