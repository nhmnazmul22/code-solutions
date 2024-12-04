// === External Imports ===
import mongoose from "mongoose";
// === Define Schema Data ===
const DataSchema = new mongoose.Schema(
  {
    categories: { type: String, require: true },
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const CategoryModel = mongoose.model("categories", DataSchema);

// === Export Model ===
export default CategoryModel;
