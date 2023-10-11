const Booking = require("../../models/booking.model");

const updateBookingById = async(req,res)=>{
    try {
        const propertyId = req.params.id;
        const updateData = req.body;

        // Find the property by its ID and update its details
        const updatedBooking = await Booking.findByIdAndUpdate(propertyId, updateData, { new: true });

        if (!updatedBooking) {
            return res.status(404).json({ error: 'Property not found' });
        }

        res.status(200).json(updatedBooking);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the property' });
    }
}

module.exports = updateBookingById;