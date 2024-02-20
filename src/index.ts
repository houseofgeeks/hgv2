import express from "express";
import ExpressApp from "./config/ExpressApp";
import { PORT } from "./config/index";
import apiRoutes from "./routes";
import { dbConnect } from "./config/db.config";
import logger from "./utils/logger.utils";
import {
  errorMiddleware,
  loggingMiddleware,
} from "./middlewares/logging.middlewares";

const startServer = async () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  await ExpressApp(app);
  app.use(loggingMiddleware);
  app.use(errorMiddleware);
  app.use("/api", apiRoutes);
  app.listen(PORT, async () => {
    logger.info(`Server is running on port ${PORT}`);
    await dbConnect();
  });
};

startServer();
