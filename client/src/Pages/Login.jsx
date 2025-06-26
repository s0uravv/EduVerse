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
                navigate("/dashboard");
            } else {
                alert("Invalid credentials");
            }
        } catch (err) {
            alert("Login failed");
            console.log(err);
        }
    };

    return (
        <div className="min-h-screen flex justify-center px-4 pt-20 bg-orange-100/30">
            <div className="bg-[#0e0e2e] h-fit max-w-md sm:max-w-lg md:max-w-xl p-8 rounded-2xl shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-400 pb-6">
                    Login to Your Account
                </h2>
                <form onSubmit={handleLogin} className="flex flex-col gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-200 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            required
                            onChange={e => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="sourav@gmail.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-200 mb-1">
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
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-fit bg-orange-500 text-white px-8 py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-200"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <p className="text-sm text-center font-medium text-gray-200 mt-6">
                    Don’t have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-orange-400 font-bold hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
