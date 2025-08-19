import React, { useState } from "react";
import { Link } from "react-router-dom";
import FeatureSection from "./FeatureSection";
import TeacherSection from "./Teacher";
import Footer from "../Footer/Footer";
import ProjectSection from "./Project";
import Navbar from "../Navbar/Navbar";

const HeroSection = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="bg-white relative">
            <Navbar />
            <section className="relative w-full px-4 py-8 overflow-hidden">
                <div className="max-w-6xl mx-auto relative">
                    <img
                        src="/Hero.png"
                        alt="Hero Section"
                        className={`w-full md:h-[400px] object-cover rounded-3xl transition-all duration-500 ${
                            expanded ? "blur-sm brightness-50" : ""
                        }`}
                    />
                    <div
                        className={`absolute left-1/2 transform -translate-x-1/2 text-center w-full max-w-3xl px-4 transition-all duration-500 
                        ${expanded ? "bottom-1/4" : "bottom-8"}`}
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                            Science Exhibition
                        </h1>
                        <p className="text-sm md:text-2xl font-semibold text-white drop-shadow-sm">
                            DAV PUBLIC SCHOOL GIDI A
                        </p>
                        <p className="text-sm font-bold md:text-lg text-white drop-shadow-lg">
                            2025-26
                        </p>
                        <p className="p-4 text-sm md:text-lg text-white drop-shadow-md">
                            Innovations of students for better Tommorow.
                        </p>
                        {expanded && (
                            <div className="mt-4 p-4 rounded-lg text-white text-sm md:text-base text-justify">
                                This exhibition showcases groundbreaking ideas
                                from our talented students, ranging from
                                technology and AI to eco-friendly innovations.
                                Their creativity and hard work reflect the
                                spirit of building a brighter future together.
                            </div>
                        )}
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="md:mt-4 mt-6 inline-block px-5 py-2 md:px-6 md:py-3 bg-orange-500 text-white rounded-xl
                             hover:bg-orange-700 shadow-lg text-sm md:text-base"
                        >
                            {expanded ? "Know Less" : "Know More"}
                        </button>
                    </div>
                </div>
            </section>
            <div className="max-w-6xl mx-auto">
                <FeatureSection />
            </div>
            <div className="max-w-6xl mx-auto">
                <ProjectSection />
            </div>
            <div className="max-w-6xl mx-auto">
                <TeacherSection />
            </div>
            <div className="max-w-6xl mx-auto">
                <Footer />
            </div>
        </div>
    );
};

export default HeroSection;
