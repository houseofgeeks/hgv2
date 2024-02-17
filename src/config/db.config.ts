import mongoose from "mongoose";
import { MONGODB_URI } from "./index";

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {});
    console.log("Database connected");
  } catch (error) {
    console.log("Error in Database Connection");
    throw error;
  }
};

export { dbConnect };
