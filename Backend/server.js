import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import bookingRoute from "./routes/bookingRoutes.js";
import adminRouter from "./routes/adminRoute.js";
import packageRouter from "./routes/packageRoutes.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);
app.use(express.json());

mongoose
  .connect(process.env.Mongo_Url)
  .then(() => console.log("connected to mongoDb"))
  .catch((e) => console.error("error connecting to db", e));

app.use("/api/v1/packages", packageRouter);
app.use("/api/v1/bookings", bookingRoute);
app.use("/api/v1/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
