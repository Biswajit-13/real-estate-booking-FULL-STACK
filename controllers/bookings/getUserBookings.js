const Booking = require('../../models/booking.model.js');

getUserBookings = async (req, res) => {
  try {
    const userId = req.params.userId; // Assuming you pass the user's ID as a route parameter

    // Find all bookings associated with the user
    const bookings = await Booking.find({ user: userId });
    
    // Render an HTML page with the bookings data
    res.render("bookings/userBookings.ejs", { bookings: bookings });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching user bookings' });
    return; // Exit the function after sending the error response
  }
};

module.exports = getUserBookings;
