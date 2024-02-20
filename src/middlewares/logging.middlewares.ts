import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger.utils";

export function loggingMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  logger.info(`[${req.method}] ${req.originalUrl}`);
  next();
}

export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  logger.error(
    `Error processing ${req.method} ${req.originalUrl}: ${err.message}`,
  );

  next();
}
