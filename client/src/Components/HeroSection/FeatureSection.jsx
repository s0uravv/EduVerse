import React from "react";

const FeatureSection = () => {
    return (
        <div className="flex flex-col items-center w-full">
            {/* Section 1 */}
            <section className="w-full bg-white px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-10">
                    {/* Text jsjsjs*/}
                    <div className="w-full lg:w-1/2 lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
                            Performance Tracker
                        </h2>
                        <p className="max-w-2xl font-bold mx-auto text-black md:text-lg pb-4">
                            It provides individual dashboards for every student,
                            auto-generates graphs, and identifies strengths,
                            weaknesses, and trends — making it easy to improve
                            performance continuously.
                        </p>
                        <a
                            href="#"
                            className="hover:text-orange-300 underline decoration-orange-500 underline-offset-4 font-semibold inline-flex items-center gap-1"
                        >
                            Learn More ↗
                        </a>
                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <img
                            className="w-[80%] max-h-[350px] object-contain"
                            alt="Phone"
                            src="/iPhone.png"
                        />
                    </div>
                </div>
            </section>

            {/* Section 2 */}

            <section className="w-full bg-[#0b0625] px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-10">
                    {/* Image */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <img
                            className="w-[80%] max-h-[350px] object-contain"
                            alt="Phone"
                            src="/iPhone.png"
                        />
                    </div>
                    {/* Text */}
                    <div className="w-full lg:w-1/2  lg:text-left text-white">
                        <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">
                            Doubt Corner
                        </h2>
                        <p className="max-w-2xl font-bold mx-auto md:text-lg mb-4">
                            The Doubt Corner is a dedicated space where students
                            can post their academic doubts anytime, without
                            hesitation. Whether it’s late at night.
                        </p>
                        <a
                            href="#"
                            className="text-blue-400 font-semibold inline-flex items-center gap-1 hover:underline"
                        >
                            Learn More ↗
                        </a>
                    </div>
                </div>
            </section>

            <section className="w-full bg-white px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-10">
                    {/* Text */}
                    <div className="w-full lg:w-1/2 lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
                            AI Chat Bot
                        </h2>
                        <p className="max-w-2xl font-bold mx-auto text-black md:text-lg pb-4">
                            The AI Chat Bot in EduVerse is a assistant designed
                            to support students and teachers by answering
                            questions, providing explanations, suggesting study
                            tips, and helping with homework or concepts — all in
                            a natural chat interface.
                        </p>
                        <a
                            href="#"
                            className="hover:text-orange-300 underline decoration-orange-500 underline-offset-4 font-semibold inline-flex items-center gap-1"
                        >
                            Learn More ↗
                        </a>
                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <img
                            className="w-[80%] max-h-[350px] object-contain"
                            alt="Phone"
                            src="/iPhone.png"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full bg-white px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-10">
                    {/* Image */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <img
                            className="w-[80%] max-h-[350px] object-contain"
                            alt="Phone"
                            src="/iPhone.png"
                        />
                    </div>

                    {/* Text */}
                    <div className="w-full lg:w-1/2  lg:text-left text-white">
                        <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">
                            Study Material
                        </h2>
                        <p className="max-w-2xl text-black font-bold mx-auto md:text-lg mb-4">
                            The Study Material section in EduVerse is a
                            centralized digital library for students and
                            teachers. It provides quick access to notes, NCERT
                            PDFs, practice papers, video lectures, and
                            teacher-uploaded resources.
                        </p>
                        <a
                            href="#"
                            className="text-black hover:text-orange-300 underline decoration-orange-500 underline-offset-4 font-semibold inline-flex items-center gap-1"
                        >
                            Learn More ↗
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeatureSection;
