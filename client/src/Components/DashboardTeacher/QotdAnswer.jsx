import React, { useEffect, useState } from "react";
import axios from "axios";

const AddQotd = () => {
    const [teacher, setTeacher] = useState(null);
    const [question, setQuestion] = useState("");
    const [existingQotd, setExistingQotd] = useState("");
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3001/dashboard", { withCredentials: true })
            .then(res => setTeacher(res.data))
            .catch(() => setTeacher(null));

        axios
            .get("http://localhost:3001/qotd")
            .then(res => {
                if (res.data.question) setExistingQotd(res.data.question);
            })
            .catch(err => console.log(err));

        axios
            .get("http://localhost:3001/all-answers")
            .then(res => setAnswers(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleQuestionSubmit = async () => {
        if (!question.trim()) return alert("Question cannot be empty.");
        try {
            await axios.post(
                "http://localhost:3001/qotd",
                { question },
                { withCredentials: true }
            );
            alert("Question updated!");
            setExistingQotd(question);
            setQuestion("");
        } catch (err) {
            alert("Failed to update question.");
        }
    };

    return (
        <div className="p-6 space-y-10">
            <h1 className="text-3xl font-bold text-orange-500">
                Welcome, <span className="text-[#0b0625]">{teacher?.name || "Teacher"}</span>
            </h1>

            <div className="bg-[#0b0625] rounded-xl shadow p-6 border border-orange-500/40">
                <h2 className="text-2xl text-white font-bold pb-2">Current Question of the Day</h2>
                <p className="text-white font-semibold mb-4">{existingQotd || "No question set yet."}</p>
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

            <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Answers</h2>
                {answers.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border border-gray-300">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2 border-b">Name</th>
                                    <th className="px-4 py-2 border-b">Email</th>
                                    <th className="px-4 py-2 border-b">Answer</th>
                                    <th className="px-4 py-2 border-b">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {answers.map((ans, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-4 py-2 border-b">{ans.student?.name}</td>
                                        <td className="px-4 py-2 border-b">{ans.student?.email}</td>
                                        <td className="px-4 py-2 border-b">{ans.answerText}</td>
                                        <td className="px-4 py-2 border-b">
                                            {new Date(ans.submittedAt).toLocaleDateString()}
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
        </div>
    );
};

export default AddQotd;