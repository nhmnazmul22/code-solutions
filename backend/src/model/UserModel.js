// === External Imports ===
import mongoose from "mongoose";
// === Define Schema Data ===
const DataSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    otpCode: { type: String, require: true },
    commentsID: [{ type: mongoose.Types.ObjectId, require: true }],
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const BlogModel = mongoose.model("blogs", DataSchema);

// === Export Model ===
export default BlogModel;
