import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/hgv2";

export { PORT, MONGODB_URI, JWT_SECRET };
