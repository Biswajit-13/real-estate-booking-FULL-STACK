const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Apartment', 'House', 'Vacation Rental'],
    required: true,
  },
  lane: {
    type: String,
    required: true,
    trim: true,
  },
  town: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  images: {
    type: [String], // Array of image URLs
  },
  available: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


propertySchema.statics.search = async function (query) {
  return this.find({
    // Define your search criteria here, for example:
    $or: [
      { title: { $regex: query, $options: 'i' } }, // Case-insensitive title search
      { description: { $regex: query, $options: 'i' } },
      { lane: { $regex: query, $options: 'i' } },
      { town: { $regex: query, $options: 'i' } },
      { city: { $regex: query, $options: 'i' } },
      { pincode: { $regex: query, $options: 'i' } },
     // Case-insensitive description search
    ],
  });
};

// Create a Property model using the schema
const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
