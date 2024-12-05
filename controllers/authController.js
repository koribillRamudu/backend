const bcrypt = require('bcryptjs');
const User = require('../models/User');  // Assuming your User model is correctly set up

// Register user function
const registerUser = async (req, res) => {
  const { username, email, password, phoneNumber, address, role } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    const newUser = new User({
      username,
      email,
      password,
      phoneNumber,
      address,
      role,
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error. Unable to register user.' });
  }
};

// Get all user details (Optional, might be for admin use)
const getAllUserDetails = async (req, res) => {
  try {
    const userDetails = await User.find();
    res.status(200).json(userDetails);
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ message: 'Server error. Unable to fetch user details.' });
  }
};

module.exports = { registerUser, getAllUserDetails };
