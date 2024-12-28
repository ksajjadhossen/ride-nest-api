import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
	user_name: process.env.USER_NAME,
	user_password: process.env.USER_PASSWORD,
};
