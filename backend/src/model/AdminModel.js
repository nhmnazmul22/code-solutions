// === External Imports ===
import mongoose from "mongoose";
// === Define Schema Data ===
const DataSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    bio: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    imgUrl: {
      type: String,
      default: "https://i.ibb.co.com/5xxDgbR/demo-profile-img.jpg",
      require: true,
    },
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const AdminModel = mongoose.model("admins", DataSchema);

// === Export Model ===

export default AdminModel;
