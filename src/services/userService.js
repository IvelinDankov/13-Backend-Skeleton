import User from "../models/userModel.js";

export default {
  register(email, password) {
    return User.create({ email, password });
  },
};
