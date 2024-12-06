// === External Imports ===
import mongoose from "mongoose";
// === Internal Imports ===
import AdminModel from "../model/AdminModel.js";
import {
  hashPassword,
  verifyPassword,
} from "../utility/passwordVerifyUtility.js";
import { EncodedToken } from "../utility/tokenUtility.js";
import * as validation from "../utility/validationUtility.js";

const ObjectID = mongoose.Types.ObjectId;

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
      const admin = await AdminModel.findOne({ email: reqBody["email"] });

      if (!admin) {
        // Exclude confirmPassword
        const { confirmPassword, ...userData } = reqBody;

        // New admin Object
        const newAdmin = { ...userData, password: hashedPassword };
        const data = await AdminModel.create(newAdmin);
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
    // Finding admin with admin provided email
    const admin = await AdminModel.findOne({ email: reqBody["email"] });

    // Checking if admin exists or not
    if (admin) {
      const password = await verifyPassword(
        reqBody["password"],
        admin.password
      );

      // Checking if password matches or not
      if (password) {
        // Creating JWT Token for authenticated user
        const token = EncodedToken(admin._id, reqBody["email"]);

        const cookieOptions = {
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // 30 days
          httpOnly: true,
          secure: true,
          path: "/admin",
          sameSite: "strict",
        };
        res.cookie("adminToken", token, cookieOptions);

        return { status: "Success", data: "Login Successful", token: token };
      } else {
        return { status: "Failed", data: "Incorrect Password" };
      }
    } else {
      return { status: "Failed", data: "Admin Not Found" };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const getProfileService = async (req) => {
  try {
    const adminID = req.headers.id;
    const email = req.headers.email;
    const data = await AdminModel.findOne(
      { _id: adminID, email: email },
      { blogsID: 0 }
    );
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
    const adminID = req.headers.id;
    const email = req.headers.email;
    const reqBody = req.body;

    const admin = await AdminModel.findOne({ _id: adminID, email: email });

    if (admin) {
      const data = await AdminModel.updateOne(
        { _id: adminID },
        { $set: reqBody }
      );
      return { status: "Success", data: data };
    } else {
      return { status: "Failed", data: "Admin Not Found" };
    }

    // const
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

export const logoutService = async (req, res) => {
  try {
    const adminID = req.headers.id;
    const email = req.headers.email;

    const admin = await AdminModel.findOne({ _id: adminID, email: email });
    if (admin) {
      res.clearCookie("adminToken", { path: "/admin" });
      return { status: "Success", data: "Log out Successful" };
    } else {
      return { status: "Failed", data: "Admin Not Found" };
    }
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};
