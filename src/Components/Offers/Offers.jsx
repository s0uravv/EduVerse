import React from "react";
import { products } from "../../Data/products";

const Offers = () => {
    return (
        <section className="py-8 bg-white">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
                Offers
            </h2>
            <div className="container mx-auto px-4 overflow-x-auto">
                <div className="flex space-x-4 w-max">
                    {products.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="group flex flex-col items-center bg-gray-100 p-4 rounded-lg transition-shadow hover:shadow-lg min-w-[300px]"
                        >
                            <img
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1749643098/Croma%20Assets/CMS/LP%20Page%20Banners/2025/More%20For%20Money/June/Monsoon%20sale-12th%20to%2015th/RotatingStrip_ICICI_EMI_imas1w.png?tr=w-720"
                                alt={item.name}
                                className="max-w-[300px] object-cover mb-2 group-hover:scale-110 transition-transform"
                            />
                            <span className="text-center text-sm font-medium text-gray-800 group-hover:text-blue-600">
                                {item.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offers;
