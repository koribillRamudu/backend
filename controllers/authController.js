const User=require('../models/User')
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
  const { username, email, password, phoneNumber, address } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,  // Save hashed password
      phoneNumber,
      address,
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error. Unable to register user.' });
  }
};


// Get all user details
const getAllUserDetails = async (req, res) => {
  try {
    // Fetch all users from the database
    const userDetails = await User.find();
    res.status(200).json(userDetails);
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ message: 'Server error. Unable to fetch user details.' });
  }
};

module.exports = { registerUser, getAllUserDetails };
