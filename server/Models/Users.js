const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String, // "student" or "teacher"
});

module.exports = mongoose.model("Users", UserSchema);