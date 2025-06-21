import { Router } from "express";
import plantService from "../services/plantService.js";

const plantController = Router();

plantController.get("/create", (req, res) => {
  res.render("plant/create");
});
plantController.post("/create", async (req, res) => {
  const { title, imageUrl, description, price, sort } = req.body;
  const userId = req.user?.id;

  try {
    await plantService.createPlant(
      title,
      imageUrl,
      description,
      price,
      sort,
      userId
    );

    res.redirect("/");
  } catch (err) {
    // FIXME: ERROR HANLDER
    console.log(err.message);
  }
});

plantController.get("/catalog", async (req, res) => {
  const products = await plantService.getAll();
  res.render("plant/catalog", { products });
});

plantController.get("/:plantId/details", async (req, res) => {
  const plantId = req.params.plantId;
  const product = await plantService.getOne(plantId);
  res.render("plant/details", { product });
});

export default plantController;
