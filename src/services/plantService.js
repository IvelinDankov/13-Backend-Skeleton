import Plant from "../models/plantModel.js";

export default {
  createPlant(title, imageUrl, description, price, sort, userId) {
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
    return Plant.findById(id);
  },
  update(id, data) {
    return Plant.findByIdAndUpdate(id, data);
  },
  remove(id) {
    return Plant.findByIdAndDelete(id);
  },
  updateLike(plantId, userId) {
    return Plant.findByIdAndUpdate(plantId, { $push: { likes: userId } });
  },
};
