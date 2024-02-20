// logger.ts

import { createLogger, format, transports } from "winston";

// Configure log formats
const logFormat = format.combine(
  format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  format.errors({ stack: true }),
  format.splat(),
  format.json(),
);

// Create the logger instance
const logger = createLogger({
  level: "info",
  format: logFormat,
  transports: [
    // Logging to a file
    new transports.File({ filename: "error.log", level: "error" }),
    new transports.File({ filename: "combined.log" }),

    // Logging to console for development or debugging
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
  ],
});

// Handling uncaught exceptions
process.on("uncaughtException", (err) => {
  logger.error("Uncaught Exception:", err);
  process.exit(1);
});

// Handling unhandled promise rejections
process.on("unhandledRejection", (err) => {
  logger.error("Unhandled Promise Rejection:", err);
  process.exit(1);
});

export default logger;
