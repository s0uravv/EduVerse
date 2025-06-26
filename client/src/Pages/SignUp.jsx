import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const [form, setForm] = useState({
        name: "",
        clas: "",
        role: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const navigate = useNavigate();

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSignup = async e => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const { name, clas, role, email, password } = form;

        try {
            const response = await axios.post(
                "http://localhost:3001/register",
                {
                    name,
                    clas,
                    role,
                    email,
                    password
                }
            );
            console.log(response);
                navigate("/login");
        } catch (err) {
            console.log(err);
            alert("Registration failed");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center px-4 bg-orange-100/30">
            <div className="bg-[#0e0e2e] w-full max-w-md sm:max-w-lg md:max-w-xl p-8 rounded-2xl shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-400 pb-6">
                    Create an Account
                </h2>
                <form onSubmit={handleSignup} className="flex flex-col gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-200 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Sourav Pandey"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-200 mb-1">
                            Class
                        </label>
                        <select
                            name="clas"
                            value={form.clas}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-grey-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            <option value="">Select Class</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-200 mb-1">
                            Role
                        </label>
                        <select
                            name="role"
                            value={form.role}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-grey-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            <option value="">Select Role</option>
                            <option value="Student">Student</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-200 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="souravpandey@gmail.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-200 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            required
                            value={form.password}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="••••••••"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-200 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            required
                            value={form.confirmPassword}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-fit bg-orange-500 text-white px-8 py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-200"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className="text-sm text-center font-medium text-gray-200 mt-6">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-orange-400 font-bold hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
