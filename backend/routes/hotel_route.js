const router = require("express").Router();
const Booking = require("../models/hotel");
const TryCatchWrap = require("../uitls/TryCatchWrap.js");
let booking = require("../models/hotel");

router.route("/add").post(
  TryCatchWrap(async (req, res) => {
    const email = req.body.email;
    const roomNumber = req.body.roomNo;
    const roomType = req.body.roomType;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const hours = req.body.hours;

    const newBooking = new Booking({
      email,
      roomNumber,
      roomType,
      startDate,
      endDate,
      hours,
    });
    await newBooking.save();
    res.status(200).json("status ok");
  })
);

router.route("/get").get(
  TryCatchWrap(async (req, res) => {
    const bookings = await booking.find();
    res.json(bookings);
  })
);

router.route("/delete/:id").delete(
  TryCatchWrap(async (req, res) => {
    let bid = req.params.id;
    await Booking.findByIdAndDelete(bid);
    res.status(200).send({
      status: "booking cancelled",
    });
  })
);

router.route("/update/:id").put(
  TryCatchWrap(async (req, res) => {
    let bid = req.params.id;
    const { email, roomNumber, roomType, startDate, endDate, hours } = req.body;

    const updateBooking = {
      email,
      roomNumber,
      roomType,
      startDate,
      endDate,
      hours,
    };

    const update = await Booking.findByIdAndUpdate(bid, updateBooking);
    res.status(200).send({
      status: "User Updated",
    });
  })
);

router.route("/get/:id").get(
  TryCatchWrap(async (req, res) => {
    const bid = req.params.id;
    const user = await Booking.findById(bid);

    res.status(200).send({
      status: "User Fetched",
      user,
    });
  })
);

module.exports = router;
