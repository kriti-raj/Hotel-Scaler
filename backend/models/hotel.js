const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    roomNumber: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true
    },
    // days:{
    //     type : Number,
    // },
    roomType: {
        type: String,
        required: true,
    },
    hours: {
        type: Number,
        required: true,
    }

});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;