const router = require("express").Router();
const Booking = require("../models/hotel");
const booking = require("../models/hotel");

router.route("/add").post((req, res) => {
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

  newBooking
    .save()
    .then(() => {
      res.json("Booking Confirmed");
    })
    .catch((err) => console.log(err.message));
  //   console.log("status ok");
  res.status(200).json("status ok");
});

router.route("/get").get((req, res) => {
  booking
    .find()
    .then((bookings) => {
      res.json(bookings);
    })
    .catch((err) => console.log(err.message));
});

router.route("/delete/:id").delete(async (req, res) => {
  let bid = req.params.id;
  await Booking.findByIdAndDelete(bid)
    .then(() => {
      res.status(200).send({
        status: "booking cancelled",
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
});

router.route("/update/:id").put(async (req, res) => {
  let bid = req.params.id;
  const { email, roomNumber, roomType, startDate, endDate, hours } = req.body;

  const updateBooking = {
    email,
    roomNumber,
    roomType,
    startDate,
    endDate,
    hours
  };

  const update = await Booking.findByIdAndUpdate(bid, updateBooking)
    .then(() => {
      res.status(200).send({
        status: "User Updated",
      });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({
        status: "server Error",
        error: err.message,
      });
    });
});

router.route("/get/:id").get(async (req, res) => {
  const bid = req.params.id;
  const user = await Booking.findById(bid)
    .then((user) => {
      res.status(200).send({
        status: "User Fetched",
        user,
      });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({
        status: "Error in fetch",
        error: err.message,
      });
    });
});

module.exports = router;
