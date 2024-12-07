// === External Imports ===
import mongoose from "mongoose";
import AdminModel from "../model/AdminModel.js";
import UserModel from "../model/UserModel.js";
// === Internal Imports ===
import {
  hashPassword,
  verifyPassword,
} from "../utility/passwordVerifyUtility.js";
import { EncodedToken } from "../utility/tokenUtility.js";
import * as validation from "../utility/validationUtility.js";

// === Routes Service ===
export const signupService = async (req) => {
  try {
    const reqBody = req.body;

    // Password and Email Validation
    const validEmail = validation.validateEmail(reqBody["email"]);
    const validPassword = validation.validatePassword(reqBody["password"]);
    const matchPassword = reqBody["password"] === reqBody["confirmPassword"];

    // Hashing Password
    let hashedPassword = null;
    if (validPassword && matchPassword) {
      hashedPassword = await hashPassword(reqBody["password"]);
    }

    // Checking validEmail and validPassword and hashedPassword
    if (validEmail && hashedPassword !== null) {
      const user = await UserModel.findOne({ email: reqBody["email"] });

      if (!user) {
        // Exclude confirmPassword
        const { confirmPassword, ...userData } = reqBody;

        // New User Object
        const newUser = { ...userData, password: hashedPassword };
        const data = await UserModel.create(newUser);
        return { status: "Success", data: "Signup Successful" };
      } else {
        return { status: "Failed", data: "Account Already Exist in Server" };
      }
    } else {
      return {
        status: "Failed",
        data: "Invalid email or password",
      };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const loginService = async (req, res) => {
  try {
    const reqBody = req.body;
    // Finding user with user provided email
    const user = await UserModel.findOne({ email: reqBody["email"] });

    // Checking if user exists or not
    if (user) {
      const password = await verifyPassword(reqBody["password"], user.password);

      // Checking if password matches or not
      if (password) {
        // Creating JWT Token for authenticated user
        const token = EncodedToken(user._id, reqBody["email"]);

        const cookieOptions = {
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // 30 days
          httpOnly: true,
          secure: true,
          path: "/app",
          sameSite: "strict",
        };
        res.cookie("appToken", token, cookieOptions);

        return { status: "Success", data: "Login Successful", token: token };
      } else {
        return { status: "Failed", data: "Incorrect Password" };
      }
    } else {
      return { status: "Failed", data: "User Not Found" };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const getProfileService = async (req) => {
  try {
    const userID = new mongoose.Types.ObjectId(req.headers.id);
    const email = req.headers.email;

    const MatchStage = { $match: { _id: userID, email: email } };

    const JoinWithCommentStage = {
      $lookup: {
        from: "comments", // The collection to join with
        let: { commentIDs: "$commentsID" }, // Pass `commentsID` as a variable
        pipeline: [
          {
            $match: {
              $expr: {
                $in: ["$_id", "$$commentIDs"], // Match `customermessages._id` with `commentsID`
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
        as: "comments", // Output array field name
      },
    };

    const ProjectionStage = { $project: { commentsID: 0, password: 0 } };

    const data = await UserModel.aggregate([
      MatchStage,
      JoinWithCommentStage,
      ProjectionStage,
    ]);
    if (data) {
      return { status: "Success", data: data };
    } else {
      return { status: "Failed", data: "User Not Found" };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const updateProfileService = async (req) => {
  try {
    const userID = req.headers.id;
    const email = req.headers.email;
    const reqBody = req.body;

    const user = await UserModel.findOne({ _id: userID, email: email });
    if (user) {
      const data = await UserModel.updateOne(
        { _id: userID },
        { $set: reqBody }
      );
      return { status: "Success", data: data };
    } else {
      return { status: "Failed", data: "User Not Found" };
    }

    // const
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const logoutService = async (req, res) => {
  try {
    const userID = req.headers.id;
    const email = req.headers.email;

    const user = await UserModel.findOne({ _id: userID, email: email });
    if (user) {
      res.clearCookie("appToken", { path: "/app" });
      return { status: "Success", data: "Log out Successful" };
    } else {
      return { status: "Failed", data: "User Not Found" };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const getUsersService = async (req) => {
  try {
    const adminID = req.headers.id;
    const email = req.headers.email;

    const admin = await AdminModel.findOne({ _id: adminID, email: email });

    if (admin) {
      const data = await UserModel.find(
        {},
        { comments: 0, messages: 0, password: 0, commentsID: 0 }
      );
      return { status: "Success", data: data };
    } else {
      return { status: "Failed", data: "Admin Not Found" };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const removeUserServices = async (req, res) => {
  try {
    const adminID = req.headers.id;
    const email = req.headers.email;
    const userID = req.params.userID;

    const admin = await AdminModel.findOne({ _id: adminID, email: email });

    if (admin) {
      const user = await UserModel.findByIdAndDelete(userID);
      res.clearCookie("appToken", { path: "/app" });
      return { status: "Success", data: user };
    } else {
      return { status: "Failed", data: "Admin Not Found" };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};
