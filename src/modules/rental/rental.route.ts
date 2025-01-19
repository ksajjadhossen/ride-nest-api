import Router from "express";
import Auth from "../../middleware/auth";
import { rentalController } from "./rental.controller";
const router = Router();

router.post("/", Auth("user"), rentalController.createRentals);

export const rentalRouter = router;
