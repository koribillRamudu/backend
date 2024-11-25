const express = require('express');
const { createMenu, getAllmenuitems } = require('../controllers/menuController');

const router = express.Router();

// Create a new restaurant
router.post('/itemsadd', createMenu);

// Get all restaurants
router.get('/menuitems', getAllmenuitems);

module.exports = router;
