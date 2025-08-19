import React from "react";

const FeatureSection = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 bg-gradient-to-r from-purple-50 to-purple-100 rounded-3xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative">
                {/* Left Side - Royal Dramatic Text */}
                <div className="flex flex-col space-y-12 relative">
                    <p className="rotate-6 text-3xl md:text-4xl font-extrabold text-orange-500 bg-[#0b0625] px-4 py-2 rounded-lg shadow-lg">
                        About the Exhibition
                    </p>

                    <p className="-rotate-3 text-lg md:text-xl text-white bg-[#0b0625] px-4 py-4 rounded-xl shadow-inner">
                        The Annual Science Exhibition 2025–26 of{" "}
                        <span className="font-semibold text-yellow-300">
                            DAV Public School, Giddi (A)
                        </span>{" "}
                        is being organized under the theme{" "}
                        <span className="font-bold text-yellow-300">
                            “Science and Technology: Innovations for a Better
                            Future.”
                        </span>{" "}
                        This exhibition serves as a vibrant platform where
                        students showcase their creative ideas, research, and
                        innovations.
                    </p>

                    <p className="rotate-2 text-lg md:text-xl text-white bg-[#0b0625be] px-4 py-4 rounded-xl shadow-lg">
                        The central idea is to encourage students to apply
                        scientific concepts in solving real-life problems and
                        explore how modern technology can improve human life and
                        the environment. Projects cover topics such as{" "}
                        <span className="text-yellow-300 font-semibold">
                            Artificial Intelligence, Virtual Science Labs, Smart
                            Irrigation Systems, Face Recognition Attendance,
                            Renewable Energy
                        </span>
                        , and more.
                    </p>

                    <p className="-rotate-1 text-lg md:text-xl text-white bg-[#0b0625] px-4 py-4 rounded-xl shadow-2xl">
                        This exhibition is not just a display of projects, but a
                        celebration of the power of knowledge, creativity, and
                        imagination — inspiring young minds to become the{" "}
                        <span className="text-yellow-300 font-bold">
                            scientists, engineers, and innovators of tomorrow
                        </span>
                        .
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="flex justify-center relative group">
                    <div className="overflow-hidden rounded-3xl shadow-2xl transform transition duration-500 group-hover:scale-105">
                        <img
                            src="/science-tech.png"
                            alt="Science and Technology"
                            className="w-full max-w-md object-cover rounded-3xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-30 transition duration-500 rounded-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
