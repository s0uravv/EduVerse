import React, { useEffect, useState } from "react";
import axios from "axios";

const AddQotd = () => {
    const [teacher, setTeacher] = useState(null);
    const [question, setQuestion] = useState("");
    const [existingQotd, setExistingQotd] = useState("");

    // Fetch teacher info + current QOTD
    useEffect(() => {
        axios
            .get("http://localhost:3001/dashboard", { withCredentials: true })
            .then(res => {
                setTeacher(res.data);
            })
            .catch(() => setTeacher(null));

        axios
            .get("http://localhost:3001/qotd")
            .then(res => {
                if (res.data.question) setExistingQotd(res.data.question);
            })
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
            console.log(err);
        }
    };

    return (
        <div className="p-6 space-y-10">
            <h1 className="text-3xl font-bold text-orange-500">
                Welcome,{" "}
                <span className="text-[#0b0625]">
                    {teacher?.name || "Teacher"}
                </span>
            </h1>

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
        </div>
    );
};

export default AddQotd;
