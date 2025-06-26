import React, { useEffect, useState } from "react";
import QotdDisplay from "./QotdDisplay";
import axios from "axios";
import { Pie, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);
// ... your imports remain unchanged

function DashboardHome() {
    const [user, setUser] = useState(null);
    const [qotdAnswer, setQotdAnswer] = useState("");
    const [todos, setTodos] = useState([
        "Finish assignment",
        "Revise chapters",
        "Submit project"
    ]);

    useEffect(() => {
        axios
            .get("http://localhost:3001/dashboard", { withCredentials: true })
            .then(res => setUser(res.data))
            .catch(() => setUser(null));
    }, []);

    const handleQotdSubmit = () => {
        if (qotdAnswer.trim()) {
            alert("Answer submitted!");
            setQotdAnswer("");
        }
    };

    const progressData = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Weekly Progress",
                data: [20, 40, 60, 80, 70, 90, 100],
                fill: false,
                borderColor: "#f97316",
                backgroundColor: "#f97316",
                tension: 0.4
            }
        ]
    };

    const attendanceData = {
        labels: ["Present", "Absent"],
        datasets: [
            {
                data: [86, 14],
                backgroundColor: ["#f97316", "#0b0625"],
                borderWidth: 1
            }
        ]
    };

    return (
        <div className="p-6 space-y-10">
            <h1 className="text-3xl font-bold text-orange-500">
                Hi,{" "}
                <span className="text-[#0b0625]">{user?.name || "User"}</span>
            </h1>

            <QotdDisplay />

            {/* QOTD 
            <div className="bg-[#0b0625] rounded-xl shadow p-6 border border-orange-500/40">
                <h2 className="text-2xl text-white font-bold pb-2">
                    Question of the Day
                </h2>
                <p className="pb-4 text-white font-semibold">
                    What motivates you to learn something new every day?
                </p>
                <textarea
                    className="bg-[#252539] w-full border border-black/10 rounded-lg p-3 focus:outline-orange-500"
                    rows={4}
                    placeholder="Write your answer..."
                    value={qotdAnswer}
                    onChange={e => setQotdAnswer(e.target.value)}
                />
                <button
                    onClick={handleQotdSubmit}
                    className="mt-3 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                >
                    Submit Answer
                </button>
            </div>

             Two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Weekly Progress Graph */}
                <div className="bg-white rounded-xl p-6 border border-black/10">
                    <h2 className="text-xl font-bold text-[#0b0625] mb-4">
                        Weekly Progress
                    </h2>
                    <Line data={progressData} />
                </div>

                {/* Pending Work section */}
                <div className="bg-white rounded-xl p-6 border border-black/10">
                    <h2 className="text-xl font-semibold text-[#040421] mb-4">
                        Pending Tasks
                    </h2>
                    <ul className="space-y-3">
                        {todos.map((task, idx) => (
                            <li
                                key={idx}
                                className="flex items-center justify-between bg-[#0b0625] p-3 rounded-lg"
                            >
                                <span className="text-white font-semibold">
                                    {task}
                                </span>
                                <button
                                    onClick={() =>
                                        setTodos(prev =>
                                            prev.filter((_, i) => i !== idx)
                                        )
                                    }
                                    className="text-sm text-orange-500 hover:underline"
                                >
                                    Done
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Attendance Pie Chart */}
                <div className="bg-white rounded-xl p-6 border border-black/10">
                    <h2 className="text-xl font-semibold text-[#040421] mb-4">
                        Attendance Overview
                    </h2>
                    <div className="w-2/3 md:w-1/2">
                        <Pie data={attendanceData} />
                    </div>
                </div>

                {/* AI Insights */}
                <div className="bg-[#0b0625] rounded-xl p-6 border border-black/10">
                    <h2 className="text-xl font-bold text-orange-500 mb-2">
                        AI-Powered Performance Insights
                    </h2>
                    <p className="font-semibold text-white">
                        You’re doing great! Based on your recent activity, your
                        focus and completion rate are above 85%. Keep up the
                        consistent work and try reviewing your past notes for
                        even better retention.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DashboardHome;
