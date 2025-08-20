import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import FeatureSection from "./FeatureSection";
import TeacherSection from "./Teacher";
import GallerySection from "./Gallery";
import Footer from "../Footer/Footer";
import ProjectSection from "./Project";

const HeroSection = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="bg-white relative">
            <Navbar />
            <section className="relative w-full px-4 py-8 overflow-hidden">
                <div className="max-w-6xl mx-auto relative">
                    {/* Hero Image */}
                    <motion.img
                        src="/Hero.png"
                        alt="Hero Section"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className={`w-full md:h-[400px] object-cover rounded-3xl transition-all duration-500 ${
                            expanded ? "blur-md brightness-50" : ""
                        }`}
                    />

                    {/* Dark overlay when expanded */}
                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 bg-black rounded-3xl"
                            />
                        )}
                    </AnimatePresence>

                    {/* Hero Content */}
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
                            Innovations of students for better Tomorrow.
                        </p>

                        {/* Animated Expanded Content with smooth collapse */}
                        <AnimatePresence>
                            {expanded && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeInOut"
                                    }}
                                    className="overflow-hidden"
                                >
                                    <div className="mt-4 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-orange-400/40 shadow-lg text-white text-sm md:text-base text-justify">
                                        This exhibition showcases{" "}
                                        <span className="text-orange-300 font-semibold">
                                            groundbreaking ideas
                                        </span>{" "}
                                        from our talented students, ranging from{" "}
                                        <span className="text-yellow-300 font-semibold">
                                            technology and AI
                                        </span>{" "}
                                        to{" "}
                                        <span className="text-green-300 font-semibold">
                                            eco-friendly innovations
                                        </span>
                                        . Their creativity and hard work reflect
                                        the spirit of building a brighter future
                                        together.
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setExpanded(!expanded)}
                            className="md:mt-4 mt-6 inline-block px-5 py-2 md:px-6 md:py-3 bg-orange-500 text-white rounded-xl
                             hover:bg-orange-700 shadow-lg text-sm md:text-base transition"
                        >
                            {expanded ? "Know Less" : "Know More"}
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* Sections */}
            <div className="max-w-6xl mx-auto">
                <FeatureSection />
            </div>
            <div className="max-w-6xl mx-auto">
                <ProjectSection />
            </div>
            <div className="max-w-6xl mx-auto">
               <GallerySection />
              
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
