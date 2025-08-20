import React from "react";
import { motion } from "framer-motion";
import pinataImg from "../../assets/Hi.jpg";

const textVariants = {
    hidden: { opacity: 0, y: 40, rotate: -2 },
    visible: i => ({
        opacity: 1,
        y: 0,
        rotate: i % 2 === 0 ? 2 : -2,
        transition: { duration: 0.8, delay: i * 0.3, ease: "easeOut" }
    })
};

const FeatureSection = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 bg-gradient-to-r from-[#0b0625] via-[#120a3a] to-[#1f0e55] rounded-3xl shadow-2xl overflow-hidden relative">
            {/* Background animation blobs */}
            <div className="absolute -top-16 -left-16 w-72 h-72 bg-orange-500/30 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-600/30 blur-3xl rounded-full animate-pulse"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
                {/* Left Side - Animated Texts */}
                <div className="flex flex-col space-y-10">
                    {[
                        <p className="text-3xl md:text-4xl font-extrabold text-orange-500 bg-black/40 px-4 py-2 rounded-lg shadow-lg inline-block w-fit">
                            About the Exhibition
                        </p>,
                        <p className="text-lg md:text-xl text-white bg-orange-100/10 px-4 py-4 rounded-xl shadow-inner">
                            The Annual Science Exhibition 2025–26 of{" "}
                            <span className="font-semibold text-yellow-300">
                                DAV Public School, Giddi (A)
                            </span>{" "}
                            is being organized under the theme{" "}
                            <span className="font-bold text-yellow-300">
                                “Science and Technology: Innovations for a
                                Better Future.”
                            </span>{" "}
                            This exhibition serves as a vibrant platform where
                            students showcase their creative ideas, research,
                            and innovations.
                        </p>,
                        <p className="text-lg md:text-xl text-white bg-blue-900/10 px-4 py-4 rounded-xl shadow-lg">
                            The central idea is to encourage students to apply
                            scientific concepts in solving real-life problems
                            and explore how modern technology can improve human
                            life and the environment. Projects cover topics such
                            as{" "}
                            <span className="text-yellow-300 font-semibold">
                                Artificial Intelligence, Virtual Science Labs,
                                Smart Irrigation Systems, Face Recognition
                                Attendance, Renewable Energy
                            </span>
                            , and more.
                        </p>,
                        <p className="text-lg md:text-xl text-white bg-orange-100/10 px-4 py-4 rounded-xl shadow-2xl">
                            This exhibition is not just a display of projects,
                            but a celebration of the power of knowledge,
                            creativity, and imagination — inspiring young minds
                            to become the{" "}
                            <span className="text-yellow-300 font-bold">
                                scientists, engineers, and innovators of
                                tomorrow
                            </span>
                            .
                        </p>
                    ].map((content, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {content}
                        </motion.div>
                    ))}
                </div>

                {/* Right Side - Image */}
                <div className="flex justify-center relative group">
                    <div className="overflow-hidden rounded-3xl shadow-2xl transform transition duration-500 group-hover:scale-105">
                        <img
                            src={pinataImg}
                            alt="Science and Technology"
                            className="w-64 sm:w-80 md:w-[450px] lg:w-[600px] object-cover rounded-3xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-30 transition duration-500 rounded-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
