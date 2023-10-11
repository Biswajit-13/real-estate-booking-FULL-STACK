const Booking = require("../../models/booking.model");

const deleteBookingById = async(req,res)=>{
    try {
        const bookingId = req.params.id;

        // Find the property by its ID and remove it
        const deletedBooking = await Booking.findByIdAndRemove(bookingId);

        if (!deletedBooking) {
            return res.status(404).json({ error: 'Booking not found' });
        }

        res.status(204).end(); // Respond with a 204 status (No Content) for a successful deletion
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the Booking' });
    }
}
module.exports = deleteBookingById;