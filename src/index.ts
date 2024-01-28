import express from "express";
import ExpressApp from "./config/ExpressApp";
import { PORT } from "./config/index";

const startServer = async () => {
  const app = express();

  await ExpressApp(app);
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
};

startServer();
