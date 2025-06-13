import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../Data/products";

const ProductInfo = () => {
    const { id } = useParams();
    const product = products.find(p => `${p.id }`=== id);

    if (!product) {
        return <div className="p-8 text-red-600">Product not found</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row gap-10">
                {/* Left - Product Image */}
                <div className="w-full md:w-1/2 flex flex-col items-center">
                    <img
                        src={product.img}
                        alt={product.title}
                        className="w-80 h-80 object-contain rounded-lg mb-4"
                    />
                </div>

                {/* Right - Product Details */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-2">
                        {product.title}
                    </h1>

                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-green-600 text-xl font-semibold">
                            {product.price}
                        </span>
                        <span className="text-yellow-500">
                            {product.rating}
                        </span>
                        <span className="text-sm text-gray-500">(4.5/5)</span>
                    </div>

                    <p className="text-gray-700 mb-4">{product.details}</p>

                    {/* Offers */}
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold mb-1">
                            Available Offers
                        </h2>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            <li>
                                <span className="font-medium text-green-700">
                                    Bank Offer:
                                </span>{" "}
                                10% off on ICICI Credit Card
                            </li>
                            <li>
                                <span className="font-medium text-green-700">
                                    Cashback Offer:
                                </span>{" "}
                                Flat ₹100 cashback on Paytm
                            </li>
                            <li>
                                <span className="font-medium text-green-700">
                                    Partner Offer:
                                </span>{" "}
                                Get Google Nest Mini @ ₹999
                            </li>
                        </ul>
                    </div>

                    {/* Delivery Info */}
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold mb-1">Delivery</h2>
                        <p className="text-sm text-gray-700">
                            Free Delivery by{" "}
                            <span className="text-green-600 font-medium">
                                Tomorrow
                            </span>{" "}
                            |{" "}
                            <span className="text-blue-600 cursor-pointer">
                                Change
                            </span>
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg">
                            Add to Cart
                        </button>
                        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
