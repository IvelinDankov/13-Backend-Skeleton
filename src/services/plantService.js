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

  getAllLimited() {
    return Plant.find().sort({ _id: -1 }).limit(3);
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
  isOwner(plantId, userId) {
    return Plant.findById(plantId, { owner: userId });
  },
};
