const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8070;

// app.use(cors({
//   origin: ["https://hotel-scaler-frontend.vercel.app"],
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true
// }));
app.use(cors());

app.use(express.json());

const URL = process.env.MONGODB_URI;

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb Connection Success!");
});

const hotelRoute = require('./routes/hotel_route');

app.get('/', (req, res) => {
  res.send('Hotel Management Backend Server');
});

app.use('/hotel', hotelRoute);

app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});