import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const navigate = useNavigate();

  const [countA, setCountA] = useState(2);
  const [countB, setCountB] = useState(3);
  const [countC, setCountC] = useState(5);
  const [shouldNavigate, setShouldNavigate] = useState(false);

  const handleClickA = (e) => {
    e.preventDefault();
    const updatedCount = countA - 1;
    setCountA(updatedCount);
    if (updatedCount === 0) {
      setShouldNavigate(true);
    }
  };

  const handleClickB = (e) => {
    e.preventDefault();
    const updatedCount = countB - 1;
    setCountB(updatedCount);
    if (updatedCount < countB) {
      setShouldNavigate(true);
    }
  };

  const handleClickC = (e) => {
    e.preventDefault();
    const updatedCount = countC - 1;
    setCountC(updatedCount);
    if (updatedCount === 0) {
      setShouldNavigate(true);
    }
  };

  useEffect(() => {
    if (shouldNavigate) {
      navigate("/create");
    }
  }, [shouldNavigate, navigate]);

  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Hotel Scaler</h1>
      </div>

      <div className="flex justify-around flex-wrap">
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img
            src="https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-bedroom-int_1203-2723.jpg?size=626&ext=jpg"
            alt="Room Type A"
            className="w-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Type: A</div>
            <p className="text-gray-700 text-base">₹100/hour</p>
            <p className="text-gray-700 text-base">
              Number of rooms available:
              <span>{countA}</span>
            </p>
          </div>
          <div className="px-6 py-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleClickA}
            >
              Book
            </button>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img
            src="https://img.freepik.com/free-photo/small-hotel-room-interior-with-double-bed-bathroom_1262-12489.jpg?size=626&ext=jpg"
            alt="Room Type B"
            className="w-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Type: B</div>
            <p className="text-gray-700 text-base">₹80/hour</p>
            <p className="text-gray-700 text-base">
              Number of rooms available:
              <span>{countB}</span>
            </p>
          </div>
          <div className="px-6 py-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleClickB}
            >
              Book
            </button>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img
            src="https://img.freepik.com/free-photo/pillow-bed_74190-2048.jpg?size=626&ext=jpg"
            alt="Room Type C"
            className="w-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Type: C</div>
            <p className="text-gray-700 text-base">₹50/hour</p>
            <p className="text-gray-700 text-base">
              Number of rooms available:
              <span>{countC}</span>
            </p>
          </div>
          <div className="px-6 py-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleClickC}
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;