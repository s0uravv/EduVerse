import React from "react";
import { Link } from "react-router-dom";
import FeatureSection from "./FeatureSection";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const HeroSection = () => (
   
    <div className="bg-white">
      <Navbar />
        <section className="relative w-full px-4 py-8 overflow-hidden">
            <div className="max-w-6xl mx-auto flex justify-center items-center">
                <img
                    src="/Hero.png"
                    alt="Hero Section"
                    className="w-full md:h-[400px] object-cover rounded-3xl"
                />
            </div>
            <div
                className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                text-center w-full max-w-3xl px-4"
            >
                <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                    EduVerse
                </h1>
                <p className="p-4 text-sm md:text-lg text-white drop-shadow-md">
                    A digital platform for schools promoting positivity and
                    productivity.
                </p>
                <Link
                    to="/"
                    className="md:mt-0 mt-6 inline-block px-5 py-2 md:px-6 md:py-3 bg-orange-500 text-white rounded-xl
                         hover:bg-orange-700 shadow-lg text-sm md:text-base"
                >
                    Get Started
                </Link>
            </div>
        </section>
        <div className="max-w-6xl mx-auto">
            <FeatureSection />
        </div>
        <div className="max-w-6xl mx-auto">
            <Footer />
        </div>
    </div>
);

export default HeroSection;
