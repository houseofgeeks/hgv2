import express from "express";
import ExpressApp from "./config/ExpressApp";
import { PORT } from "./config/index";
import apiRoutes from "./routes";
import { dbConnect } from "./config/db.config";

const startServer = async () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  await ExpressApp(app);

  app.use("/api", apiRoutes);
  app.listen(PORT, async () => {
    console.log(`Server listening on ${PORT}`);
    await dbConnect();
  });
};

startServer();
