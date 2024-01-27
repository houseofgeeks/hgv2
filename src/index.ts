import express from "express";
import ExpressApp from "./services/ExpressApp";
import { port } from "./config/index";

const startServer = async () => {
  const app = express();

  await ExpressApp(app);
  app.listen(port, () => {
    console.log(`Server listening on ${port}`);
  });
};

startServer();
