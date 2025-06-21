import Plant from "../models/plantModel.js";

export default {
  createPlant(title, imageUrl, description, price, sort, userId) {
    // return  FIXME: CREATE PLANT MODEL AND HANDLE PLANT

    return Plant.create({
      title,
      imageUrl,
      description,
      price,
      sort,
      owner: userId,
    });
  },

  getAll() {
    return Plant.find();
  },

  getOne(id) {
    return Plant.findOne({ id });
  },
};
