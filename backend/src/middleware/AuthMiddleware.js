// === Internal Imports ===
import { DecodedToken } from "../utility/tokenUtility.js";

// === App Middleware to check JWT ===
export const AppAuthVerify = (req, res, next) => {
  const token = req.cookies["appToken"];
  const decoded = DecodedToken(token);

  if (decoded === null) {
    return res.status(401).json({ status: "Failed", message: "Unauthorize" });
  } else {
    const { id, email } = decoded;
    req.headers.id = id;
    req.headers.email = email;
    next();
  }
};


// === App Middleware to check JWT ===
export const AdminAuthVerify = (req, res, next) => {
  const token = req.cookies["adminToken"];
  const decoded = DecodedToken(token);

  if (decoded === null) {
    return res.status(401).json({ status: "Failed", message: "Unauthorize" });
  } else {
    const { id, email } = decoded;
    req.headers.id = id;
    req.headers.email = email;
    next();
  }
};
