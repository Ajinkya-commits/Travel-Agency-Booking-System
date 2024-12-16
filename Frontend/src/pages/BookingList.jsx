import React, { useState, useEffect } from "react";
import axios from "axios";
import { HOST } from "../../utils/constant";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${HOST}/api/v1/bookings/list`);
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="mt-8">
      <div className="grid md:grid-cols-3">
        {bookings.map((booking, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 m-4 border border-gray-200 break-words "
          >
            <h2 className="text-xl font-bold text-gray-800">
              Name: {booking.name}
            </h2>
            <p className="text-gray-600 mt-2">
              <span className="font-medium">Email:</span> {booking.email}
            </p>
            <p className="text-gray-600 mt-2">
              <span className="font-medium">Phone Number:</span>{" "}
              {booking.phoneNumber}
            </p>
            <p className="text-gray-600 mt-1">
              <span className="font-medium">Travelers:</span>
              {booking.travelersCount}
            </p>
            <p className="text-gray-600 mt-1">
              <span className="font-medium">Email:</span> {booking.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingList;
