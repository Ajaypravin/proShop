import mongooes from "mongoose";

const reviewSchema = mongooes.Schema(
  {
    name: { type: String, required: true },
    rating: { type: String, required: true },
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongooes.Schema(
  {
    user: {
      type: mongooes.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    name: {
      type: String,
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
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: String,
      required: true,
      default: 0,
    },
    price: {
      type: String,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongooes.model("Product", productSchema);

export default Product;
