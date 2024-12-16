import React, { useState, useEffect } from "react";
import axios from "axios";
import AddPackageForm from "./AddPackageForm";
import UpdatePackageForm from "./UpdatePackageForm";
import BookingList from "./BookingList";
import Layout from "../components/Layout";
import { HOST } from "../../utils/constant";

const Admin = () => {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get(`${HOST}/api/v1/packages`);
        setPackages(response.data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchPackages();
  }, []);
  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg);
  };

  return (
    <Layout>
      <div className="admin-container flex-col justify-center ">
        <h1 className="text-3xl font-bold mb-6 border-b text-center w-full py-3">
          Admin Panel
        </h1>

        <AddPackageForm setPackages={setPackages} />

        <h2 className="text-3xl font-bold mb-6 border-b mt-2 border-t text-center w-full py-3">
          Tour Packages
        </h2>
        <div className="grid md:grid-cols-3 place-items-center">
          {packages.map((pkg) => (
            <div
              key={pkg._id}
              className=" mx-3 my-3  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow "
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                {pkg.title}
              </h5>

              <p className="mb-3 font-normal text-gray-700">
                {pkg.description}
              </p>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => handleSelectPackage(pkg)}
              >
                Update
              </button>
              <button
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={async () => {
                  try {
                    await axios.delete(
                      `${HOST}/api/v1/admin/packages/${pkg._id}`
                    );
                    setPackages(packages.filter((p) => p._id !== pkg._id));
                  } catch (error) {
                    console.error("Error deleting package:", error);
                  }
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        {selectedPackage && (
          <UpdatePackageForm
            selectedPackage={selectedPackage}
            setPackages={setPackages}
            setSelectedPackage={setSelectedPackage}
          />
        )}
        <h1 className="text-3xl font-bold mb-6 border-b text-center w-full py-3 mt-3 border-t">
          Booking List
        </h1>
        <BookingList />
      </div>
    </Layout>
  );
};

export default Admin;
