import React from "react";

const Card = () => {
  return (
<div className="bg-white p-8 border rounded-lg shadow-lg">
      <div className="flex items-center space-x-8">
        {/* Görsel Placeholder */}
        <div className="w-40 h-0 bg-gray-300 rounded"></div>
        {/* Metin İçeriği */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h3>
          <p className="text-base text-gray-600 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur...
          </p>
          <div className="flex justify-between items-center text-sm text-gray-500 mt-6">
            <span>Aralık 31, 2022</span>
            <span>4 Mins read</span>
            <a
              href="#"
              className="text-green-600 hover:text-green-800 flex items-center"
            >
              Devamı <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
