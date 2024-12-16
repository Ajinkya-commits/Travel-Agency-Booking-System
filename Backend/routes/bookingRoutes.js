import { Router } from "express";
import { createBooking } from "../controllers/bookingController.js";
import { getAllBookings } from "../controllers/adminController.js";

const bookingRoute = Router();

bookingRoute.get("/test", (req, res) => {
  res.json({ message: "Booking Route is working!" });
});

bookingRoute.post("/", createBooking);

bookingRoute.get("/list", getAllBookings);

export default bookingRoute;
