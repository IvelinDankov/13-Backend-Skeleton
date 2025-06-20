import { Router } from "express";
import userService from "../services/userService.js";

const userController = Router();

userController.get("/register", (req, res) => {
  res.render("user/register");
});
userController.post("/register", async (req, res) => {
  const { email, password, rePass } = req.body;

  if (password !== rePass) {
    throw new Error("Password mismach!");
  }

  try {
    await userService.register(email, password);
  } catch (err) {
    // TODO: MAKE ERROR HANDLER
    console.log(err.message);
  }

  res.redirect("/users/login");
});
userController.get("/login", (req, res) => {
  res.render("user/login");
});

export default userController;
