const Property = require("../../models/property.model");

const createProperty = async (req, res) => {
    try {
        const {
            title,
            description,
            type,
            lane,
            town,
            city,
            price,
            bedrooms,
            bathrooms,
            size,
            owner, // This should be the ObjectId of the property owner (a user in your database).
            images,
            pincode
        } = req.body;
        // Create a new Property instance
        const property = new Property({
            title,
            description,
            type,
            lane,
            town,
            city,
            price,
            bedrooms,
            bathrooms,
            size,
            owner, // Assign the ObjectId of the property owner.
            images,
            pincode
        });
        await property.save();

        console.log('Property created successfully');
        // Redirect to the propertydetails page with the newly created property's ID
        res.redirect(`/properties/${property._id}`);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the property' });
    }
}

module.exports = createProperty;