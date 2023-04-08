const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    minlength: 1,
    maxlength: 50,
  },
  email: {
    type: String,
    unique: [true, "This email is already in use"],
    validate: [validator.isEmail, "Please enter valid email address"],
    required: [true, "email is required"],
  },
  bio: {
    type: String,
    minlength: 0,
    maxlength: 200,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
