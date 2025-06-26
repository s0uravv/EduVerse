import React, { useEffect, useState } from "react";
import axios from "axios";

const QotdDisplay = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:3001/qotd", {
                withCredentials: true,
            })
            .then((res) => {
                setQuestion(res.data.question || "");
            })
            .catch((err) => {
                console.log("Failed to fetch QOTD", err);
            });
    }, []);

    const handleSubmit = () => {
        if (answer.trim()) {
            alert("Answer submitted successfully!");
            setAnswer("");
            // Optionally: send to server if storing answers
        }
    };

    return (
        <div className="bg-[#0b0625] rounded-xl shadow p-6 border border-orange-500/40">
            <h2 className="text-2xl text-white font-bold pb-2">
                Question of the Day
            </h2>
            {question ? (
                <>
                    <p className="pb-4 text-white font-semibold">
                        {question}
                    </p>
                    <textarea
                        className="bg-[#252539] w-full border border-black/10 rounded-lg p-3 focus:outline-orange-500"
                        rows={4}
                        placeholder="Write your answer..."
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                    />
                    <button
                        onClick={handleSubmit}
                        className="mt-3 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-500"
                    >
                        Submit Answer
                    </button>
                </>
            ) : (
                <p className="text-white">No question available for today.</p>
            )}
        </div>
    );
};

export default QotdDisplay;