import React from "react";
import {
    Facebook,
    Instagram,
    Github,
    Twitter,
} from "lucide-react"; // Lucide icons

const Footer = () => {
    return (
        <footer className="bg-[#0b0625] text-white px-6 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left: Brand Info */}
                <div>
                    <h2 className="text-3xl font-bold text-orange-400 mb-4">EduVerse</h2>
                    <p className="text-gray-300 mb-4">
                        Empowering students with performance insights, doubt resolution,
                        and a positive learning environment through technology.
                    </p>
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} EduVerse. All rights reserved.
                    </p>
                </div>

                {/* Middle: Quick Links + Social Icons */}
                <div>
                    <h3 className="text-xl font-semibold text-orange-300 mb-4">Quick Links</h3>
                    <ul className="space-y-2 mb-6">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About</a></li>
                        <li><a href="#" className="hover:underline">Features</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                    <div className="flex space-x-4">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Instagram className="w-5 h-5 hover:text-orange-400" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Facebook className="w-5 h-5 hover:text-orange-400" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Github className="w-5 h-5 hover:text-orange-400" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Twitter className="w-5 h-5 hover:text-orange-400" />
                        </a>
                    </div>
                </div>

                {/* Right: Feedback Form */}
                <div>
                    <h3 className="text-xl font-semibold text-orange-300 mb-4">Send Feedback</h3>
                    <form className="bg-white rounded-lg p-6 shadow-md space-y-4 text-black">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="3"
                            className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-md transition duration-200"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;