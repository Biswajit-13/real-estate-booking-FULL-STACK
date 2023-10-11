const Property = require("../../models/property.model");

const getPropertyById = async(req,res)=>{
    try {
        const propertyId = req.params.id;
        // Find the property by its ID
        const property = await Property.findById(propertyId);

        if (!property) {
            return res.status(404).json({ error: 'Property not found' });
        }
         res.render("properties/propertyDetails",{property:property,isAuthenticated:req.isAuthenticated()})
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the property' });
    }
}

module.exports = getPropertyById;