const express = require('express');
const { createRestaurant, getAllRestaurants } = require('../controllers/restaurantController');

const router = express.Router();

// Create a new restaurant
router.post('/add', createRestaurant);

// Get all restaurants
router.get('/restaurants', getAllRestaurants);

module.exports = router;
