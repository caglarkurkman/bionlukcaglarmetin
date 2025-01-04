import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const IlanlarSlider = () => {
    const sliderRef = useRef(null);
    const navigate = useNavigate(); // Yönlendirme için hook

    const scrollRight = (ref) => {
        if (ref.current) {
            ref.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };

    const scrollLeft = (ref) => {
        if (ref.current) {
            ref.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    const products = [
        { id: 1, title: "Apple AirPods Pro", price: "4.899 ₺", rating: 4.9, reviews: 74, status: "local" },
        { id: 2, title: "Apple AirPods Pro", price: "4.899 ₺", rating: 4.8, reviews: 72, status: "Yeni" },
        { id: 3, title: "Apple AirPods Pro", price: "4.899 ₺", rating: 4.9, reviews: 70, status: "local" },
        { id: 4, title: "Apple AirPods Pro", price: "4.899 ₺", rating: 4.8, reviews: 73, status: "local" },
        { id: 5, title: "Apple AirPods Pro", price: "4.899 ₺", rating: 4.8, reviews: 73, status: "local" },
        { id: 6, title: "Apple AirPods Pro", price: "4.899 ₺", rating: 4.8, reviews: 73, status: "local" },
    ];

    const handleProductClick = (id) => {
        navigate(`/productdetails/${id}`); // Ürün ID'sine göre yönlendir
    };

    return (
        <div>
            <div className="p-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => scrollLeft(sliderRef)}
                            className="w-[3rem] h-10 border-2 border-gray-300 bg-white text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-200"
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <div ref={sliderRef} className="flex gap-4 overflow-x-auto w-full scrollbar-hide snap-x snap-mandatory">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    onClick={() => handleProductClick(product.id)} // Tıklandığında yönlendir
                                    className="flex-shrink-0 border border-grey-200 rounded-lg p-4 shadow-sm w-[18.5rem] cursor-pointer"
                                >
                                    <div className="relative">
                                        <img
                                            src="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_120875347/fee_786_587_png"
                                            alt={product.title}
                                            className="w-full h-32 object-contain"
                                        />
                                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs py-1 px-2 rounded-md">
                                            {product.id}
                                        </span>
                                    </div>
                                    <h3 className="text-sm font-semibold mt-2">{product.title}</h3>
                                    <p className="text-xs text-gray-500">
                                        {product.rating}/5 ({product.reviews})
                                    </p>
                                    <p className="text-lg font-bold text-green-600 mt-2">{product.price}</p>
                                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                                        {product.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => scrollRight(sliderRef)}
                            className="w-[3rem] h-10 border-2 border-gray-300 bg-white text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-200"
                        >
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IlanlarSlider;
