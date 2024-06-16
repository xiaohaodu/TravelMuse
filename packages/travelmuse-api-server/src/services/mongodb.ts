import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // 加载.env文件中的环境变量

mongoose
  .connect(process.env.MONGODB_URI || "", {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));
