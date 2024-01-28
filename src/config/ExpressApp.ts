import { Application, Request, Response } from "express";

export default async (app: Application) => {
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "HGV2 server running" });
  });
  return app;
};
