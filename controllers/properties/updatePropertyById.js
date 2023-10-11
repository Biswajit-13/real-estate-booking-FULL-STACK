const Property = require("../../models/property.model");

const updatePropertById = async(req,res)=>{
    try {
        const propertyId = req.params.id;
        const updateData = req.body;

        // Find the property by its ID and update its details
        const updatedProperty = await Property.findByIdAndUpdate(propertyId, updateData, { new: true });

        if (!updatedProperty) {
            return res.status(404).json({ error: 'Property not found' });
        }

        res.status(200).json(updatedProperty);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the property' });
    }
}

module.exports = updatePropertById;