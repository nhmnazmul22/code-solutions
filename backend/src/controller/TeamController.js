// === Internal Imports ===
import * as TeamServices from "../services/TeamServices.js";

// === Route Controller ===
export const setTeam = async (req, res) => {
  const result = await TeamServices.SetTeamService(req);
  return res.json(result);
};

export const getTeam = async (req, res) => {
  const result = await TeamServices.GetTeamService(req);
  return res.json(result);
};

export const getTeamById = async (req, res) => {
  const result = await TeamServices.GetTeamByIdService(req);
  return res.json(result);
};

export const updateTeam = async (req, res) => {
  const result = await TeamServices.UpdateTeamService(req);
  return res.json(result);
};

export const removeTeam = async (req, res) => {
  const result = await TeamServices.RemoveTeamService(req);
  return res.json(result);
};
