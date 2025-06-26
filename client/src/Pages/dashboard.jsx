import { useEffect, useState } from "react";
import axios from "axios";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ For navigation after logout

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    // ✅ Fetch user data when component mounts
    useEffect(() => {
        axios
            .get("http://localhost:3001/dashboard", { withCredentials: true })
            .then(res => setUser(res.data))
            .catch(err => console.error("Dashboard fetch error:", err));
    }, []);

    // ✅ Handle logout
    const handleLogout = async (e) => {
        e.preventDefault(); // Prevent default link behavior
        try {
            const res = await fetch("http://localhost:3001/logout", {
                method: "POST",
                credentials: "include", // Important to send cookies
            });

            const data = await res.json();

            if (res.ok) {
                console.log(data.message); // Optional: show "Logged out"
                navigate("/login"); // Redirect to login page
            }
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    // Loading state
    if (!user) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-xl text-gray-600">
                    Loading your dashboard...
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f7f7ff]">
            {/* NAVBAR */}
            <nav className="flex justify-between items-center px-6 md:px-20 py-4 bg-[#0e0e2e] text-white">
                <h1 className="text-xl md:text-2xl font-bold text-orange-400">
                    EduVerse
                </h1>
                <div className="flex items-center gap-4">
                    <span className="hidden sm:block text-sm font-semibold">
                        {user.name}
                    </span>
                    <button
                        className="p-2 rounded hover:bg-orange-500 transition"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <Menu />
                    </button>
                </div>
            </nav>

            {/* Hamburger Menu */}
            {menuOpen && (
                <div className="bg-white px-6 py-4 shadow-md">
                    <ul className="space-y-3 text-sm font-medium text-gray-700">
                        <li>
                            <a href="/dashboard">Dashboard</a>
                        </li>
                        <li>
                            <a href="#">Performance Tracker</a>
                        </li>
                        <li>
                            <a href="#">Study Material</a>
                        </li>
                        <li>
                            <a href="#">Doubt Corner</a>
                        </li>
                        <li>
                            <a href="#">AI Chat Bot</a>
                        </li>
                        <li>
                            <a href="#" onClick={handleLogout} className="hover:text-orange-500">
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            )}

            {/* Dashboard Content */}
            <div className="px-6 md:px-20 py-10">
                <h2 className="text-2xl font-bold text-[#0e0e2e] mb-6">
                    Welcome, {user.name}!
                </h2>

                {/* Performance Tracker Section */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-bold text-orange-500 mb-2">
                        📈 Performance Tracker
                    </h3>
                    <p className="text-gray-700">
                        This feature gives you a personalized dashboard with
                        auto-generated graphs, strengths, weaknesses, and trends
                        — helping you improve your performance easily.
                    </p>
                </div>

                {/* You can add more dashboard content here */}
            </div>
        </div>
    );
};

export default Dashboard;