import teacher1 from "../../assets/Swajit.jpg";
import teacher2 from "../../assets/Dutta.jpg";
import teacher3 from "../../assets/Ghosh.jpg";

const teachers = [
    {
        name: "Mr. D.K Dutta",
        subject: "Physics Teacher",
        guided: "Face Recognition Attendance, Virtual Science Lab",
        photo: teacher2
    },
    {
        name: "Mr. B.K Pandey",
        subject: "Physics Teacher",
        guided: "Face Recognition Attendance, Virtual Science Lab"
        // photo: teacher2
    },
    {
        name: "Mr. Swajit Singh",
        subject: "Chemistry Teacher",
        guided: "Face Recognition Attendance, Virtual Science Lab",
        photo: teacher1
    },
    {
        name: "Mr. Vijay Sah",
        subject: "Chemistry Teacher",
        guided: "Face Recognition Attendance, Virtual Science Lab"
        // photo: teacher1
    },
    {
        name: "Mr. S.R Ghosh",
        subject: "Biology Teacher",
        guided: "Smart Irrigation System, Renewable Energy",
        photo: teacher3
    },
    {
        name: "Mr. Sandeep Mahto",
        subject: "Biology Teacher",
        guided: "Smart Irrigation System, Renewable Energy"
        // photo: teacher3
    }
];

export default function TeachersSection() {
    return (
        <div className="py-16 px-8 bg-[#0b0625]">
            <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
                Our Mentors & Guides
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {teachers.map((teacher, idx) => (
                    <div
                        key={idx}
                        className="bg-white/5 backdrop-blur-lg border-2 border-orange-500 rounded-2xl p-6 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-xl hover:shadow-orange-500/50"
                    >
                        <img
                            src={teacher.photo}
                            alt={teacher.name}
                            className="w-32 h-32 object-cover rounded-full border-4 border-orange-500 mb-4"
                        />
                        <h3 className="text-xl font-bold text-white">
                            {teacher.name}
                        </h3>
                        <p className="text-orange-400">{teacher.subject}</p>
                        <p className="mt-3 text-gray-300 text-sm">
                            Guided Projects: <br />
                            <span className="text-white">{teacher.guided}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
