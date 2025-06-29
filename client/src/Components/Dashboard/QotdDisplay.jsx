import React, { useEffect, useState } from "react";
import axios from "../../axios";

const QotdDisplay = () => {
    const [question, setQuestion] = useState("");
    const [answerText, setAnswerText] = useState("");
    const [user, setUser] = useState(null);
    const [userAnswer, setUserAnswer] = useState(null);

    const fetchUserAnswer = async () => {
        try {
            const res = await axios.get("http://localhost:3001/dashboard");
            if (res.data) {
                setUser(res.data);
                const answers = await axios.get("http://localhost:3001/all-answers");
                const found = answers.data.find(
                    (ans) => ans.student?._id === res.data._id
                );
                if (found) setUserAnswer(found);
            }
        } catch {
            console.log("Error fetching user or answer");
        }
    };

    useEffect(() => {
        axios.get("http://localhost:3001/qotd").then(res => {
            setQuestion(res.data.question || "");
        });

        fetchUserAnswer();
    }, []);

    const handleSubmit = async () => {
        if (!answerText.trim()) return alert("Answer cannot be empty.");
        if (!user) return alert("Login required to submit answer");

        try {
            await axios.post("http://localhost:3001/qotdanswer", {
                answerText
            });
            alert("Answer submitted successfully!");
            setUserAnswer({
                answerText,
                isCorrect: null,
                student: user,
                submittedAt: new Date()
            });
            setAnswerText("");
        } catch (err) {
            alert("Failed to submit answer");
        }
    };

    const renderFeedback = () => {
        if (userAnswer?.isCorrect === true) {
            return <p className="text-green-400 font-semibold mt-2">✔ Your answer was marked correct.</p>;
        } else if (userAnswer?.isCorrect === false) {
            return <p className="text-red-400 font-semibold mt-2">✖ Your answer was marked incorrect.</p>;
        } else {
            return <p className="text-yellow-400 font-semibold mt-2">⏳ Awaiting feedback from teacher.</p>;
        }
    };

    return (
        <div className="bg-[#0b0625] rounded-xl shadow p-6 border border-orange-500/40 mt-6">
            <h2 className="text-2xl text-white font-bold pb-2">Question of the Day</h2>
            {question ? (
                <>
                    <p className="pb-4 text-white font-semibold">{question}</p>

                    {userAnswer ? (
                        <div className="bg-[#1c1c2a] p-4 rounded-lg text-white">
                            <h3 className="text-lg font-semibold mb-2">Your Submitted Answer:</h3>
                            <p>{userAnswer.answerText}</p>
                            {renderFeedback()}
                        </div>
                    ) : (
                        <>
                            <textarea
                                className="bg-[#252539] w-full border border-black/10 rounded-lg p-3 focus:outline-orange-500 text-white"
                                rows={4}
                                placeholder="Write your answer..."
                                value={answerText}
                                onChange={e => setAnswerText(e.target.value)}
                            />
                            <button
                                onClick={handleSubmit}
                                className="mt-3 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                            >
                                Submit Answer
                            </button>
                        </>
                    )}
                </>
            ) : (
                <p className="text-white">No question available for today.</p>
            )}
        </div>
    );
};

export default QotdDisplay;