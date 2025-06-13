
import React from "react";
import TechMandiImg from "../assets/TechMandi.jpg";
// import LaptopImg from "../assets/cat-laptop.jpg";
// import CameraImg from "../assets/cat-camera.jpg";
// import KitchenImg from "../assets/cat-kitchen.jpg";
// import AudioImg from "../assets/cat-audio.jpg";
// import WearableImg from "../assets/cat-wearable.jpg";

const categories = [
    { id: 1, title: "Mobiles", img: TechMandiImg },
    { id: 2, title: "Laptops", img: TechMandiImg },
    { id: 3, title: "Cameras", img: TechMandiImg },
    { id: 4, title: "Kitchen", img: TechMandiImg },
    { id: 5, title: "Audio", img: TechMandiImg },
    { id: 6, title: "Wearables", img: TechMandiImg }
];
const CategorySection = () => (
    <section className="py-8 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Shop by Category
        </h2>
        <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map(cat => (
                <a
                    key={cat.id}
                    href={`/category/${cat.title.toLowerCase()}`}
                    className="group flex flex-col items-center bg-gray-100 p-4 rounded-lg transition-shadow hover:shadow-lg"
                >
                    <img
                        src={cat.img}
                        alt={cat.title}
                        className="w-16 h-16 object-cover mb-2 rounded-full group-hover:scale-110 transition-transform"
                    />
                    <span className="text-center text-sm font-medium text-gray-800 group-hover:text-blue-600">
                        {cat.title}
                    </span>
                </a>
            ))}
        </div>
    </section>
);

export default CategorySection;
