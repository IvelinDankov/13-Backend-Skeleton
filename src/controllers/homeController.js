import { Router } from "express";
import plantService from "../services/plantService.js";

const homeController = Router();

homeController.get("/", async (req, res) => {
  // FIXME: Add Home view.
  const products = await plantService.getAll();
  const showDescription = false
  res.render("home", { products, showDescription });
});

export default homeController;
