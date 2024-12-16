import React, { useState } from "react";
import axios from "axios";
import { HOST } from "../../utils/constant";

const AddPackageForm = ({ setPackages }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    availableDates: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${HOST}/api/v1/admin/packages`,
        formData
      );
      setPackages((prevPackages) => [
        ...prevPackages,
        response.data.newPackage,
      ]);
      setFormData({
        title: "",
        description: "",
        price: "",
        availableDates: "",
        image: "",
      });
    } catch (error) {
      console.error("Error adding package:", error);
    }
  };

  return (
    <div className="flex justify-center px-4">
      <form onSubmit={handleSubmit} className="w-[70vw] sm:w-[50vw]">
        <h2 className="text-2xl mb-4 font-bold">Add New Package</h2>
        <div>
          <label className="block mb-2 text-sm font-medium">Title :</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Title"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">
            Description :
          </label>
          <textarea
            rows="4"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write the description..."
          ></textarea>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Price :</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Price"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">
            Available Dates :
          </label>
          <input
            type="text"
            name="availableDates"
            value={formData.availableDates}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Dates"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Image :</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Image"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2 me-2 mb-2"
        >
          Add Package
        </button>
      </form>
    </div>
  );
};

export default AddPackageForm;
