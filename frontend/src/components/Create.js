import React, { useState } from "react";
import Pnavbar from "./Pnavbar";
import Snavbar from "./Snavbar";
import Swal from "sweetalert2";
import axios from "axios";

const Create = () => {
  const [email, setEmail] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [roomType, setRoomType] = useState("");
  const [startDate, setstartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [hours, setHours] = useState(0);

  const sentData = (e) => {
    e.preventDefault();

    // console.log("Form submitted");
    // console.log("Email:", email);
    // console.log("Room Number:", roomNo);
    // console.log("Room Type:", roomType);
    // console.log("start Date:", startDate);
    // console.log("End Date:", endDate);

    const newBooking = {
      email,
      roomNo,
      roomType,
      startDate,
      endDate,
      hours,
    };

    Swal.fire({
      title: "Do you want to Book a Room?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `NO`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("http://localhost:8080/hotel/add", newBooking)
          .then(() => {
            Swal.fire("Booking confirmed!", "", "success");
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.message,
            });
          });
      } else if (result.isDenied) {
        Swal.fire("Details are not saved", "", "error");
      }
    });
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
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
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
            type="text"
            placeholder="Room Number"
            onChange={(e) => setRoomNo(e.target.value)}
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
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option value="">Select Room Type</option>
              <option value="a">a</option>
              <option value="b">b</option>
              <option value="c">c</option>
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
              type="date"
              onChange={(e) => setstartDate(e.target.value)}
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
              type="date"
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="hours">
            Number of Hours
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="hours"
            type="text"
            placeholder="Number of Hours"
            onChange={(e) => setHours(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={sentData}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
