import cors from "cors";
import express from "express";
import morgan from "morgan";
import { errorHandler } from "./middleware/errorHandler";
import { authRouter } from "./modules/auth/auth.route";
import { bikeModelRouter } from "./modules/bikeModel/bike.route";
import { rentalRouter } from "./modules/rental/rental.route";
import { userRouter } from "./modules/user/user.route";

const app = express();

// Middleware setup
app.use(morgan("dev"));

app.use(cors());
app.use(express.json());

app.use("/health", (req, res) => {
	res.status(200).send("ok");
});

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/bikes", bikeModelRouter);
app.use("/api/rentals", rentalRouter);

app.use(errorHandler.notFound);
app.use(errorHandler.global);

export default app;
