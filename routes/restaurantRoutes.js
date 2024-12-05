const express = require('express');
const { createRestaurant, getAllRestaurants,updateRestaurant,deleteRestaurant } = require('../controllers/restaurantController');

const router = express.Router();

// Create a new restaurant
router.post('/add', createRestaurant);

// Get all restaurants
router.get('/restaurants', getAllRestaurants);

router.put('/restaurants/:id', updateRestaurant); 

router.delete('/restaurant/delete/:id',deleteRestaurant)

module.exports = router;
