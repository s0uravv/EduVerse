import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";

// Import assets (image + video)
import img1 from "../../assets/Dutta.jpg";
import img2 from "../../assets/Ghosh.jpg";
import img3 from "../../assets/Swajit.jpg";
import img4 from "../../assets/bablu.jpg";
import img5 from "../../assets/project.jpg";
//import video1 from "../../assets/sample.mp4";

// Gallery data
const galleryItems = [
    { type: "image", src: img1, alt: "Science Project 1" },
    { type: "image", src: img2, alt: "Science Project 2" },
   // { type: "video", src: video1, alt: "Video Project" },
    { type: "image", src: img3, alt: "Science Project 3" },
    { type: "image", src: img4, alt: "Science Project 4" },
    { type: "image", src: img5, alt: "Science Project 5" }
];

const GallerySection = () => {
    const [current, setCurrent] = useState(0);
    const [fullscreenItem, setFullscreenItem] = useState(null);

    const prevSlide = () => {
        setCurrent(prev => (prev === 0 ? galleryItems.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent(prev => (prev === galleryItems.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="relative bg-gradient-to-br from-[#0b0625] via-[#120a3a] to-[#1f0e55] text-white py-16 px-6 overflow-hidden">
            {/* Background animation */}
            <div className="absolute inset-0">
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-500 opacity-30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600 opacity-30 rounded-full blur-3xl animate-pulse" />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative text-3xl md:text-4xl font-bold text-center mb-10"
            >
                📸 Gallery
            </motion.h2>

            {/* Carousel */}
            <div className="relative max-w-4xl mx-auto flex items-center justify-center">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className="w-full rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => setFullscreenItem(galleryItems[current])}
                >
                    {galleryItems[current].type === "image" ? (
                        <img
                            src={galleryItems[current].src}
                            alt={galleryItems[current].alt}
                            className="w-full h-96 object-cover"
                        />
                    ) : (
                        <div className="relative w-full h-96">
                            <video
                                src={galleryItems[current].src}
                                className="w-full h-full object-cover"
                                muted
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Play className="w-16 h-16 text-white bg-black/50 rounded-full p-2" />
                            </div>
                        </div>
                    )}
                </motion.div>

                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute right-4 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Fullscreen Modal */}
            <AnimatePresence>
                {fullscreenItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 flex items-center justify-center z-[200] p-6"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setFullscreenItem(null)}
                            className="absolute top-6 right-6 bg-red-500 hover:bg-red-700 text-white p-3 rounded-full shadow-lg"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Content */}
                        <div className="max-w-5xl w-full">
                            {fullscreenItem.type === "image" ? (
                                <img
                                    src={fullscreenItem.src}
                                    alt={fullscreenItem.alt}
                                    className="w-full h-auto rounded-xl shadow-2xl"
                                />
                            ) : (
                                <video
                                    src={fullscreenItem.src}
                                    controls
                                    autoPlay
                                    className="w-full h-auto rounded-xl shadow-2xl"
                                />
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default GallerySection;
