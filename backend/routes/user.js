// External Imports
import express from "express";

// Internal Imports
import * as BlogsController from "../src/controller/BlogController.js";
import * as CommentController from "../src/controller/CommentController.js";
import * as CustomerController from "../src/controller/CustomerController.js";
import * as ServiceController from "../src/controller/ServiceController.js";
import * as TeamController from "../src/controller/TeamController.js";
import * as UserController from "../src/controller/UserController.js";
import { AppAuthVerify } from "../src/middleware/AuthMiddleware.js";
// Define App Route
const userRoute = express.Router();

// Define User Routes
userRoute.post("/signupUser", UserController.signupUser);
userRoute.post("/loginUser", UserController.loginUser);
userRoute.get("/getUserProfile", AppAuthVerify, UserController.getUser);
userRoute.post("/updateUserProfile", AppAuthVerify, UserController.updateUser);
userRoute.post("/logoutUser", AppAuthVerify, UserController.logoutUser);

// Define Blogs Routes
userRoute.get("/getBlogs", BlogsController.getBlogs);
userRoute.get(
  "/getBlogsByID/:blogID",
  AppAuthVerify,
  BlogsController.getBlogByID
);

// Define Comment Routes

userRoute.get("/getComments", CommentController.getComment);
userRoute.post(
  "/setComment/:blogID",
  AppAuthVerify,
  CommentController.setComment
);
userRoute.delete(
  "/removeComment/:blogID/:commentID",
  AppAuthVerify,
  CommentController.removeComment
);

// Define Services Routes
userRoute.get("/getServices", ServiceController.getServices);

// Define Team Routes
userRoute.get("/getTeam", TeamController.getTeam);

// Define Contact/ Customer Route
userRoute.post("/setCustomerMessage", AppAuthVerify, CustomerController.setCustomer);

// Export App Routes
export default userRoute;
