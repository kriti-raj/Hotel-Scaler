import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Pnavbar from "./Pnavbar";
import Snavbar from "./Snavbar";

const EditBooking = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = () => {
      axios.get(`http://localhost:8080/hotel/get/${id}`).then((res) => {
        setUser(res.data.user);
      });
    };
    getUser();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8080/hotel/update/${id}`, user)
      .then(() => {
        Swal.fire({
          title: "Do you want to update changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Yes",
          denyButtonText: `No`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Updated!", "", "success");
            navigate("/view");
          } else if (result.isDenied) {
            Swal.fire("Updates not done", "", "info");
          }
        });
      })
      .catch((err) => Swal.fire("Not Updated", err.message, "error"));
  };

  return (
    <div>
      <Pnavbar />
      <Snavbar />
      <form className="max-w-md mx-auto bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="roomNumber"
          >
            Room Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="roomNumber"
            name="roomNumber"
            type="text"
            placeholder="Room Number"
            value={user.roomNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="roomType"
          >
            Room Type
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="roomType"
              name="roomType"
              value={user.roomType}
              onChange={handleInputChange}
            >
              <option value="">Select Room Type</option>
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="mr-2">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="startDate"
            >
              Start Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="startDate"
              name="startDate"
              type="date"
              value={user.startDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="endDate"
            >
              End Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="endDate"
              name="endDate"
              type="date"
              value={user.endDate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="roomNumber"
          >
            Number of Hours
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="hours"
            name="hours"
            type="text"
            placeholder="Number of Hours"
            value={user.hours}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBooking;
