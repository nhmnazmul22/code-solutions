// === External Imports ===
import mongoose from "mongoose";
// === Define Schema Data ===
const DataSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    shortDes: { type: String, require: true },
    thumbnail: { type: String },
    blogImg: { type: String, require: true },
    content: { type: String, require: true },
    tags: [{ type: String, require: true }],
    categoryID: { type: mongoose.Types.ObjectId, require: true },
    adminID: { type: mongoose.Types.ObjectId, require: true },
    comments: [
      {
        commentText: { type: String, require: true },
        userID: { type: mongoose.Types.ObjectId, require: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const BlogModel = mongoose.model("blogs", DataSchema);

// === Export Model ===

export default BlogModel;
