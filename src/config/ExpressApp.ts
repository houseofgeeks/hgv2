import { Application, Request, Response } from "express";
import logger from "../utils/logger.utils";

export default async (app: Application) => {
  app.get("/", (req: Request, res: Response) => {
    logger.info(
      `request method: ${req.method} and request url: ${req.url} - HGV2 server running`,
    );
    res.status(200).json({ message: "HGV2 server running" });
  });
  return app;
};
