const Property = require("../../models/property.model");

const deletedPropertyById = async(req,res)=>{
    try {
        const bookingId = req.params.id;

        // Find the property by its ID and remove it
        const deletedProperty = await Property.findByIdAndRemove(bookingId);

        if (!deletedProperty) {
            return res.status(404).json({ error: 'Property not found' });
        }

        res.status(204).end(); // Respond with a 204 status (No Content) for a successful deletion
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the property' });
    }
}
module.exports = deletedPropertyById;