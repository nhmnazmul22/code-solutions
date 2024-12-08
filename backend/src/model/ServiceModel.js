// === External Imports ===
import mongoose from "mongoose";
// === Define Schema Data ===
const DataSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, require: true },
    title: { type: String, require: true },
    description: { type: String, require: true },
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const ServiceModel = mongoose.model("services", DataSchema);

// === Export Model ===

export default ServiceModel;
