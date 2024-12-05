const express = require('express');
const { createMenu, getAllmenuitems,updateMenu,deleteMenu } = require('../controllers/menuController');

const router = express.Router();

// Create a new restaurant
router.post('/itemsadd', createMenu);

// Get all restaurants
router.get('/menuitems', getAllmenuitems);

router.put('/:id',updateMenu);

router.delete('/:id',deleteMenu)

module.exports = router;
