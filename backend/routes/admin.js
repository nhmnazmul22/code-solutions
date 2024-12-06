// External Imports
import express from "express";

// Internal Imports
import * as AdminController from "../src/controller/AdminController.js";
import * as BlogsController from "../src/controller/BlogController.js";
import * as CustomerController from "../src/controller/CustomerController.js";
import * as ServiceController from "../src/controller/ServiceController.js";
import * as TeamController from "../src/controller/TeamController.js";
import * as UserController from "../src/controller/UserController.js";
import { AdminAuthVerify } from "../src/middleware/AuthMiddleware.js";

// Define App Route
const adminRoute = express.Router();

// Define Admin Routes
adminRoute.post("/signupAdmin", AdminController.signupAdmin);
adminRoute.post("/loginAdmin", AdminController.loginAdmin);
adminRoute.get(
  "/getAdminProfile",
  AdminAuthVerify,
  AdminController.getAdminProfile
);
adminRoute.post(
  "/updateAdminProfile",
  AdminAuthVerify,
  AdminController.updateAdminProfile
);
adminRoute.post("/logoutAdmin", AdminAuthVerify, AdminController.logoutAdmin);

// Define User Routes
adminRoute.get("/getUsers", AdminAuthVerify, UserController.getUsers);
adminRoute.delete(
  "/removeUser/:userID",
  AdminAuthVerify,
  UserController.removeUser
);

// Define Blogs Routes
adminRoute.get("/getBlogs", BlogsController.getBlogs);
adminRoute.post("/setBlog", AdminAuthVerify, BlogsController.setBlog);
adminRoute.post(
  "/updateBlog/:blogID",
  AdminAuthVerify,
  BlogsController.updateBlog
);
adminRoute.delete(
  "/removeBlog/:blogID",
  AdminAuthVerify,
  BlogsController.removeBlog
);

// Define Services Routes
adminRoute.get("/getServices", ServiceController.getServices);
adminRoute.post("/setServices", AdminAuthVerify, ServiceController.setService);
adminRoute.post(
  "/updateServices/:serviceID",
  AdminAuthVerify,
  ServiceController.updateService
);
adminRoute.delete(
  "/removeServices/:serviceID",
  AdminAuthVerify,
  ServiceController.removeService
);

// Define Team Routes
adminRoute.get("/getTeam", TeamController.getTeam);
adminRoute.post("/setTeam", AdminAuthVerify, TeamController.setTeam);
adminRoute.post(
  "/updateTeam/:teamID",
  AdminAuthVerify,
  TeamController.updateTeam
);
adminRoute.delete(
  "/removeTeam/:teamID",
  AdminAuthVerify,
  TeamController.removeTeam
);

// Define Contact/Customer Route
adminRoute.get("/getCustomer", CustomerController.getCustomer);
adminRoute.delete(
  "/removeCustomer/:customerID",
  AdminAuthVerify,
  CustomerController.removeCustomer
);

// Export Admin Routes
export default adminRoute;
