// === External Imports ===
import mongoose from "mongoose";
// === Define Schema Data ===
const DataSchema = new mongoose.Schema(
  {
    commentText: { type: String, require: true },
    userID: { type: mongoose.Types.ObjectId, require: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const CommentModel = mongoose.model("comments", DataSchema);

// === Export Model ===
export default CommentModel;
