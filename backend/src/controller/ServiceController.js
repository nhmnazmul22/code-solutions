// === Internal Imports ===
import * as ServiceService from "../services/ServiceServices.js";

// === Route Controller ===
export const getServices = async (req, res) => {
  const result = await ServiceService.GetServiceDataService(req);
  return res.json(result);
};

export const setService = async (req, res) => {
  const result = await ServiceService.SetServiceDataService(req);
  return res.json(result);
};

export const updateService = async (req, res) => {
  const result = await ServiceService.UpdateServiceDataService(req);
  return res.json(result);
};

export const removeService = async (req, res) => {
  const result = await ServiceService.RemoveServiceDataService(req);
  return res.json(result);
};
