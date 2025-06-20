import { Router } from "express";

const homeController = Router();

homeController.get("/", (req, res) => {
  // FIXME: Add Home view.
  res.render("home");
});

export default homeController;
