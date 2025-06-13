import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyIcon from "../../assets/react.svg";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <nav className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link to="/">
                    {" "}
                    <div className="p-0 m-0 rounded-8xl">
                        <img
                            className="w-32 h-10 block p-0 m-0 rounded-2xl"
                            src={MyIcon}
                            alt="My Icon"
                        />
                    </div>{" "}
                </Link>

                {/* Hamburger - mobile only */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="space-y-1"
                    >
                        <div className="w-6 h-0.5 bg-white"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-4 flex-1 justify-center">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="px-3 py-1 text-black rounded w-60"
                    />
                    <Link to="/categories" className="hover:text-gray-300">
                        Category
                    </Link>
                    <Link to="/wishlist" className="hover:text-gray-300">
                        Wishlist
                    </Link>
                    <Link to="/cart" className="hover:text-gray-300">
                        Cart
                    </Link>
                    <Link to="/orders" className="hover:text-gray-300">
                        Orders
                    </Link>
                    <Link to="/login" className="hover:text-gray-300">
                        Login
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="w-full px-3 py-2 text-black rounded"
                    />
                    <Link
                        to="/categories"
                        className="block hover:text-gray-300"
                    >
                        Category
                    </Link>
                    <Link to="/wishlist" className="block hover:text-gray-300">
                        Wishlist
                    </Link>
                    <Link to="/cart" className="block hover:text-gray-300">
                        Cart
                    </Link>
                    <Link to="/orders" className="block hover:text-gray-300">
                        Orders
                    </Link>
                    <Link to="/login" className="block hover:text-gray-300">
                        Login
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
