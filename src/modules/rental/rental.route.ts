import Router from "express";
import { rentalController } from "./rental.controller";
const router = Router();

router.post("/rentals", rentalController.createRentals);

export const rentalRouter = router;
