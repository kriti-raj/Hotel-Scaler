import React, { useEffect, useState } from "react";
import Pnavbar from "./Pnavbar";
import Snavbar from "./Snavbar";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const View = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getBookings = () => {
      axios
        .get("https://hotel-scaler.onrender.com/hotel/get")
        .then((res) => {
          setBookings(res.data);
        })
        .catch((err) => alert(err.message));
    };
    getBookings();
  }, []);

  const cancelBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Back",
      confirmButtonText: "Cancel Booking",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://hotel-scaler.onrender.com/hotel/delete/${id}`)
          .then((res) => {
            Swal.fire("Deleted!", res.data.status, "success");
            //update table after deleting
            const updatedBookings = bookings.filter(
              (booking) => booking._id !== id
            );
            setBookings(updatedBookings);
          })
          .catch((err) => {
            Swal.fire("Not Deleted!", err.message, "error");
          });
      }
    });
  };

  return (
    <div>
      <Pnavbar />
      <Snavbar />
      <div className="flex justify-center items-center">
        <table className="w-full">
          <thead>
            <tr>
              <th scope="col" className="py-2 align-middle">
                S.No.
              </th>
              <th scope="col" className="py-2 align-middle">
                ID
              </th>
              <th scope="col" className="py-2 align-middle">
                Email
              </th>
              <th scope="col" className="py-2 align-middle">
                Room Number
              </th>
              <th scope="col" className="py-2 align-middle">
                Room Type
              </th>
              <th scope="col" className="py-2 align-middle">
                Start Date
              </th>
              <th scope="col" className="py-2 align-middle">
                End Date
              </th>
              <th scope="col" className="py-2 align-middle">
                Amount
              </th>
              <th scope="col" className="py-2 align-middle">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((item, count) => (
              <tr key={item._id} className="border-b">
                <td className="py-2 align-middle text-red-500">{count + 1}</td>
                <td className="py-2 align-middle">{item._id}</td>
                <td className="py-2 align-middle">{item.email}</td>
                <td className="py-2 align-middle">{item.roomNumber}</td>
                <td className="py-2 align-middle">{item.roomType}</td>
                <td className="py-2 align-middle">{item.startDate}</td>
                <td className="py-2 align-middle">{item.endDate}</td>
                <td className="py-2 align-middle">
                  {item.roomType === "a"
                    ? (item.hours * 100)
                    : item.roomType === "b"
                      ? (item.hours * 80)
                      : item.roomType === "c"
                        ? (item.hours * 50)
                        : 0}
                </td>
                <td className="py-2 align-middle flex justify-center">
                  <Link
                    to={`/view/${item._id}`}
                    className="mr-2 text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => cancelBooking(item._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View;