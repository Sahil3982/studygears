import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Academic Supplies",
        "Tech & Gadgets",
        "Stationery & Art Supplies",
        "College Essentials",
        "Hostel & Dorm Needs",
        "Clothing & Accessories",
        "Health & Personal Care",
        "Miscellaneous",
      ],
    },
    subcategory: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      default: "No Brand",
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discount: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    SKU: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    images: [
      {
        url: { type: String, required: true, trim: true },
        alt: { type: String, default: "" },
      },
    ],
    specifications: {
      type: Map,
      of: String,
    },
    ratings: {
      average: { type: Number, default: 0, min: 0, max: 5 },
      count: { type: Number, default: 0 },
    },
    reviews: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        comment: { type: String, trim: true },
        rating: { type: Number, min: 1, max: 5 },
        date: { type: Date, default: Date.now },
      },
    ],
    availability: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, 
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
