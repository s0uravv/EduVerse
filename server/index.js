const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const UserModel = require("./Models/Users");

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
    "mongodb+srv://The_Sourav_Pandey:saurabh88899%40@cluster0.zqrrxlw.mongodb.net/EduVerse?retryWrites=true&w=majority&appName=Cluster0"
);

app.post("/register", async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: "Registration failed" });
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1d" });

    res.cookie("token", token).json({ message: "Login successful" });
});

app.get("/categories", (req, res) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Not logged in" });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" });

        res.json({ message: "Welcome", user });
    });
});

app.post("/logout", (req, res) => {
    res.clearCookie("token").json({ message: "Logged out" });
});

app.listen(3001, () => {
    console.log(`🚀 Server running on http://localhost:3001`);
});
