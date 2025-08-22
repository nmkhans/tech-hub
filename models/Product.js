import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    originalPrice: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    rating: {
      type: mongoose.Types.Decimal128,
      required: true,
    },
    reviews: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timeStamps: true,
  }
);

export default mongoose.models.Product ||
  mongoose.model("Product", schema);
