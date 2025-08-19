import { useState } from "react";
import pinataImg from "../../assets/H.jpg";
import pinataGroup from "../../assets/A.jpg";
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
    video: sampleVideo,
  },
];

export default function ProjectSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [modalProject, setModalProject] = useState(null);
  const [flipped, setFlipped] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="p-8 min-h-screen bg-gray-900">
      <h2 className="text-4xl font-bold mb-12 text-center text-orange-500 animate-pulse">
        Science and Technology Projects
      </h2>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <div
              key={idx}
              className={`relative rounded-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1 shadow-2xl shadow-orange-500/50`}
              style={{ height: isExpanded ? "220px" : "180px" }}
              onClick={() =>
                setExpandedIndex(isExpanded ? null : idx)
              }
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-4 transition-all duration-500">
                <h3 className="text-white font-bold text-lg">
                  {project.name}
                </h3>
                {isExpanded && (
                  <div className="mt-2 opacity-0 animate-fadeIn">
                    <p className="text-white text-sm">{project.shortDesc}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalProject(project);
                        setFlipped(false);
                        setShowVideo(false);
                      }}
                      className="mt-2 px-3 py-1 border-2 border-orange-500 text-white rounded hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
                    >
                      Read More
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {modalProject && !showVideo && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 border-4 border-orange-500 shadow-2xl shadow-orange-500/50 bg-white/0 backdrop-blur-md transform transition-all duration-500 scale-95 animate-modalOpen">
            <button
              onClick={() => setModalProject(null)}
              className="absolute top-4 right-4 text-gray-200 hover:text-white text-3xl font-bold z-50"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-6 text-orange-500">{modalProject.name}</h2>
            
            {/* Flip Card */}
            <div
              className="w-full h-64 perspective mb-6"
              onClick={() => setFlipped(!flipped)}
            >
              <div
                className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
                  flipped ? "rotate-y-180" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden">
                  <img
                    src={modalProject.image}
                    alt="Project"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                {/* Back */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                  <img
                    src={modalProject.groupImage}
                    alt="Group"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            </div>
            
            {/* Description */}
            <p className="mb-2 text-lg text-white">{modalProject.fullDesc}</p>
            <p className="text-gray-200 mb-1">Creator: {modalProject.creator}</p>
            <p className="text-gray-200 mb-4">Guided By: {modalProject.guidedBy}</p>
            
            <button
              onClick={() => setShowVideo(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Working Demo
            </button>
          </div>
        </div>
      )}

      {/* Video Overlay */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl rounded-2xl border-4 border-orange-500 shadow-2xl shadow-orange-500/50 bg-black/80 p-4">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-3 text-white text-3xl font-bold"
            >
              &times;
            </button>
            <video
              src={modalProject.video}
              controls
              autoPlay
              className="w-full rounded"
            />
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s forwards;
        }
        @keyframes modalOpen {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-modalOpen {
          animation: modalOpen 0.4s forwards;
        }
      `}</style>
    </div>
  );
}