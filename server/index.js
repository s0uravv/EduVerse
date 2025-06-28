
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const UserModel = require("./Models/Users");
const QotdModel = require("./Models/Qotd");
const AnswerModel = require("./Models/Answer");

const app = express();
const SECRET_KEY = "saurabh88899@";

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
);

mongoose.connect(
    "mongodb+srv://The_Sourav_Pandey:saurabh88899%40@cluster0.zqrrxlw.mongodb.net/EduVerse?retryWrites=true&w=majority"
);

// Register
app.post("/register", async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: "Registration failed" });
    }
});

// Login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1d" });

    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "Lax",
        secure: false
    }).json({
        message: "Login successful",
        role: user.role
    });
});

// Get QOTD
app.get("/qotd", async (req, res) => {
    try {
        const q = await QotdModel.findOne();
        res.json({ question: q?.question || null });
    } catch {
        res.status(500).json({ error: "QOTD fetch failed" });
    }
});

// Set QOTD
app.post("/qotd", async (req, res) => {
    const { question } = req.body;
    if (!question)
        return res.status(400).json({ error: "Question is required" });

    try {
        await QotdModel.deleteMany();
        await AnswerModel.deleteMany();
        const q = await QotdModel.create({ question });
        res.json({ message: "QOTD set", question: q.question });
    } catch {
        res.status(500).json({ error: "Failed to set QOTD" });
    }
});

// Submit answer
app.post("/qotdanswer", async (req, res) => {
    const { answerText } = req.body;
    const token = req.cookies.token;

    if (!answerText) return res.status(400).json({ error: "Answer required" });

    try {
        let userId = null;

        if (token) {
            const decoded = jwt.verify(token, SECRET_KEY);
            userId = decoded.id;
            console.log(token);
        }

        await AnswerModel.create({
            student: userId,
            answerText
        });

        res.json({ message: "Answer submitted" });
    } catch (err) {
        console.error("Answer save error:", err);
        res.status(500).json({ error: "Submission failed" });
    }
});

// Get all answers
app.get("/all-answers", async (req, res) => {
    try {
        const answers = await AnswerModel.find()
            .populate("student", "name email")
            .sort({ submittedAt: -1 });
        res.json(answers);
    } catch {
        res.status(500).json({ error: "Fetch failed" });
    }
});

// Get current user
app.get("/dashboard", async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.status(200).json(null);

        const decoded = jwt.verify(token, SECRET_KEY);
        const user = await UserModel.findById(decoded.id).select("-password");
        res.json(user);
    } catch {
        res.status(500).json({ message: "User info error" });
    }
});

// Logout
app.post("/logout", (req, res) => {
    res.clearCookie("token").json({ message: "Logged out" });
});

app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});
