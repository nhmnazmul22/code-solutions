import ServerlessHttp from "serverless-http";
import app from "../app.js";

export default ServerlessHttp(app);
