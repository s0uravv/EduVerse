import React from "react";
import {
    Facebook,
    Instagram,
    Github,
    Twitter,
    Code,
    Globe
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-br from-[#0b0625] via-[#120a3a] to-[#1f0e55] text-white px-6 py-16">
            {/* Background animated gradient blobs */}
            <div className="absolute inset-0">
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-500 opacity-30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600 opacity-30 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left: Brand Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent mb-4 animate-pulse">
                        EduVision
                    </h2>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                        Empowering students with performance insights, doubt
                        resolution, and a positive learning environment through
                        technology.
                    </p>
                </motion.div>

                {/* Middle: Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h3 className="text-xl font-semibold text-orange-300 mb-4">
                        Quick Links
                    </h3>
                    <ul className="space-y-3 text-lg">
                        {["Home", "About", "Features", "Contact"].map(
                            (item, i) => (
                                <li key={i}>
                                    <a
                                        href="#"
                                        className="relative group transition"
                                    >
                                        <span className="group-hover:text-orange-400">
                                            {item}
                                        </span>
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 group-hover:w-full transition-all duration-300" />
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </motion.div>

                {/* Right: Feedback Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h3 className="text-xl font-semibold text-orange-300 mb-4">
                        Send Feedback
                    </h3>
                    <form className="bg-white/10 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-lg space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 border border-gray-600 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 border border-gray-600 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="3"
                            className="w-full px-4 py-2 border border-gray-600 rounded-md bg-transparent text-white resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90 text-white font-bold px-6 py-3 rounded-lg transition duration-200 shadow-md"
                        >
                            🚀 Submit
                        </motion.button>
                    </form>
                </motion.div>
            </div>

            {/* Bottom Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative mt-16 border-t border-gray-700 pt-8 text-center"
            >
                {/* Profile Photo */}
                <motion.img
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    src="/sourav.jpg" // <-- apni photo ka path daalna
                    alt="Sourav Pandey"
                    className="w-24 h-24 rounded-full mx-auto border-4 border-orange-400 shadow-lg mb-4"
                />

                <p className="text-lg font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent animate-pulse">
                    ⚡ Developed by Sourav Pandey
                </p>
                <p className="text-sm text-gray-300 mt-1">Class 12 Science</p>

                {/* Animated Social Links */}
                <div className="flex justify-center gap-8 mt-6">
                    {[
                        { icon: <Github className="w-6 h-6" />, link: "#" },
                        { icon: <Code className="w-6 h-6" />, link: "#" },
                        { icon: <Globe className="w-6 h-6" />, link: "#" },
                        { icon: <Facebook className="w-6 h-6" />, link: "#" },
                        { icon: <Twitter className="w-6 h-6" />, link: "#" },
                        { icon: <Instagram className="w-6 h-6" />, link: "#" }
                    ].map((item, i) => (
                        <motion.a
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            key={i}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-orange-400 transition"
                        >
                            {item.icon}
                        </motion.a>
                    ))}
                </div>

                {/* Designed By Line */}
                <p className="mt-6 text-sm text-gray-400">
                    Designed & Developed by <span className="text-orange-300 font-semibold">Sourav Pandey</span>
                </p>
            </motion.div>
        </footer>
    );
};

export default Footer;