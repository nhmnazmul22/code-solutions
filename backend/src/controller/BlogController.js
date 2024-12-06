// === Internal Imports ===
import * as BlogsServices from "../services/BlogServices.js";

// === Route Controller ===
export const getBlogs = async (req, res) => {
  const result = await BlogsServices.GetBlogsService(req);
  res.json(result);
};

export const getBlogByID = async (req, res) => {
  const result = await BlogsServices.GetBlogByIDService(req);
  res.json(result);
};

export const setBlog = async (req, res) => {
  const result = await BlogsServices.SetBlogService(req);
  res.json(result);
};

export const updateBlog = async (req, res) => {
  const result = await BlogsServices.UpdateBlogService(req);
  res.json(result);
};

export const removeBlog = async (req, res) => {
  const result = await BlogsServices.RemoveBlogService(req);
  res.json(result);
};
