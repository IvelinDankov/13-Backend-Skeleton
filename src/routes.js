import { Router } from "express";
import homeController from "./controllers/homeController.js";
import userController from "./controllers/userController.js";

const routes = Router();

routes.use("/users", userController);
routes.use(homeController);
routes.use((req, res, next) => {
  res.status(404).json({ message: "Page not found!" });
  next();
});

export default routes;
