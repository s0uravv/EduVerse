import React from "react";
import { Link } from "react-router-dom";
import TechMandiImg from "../../assets/TechMandi.jpg";
import { products } from "../../Data/products";

const PopularProducts = () => {
    return (
        <div className="px-4 py-8 bg-gray-100">
            <h2 className="text-2xl font-bold text-center mb-8">
                Popular Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {products.map(product => (
                    <Link to={`/product/${product.id}`} key={product.id}>
                        <div className="w-full max-w-sm bg-white rounded-2xl shadow-md overflow-hidden p-4">
                            <img
                                src={product.img}
                                alt={product.title}
                                className="w-full h-52 object-contain"
                            />

                            <div className="text-xl font-semibold text-gray-800 mt-3">
                                {product.price}
                            </div>

                            <p className="text-sm text-gray-600 mt-2">
                                {product.details}
                            </p>

                            <div className="flex items-center mt-2">
                                <span className="text-yellow-500 text-lg">
                                    {product.rating}
                                </span>
                                <span className="text-sm text-gray-500 ml-2">
                                    (4.5/5)
                                </span>
                            </div>

                            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition duration-200">
                                Add to Cart
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PopularProducts;