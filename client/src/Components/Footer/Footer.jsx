import React, { useState } from "react";
import sourav from "../../assets/so.jpg";
import {
  Facebook,
  Instagram,
  Github,
  Twitter,
  Code,
  Globe,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [showBox, setShowBox] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0b0625] via-[#120a3a] to-[#1f0e55] text-white px-6 py-16">
      {/* Background animated blobs */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-500 opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600 opacity-30 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Top Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-5 gap-10 max-w-6xl mx-auto text-left z-10">
        
        {/* Eduvision (first section, left aligned) */}
        <div>
          <h2 className="text-xl font-bold text-orange-400">Eduvision</h2>
          <p className="mt-2 text-sm text-gray-300">
            Our vision is to empower students with innovation,
            creativity, and knowledge to shape a better tomorrow.
          </p>
        </div>

        {/* School Info */}
        <div>
          <h2 className="text-xl font-bold text-orange-400">DAV Public School</h2>
          <p className="mt-2 text-gray-300 text-sm">
            Gidi A, Jharkhand <br /> Science Exhibition 2025-26
          </p>
          <p className="mt-2 text-sm text-gray-400">
            🌐{" "}
            <a
              href="https://davgidi.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              www.davgidi.org
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-orange-400">Quick Links</h2>
          <ul className="mt-2 space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-orange-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Projects</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Teachers</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-orange-400">Contact</h2>
          <p className="mt-2 text-sm text-gray-300">
            📍 DAV Public School, Gidi A <br />
            ✉️ info@davschool.com <br />
            ☎️ +91 98765 43210
          </p>
        </div>

        {/* Feedback Form */}
        <div>
          <h2 className="text-xl font-bold text-orange-400">Feedback</h2>
          <form className="mt-3 space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded-lg text-black text-sm focus:outline-none"
            />
            <textarea
              placeholder="Your Feedback"
              rows="3"
              className="w-full p-2 rounded-lg text-black text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-2 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section - Developer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative mt-10 border-t border-gray-700 pt-8 text-center z-10"
      >
        {/* Profile Photo */}
        <motion.img
          whileHover={{ scale: 1.1, rotate: 5 }}
          src={sourav}
          alt="Sourav Pandey"
          className="w-24 h-24 rounded-full mx-auto border-4 border-orange-400 shadow-lg mb-4"
        />

        <p className="text-lg font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent animate-pulse">
          ⚡ Developed by Sourav Pandey
        </p>
        <p className="text-sm text-gray-300 mt-1">Class 12 Science</p>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mt-6">
          {[
            { icon: <Github className="w-6 h-6" />, link: "https://github.com/s0uravv" },
            { icon: <Code className="w-6 h-6" />, link: "#" },
            { icon: <Globe className="w-6 h-6" />, link: "https://leetcode.com/u/the-sourav-pandey/" },
            { icon: <Facebook className="w-6 h-6" />, link: "https://www.facebook.com/share/16nZjVeDCb/" },
            { icon: <Twitter className="w-6 h-6" />, link: "https://x.com/Sourav_404?t=ln6c2qAwVzjVOuP2fiNHzw&s=09" },
            { icon: <Instagram className="w-6 h-6" />, link: "#" },
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

        {/* Know More Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowBox(true)}
          className="mt-8 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition"
        >
          🌟 Know More
        </motion.button>

        {/* Popup Box */}
        <AnimatePresence>
          {showBox && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white/10 border border-orange-400 backdrop-blur-lg rounded-2xl p-8 max-w-lg w-full shadow-2xl flex flex-col md:flex-row items-center gap-6"
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowBox(false)}
                  className="absolute top-3 right-4 text-orange-300 hover:text-red-500 text-xl"
                >
                  ✖
                </button>

                {/* Photo */}
                <img
                  src={sourav}
                  alt="Sourav Pandey"
                  className="w-28 h-28 rounded-full border-4 border-orange-400 shadow-lg"
                />

                {/* Details */}
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-2">
                    Sourav Pandey
                  </h2>
                  <p className="text-sm text-gray-300 mb-4">
                    A passionate{" "}
                    <span className="text-orange-300 font-semibold">
                      Class 12 Science
                    </span>{" "}
                    student 🚀 Exploring technology, coding & innovations for a brighter future.
                  </p>
                  <p className="mb-4 text-lg text-orange-400">
                    📧 Email:{" "}
                    <a
                      href="mailto:souravpandey949@gmail.com"
                      className="hover:underline"
                    >
                      souravpandey949@gmail.com
                    </a>
                  </p>

                  {/* Links */}
                  <div className="flex gap-6 flex-wrap mb-4">
                    <a href="https://github.com/s0uravv" target="_blank" className="text-gray-200 hover:text-orange-400">GitHub</a>
                    <a href="https://leetcode.com/u/the-sourav-pandey/" target="_blank" className="text-gray-200 hover:text-orange-400">LeetCode</a>
                    <a href="https://x.com/Sourav_404?t=ln6c2qAwVzjVOuP2fiNHzw&s=09" target="_blank" className="text-gray-200 hover:text-orange-400">Twitter</a>
                    <a href="#" target="_blank" className="text-gray-200 hover:text-orange-400">Projects</a>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-orange-500 to-pink-600 px-4 py-2 rounded-lg text-white font-semibold shadow-md"
                  >
                    🚀 Keep Innovating!
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Copyright */}
        <p className="mt-8 text-xs text-gray-400">
          © 2025 Eduvision | DAV Public School Gidi A. All Rights Reserved.
        </p>

        {/* Designed By Line (sabse neeche) */}
        <p className="mt-2 text-sm text-gray-400">
          Designed & Developed by{" "}
          <span className="text-orange-300 font-semibold">Sourav Pandey</span>
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;