import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async e => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:3001/login",
                { email, password },
                { withCredentials: true }
            );

            if (response.data.message === "Login successful") {
                navigate("/categories");
            } else {
                alert("Invalid credentials");
            }
        } catch (err) {
            alert("Login failed");
            console.log(err);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Login to Your Account
                </h2>
                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            required
                            onChange={e => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@gmail.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            required
                            onChange={e => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-center text-gray-500 mt-4">
                    Don’t have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-blue-600 hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
