import { Router } from "express";
import plantService from "../services/plantService.js";

const homeController = Router();

homeController.get("/", async (req, res) => {
  // FIXME: Add Home view.
  const products = await plantService.getAllLimited();
  const showDescription = false;

  res.render("home", { products, showDescription });
});

homeController.get("/about", (req, res) => {
  res.render("about");
});

homeController.get("/contact", (req, res) => {
  res.render("contact");
});

export default homeController;
