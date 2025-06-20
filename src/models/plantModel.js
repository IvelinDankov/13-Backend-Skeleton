import { Schema, Types, model } from "mongoose";

const plantSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sort: {
    type: String,
    required: true,
  },
  owner: {
    type: Types.ObjectId,
    ref: "User",
  },
});

const Plant = model("Plant", plantSchema);

export default Plant;
