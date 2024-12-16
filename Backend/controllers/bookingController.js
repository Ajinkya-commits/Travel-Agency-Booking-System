import TourPackage from "../Models/tourpackage.js";
import Booking from "../Models/booking.js";

export const createBooking = async (req, res) => {
  try {
    const { name, email, phoneNumber, travelersCount, packageId } = req.body;
    console.log("Travelers Count:", travelersCount);
    const selectedPackage = await TourPackage.findById(packageId);
    if (!selectedPackage) {
      return res
        .status(404)
        .json({ error: "no package found for specified id" });
    }
    const totalPrice = selectedPackage.price * travelersCount;
    console.log("Selected Package:", selectedPackage.price);
    console.log("Calculated Total Price:", totalPrice);

    const booking = await Booking.create({
      ...req.body,
      travelersCount: travelersCount,
    });
    res.json({
      message: "booking done successfully",
      booking,
      invoice: {
        customerName: name,
        packageTitle: selectedPackage.title,
        totalPrice: totalPrice,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "error while  creating booking" });
  }
};

export const getBookings = async (req, res) => {
  try {
    const AllBookings = await Booking.find();
    res.json({
      AllBookings,
    });
  } catch (error) {
    res.status(500).json({
      error: "error while fetching the bookings",
    });
  }
};
