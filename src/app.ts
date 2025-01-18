import express from "express";
import globalErrorHandler from "./middleware/globalErrorHandler";
import notFoundRoute from "./middleware/notFoundPage";
import { authRouter } from "./modules/auth/auth.route";
import { bikeModelRouter } from "./modules/bikeModel/bike.route";
import { rentalRouter } from "./modules/rental/rental.route";
import { userRouter } from "./modules/user/user.route";
const app = express();
app.use(express.json());

app.use("/health", (req, res) => {
	res.status(200).send("ok");
});

app.use("/api/auth/", authRouter);
app.use("/api/user-route/", userRouter);
app.use("/api/", bikeModelRouter);
app.use("/api/", rentalRouter);
app.use(notFoundRoute);
app.use(globalErrorHandler);
export default app;
