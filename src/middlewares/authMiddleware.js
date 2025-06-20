import { AUTH_COOKIE, SECRET } from "../utils/jwtUtil.js";
import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.cookies[AUTH_COOKIE];

  if (!token) return next();

  try {
    const decodedToken = jwt.verify(token, SECRET);

    req.user = {
      id: decodedToken.id,
      email: decodedToken.email,
    };

    res.locals = {
      id: decodedToken.id,
      email: decodedToken.email,
      isAuthenticated: true,
    };

    return next();
  } catch (err) {
    res.clearCookie(AUTH_COOKIE);
    res.redirect("/users/login");
    throw new Error(err.message);
  }
};
