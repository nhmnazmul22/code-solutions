// === Internal Imports ===
import mongoose from "mongoose";
import AdminModel from "../model/AdminModel.js";
import BlogsModel from "../model/BlogsModel.js";
import UserModel from "../model/UserModel.js";

// === Define Mongoose ObjectId
const ObjectID = mongoose.Types.ObjectId;

// === Routes Service ===
export const GetBlogsService = async (req) => {
  try {
    const JoinWithAdminStage = {
      $lookup: {
        from: "admins",
        localField: "adminID",
        foreignField: "_id",
        as: "adminDetails",
      },
    };
    const JoinWithCommentStage = {
      $lookup: {
        from: "comments",
        let: { commentIDs: "$commentsID" },
        pipeline: [
          {
            $match: {
              $expr: {
                $in: ["$_id", "$$commentIDs"],
              },
            },
          },
          {
            $project: {
              _id: 1,
              commentText: 1,
            },
          },
        ],
        as: "comments",
      },
    };

    const ProjectionStage = {
      $project: {
        commentsID: 0,
        adminID: 0,
        "adminDetails.password": 0,
        "adminDetails.blogsID": 0,
      },
    };
    const UnwindAdminStage = { $unwind: "$adminDetails" };
    const data = await BlogsModel.aggregate([
      JoinWithAdminStage,
      JoinWithCommentStage,
      UnwindAdminStage,
      ProjectionStage,
    ]);
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const GetBlogByIDService = async (req) => {
  try {
    const blogID = new ObjectID(req.params.blogID);
    const userID = req.headers.id;
    const user = await UserModel.findOne({ _id: userID });

    const MatchStage = { $match: { _id: blogID } };
    const JoinWithAdminStage = {
      $lookup: {
        from: "admins",
        localField: "adminID",
        foreignField: "_id",
        as: "adminDetails",
      },
    };
    const JoinWithCommentStage = {
      $lookup: {
        from: "comments",
        let: { commentIDs: "$commentsID" },
        pipeline: [
          {
            $match: {
              $expr: {
                $in: ["$_id", "$$commentIDs"],
              },
            },
          },
          {
            $project: {
              _id: 1,
              commentText: 1,
            },
          },
        ],
        as: "comments",
      },
    };

    const ProjectionStage = {
      $project: {
        commentsID: 0,
        adminID: 0,
        "adminDetails.password": 0,
        "adminDetails.blogsID": 0,
      },
    };
    const UnwindAdminStage = { $unwind: "$adminDetails" };

    if (user) {
      // Find Blog By BlogID
      const data = await BlogsModel.aggregate([
        MatchStage,
        JoinWithAdminStage,
        JoinWithCommentStage,
        UnwindAdminStage,
        ProjectionStage,
      ]);

      // Checking Blog Exist or not
      if (data.length > 0) {
        return { status: "Success", data: data };
      } else {
        return { status: "Failed", data: "Blog not found." };
      }
    } else {
      return { status: "Failed", data: "User not found." };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const SetBlogService = async (req) => {
  try {
    const reqBody = req.body;
    const adminID = req.headers.id;

    const admin = await AdminModel.findOne({ _id: adminID });

    if (admin) {
      const data = await BlogsModel.create({ ...reqBody, adminID: adminID });
      return { status: "Success", data: data };
    } else {
      return { status: "Failed", data: "Admin not found." };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const UpdateBlogService = async (req) => {
  try {
    const reqBody = req.body;
    const adminID = req.headers.id;
    const blogID = new ObjectID(req.params.blogID);

    if (adminID) {
      // Find Blog By CategoryID
      const blog = await BlogsModel.findOne({ _id: blogID });

      // Checking Blog Exist or not
      if (blog) {
        const data = await BlogsModel.updateOne(
          { _id: blogID },
          { $set: reqBody }
        );
        return { status: "Success", data: data };
      } else {
        return { status: "Failed", data: "Blog not found." };
      }
    } else {
      return { status: "Failed", data: "Admin not found." };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const RemoveBlogService = async (req) => {
  try {
    const adminID = req.headers.id;
    const blogID = new ObjectID(req.params.blogID);

    const admin = await AdminModel.findOne({ _id: adminID });
    if (admin) {
      // Find Blog By CategoryID
      const blog = await BlogsModel.findOne({ _id: blogID });
      // Checking Blog Exist or not
      if (blog) {
        const data = await BlogsModel.deleteOne({ _id: blogID });
        return { status: "Success", data: data };
      } else {
        return { status: "Failed", data: "Blog not found." };
      }
    } else {
      return { status: "Failed", data: "Admin not found." };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const GetBlogDataByIdService = async (req) => {
  try {
    const blogID = new ObjectID(req.params.blogID);
    const data = await BlogsModel.findOne({ _id: blogID });
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};
