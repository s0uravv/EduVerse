const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    answerText: String,
    isCorrect: { type: Boolean, default: null },
    submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Answer", AnswerSchema);