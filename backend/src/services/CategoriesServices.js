// === Internal Imports ===
import mongoose from "mongoose";
import CategoriesModel from "../model/CategoriesModel.js";

// Define Mongoose ObjectID
const ObjectID = mongoose.Types.ObjectId;

// === Routes Service ===
export const GetCategoriesService = async (req) => {
  try {
    const data = await CategoriesModel.find({});
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const SetCategoriesService = async (req) => {
  try {
    const reqBody = req.body;
    const data = await CategoriesModel.create(reqBody);
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const UpdateCategoriesService = async (req) => {
  try {
    const reqBody = req.body;
    const categoryID = new ObjectID(req.params.categoryID);

    // Find Category By CategoryID
    const category = await CategoriesModel.findOne({ _id: categoryID });

    // Checking Category Exists or not
    if (category) {
      const data = await CategoriesModel.updateOne(
        { _id: categoryID },
        reqBody
      );
      return { status: "Success", data: data };
    } else {
      return { status: "Failed", data: "Category not found." };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const RemoveCategoriesService = async (req) => {
  try {
    const categoryID = new ObjectID(req.params.categoryID);

    // Find Category By CategoryID
    const category = await CategoriesModel.findOne({ _id: categoryID });

    // Checking Category Exist or not
    if (category) {
      const data = await CategoriesModel.deleteOne({ _id: categoryID });
      return { status: "Success", data: data };
    } else {
      return { status: "Failed", data: "Category not found." };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};
