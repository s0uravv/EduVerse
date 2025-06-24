import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyIcon from "../../assets/react.svg";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <nav className="px-5 sticky top-0 z-10 backdrop-blur background-white/30 border-b border-black/80">
            <div className="max-w-7xl mx-auto  py-3 flex items-center justify-between">
                {/* Logo */}
                <Link to="/">
                    {" "}
                    <div className="flex items-center p-0 m-0 rounded-8xl">
                        <img
                            className="w-10 h-10 block p-0 m-0 rounded-2xl"
                            src="/eduverse-logo.png"
                            alt="My Icon"
                        />
                        <p className="text-2xl font-bold text-black px-2">
                            EduVerse
                        </p>
                    </div>
                </Link>

                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative w-8 h-8 focus:outline-none"
                    >
                        <span
                            className={`absolute h-1 w-8 bg-orange-500 rounded transition-all duration-300 ease-in-out ${
                                isOpen ? "rotate-45 top-3.5" : "top-2"
                            }`}
                        />
                        <span
                            className={`absolute h-1 w-8 bg-orange-500 rounded transition-all duration-300 ease-in-out ${
                                isOpen ? "opacity-0" : "top-4"
                            }`}
                        />
                        <span
                            className={`absolute h-1 w-8 bg-orange-500 rounded transition-all duration-300 ease-in-out ${
                                isOpen ? "-rotate-45 top-3.5" : "top-6"
                            }`}
                        />
                    </button>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 font-medium">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4">
                    <ul className="space-y-4 text-base font-medium">
                        <li>
                            <a href="#" onClick={() => setIsOpen(false)}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => setIsOpen(false)}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => setIsOpen(false)}>
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => setIsOpen(false)}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
