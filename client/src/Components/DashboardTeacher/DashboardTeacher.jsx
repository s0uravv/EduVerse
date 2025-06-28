import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const DashboardTeacher = () => {
    const [teacher, setTeacher] = useState(null);
    const [attendance, setAttendance] = useState(0);
    const [performance, setPerformance] = useState([]);
    const [doubts, setDoubts] = useState([]);
    const [homeworkCompletion, setHomeworkCompletion] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:3001/dashboard", { withCredentials: true })
            .then(res => setTeacher(res.data))
            .catch(() => setTeacher(null));

        axios
            .get("http://localhost:3001/attendance/percentage", {
                withCredentials: true
            })
            .then(res => setAttendance(res.data.percentage || 0));

        axios
            .get("http://localhost:3001/performance", { withCredentials: true })
            .then(res => setPerformance(res.data || []));

        axios
            .get("http://localhost:3001/doubts", { withCredentials: true })
            .then(res => setDoubts(res.data || []));

        axios
            .get("http://localhost:3001/homework/completion", {
                withCredentials: true
            })
            .then(res => setHomeworkCompletion(res.data.percentage || 0));
    }, []);

    return (
        <div className="p-4 md:p-6 space-y-6">
            <div className="text-white px-4 py-3 rounded-xl text-center">
                <h1 className="text-2xl font-bold text-orange-500">
                    Welcome, {teacher?.name || "Teacher"}
                </h1>
            </div>

            <div
                className="bg-[#0b0625] rounded-2xl p-6 flex flex-col items-center border border-orange-500/40 cursor-pointer hover:shadow-lg transition"
                onClick={() => navigate("/attendance")}
            >
                <h2 className="text-xl font-bold text-white pb-3 text-center">
                    Class Attendance
                </h2>
                <div className="relative w-28 h-28 sm:w-32 sm:h-32">
                    <svg className="absolute top-0 left-0 w-full h-full">
                        <circle
                            cx="50%"
                            cy="50%"
                            r="45%"
                            stroke="#2e2e4e"
                            strokeWidth="10"
                            fill="none"
                        />
                        <circle
                            cx="50%"
                            cy="50%"
                            r="45%"
                            stroke="#f97316"
                            strokeWidth="10"
                            fill="none"
                            strokeDasharray={`${attendance * 2.83} 283`}
                            transform="rotate(-90 64 64)"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                        {attendance}%
                    </div>
                </div>
            </div>

            <div className="bg-[#0b0625] rounded-xl p-6 border border-orange-500/40">
                <h2 className="text-xl font-bold text-white mb-4">
                    Performance Report
                </h2>
                {performance.length === 0 ? (
                    <p className="text-white">No data available.</p>
                ) : (
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {performance.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#1b1b2f] p-4 rounded-lg text-white shadow"
                            >
                                <h3 className="font-bold text-lg mb-2">
                                    {item.className}
                                </h3>
                                <p>✅ Passed: {item.passed}</p>
                                <p>❌ Failed: {item.failed}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="bg-[#0b0625] rounded-xl p-6 border border-orange-500/40">
                <h2 className="text-xl font-bold text-white mb-4">
                    Student Doubts
                </h2>
                {doubts.length === 0 ? (
                    <p className="text-white">No doubts raised.</p>
                ) : (
                    <div className="space-y-4">
                        {doubts.map((doubt, index) => (
                            <div
                                key={index}
                                className="bg-[#1b1b2f] p-4 rounded-lg text-white"
                            >
                                <p className="font-semibold text-orange-400">
                                    {doubt.subject}
                                </p>
                                <p className="text-sm">{doubt.question}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="bg-[#0b0625] rounded-xl p-6 border border-orange-500/40">
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
                    <div className="flex-1">
                        <h2 className="text-xl font-bold text-white mb-2">
                            Homework Completion
                        </h2>
                        <p className="text-white font-medium">
                            {homeworkCompletion}% of students submitted today's
                            homework
                        </p>
                        <div className="w-full bg-[#1e1e30] h-4 rounded-lg mt-3 overflow-hidden">
                            <div
                                className="bg-orange-500 h-full transition-all"
                                style={{ width: `${homeworkCompletion}%` }}
                            ></div>
                        </div>
                    </div>
                    <Link
                        to="/homework"
                        className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                    >
                        View Homework
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DashboardTeacher;
