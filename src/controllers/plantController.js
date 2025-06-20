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

export default plantController;
