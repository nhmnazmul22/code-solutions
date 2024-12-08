// === Internal Imports ===
import mongoose from "mongoose";
import AdminModel from "../model/AdminModel.js";
import TeamModel from "../model/TeamModel.js";

// Define Mongoose ObjectID
const ObjectID = mongoose.Types.ObjectId;

// === Routes Service ===
export const GetTeamService = async (req) => {
  try {
    const data = await TeamModel.find({});
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const GetTeamByIdService = async (req) => {
  try {
    const teamID = new ObjectID(req.params.teamID);
    const data = await TeamModel.find({ _id: teamID });
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const SetTeamService = async (req) => {
  try {
    const adminID = req.headers.id;
    const reqBody = req.body;

    const admin = await AdminModel.findOne({ _id: adminID });
    if (admin) {
      const team = await TeamModel.findOne(reqBody);
      if (!team) {
        const data = await TeamModel.create(reqBody);
        return { status: "Success", data: data };
      } else {
        return { status: "Failed", data: "Team Member already exists." };
      }
    } else {
      return { status: "Failed", data: "Admin not found." };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const UpdateTeamService = async (req) => {
  try {
    const reqBody = req.body;
    const adminID = req.headers.id;
    const teamID = new ObjectID(req.params.teamID);

    const admin = await AdminModel.findOne({ _id: adminID });

    if (admin) {
      // Find Team Member By TeamID
      const team = await TeamModel.findOne({ _id: teamID });

      // Checking Team Member Exists or not
      if (team) {
        const data = await TeamModel.updateOne(
          { _id: teamID },
          { $set: reqBody }
        );
        return { status: "Success", data: data };
      } else {
        return { status: "Failed", data: "Team Member not found." };
      }
    } else {
      return { status: "Failed", data: "Admin not found." };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const RemoveTeamService = async (req) => {
  try {
    const adminID = req.headers.id;
    const teamID = new ObjectID(req.params.teamID);

    const admin = await AdminModel.findOne({ _id: adminID });

    if (admin) {
      // Find Team Member By TeamID
      const team = await TeamModel.findOne({ _id: teamID });

      // Checking Team Member Exist or not
      if (team) {
        const data = await TeamModel.deleteOne({ _id: teamID });
        return { status: "Success", data: data };
      } else {
        return { status: "Failed", data: "Team Member not found." };
      }
    } else {
      return { status: "Failed", data: "Admin not found." };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};
