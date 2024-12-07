// === External Imports ===
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import ExpressMongoSanitize from "express-mongo-sanitize";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import mongoose from "mongoose";
import xss from "xss-clean";

// === Internal Imports ===
import adminRoute from "./routes/admin.js";
import userRoute from "./routes/user.js";
import {
  DATABASE_URI,
  MAX_JSON_FILE,
  PORT,
  REQUEST_LIMIT,
  REQUEST_TIME,
} from "./src/config/config.js";

// === Initial Express app ===
const app = express();

// Trust proxy for correct IP extraction (useful in production)
app.set("trust proxy", true);

const limit = rateLimit({
  windowMs: REQUEST_TIME,
  max: REQUEST_LIMIT,
  keyGenerator: (req) => {
    return req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  },
});

// === Use Default Middlewares ===
app.use(express.json({ max: MAX_JSON_FILE }));
app.use(express.urlencoded({ max: MAX_JSON_FILE, extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(ExpressMongoSanitize());
app.use(helmet());
app.use(hpp());
app.use(xss());
app.use(limit);

// === App Routes ===
app.use("/app", userRoute);

// === Admin Routes ===
app.use("/admin", adminRoute);

// === Database Connection ===
mongoose
  .connect(DATABASE_URI, { autoIndex: true })
  .then(() => console.log("Database Connection Successful"))
  .catch(() => console.log("Database Connection Failed"));

// === Server Listen ===
app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});
