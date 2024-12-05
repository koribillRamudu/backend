const mongoose = require('mongoose');
const Restaurant = require('../models/Restaurant');

// Create a new restaurant
const createRestaurant = async (req, res) => {
  const { id, title, image, location, rating } = req.body;

  try {
    const newRestaurant = new Restaurant({
      id,
      title,
      image,
      location,
      rating,
    });

    await newRestaurant.save();
    res.status(201).json({ message: 'Restaurant added successfully', restaurant: newRestaurant });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all restaurants
const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a restaurant
const updateRestaurant = async (req, res) => {
  const { id } = req.params;
  const { title, image, location, rating } = req.body;

  try {
    // Find the restaurant by ID and update it
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      id,
      { title, image, location, rating },
      { new: true } // Return the updated document
    );

    if (!updatedRestaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    res.status(200).json({ message: 'Restaurant updated successfully', restaurant: updatedRestaurant });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a restaurant

const deleteRestaurant = async (req, res) => {
  const { id } = req.params;

  try {
    const objectId = new mongoose.Types.ObjectId(id); // Use 'new'

    const deletedRestaurant = await Restaurant.findByIdAndDelete(objectId);

    if (!deletedRestaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    res.status(200).json({ message: 'Restaurant deleted successfully' });
  } catch (error) {
    console.error(error);

    if (error.kind === 'ObjectId') {
      return res.status(400).json({ message: 'Invalid restaurant ID' });
    }

    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = {
  createRestaurant,
  getAllRestaurants,
  updateRestaurant,
  deleteRestaurant, // Export the delete function
};
