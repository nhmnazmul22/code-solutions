// External Imports
import express from "express";

// Internal Imports
import * as BlogsController from "../src/controller/BlogController.js";
import * as CategoriesController from "../src/controller/CategoriesController.js";
// Define App Route
const userRoute = express.Router();

// Define User Routes
userRoute.post("/setUser");
userRoute.post("/userVerify");
userRoute.get("/getUser");
userRoute.post("/updateUser");
userRoute.post("/logoutUser");

// Define Blogs Routes
userRoute.get("/getBlogs", BlogsController.getBlogs);
userRoute.get("/getBlogsByID");

// Define Services Routes
userRoute.get("/getServices");

// Define Categories Routes
userRoute.get("/getCategories", CategoriesController.getCategories);

// Export App Routes
export default userRoute;
