import { Router } from "express";
import homeController from "./controllers/homeController.js";
import userController from "./controllers/userController.js";
import plantController from "./controllers/plantController.js";

const routes = Router();

routes.use("/users", userController);
routes.use(homeController);
routes.use("/plants", plantController);
routes.use((req, res, next) => {
  res.status(404).json({ message: "Page not found!" });
  next();
});

export default routes;
