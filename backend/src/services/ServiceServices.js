// === Internal Imports ===
import mongoose from "mongoose";
import AdminModel from "../model/AdminModel.js";
import ServiceModel from "../model/ServiceModel.js";

// Define Mongoose ObjectID
const ObjectID = mongoose.Types.ObjectId;

// === Routes Service ===
export const GetServiceDataService = async (req) => {
  try {
    const data = await ServiceModel.find({});
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const SetServiceDataService = async (req) => {
  try {
    const reqBody = req.body;
    const adminID = req.headers.id;
    const admin = await AdminModel.findOne({ _id: adminID });
    if (admin) {
      const service = await ServiceModel.findOne(reqBody);
      if (!service) {
        const data = await ServiceModel.create(reqBody);
        return { status: "Success", data: data };
      } else {
        return { status: "Failed", data: "Service Already Exist" };
      }
    } else {
      return { status: "Failed", data: "Admin not found" };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const UpdateServiceDataService = async (req) => {
  try {
    const reqBody = req.body;
    const adminID = req.headers.id;
    const serviceID = new ObjectID(req.params.serviceID);
    const admin = await AdminModel.findOne({ _id: adminID });

    if (admin) {
      // Find Team Member By TeamID
      const service = await ServiceModel.findOne({ _id: serviceID });

      // Checking Team Member Exists or not
      if (service) {
        const data = await ServiceModel.updateOne(
          { _id: serviceID },
          { $set: reqBody }
        );
        return { status: "Success", data: data };
      } else {
        return { status: "Failed", data: "Service not found" };
      }
    } else {
      return { status: "Failed", data: "Admin not found" };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const RemoveServiceDataService = async (req) => {
  try {
    const serviceID = new ObjectID(req.params.serviceID);
    const adminID = req.headers.id;
    const admin = await AdminModel.findOne({ _id: adminID });
    if (admin) {
      // Find Team Member By TeamID
      const service = await ServiceModel.findOne({ _id: serviceID });

      // Checking Team Member Exist or not
      if (service) {
        const data = await ServiceModel.deleteOne({ _id: serviceID });
        return { status: "Success", data: data };
      } else {
        return { status: "Failed", data: "Service not found" };
      }
    } else {
      return { status: "Failed", data: "Admin not found" };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};
