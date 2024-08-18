import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.route.js";

import movieRouter from "./routes/movie.route.js";
import tvRouter from "./routes/tv.route.js";
import searchRouter from "./routes/search.route.js";

import { protectRoute } from "./middleware/ProtectRoute.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

app.use("/api/movie", protectRoute, movieRouter);
app.use("/api/tv", protectRoute, tvRouter);
app.use("/api/search", protectRoute, searchRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected DB");
    })
    .catch((e) => {
      console.log(e.message);
      process.exit(1);
    });
  console.log("Runn...");
});
