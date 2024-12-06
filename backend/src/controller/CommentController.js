// === Internal Imports ===
import * as CommentServices from "../services/CommentServices.js";

// === Route Controller ===
export const setComment = async (req, res) => {
  const result = await CommentServices.SetCommentsService(req);
  return res.json(result);
};

export const getComment = async (req, res) => {
  const result = await CommentServices.GetCommentsService(req);
  return res.json(result);
};

export const removeComment = async (req, res) => {
  const result = await CommentServices.RemoveCommentService(req);
  return res.json(result);
};
