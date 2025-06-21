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
  let showDescription = true;
  res.render("plant/catalog", { products, showDescription });
});

plantController.get("/:plantId/like", async (req, res) => {
  const plantId = req.params.plantId;
  const userId = req.user.id;

  await plantService.updateLike(plantId, userId);

  res.redirect(`/plants/${plantId}/details`);
});

plantController.get("/:plantId/details", async (req, res) => {
  const plantId = req.params.plantId;
  const userId = req.user.id;

  const product = await plantService.getOne(plantId);

  const liked = product.likes.includes(userId);

  const likes = product.likes.length;

  res.render("plant/details", { product, liked, likes });
});
plantController.get("/:plantId/edit", async (req, res) => {
  const plantId = req.params.plantId;
  const product = await plantService.getOne(plantId);
  res.render("plant/edit", { product });
});
plantController.post("/:plantId/edit", async (req, res) => {
  const data = req.body;
  const plantId = req.params.plantId;

  await plantService.update(plantId, data);

  res.redirect(`/plants/${plantId}/details`);
});
plantController.get("/:plantId/delete", async (req, res) => {
  const plantId = req.params.plantId;
  await plantService.remove(plantId);
  res.redirect("/plants/catalog");
});

export default plantController;
