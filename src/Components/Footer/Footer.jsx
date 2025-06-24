import React from "react";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#040421] text-white py-10 px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4">EduVerse</h2>
                    <p className="text-sm text-gray-300">
                        A digital platform for schools promoting positivity,
                        productivity, and smart learning.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a
                                href="/study-material"
                                className="hover:underline"
                            >
                                Study Material
                            </a>
                        </li>
                        <li>
                            <a href="/performance" className="hover:underline">
                                Performance Tracker
                            </a>
                        </li>
                        <li>
                            <a href="/doubt-corner" className="hover:underline">
                                Doubt Corner
                            </a>
                        </li>
                        <li>
                            <a href="/ai-bot" className="hover:underline">
                                AI Chat Bot
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">
                        Connect With Us
                    </h3>
                    <p className="text-sm text-gray-300 mb-3">eduverse.in</p>
                    <div className="flex space-x-4">
                        <a href="#">
                            <Facebook className="h-5 w-5 hover:text-blue-400" />
                        </a>
                        <a href="#">
                            <Instagram className="h-5 w-5 hover:text-pink-400" />
                        </a>
                        <a href="#">
                            <Linkedin className="h-5 w-5 hover:text-blue-300" />
                        </a>
                        <a href="#">
                            <Mail className="h-5 w-5 hover:text-yellow-400" />
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Feedback</h3>
                    <form className="flex flex-col space-y-3">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="px-3 py-2 rounded bg-white text-black text-sm"
                        />
                        <textarea
                            placeholder="Your Feedback"
                            className="px-3 py-2 rounded bg-white text-black text-sm"
                            rows={3}
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            <div className="text-center text-sm text-gray-400 mt-10">
                © {new Date().getFullYear()} EduVerse — All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
