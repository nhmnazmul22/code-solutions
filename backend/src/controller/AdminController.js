// === Internal Imports ===
import * as AdminServices from "../services/AdminServices.js";

// === Route Controller ===
export const signupAdmin = async (req, res) => {
  const result = await AdminServices.signupService(req);
  return res.json(result);
};

export const loginAdmin = async (req,res) => {
  const result = await AdminServices.loginService(req, res);
  return res.json(result);
};

export const getAdminProfile = async (req, res) => {
  const result = await AdminServices.getProfileService(req);
  return res.json(result);
};

export const updateAdminProfile = async (req, res) => {
  const result = await AdminServices.updateProfileService(req);
  return res.json(result);
};


export const logoutAdmin = async (req,res) => {
  const result = await AdminServices.logoutService(req, res);
  return res.json(result);
};
