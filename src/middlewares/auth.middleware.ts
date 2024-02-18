import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/index";

interface CustomRequest extends Request {
  id: string;
}

const authMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers["x-auth-token"] as string | undefined;
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
    req.id = decoded.id;
    next();
  } catch (error) {
    return res.status(400).json({ message: "Token is not valid" });
  }
};

export default authMiddleware;
