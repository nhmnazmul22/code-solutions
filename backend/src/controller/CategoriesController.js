// === Internal Imports ===
import * as CategoriesServices from "../services/CategoriesServices.js";
// === Route Controller ===
export const getCategories = async (req, res) => {
  const result = await CategoriesServices.GetCategoriesService(req);
  return res.json(result);
};

export const setCategories = async (req, res) => {
  const result = await CategoriesServices.SetCategoriesService(req);
  return res.json(result);
};

export const updateCategories = async (req, res) => {
  const result = await CategoriesServices.UpdateCategoriesService(req);
  return res.json(result);
};

export const removeCategories = async (req, res) => {
  const result = await CategoriesServices.RemoveCategoriesService(req);
  return res.json(result);
};
