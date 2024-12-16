import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { HOST } from "../../utils/constant";

const AllPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios
      .get(`${HOST}/api/v1/packages`)
      .then((response) => {
        setPackages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching packages:", error);
      });
  }, []);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Tour Packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {packages.map((pkg, index) => (
            <Link
              to={`/package/${pkg._id}`}
              key={index}
              className="text-blue-500"
            >
              <div className="bg-white shadow-lg rounded-lg p-4">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold">{pkg.title}</h2>
                <p className="text-gray-600">{pkg.description}</p>
                <p className="text-lg font-bold">${pkg.price}</p>
                See Details
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AllPackages;
