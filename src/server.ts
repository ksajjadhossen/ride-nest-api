import mongoose from "mongoose";
import app from "./app";
import config from "./config";
const port = 5000;

try {
	main().catch((err) => console.log(err));

	async function main() {
		await mongoose.connect(
			`mongodb+srv://${config.user_name}:${config.user_password}@cluster0.p5n6wf0.mongodb.net/ride-nest`
		);
	}

	app.listen(port, () => {
		console.log(`Example app listening on port ${port}`);
	});
} catch (error) {
	console.log(error);
}
