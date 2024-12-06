// === External Imports ===
import mongoose from "mongoose";
// === Define Schema Data ===
const DataSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    status: { type: String, require: true, default: "Pending" },
    email: { type: String, require: true },
    subject: { type: String, require: true },
    message: { type: String, require: true },
    userID: { type: mongoose.Types.ObjectId, require: true },
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const CustomerMessageModel = mongoose.model("customermessages", DataSchema);

// === Export Model ===
export default CustomerMessageModel;
