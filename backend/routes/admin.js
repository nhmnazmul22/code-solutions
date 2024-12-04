// External Imports
import express from "express";

// Internal Imports
import * as CategoriesController from "../src/controller/CategoriesController.js";

// Define App Route
const adminRoute = express.Router();

// Define Admin Routes
adminRoute.post("/setAdmin");
adminRoute.get("/getAdmin");
adminRoute.post("/updateAdmin");
adminRoute.post("/logoutAdmin");

// Define User Routes
adminRoute.get("/getUsers");
adminRoute.post("/updateUserByID");
adminRoute.delete("/removeUser");

// Define Blogs Routes
adminRoute.get("/getBlogs");
adminRoute.post("/setBlogs");
adminRoute.post("/updateBlogsByID");
adminRoute.delete("/removeBlog");

// Define Services Routes
adminRoute.get("/getServices");
adminRoute.post("/setServices");
adminRoute.post("/updateServices");
adminRoute.delete("/removeServices");

// Define Categories Routes
adminRoute.get("/getCategories", CategoriesController.getCategories);
adminRoute.post("/setCategories", CategoriesController.setCategories);
adminRoute.post(
  "/updateCategories/:categoryID",
  CategoriesController.updateCategories
);
adminRoute.delete(
  "/removeCategories/:categoryID",
  CategoriesController.removeCategories
);

// Export Admin Routes
export default adminRoute;
