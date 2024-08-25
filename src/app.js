import express from "express";
import cookieParser from "cookie-parser";

import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
import blogRouter from "./routes/blogRoute.js";
import userRouter from "./routes/userRoute.js";
import { fileURLToPath } from "url";
app.use(blogRouter);
app.use(userRouter);
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

export { app };
