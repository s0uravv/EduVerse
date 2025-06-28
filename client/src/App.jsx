import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/HeroSection/HeroSection";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/dashboard";
import DashboardTeacher from "./Pages/dashboardteacher";
import AddQotd from "./Components/DashboardTeacher/AddQotd";
//import DashboardTeacher from "./Components/DashboardTeacher/DashboardTeacher";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                    path="/teacher-dashboard"
                    element={<DashboardTeacher />}
                />
                <Route
                    path="/teacher-dashboard"
                    element={<DashboardTeacher />}
                />
                <Route
                    path="/addqotd"
                    element={<AddQotd />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
