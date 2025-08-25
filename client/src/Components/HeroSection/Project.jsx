import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pinataImg from "../../assets/project.jpg";
import pinataGroup from "../../assets/group.jpg";
import sampleVideo from "../../assets/sample.mp4";

const projects = [
     {
        name: "Pinata",
        shortDesc: "Manage your digital files efficiently.",
        image: pinataImg,
        groupImage: pinataGroup,
        fullDesc:
            "Pinata is a decentralized file management project that allows users to store and manage data securely on the cloud. Speed, security, and reliability are its main features.",
        creator: "Team Alpha",
        guidedBy: "Mr. Sharma",
        video: sampleVideo
    },
    {
        name: "Pinata",
        shortDesc: "Manage your digital files efficiently.",
        image: pinataImg,
        groupImage: pinataGroup,
        fullDesc:
            "Pinata is a decentralized file management project that allows users to store and manage data securely on the cloud. Speed, security, and reliability are its main features.",
        creator: "Team Alpha",
        guidedBy: "Mr. Sharma",
        video: sampleVideo
    },
    {
        name: "Pinata",
        shortDesc: "Manage your digital files efficiently.",
        image: pinataImg,
        groupImage: pinataGroup,
        fullDesc:
            "Pinata is a decentralized file management project that allows users to store and manage data securely on the cloud. Speed, security, and reliability are its main features.",
        creator: "Team Alpha",
        guidedBy: "Mr. Sharma",
        video: sampleVideo
    },
    {
        name: "Pinata",
        shortDesc: "Manage your digital files efficiently.",
        image: pinataImg,
        groupImage: pinataGroup,
        fullDesc:
            "Pinata is a decentralized file management project that allows users to store and manage data securely on the cloud. Speed, security, and reliability are its main features.",
        creator: "Team Alpha",
        guidedBy: "Mr. Sharma",
        video: sampleVideo
    },
    {
        name: "Pinata",
        shortDesc: "Manage your digital files efficiently.",
        image: pinataImg,
        groupImage: pinataGroup,
        fullDesc:
            "Pinata is a decentralized file management project that allows users to store and manage data securely on the cloud. Speed, security, and reliability are its main features.",
        creator: "Team Alpha",
        guidedBy: "Mr. Sharma",
        video: sampleVideo
    }, {
        name: "Pinata",
        shortDesc: "Manage your digital files efficiently.",
        image: pinataImg,
        groupImage: pinataGroup,
        fullDesc:
            "Pinata is a decentralized file management project that allows users to store and manage data securely on the cloud. Speed, security, and reliability are its main features.",
        creator: "Team Alpha",
        guidedBy: "Mr. Sharma",
        video: sampleVideo
    },
    // {
    //     name: "Pinata",
    //     shortDesc: "Manage your digital files efficiently.",
    //     image: pinataImg,
    //     groupImage: pinataGroup,
    //     fullDesc:
    //         "Pinata is a decentralized file management project that allows users to store and manage data securely on the cloud. Speed, security, and reliability are its main features.",
    //     creator: "Team Alpha",
    //     guidedBy: "Mr. Sharma",
    //     video: sampleVideo
    // },
    // {
    //     name: "Pinata",
    //     shortDesc: "Manage your digital files efficiently.",
    //     image: pinataImg,
    //     groupImage: pinataGroup,
    //     fullDesc:
    //         "Pinata is a decentralized file management project that allows users to store and manage data securely on the cloud. Speed, security, and reliability are its main features.",
    //     creator: "Team Alpha",
    //     guidedBy: "Mr. Sharma",
    //     video: sampleVideo
    // },
    // {
    //     name: "Pinata",
    //     shortDesc: "Manage your digital files efficiently.",
    //     image: pinataImg,
    //     groupImage: pinataGroup,
    //     fullDesc:
    //         "Pinata is a decentralized file management project that allows users to store and manage data securely on the cloud. Speed, security, and reliability are its main features.",
    //     creator: "Team Alpha",
    //     guidedBy: "Mr. Sharma",
    //     video: sampleVideo
    // },
    // {
    //     name: "Pinata",
    //     shortDesc: "Manage your digital files efficiently.",
    //     image: pinataImg,
    //     groupImage: pinataGroup,
    //     fullDesc:
    //         "Pinata is a decentralized file management project that allows users to store and manage data securely on the cloud. Speed, security, and reliability are its main features.",
    //     creator: "Team Alpha",
    //     guidedBy: "Mr. Sharma",
    //     video: sampleVideo
    // }, {
    //     name: "Pinata",
    //     shortDesc: "Manage your digital files efficiently.",
    //     image: pinataImg,
    //     groupImage: pinataGroup,
    //     fullDesc:
    //         "Pinata is a decentralized file management project that allows users to store and manage data securely on the cloud. Speed, security, and reliability are its main features.",
    //     creator: "Team Alpha",
    //     guidedBy: "Mr. Sharma",
    //     video: sampleVideo
    // },
    // {
    //     name: "Pinata",
    //     shortDesc: "Manage your digital files efficiently.",
    //     image: pinataImg,
    //     groupImage: pinataGroup,
    //     fullDesc:
    //         "Pinata is a decentralized file management project that allows users to store and manage data securely on the cloud. Speed, security, and reliability are its main features.",
    //     creator: "Team Alpha",
    //     guidedBy: "Mr. Sharma",
    //     video: sampleVideo
    // },
    // {
    //     name: "Pinata",
    //     shortDesc: "Manage your digital files efficiently.",
    //     image: pinataImg,
    //     groupImage: pinataGroup,
    //     fullDesc:
    //         "Pinata is a decentralized file management project that allows users to store and manage data securely on the cloud. Speed, security, and reliability are its main features.",
    //     creator: "Team Alpha",
    //     guidedBy: "Mr. Sharma",
    //     video: sampleVideo
    // },
    // {
    //     name: "Pinata",
    //     shortDesc: "Manage your digital files efficiently.",
    //     image: pinataImg,
    //     groupImage: pinataGroup,
    //     fullDesc:
    //         "Pinata is a decentralized file management project that allows users to store and manage data securely on the cloud. Speed, security, and reliability are its main features.",
    //     creator: "Team Alpha",
    //     guidedBy: "Mr. Sharma",
    //     video: sampleVideo
    // },
    // {
    //     name: "Pinata",
    //     shortDesc: "Manage your digital files efficiently.",
    //     image: pinataImg,
    //     groupImage: pinataGroup,
    //     fullDesc:
    //         "Pinata is a decentralized file management project that allows users to store and manage data securely on the cloud. Speed, security, and reliability are its main features.",
    //     creator: "Team Alpha",
    //     guidedBy: "Mr. Sharma",
    //     video: sampleVideo
    // }, {
    //     name: "Pinata",
    //     shortDesc: "Manage your digital files efficiently.",
    //     image: pinataImg,
    //     groupImage: pinataGroup,
    //     fullDesc:
    //         "Pinata is a decentralized file management project that allows users to store and manage data securely on the cloud. Speed, security, and reliability are its main features.",
    //     creator: "Team Alpha",
    //     guidedBy: "Mr. Sharma",
    //     video: sampleVideo
    // },
    // {
    //     name: "Pinata",
    //     shortDesc: "Manage your digital files efficiently.",
    //     image: pinataImg,
    //     groupImage: pinataGroup,
    //     fullDesc:
    //         "Pinata is a decentralized file management project that allows users to store and manage data securely on the cloud. Speed, security, and reliability are its main features.",
    //     creator: "Team Alpha",
    //     guidedBy: "Mr. Sharma",
    //     video: sampleVideo
    // },
    // {
    //     name: "Pinata",
    //     shortDesc: "Manage your digital files efficiently.",
    //     image: pinataImg,
    //     groupImage: pinataGroup,
    //     fullDesc:
    //         "Pinata is a decentralized file management project that allows users to store and manage data securely on the cloud. Speed, security, and reliability are its main features.",
    //     creator: "Team Alpha",
    //     guidedBy: "Mr. Sharma",
    //     video: sampleVideo
    // },
    // {
    //     name: "Pinata",
    //     shortDesc: "Manage your digital files efficiently.",
    //     image: pinataImg,
    //     groupImage: pinataGroup,
    //     fullDesc:
    //         "Pinata is a decentralized file management project that allows users to store and manage data securely on the cloud. Speed, security, and reliability are its main features.",
    //     creator: "Team Alpha",
    //     guidedBy: "Mr. Sharma",
    //     video: sampleVideo
    // },
    {
        name: "Pinata",
        shortDesc: "Digital and modern Radar System.",
        image: pinataImg,
        groupImage: pinataGroup,
        fullDesc:
            "Arduino-Based Radar System – Project Description.Our radar system is an innovative, student-engineered project built using the Arduino Uno microcontroller. Designed to simulate real-world radar functionality, this system detects objects within a defined range and visualizes their position using a rotating sensor mechanism.🔧 Key Components:Arduino Uno – The brain of the system, handling sensor data and motor control.Ultrasonic Sensor (HC-SR04) – Measures distance to nearby objects with high precision.Servo Motor – Rotates the ultrasonic sensor to scan the surroundings.Processing IDE – Visualizes the radar sweep and detected objects in real time.Breadboard & Jumper Wires – For circuit connections and prototyping.",
        creator: "Sourav Pandey , Ekalvya , Khushal kumar ",
        guidedBy: "Mr. D.K Dutta"
        // video: sampleVideo
    },
    {
        name: "Pinata",
        shortDesc: "Digital and modern Radar System.",
        image: pinataImg,
        groupImage: pinataGroup,
        fullDesc:
            "Arduino-Based Radar System – Project Description.Our radar system is an innovative, student-engineered project built using the Arduino Uno microcontroller. Designed to simulate real-world radar functionality, this system detects objects within a defined range and visualizes their position using a rotating sensor mechanism.🔧 Key Components:Arduino Uno – The brain of the system, handling sensor data and motor control.Ultrasonic Sensor (HC-SR04) – Measures distance to nearby objects with high precision.Servo Motor – Rotates the ultrasonic sensor to scan the surroundings.Processing IDE – Visualizes the radar sweep and detected objects in real time.Breadboard & Jumper Wires – For circuit connections and prototyping.",
        creator: "Sourav Pandey , Ekalvya , Khushal kumar ",
        guidedBy: "Mr. D.K Dutta"
        // video: sampleVideo
    },
    {
        name: "Pinata",
        shortDesc: "Digital and modern Radar System.",
        image: pinataImg,
        groupImage: pinataGroup,
        fullDesc:
            "Arduino-Based Radar System – Project Description.Our radar system is an innovative, student-engineered project built using the Arduino Uno microcontroller. Designed to simulate real-world radar functionality, this system detects objects within a defined range and visualizes their position using a rotating sensor mechanism.🔧 Key Components:Arduino Uno – The brain of the system, handling sensor data and motor control.Ultrasonic Sensor (HC-SR04) – Measures distance to nearby objects with high precision.Servo Motor – Rotates the ultrasonic sensor to scan the surroundings.Processing IDE – Visualizes the radar sweep and detected objects in real time.Breadboard & Jumper Wires – For circuit connections and prototyping.",
        creator: "Sourav Pandey , Ekalvya , Khushal kumar ",
        guidedBy: "Mr. D.K Dutta"
        // video: sampleVideo
    }
    // ...baaki projects same rehne do
];

export default function ProjectSection() {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [modalProject, setModalProject] = useState(null);
    const [flipped, setFlipped] = useState(false);
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className="relative p-8 min-h-screen text-white overflow-hidden">
            {/* Animated Gradient Background (footer jaisa) */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b6025] via-black to-[#0b6025] animate-gradient bg-[length:200%_200%]"></div>

            <motion.h2
                className="text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 drop-shadow-lg"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
            >
                Projects
            </motion.h2>

            {/* Project Cards */}
            <div className="grid md:grid-cols-2 gap-10">
                {projects.map((project, idx) => {
                    const isExpanded = expandedIndex === idx;
                    return (
                        <motion.div
                            key={idx}
                            layout
                            onClick={() =>
                                setExpandedIndex(isExpanded ? null : idx)
                            }
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            transition={{
                                layout: { duration: 0.6, type: "spring" }
                            }}
                            className="relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl shadow-orange-500/50 border-2 border-orange-500/70"
                            style={{ height: isExpanded ? "240px" : "190px" }}
                        >
                            <motion.img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.12 }}
                                transition={{ duration: 0.5 }}
                            />
                            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-5">
                                <h3 className="text-white font-extrabold text-xl drop-shadow-md">
                                    {project.name}
                                </h3>
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            className="mt-2"
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 15 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <p className="text-gray-200 text-sm italic">
                                                {project.shortDesc}
                                            </p>
                                            <button
                                                onClick={e => {
                                                    e.stopPropagation();
                                                    setModalProject(project);
                                                    setFlipped(false);
                                                    setShowVideo(false);
                                                }}
                                                className="mt-3 px-4 py-2 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600 rounded-lg font-semibold text-black hover:scale-105 transform transition duration-300 shadow-lg shadow-orange-500/40"
                                            >
                                                Read More
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {modalProject && !showVideo && (
                    <motion.div
                        className="fixed inset-0 backdrop-blur-md bg-black/40 flex items-center justify-center z-50 p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl p-8 border-4 border-orange-500 shadow-2xl shadow-orange-500/50 bg-gradient-to-r from-[#0b6025] via-black to-[#0b6025] animate-gradient bg-[length:200%_200%]"
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ duration: 0.5, type: "spring" }}
                        >
                            <button
                                onClick={() => setModalProject(null)}
                                className="absolute top-3 right-4 text-white hover:text-orange-400 text-4xl font-bold z-50"
                            >
                                &times;
                            </button>
                            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">
                                {modalProject.name}
                            </h2>

                            {/* Flip Card */}
                            <motion.div
                                className="w-full h-72 perspective mb-6 cursor-pointer"
                                onClick={() => setFlipped(!flipped)}
                            >
                                <motion.div
                                    className="relative w-full h-full"
                                    animate={{ rotateY: flipped ? 180 : 0 }}
                                    transition={{ duration: 0.8 }}
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    {/* Front */}
                                    <div className="absolute w-full h-full backface-hidden">
                                        <img
                                            src={modalProject.image}
                                            alt="Project"
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                    </div>
                                    {/* Back */}
                                    <div className="absolute w-full h-full backface-hidden rotate-y-180">
                                        <img
                                            src={modalProject.groupImage}
                                            alt="Group"
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Description */}
                            <p className="mb-3 text-lg leading-relaxed text-gray-200 italic">
                                {modalProject.fullDesc}
                            </p>
                            <p className="text-orange-400 font-bold mb-1">
                                Creator:{" "}
                                <span className="text-yellow-300 font-semibold">
                                    {modalProject.creator}
                                </span>
                            </p>
                            <p className="text-orange-400 font-bold mb-6">
                                Guided By:{" "}
                                <span className="text-green-300 font-semibold">
                                    {modalProject.guidedBy}
                                </span>
                            </p>

                            <button
                                onClick={() => setShowVideo(true)}
                                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform shadow-lg shadow-blue-500/50"
                            >
                                🎬 Watch Demo
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Video Overlay */}
            <AnimatePresence>
                {showVideo && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50 p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative w-full max-w-4xl rounded-2xl border-4 border-orange-500 shadow-2xl shadow-orange-500/50 bg-gradient-to-r from-[#0b6025] via-black to-[#0b6025] animate-gradient bg-[length:200%_200%] p-6"
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <button
                                onClick={() => setShowVideo(false)}
                                className="absolute top-3 right-4 text-white hover:text-red-400 text-4xl font-bold"
                            >
                                &times;
                            </button>
                            <video
                                src={modalProject.video}
                                controls
                                autoPlay
                                className="w-full rounded-xl border-2 border-orange-400"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Extra CSS for Flip + Gradient Animation */}
            <style>{`
        .perspective {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .animate-gradient {
          animation: gradientMove 8s ease infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
        </div>
    );
}
