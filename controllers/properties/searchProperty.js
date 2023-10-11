// routes/properties.js

const express = require('express');

const Property = require('../../models/property.model');

// Route for property search
const searchProperty = async (req, res) => {
    try {
        const query = req.query.search; // Get the search query from the URL parameter

        // Use the search method of the Property model to find matching properties
        const properties = await Property.search(query);

        // Render the property list page with the filtered properties
        res.render('properties/propertyList', { properties:properties });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred during the search' });
    }
};

module.exports = searchProperty;
