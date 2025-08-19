import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="px-5 sticky top-0 z-10 bg-white/30 backdrop-blur-lg border-b border-black/10">
            <div className="max-w-7xl mx-auto py-3 flex items-center justify-between">
                <Link to="/">
                    <div className="flex items-center">
                        <img
                            className="w-10 h-10 rounded-2xl"
                            src="/eduverse-logo.png"
                            alt="Logo"
                        />
                        <p className="text-xl font-bold text-orange-500 px-2">
                            EduVision
                        </p>
                    </div>
                </Link>

                <div className="md:hidden px-1">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative w-8 h-8"
                    >
                        <span
                            className={`absolute h-1 w-8 bg-orange-500 rounded transition-all duration-300 ${
                                isOpen ? "rotate-45 top-3.5" : "top-2"
                            }`}
                        />
                        <span
                            className={`absolute h-1 w-8 bg-orange-500 rounded transition-all duration-300 ${
                                isOpen ? "opacity-0" : "top-4"
                            }`}
                        />
                        <span
                            className={`absolute h-1 w-8 bg-orange-500 rounded transition-all duration-300 ${
                                isOpen ? "-rotate-45 top-3.5" : "top-6"
                            }`}
                        />
                    </button>
                </div>

                <ul className="hidden md:flex space-x-6 font-medium">
                    <li>
                        <Link to="#">Home</Link>
                    </li>
                    <li>
                        <Link to="#">About Exhibition</Link>
                    </li>
                    <li>
                        <Link to="#">Projects</Link>
                    </li>
                    <li>
                        <Link to="#">Contact</Link>
                    </li>
                    <li className="bg-[#040421] text-white rounded-2xl px-2">
                        <Link to="/login">Developer Contacts</Link>
                    </li>
                </ul>
            </div>

            {isOpen && (
                <div className="md:hidden pb-4">
                    <ul className="px-6 space-y-4 text-base font-medium">
                        <li>
                            <Link to="#" onClick={() => setIsOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="#" onClick={() => setIsOpen(false)}>
                                About Exhibition
                            </Link>
                        </li>
                        <li>
                            <Link to="#" onClick={() => setIsOpen(false)}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="#" onClick={() => setIsOpen(false)}>
                                Contact
                            </Link>
                        </li>
                        <li className="w-fit bg-[#040421] text-white rounded-2xl px-3 py-1 hover:bg-orange-500">
                            <Link to="/login">Contact Developers</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
