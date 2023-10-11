const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property', // Reference to the property being booked
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the property being booked
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required:true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Cancelled'],
    default: 'Pending',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a Booking model using the schema
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
