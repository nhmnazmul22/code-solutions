// === Internal Imports ===
import mongoose from "mongoose";
import AdminModel from "../model/AdminModel.js";
import CustomerMessageModel from "../model/CustomerMessageModel.js";
import UserModel from "../model/UserModel.js";

// Define Mongoose ObjectID
const ObjectID = mongoose.Types.ObjectId;

// === Routes Service ===
export const GetCustomerService = async (req) => {
  try {
    const JoinWithUserStage = {
      $lookup: {
        from: "users",
        localField: "userID",
        foreignField: "_id",
        as: "user",
      },
    };

    const UnwindStage = { $unwind: "$user" };

    const ProjectionStage = {
      $project: {
        "user._id": 0,
        userID: 0,
        "user.email": 0,
        "user.password": 0,
        "user.comments": 0,
        "user.messages": 0,
        "user.commentsID": 0,
      },
    };

    const data = await CustomerMessageModel.aggregate([
      JoinWithUserStage,
      UnwindStage,
      ProjectionStage,
    ]);
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const SetCustomerService = async (req) => {
  try {
    const reqBody = req.body;
    const userID = req.headers.id;
    const email = req.headers.email;

    // Find user using userID
    const user = await UserModel.findOne({ _id: userID });

    // Checking User exist or not
    if (user) {
      const customerMessage = {
        ...reqBody,
        userID: userID,
      };

      // Find Customer Message
      const customerData = await CustomerMessageModel.findOne(customerMessage);

      // Checking Customer Message exist or not
      if (!customerData) {
        const data = await CustomerMessageModel.create(customerMessage);
        return { status: "Success", data: data };
      } else {
        const data = await CustomerMessageModel.updateOne(
          { _id: customerData._id },
          { $set: reqBody }
        );
        return { status: "Success", data: data };
      }
    } else {
      return { status: "Failed", data: "User Not Found" };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const RemoveCustomerService = async (req) => {
  try {
    const adminID = req.headers.id;
    const customerID = new ObjectID(req.params.customerID);

    const admin = await AdminModel.findOne({ _id: adminID });
    if (admin) {
      // Find Category By CategoryID
      const customer = await CustomerMessageModel.findOne({ _id: customerID });

      // Checking Category Exist or not
      if (customer) {
        const data = await CustomerMessageModel.deleteOne({ _id: customerID });
        return { status: "Success", data: data };
      } else {
        return { status: "Failed", data: "Customer not found." };
      }
    } else {
      return { status: "Failed", data: "Admin not found." };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};
