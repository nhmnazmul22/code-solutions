// === Internal Imports ===
import * as UserServices from "../services/UserServices.js";

// === Route Controller ===
export const signupUser = async (req, res) => {
  const result = await UserServices.signupService(req);
  return res.json(result);
};

export const loginUser = async (req, res) => {
  const result = await UserServices.loginService(req, res);
  return res.json(result);
};

export const getUser = async (req, res) => {
  const result = await UserServices.getProfileService(req);
  return res.json(result);
};

export const updateUser = async (req, res) => {
  const result = await UserServices.updateProfileService(req);
  return res.json(result);
};

export const logoutUser = async (req, res) => {
  const result = await UserServices.logoutService(req, res);
  return res.json(result);
};


export const getUsers = async (req, res) => {
  const result = await UserServices.getUsersService(req);
  return res.json(result);
};


export const removeUser = async (req, res) => {
  const result = await UserServices.removeUserServices(req, res);
  return res.json(result);
};
