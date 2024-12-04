// === External Imports ===
import mongoose from "mongoose";
// === Define Schema Data ===
const DataSchema = new mongoose.Schema(
  {
    serviceThumbnail: { type: String, require: true },
    serviceTitle: { type: String, require: true },
    serviceDescription: { type: String, require: true },
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const ServiceModel = mongoose.model("services", DataSchema);

// === Export Model ===

export default ServiceModel;
