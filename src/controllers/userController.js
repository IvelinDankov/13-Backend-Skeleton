import { Router } from "express";
import userService from "../services/userService.js";
import { AUTH_COOKIE } from "../utils/jwtUtil.js";

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
userController.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const token = await userService.login(email, password);

  // attach to cookie.
  res.cookie(AUTH_COOKIE, token);

  res.redirect("/");
});
userController.get("/logout", (req, res) => {
  res.clearCookie(AUTH_COOKIE);

  res.redirect("/");
});

export default userController;
