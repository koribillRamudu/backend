const express = require('express');
const { registerUser, getAllUserDetails } = require('../controllers/authController');

const router = express.Router();

// Register route
router.post('/register', registerUser);
router.get('/login',getAllUserDetails)

module.exports = router;
