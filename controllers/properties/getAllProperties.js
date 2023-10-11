const Property = require("../../models/property.model");

const getAllProperties = async(req,res)=>{
    try {
        // Retrieve a list of all available properties
        const properties = await Property.find({ available: true });
        res.render("properties/propertyList",{properties:properties, isAuthenticated:req.isAuthenticated()})
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching properties' });
    }
}

module.exports = getAllProperties;