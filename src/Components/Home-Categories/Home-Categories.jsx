import React from "react";
import TechMandiImg from "../../assets/TechMandi.jpg";
//import TechMandiImg from "./TechMandi.jpg";
 import LaptopImg from "../../assets/phone.jpg";
 import CameraImg from "../../assets/laptop.jpg";
 import KitchenImg from "../../assets/earbuds.jpg";
 import AudioImg from "../../assets/headphone.jpg";
 import WearableImg from "../../assets/speaker.jpg";

const categories = [
    { id: 1, title: "Mobiles", img: TechMandiImg },
    { id: 2, title: "Laptops", img: LaptopImg },
    { id: 3, title: "Cameras", img: CameraImg },
    { id: 4, title: "Kitchen", img: KitchenImg },
    { id: 5, title: "Audio", img: AudioImg },
    { id: 6, title: "Wearables", img: WearableImg }
];
const HomeCategory = () => (
    <section className="py-8 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Shop by Category
        </h2>

        {/* Container: scroll on small, grid on medium+ */}
       <div className="px-4 overflow-x-auto">
  <div className="flex gap-4 w-fit">
    {categories.map(cat => (
      <a
        key={cat.id}
        href={`/category/${cat.title.toLowerCase()}`}
        className="flex-shrink-0 flex flex-col items-center bg-gray-100 p-4 rounded-lg transition-shadow hover:shadow-lg w-28"
      >
        <img
          src={cat.img}
          alt={cat.title}
          className="w-16 h-16 object-cover mb-2 rounded-full hover:scale-110 transition-transform"
        />
        <span className="text-center text-sm font-medium text-gray-800 hover:text-blue-600">
          {cat.title}
        </span>
      </a>
    ))}
  </div>
</div>
    </section>
);

export default HomeCategory;
