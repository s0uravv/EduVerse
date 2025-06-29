const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String // student / teacher
});

module.exports = mongoose.model("User", UserSchema);