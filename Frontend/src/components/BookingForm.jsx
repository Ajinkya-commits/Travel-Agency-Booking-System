import React, { useState } from "react";
import axios from "axios";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { HOST } from "../../utils/constant";

const BookingForm = ({ packageId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    travelersCount: 1,
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${HOST}/api/v1/bookings`, {
        ...formData,
        packageId,
      });

      const bookingDetails = {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        travelersCount: formData.travelersCount,
        totalPrice: response.data.invoice.totalPrice,
      };

      setMessage(
        `Booking successful! Total Price: $${response.data.invoice.totalPrice}`
      );

      generateInvoice(bookingDetails);
    } catch (error) {
      console.error("Error creating booking:", error);
      setMessage("Error creating booking");
    }
  };

  const generateInvoice = async (details) => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const { name, email, phoneNumber, travelersCount, totalPrice } = details;

    page.drawText("Invoice", {
      x: 250,
      y: 360,
      size: 20,
      font,
      color: rgb(0, 0, 0),
    });
    page.drawText(`Customer Name: ${name}`, { x: 50, y: 320, size: 12, font });
    page.drawText(`Email: ${email}`, { x: 50, y: 300, size: 12, font });
    page.drawText(`Phone Number: ${phoneNumber}`, {
      x: 50,
      y: 280,
      size: 12,
      font,
    });
    page.drawText(`Travelers Count: ${travelersCount}`, {
      x: 50,
      y: 260,
      size: 12,
      font,
    });
    page.drawText(`Total Price: $${totalPrice}`, {
      x: 50,
      y: 240,
      size: 12,
      font,
    });
    page.drawText("Thank you for booking with us!", {
      x: 50,
      y: 200,
      size: 12,
      font,
      color: rgb(0, 0.53, 0.71),
    });

    const pdfBytes = await pdfDoc.save();

    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `invoice_${name}.pdf`;
    link.click();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        required
      />
      <input
        type="number"
        name="travelersCount"
        placeholder="Number of Travelers"
        value={formData.travelersCount}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        min="1"
        required
      />
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded"
      >
        Submit Booking
      </button>
      {message && <p className="mt-4 text-lg">{message}</p>}
    </form>
  );
};

export default BookingForm;
