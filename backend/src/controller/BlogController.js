// === Internal Imports ===
import * as BlogsServices from "../services/BlogServices.js";

// === Route Controller ===
export const getBlogs = async (req, res) => {
  const result = await BlogsServices.GetBlogsService(req);
  res.json(result);
};

export const getBlogByID = async () => {};

export const setBlog = async () => {};

export const updateBlog = async () => {};

export const removeBlog = async () => {};
