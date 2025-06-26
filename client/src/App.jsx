import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/HeroSection/HeroSection";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/dashboard";

function App() {
    return (
        <BrowserRouter>
           
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
