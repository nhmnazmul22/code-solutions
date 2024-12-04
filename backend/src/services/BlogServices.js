// === Internal Imports ===
import BlogsModel from "../model/BlogsModel.js";

// === Routes Service ===
export const GetBlogsService = async (req) => {
  try {
    const data = await BlogsModel.find({});
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};
export const SetBlogService = async (req) => {
  try {
    const reqBody = req.body;
    const adminID = req.headers.adminID;
    const data = await BlogsModel.create({ ...reqBody, adminID: adminID });
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};
export const UpdateBlogService = async (req) => {};
export const RemoveBlogService = async (req) => {};
