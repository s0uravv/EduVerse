import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardTeacherNav from "../Components/DashboardTeacher/DashboardTeacherNav";
import DashboardTeacher from "../Components/DashboardTeacher/DashboardTeacher";

function DashboardTeacherPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <DashboardTeacherNav />
            <div className="max-w-7xl mx-auto px-4 py-6">
                <Routes>
                    <Route path="/" element={<DashboardTeacher />} />
                </Routes>
            </div>
        </div>
    );
}

export default DashboardTeacherPage;