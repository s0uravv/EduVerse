import React, { useEffect, useState } from "react";
import axios from "../../axios";

const AddQotd = () => {
    const [teacher, setTeacher] = useState(null);
    const [question, setQuestion] = useState("");
    const [existingQotd, setExistingQotd] = useState("");
    const [answers, setAnswers] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const fetchAnswers = async () => {
        try {
            const res = await axios.get("http://localhost:3001/all-answers");
            console.log("Fetched answers:", res.data);
            setAnswers(res.data);
        } catch (err) {
            console.error("Error fetching answers:", err);
        }
    };

    useEffect(() => {
        axios.get("http://localhost:3001/dashboard").then(res => {
            setTeacher(res.data);
        });

        axios.get("http://localhost:3001/qotd").then(res => {
            if (res.data.question) setExistingQotd(res.data.question);
        });

        fetchAnswers();
    }, []);

    const handleQuestionSubmit = async () => {
        if (!question.trim()) return alert("Question cannot be empty.");
        try {
            await axios.post("http://localhost:3001/qotd", { question });
            alert("Question updated!");
            setExistingQotd(question);
            setQuestion("");
            fetchAnswers(); // Refresh answers
        } catch {
            alert("Failed to update question.");
        }
    };

    const handleFeedback = async isCorrect => {
        if (!selectedAnswer) return;
        try {
            await axios.post("http://localhost:3001/answer-feedback", {
                studentId: selectedAnswer.student._id,
                answerId: selectedAnswer._id,
                isCorrect
            });
            alert(`Student notified: ${isCorrect ? "Correct" : "Wrong"}`);
            setSelectedAnswer(null);
            fetchAnswers(); // Refresh after feedback
        } catch {
            alert("Failed to send feedback.");
        }
    };

    return (
        <div className="p-6 space-y-10 relative">
            <h1 className="text-3xl font-bold text-orange-500">
                Welcome,{" "}
                <span className="text-[#0b0625]">
                    {teacher?.name || "Teacher"}
                </span>
            </h1>

            {/* QOTD SETTER */}
            <div className="bg-[#0b0625] rounded-xl shadow p-6 border border-orange-500/40">
                <h2 className="text-2xl text-white font-bold pb-2">
                    Current Question of the Day
                </h2>
                <p className="text-white font-semibold mb-4">
                    {existingQotd || "No question set yet."}
                </p>
                <textarea
                    className="bg-[#252539] w-full border border-black/10 rounded-lg p-3 focus:outline-orange-500 text-white"
                    rows={3}
                    placeholder="Type new question here..."
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                />
                <button
                    onClick={handleQuestionSubmit}
                    className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                >
                    Set New Question
                </button>
            </div>

            {/* STUDENT ANSWERS */}
            <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Student Answers
                </h2>
                {answers.length > 0 ? (
                    <div className="rounded-xl overflow-x-auto">
                        <table className="w-full text-left border border-gray-300">
                            <thead className="bg-[#0b0625]">
                                <tr>
                                    <th className="px-4 py-2 border-b text-white">
                                        Name
                                    </th>
                                    <th className="px-4 py-2 border-b text-white">
                                        Answer
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {answers.map((ans, i) => (
                                    <tr
                                        key={i}
                                        className="hover:bg-[#252539] hover:text-orange-500 text-[#0b0625] font-semibold cursor-pointer"
                                        onClick={() => setSelectedAnswer(ans)}
                                    >
                                        <td className="font-bold px-4 py-2 border-b hover:bg-[#252539] hover:text-white text-orange-500 underline">
                                            {ans.student?.name || "Unknown"}
                                        </td>
                                        <td className="px-4 py-2 border-b">
                                            {ans.answerText}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-gray-500">No answers submitted yet.</p>
                )}
            </div>

            {selectedAnswer && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/30">
                    <div className="p-6 rounded-xl w-[90%] max-w-lg relative shadow-3xl text-[#0b0625] bg-white">
                        <button
                            className="absolute top-3 right-4 text-[#0b0625] transition-transform duration-300 hover:rotate-90 text-orange-500 hover:text-red-600"
                            onClick={() => setSelectedAnswer(null)}
                        >
                            ✕
                        </button>
                        <h3 className="text-xl font-bold mb-4">
                            Student Details
                        </h3>
                        <p>
                            <strong>Name:</strong>{" "}
                            {selectedAnswer.student?.name}
                        </p>
                        <p>
                            <strong>Email:</strong>{" "}
                            {selectedAnswer.student?.email}
                        </p>
                        <p>
                            <strong>Submitted:</strong>{" "}
                            {new Date(
                                selectedAnswer.submittedAt
                            ).toLocaleString()}
                        </p>
                        <div className="mt-4">
                            <h4 className="font-semibold mb-2">Answer</h4>
                            <p className="bg-gray-100 p-3 rounded">
                                {selectedAnswer.answerText}
                            </p>
                        </div>
                        <div className="mt-6 flex justify-between">
                            <button
                                onClick={() => handleFeedback(true)}
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                            >
                                Correct
                            </button>
                            <button
                                onClick={() => handleFeedback(false)}
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-black/90"
                            >
                                Wrong
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddQotd;
