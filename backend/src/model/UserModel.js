// === External Imports ===
import mongoose from "mongoose";
// === Define Schema Data ===
const DataSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    imgUrl: {
      type: String,
      default: "https://i.ibb.co.com/5xxDgbR/demo-profile-img.jpg",
      require: true,
    },
    email: { type: String, require: true },
    password: { type: String, require: true },
    commentsID: [{ type: mongoose.Types.ObjectId, require: true }],
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const BlogModel = mongoose.model("users", DataSchema);

// === Export Model ===
export default BlogModel;
