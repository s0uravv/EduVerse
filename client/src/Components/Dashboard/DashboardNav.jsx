import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserCircle, Flame, BadgeCheck } from "lucide-react";

function DashboardNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="px-5 sticky top-0 z-20 bg-white/30 backdrop-blur-md border-b border-black/70">
                <div className="max-w-7xl mx-auto py-3 flex items-center justify-between">
                    {/* Hamburger Menu (Mobile only) */}
                    <div className="px-1">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="relative w-8 h-8"
                        >
                            <span
                                className={`absolute h-1 w-8 bg-orange-500 rounded transition-all duration-300 ${
                                    isMenuOpen ? "rotate-45 top-3.5" : "top-2"
                                }`}
                            />
                            <span
                                className={`absolute h-1 w-8 bg-orange-500 rounded transition-all duration-300 ${
                                    isMenuOpen ? "opacity-0" : "top-4"
                                }`}
                            />
                            <span
                                className={`absolute h-1 w-8 bg-orange-500 rounded transition-all duration-300 ${
                                    isMenuOpen ? "-rotate-45 top-3.5" : "top-6"
                                }`}
                            />
                        </button>
                    </div>

                    <Link to="/" className="flex items-center space-x-2">
                        <img
                            className="w-8 h-8 rounded-2xl"
                            src="/eduverse-logo.png"
                            alt="Logo"
                        />
                        <p className="text-2xl font-bold text-orange-500">
                            EduVerse
                        </p>
                    </Link>

                    {/* Right Side Stats + Profile */}
                    <div className="flex items-center space-x-6 text-[#040421] font-medium">
                        {/* Streak button */}
                        <div className="flex items-center space-x-1">
                            <Flame className="w-5 h-5 text-orange-500" />
                            <span className="hidden md:flex">5 days</span>
                        </div>

                        {/* Points button*/}
                        <div className="flex items-center space-x-1">
                            <BadgeCheck className="w-5 h-5 text-orange-500" />
                            <span className="hidden md:flex">240 pts</span>
                        </div>

                        {/* Profile button*/}
                        <Link
                            to="/profile"
                            className="hidden md:flex text-orange-500 hover:text-orange-600"
                        >
                            <UserCircle className="w-8 h-8" />
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Fullscreen Menu */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-10 bg-white/30 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 text-2xl font-bold"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <Link to="/">Dashboard</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/doubt">Ask Doubt</Link>
                    <Link to="/aichat">AI Chat</Link>

                    <Link to="/logout">Logout</Link>
                </div>
            )}
        </>
    );
}

export default DashboardNav;
