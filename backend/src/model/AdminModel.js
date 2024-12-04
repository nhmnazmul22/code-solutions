// === External Imports ===
import mongoose from "mongoose";
// === Define Schema Data ===
const DataSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    bio: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    otpCode: { type: String, require: true },
    adminImg: { type: String, require: true },
    blogsID: { type: mongoose.Types.ObjectId, require: true },
    servicesID: { type: mongoose.Types.ObjectId, require: true },
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const AdminModel = mongoose.model("admins", DataSchema);

// === Export Model ===

export default AdminModel;
