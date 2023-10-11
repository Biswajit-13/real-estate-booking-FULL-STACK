// controllers/bookingController.js
const Booking = require('../../models/booking.model');

const createBooking = async (req, res) => {
  try {
    // Extract booking data from the request body
    const {
      property,
      user,
      checkInDate,
      checkOutDate,
      guests,
      totalPrice,
      status,
    } = req.body;

    // Create a new Booking instance
    const booking = new Booking({
      property,
      user,
      checkInDate,
      checkOutDate,
      guests,
      totalPrice,
      status,
    });

    // Save the new booking to the database
    await booking.save();

    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the booking' });
  }
};

module.exports = createBooking;