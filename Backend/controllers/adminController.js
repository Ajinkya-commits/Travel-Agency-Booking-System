import Tourpackage from "../Models/tourpackage.js";

import Booking from "../Models/booking.js";

export const addPackage = async (req, res) => {
  try {
    const { title, description, price, availableDates, image } = req.body;

    const newPackage = await Tourpackage.create({
      title,
      description,
      price,
      availableDates,
      image,
    });

    res.json({ message: "package added successfully", newPackage });
  } catch (error) {
    res.status(500).json({ error: "error while adding package" });
  }
};

export const updatePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedPackage = await Tourpackage.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedPackage) {
      return res.status(411).json({ error: "package not found" });
    }
    res.json({ message: "package updated successfully" });
  } catch (error) {
    res.status(500).json("error while updating the package");
  }
};

export const deletePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPackage = await Tourpackage.findByIdAndDelete(id);
    if (!deletedPackage) {
      return res.status(404).json({ error: "package not found" });
    }
    res.json({ message: "package deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "error while deleting the package" });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: "error while fetching the bookings" });
  }
};
