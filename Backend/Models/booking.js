import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  travelersCount: Number,
  packageId: mongoose.Schema.Types.ObjectId,
});
const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
