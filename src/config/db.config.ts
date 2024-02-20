import mongoose from "mongoose";
import { MONGODB_URI } from "./index";
import logger from "../utils/logger.utils";

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {});
    logger.info("Database Connected");
  } catch (error) {
    logger.error("Database Connection Error", error);
    throw error;
  }
};

export { dbConnect };
