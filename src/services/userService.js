import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET } from "../utils/jwtUtil.js";

export default {
  register(email, password) {
    return User.create({ email, password });
  },
  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Email or password are invalid!");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new Error("Email or password are invalid!");
    }

    const payload = {
      id: user.id,
      email: user.email,
    };

    const token = jwt.sign(payload, SECRET, { expiresIn: "2h" });

    return token;
  },
};
