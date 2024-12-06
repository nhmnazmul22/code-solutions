// === Internal Imports ===
import mongoose from "mongoose";
import BlogModel from "../model/BlogsModel.js";
import CommentModel from "../model/CommentModel.js";
import UserModel from "../model/UserModel.js";

// Define Mongoose ObjectID
const ObjectID = mongoose.Types.ObjectId;

// === Routes Service ===
export const GetCommentsService = async (req) => {
  try {
    const data = await CommentModel.find({});
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const SetCommentsService = async (req) => {
  try {
    const userID = req.headers.id;
    const blogID = new ObjectID(req.params.blogID);
    const reqBody = req.body;

    const user = await UserModel.findOne({ _id: userID });
    if (user) {
      const comment = { ...reqBody, userID: userID };
      const data = await CommentModel.create(comment);

      // Push CommentID to User's CommentsID Field
      await UserModel.updateOne(
        { _id: userID },
        { $push: { commentsID: data._id } }
      );

      // Push CommentID to Blog's CommentsID Field
      await BlogModel.updateOne(
        { _id: blogID },
        { $push: { commentsID: data._id } }
      );

      return { status: "Success", data: data };
    } else {
      return { status: "Failed", data: "User not found." };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const RemoveCommentService = async (req) => {
  try {
    const userID = req.headers.id;
    const commentID = new ObjectID(req.params.commentID);
    const blogID = new ObjectID(req.params.blogID);

    const user = await UserModel.findOne({ _id: userID });

    if (user) {
      // Find Comment Member By TeamID
      const comment = await CommentModel.findOne({ _id: commentID });

      // Checking Comment Exist or not
      if (comment) {
        const data = await CommentModel.deleteOne({ _id: commentID });

        // Pull CommentID to User's CommentsID Field
        const updateUser = await UserModel.updateOne(
          { _id: userID },
          { $pull: { commentsID: commentID } }
        );

        // Push CommentID to Blog's CommentsID Field
        const updateBlog = await BlogModel.updateOne(
          { _id: blogID },
          { $pull: { commentsID: commentID } }
        );

        console.log(updateUser);
        console.log(updateBlog);
        return { status: "Success", data: data };
      } else {
        return { status: "Failed", data: "This Comment not found." };
      }
    } else {
      return { status: "Failed", data: "User not found." };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};
