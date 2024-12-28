import express from "express";
import { userController } from "./modules/user/user.controller.";
import { userRouter } from "./modules/user/user.route";
const app = express();
app.use(express.json());

app.use("/health", (req, res) => {
	res.status(200).send("ok");
});

app.use("/api/user-route/", userRouter);

app.get("/", userController.createUser);

export default app;
