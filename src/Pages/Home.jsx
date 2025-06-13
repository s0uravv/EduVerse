import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider1 from "../assets/Slider1.svg";
import HomeCategories from "../Components/Home-Categories/Home-Categories";
function Home() {
    return (
        <div>
            <div className="p-0 m-0 rounded-8xl">
                <img
                    className="w-full block p-0 m-0"
                    src={Slider1}
                    alt="My Icon"
                />
            </div>
            <HomeCategories />
        </div>
    );
}
export default Home;
