import { useState } from "react";
import pinataImg from "../../assets/H.jpg";
import pinataGroup from "../../assets/A.jpg";

const projects = [
    {
        name: "Pinata",
        shortDesc: "A cool project to manage your digital files efficiently.",
        image: pinataImg,
        groupImage: pinataGroup,
        fullDesc:
            "Pinata is a decentralized file management project that allows users to store and manage their data securely on the cloud. Developed with speed, security, and reliability in mind.",
        author: "Created by Team Alpha"
    },
    {
        name: "SkyNet",
        shortDesc: "An AI-powered platform for automated tasks.",
      
        fullDesc:
            "SkyNet is an AI platform that automates repetitive tasks, optimizes workflows, and provides insights using advanced machine learning algorithms. Developed for scalability and efficiency.",
        author: "Created by Team Beta"
    }
];

export default function ProjectSection() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="p-8">
            <h2 className="text-4xl font-bold mb-8 text-center">
                Science and Technology Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="relative bg-gray-200 rounded-xl overflow-hidden shadow-lg h-96 p-6"
                        style={{
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >
                        <div className="bg-black/50 p-6 h-full flex flex-col justify-end rounded-xl">
                            <h3 className="text-3xl font-bold text-white">
                                {project.name}
                            </h3>
                            <p className="text-white mt-4 text-xl">
                                {project.shortDesc}
                            </p>
                            <button
                                onClick={() => setSelectedProject(project)}
                                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg"
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl max-w-4xl w-full overflow-y-auto max-h-[90vh] relative p-6">
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-2xl"
                        >
                            &times;
                        </button>
                        <h2 className="text-3xl font-bold mb-4">
                            {selectedProject.name}
                        </h2>
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.name}
                            className="w-full rounded mb-4"
                        />
                        <img
                            src={selectedProject.groupImage}
                            alt="Group"
                            className="w-full rounded mb-4"
                        />
                        <p className="mb-4 text-lg">
                            {selectedProject.fullDesc}
                        </p>
                        <p className="text-gray-600 text-lg">
                            {selectedProject.author}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
