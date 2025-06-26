import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardNav from "../Components/Dashboard/DashboardNav";
import DashboardHome from "../Components/Dashboard/DashboardHome";
function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-50">
            <DashboardNav />
            <div className="max-w-7xl mx-auto px-4 py-6">
                <Routes>
                    <Route path="/" element={<DashboardHome />} />
                </Routes>
            </div>
        </div>
    );
}

export default Dashboard;
