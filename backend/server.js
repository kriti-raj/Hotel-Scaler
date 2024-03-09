const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8070;

app.use(cors());

app.use(bodyParser.json());

const URL = process.env.MONGODB_URI;

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb Connection Success!");
});

const hotelRoute = require('./routes/hotel_route');

app.use('/hotel', hotelRoute);

app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});
