// === External Imports ===
import mongoose from "mongoose";
// === Define Schema Data ===
const DataSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    bio: { type: String, require: true },
    profileImg: { type: String, require: true },
    role: { type: String, require: true },
  },
  { timestamps: true, versionKey: false }
);

// === Define Model ===
const TeamModel = mongoose.model("teams", DataSchema);

// === Export Model ===
export default TeamModel;
