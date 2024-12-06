// === Internal Imports ===
import * as CustomerServices from "../services/CustomerServices.js";

// === Route Controller ===
export const setCustomer = async (req, res) => {
  const result = await CustomerServices.SetCustomerService(req)
  return res.json(result);
};

export const getCustomer = async (req, res) => {
 const result = await CustomerServices.GetCustomerService(req);
 return res.json(result);
};

export const removeCustomer = async (req, res) => {
  const result = await CustomerServices.RemoveCustomerService(req);
  return res.json(result);
};
