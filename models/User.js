const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(value) {
        // Regex for validating email format
        return /\S+@\S+\.\S+/.test(value);
      },
      message: 'Invalid email address'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(value) {
        // Regex to validate phone number format (simple check for length and digits)
        return /^[0-9]{10}$/.test(value);
      },
      message: 'Invalid phone number'
    }
  },
  address: {
    type: String,
    required: true
  },
  role: {
    type: String,
    require: true
  }
},
 { timestamps: true });

// Create the model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
