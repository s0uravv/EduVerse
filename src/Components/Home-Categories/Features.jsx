import React from "react";
import { ArrowUpRight } from "lucide-react";

const Features = () => (
    <section className="py-12 px-0 space-y-12">
        <div className="flex flex-col lg:flex-row bg-white">
            <div className="w-full lg:px-32 lg:w-1/2 p-6 flex flex-col justify-center">
                <div className="text-3xl font-bold text-orange-500 pb-3">
                    Performance Tracker
                </div>
                <p className="mt-2 text-black text-md font-bold">
                    It provides individual dashboards for every student,
                    auto-generates graphs, and identifies strengths, weaknesses,
                    and trends — making it easy to improve performance
                    continuously.
                </p>
                <p className="flex items-center gap-1 mt-4 text-gray-600 text-sm underline decoration-orange-500 underline-offset-4">
                    Learn More <ArrowUpRight color="orange" size={20} />
                </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
                <img
                    className="w-[80%] h-[350px] object-contain"
                    src="iPhone.png"
                    alt="Phone"
                />
            </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse bg-[#040421]">
            <div className="w-full lg:w-1/2 p-6 lg:px-32 flex flex-col justify-center flex-grow">
                <div className="text-4xl font-bold text-orange-500 pb-3">
                    Doubt Corner
                </div>
                <p className="mt-2 text-white text-md font-bold">
                    The Doubt Corner is a dedicated space where students can
                    post their academic doubts anytime, without hesitation.
                    Whether it’s late at night.
                </p>
                <p className="flex items-center gap-1 mt-4 text-gray-500 text-sm underline decoration-orange-500 underline-offset-4">
                    Learn More <ArrowUpRight color="orange" size={20} />
                </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
                <img
                    className="w-[80%] h-[350px] object-contain"
                    src="iPhone.png"
                    alt="Phone"
                />
            </div>
        </div>

        <div className="flex flex-col lg:flex-row bg-white">
            <div className="w-full lg:px-32 lg:w-1/2 p-6 flex flex-col justify-center">
                <div className="text-3xl font-bold text-orange-500 pb-3">
                    AI Chat
                </div>
                <p className="mt-2 text-black text-md font-bold">
                    The AI Chat Bot in EduVerse is a assistant designed to
                    support students and teachers by answering questions,
                    providing explanations, suggesting study tips, and helping
                    with homework or concepts — all in a natural chat interface.
                </p>
                <p className="flex items-center gap-1 mt-4 text-gray-600 text-sm underline decoration-orange-500 underline-offset-4">
                    Learn More <ArrowUpRight color="orange" size={20} />
                </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
                <img
                    className="w-[80%] h-[350px] object-contain"
                    src="iPhone.png"
                    alt="Phone"
                />
            </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse bg-white">
            <div className="w-full lg:w-1/2 p-6 lg:px-32 flex flex-col justify-center flex-grow">
                <div className="text-3xl font-bold text-orange-500 pb-3">
                    Study Material
                </div>
                <p className="mt-2  text-md font-bold">
                    The Study Material section in EduVerse is a centralized
                    digital library for students and teachers. It provides quick
                    access to notes, NCERT PDFs, practice papers, video
                    lectures, and teacher-uploaded resources.
                </p>
                <p className="flex items-center gap-1 mt-4 text-gray-500 text-sm underline decoration-orange-500 underline-offset-4">
                    Learn More <ArrowUpRight color="orange" size={20} />
                </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
                <img
                    className="w-[80%] h-[350px] object-contain"
                    src="iPhone.png"
                    alt="Phone"
                />
            </div>
        </div>
    </section>
);

export default Features;
