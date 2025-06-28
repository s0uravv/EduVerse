const mongoose = require("mongoose");

const QotdSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Qotd", QotdSchema);