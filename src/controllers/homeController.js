import { Router } from "express";
import plantService from "../services/plantService.js";

const homeController = Router();

homeController.get("/", async (req, res) => {
  // FIXME: Add Home view.
  const products = await plantService.getAll();
  res.render("home", { products });
});

export default homeController;
