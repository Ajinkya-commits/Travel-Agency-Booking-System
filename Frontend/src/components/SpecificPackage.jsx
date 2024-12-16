import React, { useState, useEffect } from "react";
import axios from "axios";
import BookingForm from "./BookingForm";
import { useParams } from "react-router-dom";
import Layout from "./Layout";
import { HOST } from "../../utils/constant";

const SpecificPackage = () => {
  const [packageDetail, setPackageDetail] = useState(null);
  const [isBooking, setIsBooking] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPackageDetail = async () => {
      try {
        const response = await axios.get(`${HOST}/api/v1/packages/${id}`);
        setPackageDetail(response.data);
      } catch (error) {
        console.error("Error fetching package details:", error);
      }
    };

    if (id) {
      fetchPackageDetail();
    }
  }, [id]);

  const handleBookNow = () => {
    setIsBooking(true);
  };

  if (!packageDetail) return <div>Loading...</div>;

  return (
    <>
      <Layout>
        <div className="container mx-auto p-4">
          <div className="flex">
            <img
              src={packageDetail.image}
              alt={packageDetail.title}
              className="w-1/2 h-96 object-cover rounded-lg mr-8"
            />
            <div className="w-1/2">
              <h1 className="text-3xl font-bold">{packageDetail.title}</h1>
              <p className="text-gray-600 mt-4">{packageDetail.description}</p>
              <p className="text-lg font-bold mt-4">${packageDetail.price}</p>
              <button
                onClick={handleBookNow}
                className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
              >
                Book Now
              </button>
            </div>
          </div>
          {isBooking && <BookingForm packageId={packageDetail._id} />}
        </div>
      </Layout>
    </>
  );
};

export default SpecificPackage;
