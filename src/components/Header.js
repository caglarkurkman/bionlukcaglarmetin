import React, { useState } from 'react';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("Anasayfa"); // Varsayılan olarak aktif link "Anasayfa"

    const handleLinkClick = (link) => {
        setActiveLink(link); // Tıklanan linki aktif yap
    };

    return (
        <nav className="border-b">
            {/* Üst Menü (Yeşil Alan) */}
            <div className="bg-green-700 text-white text-sm py-4 px-2">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Sol Menü */}
                    <ul className="flex space-x-6">
                        {["Anasayfa", "Hakkımızda", "Hizmetlerimiz", "Mağazalar", "Markalar"].map((link, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    className={`${
                                        activeLink === link
                                            ? "text-black px-2 py-1 rounded-md"
                                            : "text-white"
                                    } hover:text-black`} // Aktifse siyah ve beyaz arka plan
                                    onClick={() => handleLinkClick(link)} // Tıklanan linki aktif yap
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Sağ Menü */}
                    <div className="flex items-center space-x-6">
                        {["Hakkımızda", "İade Politikası", "Yardım Merkezi", "Mağaza Aç"].map((link, index) => (
                            <a
                                key={index}
                                href="#"
                                className={`${
                                    activeLink === link
                                        ? "text-black px-2 py-1 rounded-md"
                                        : "text-white"
                                } hover:text-black`} // Aktifse siyah ve beyaz arka plan
                                onClick={() => handleLinkClick(link)} // Tıklanan linki aktif yap
                            >
                                {link}
                            </a>
                        ))}
                        <select className="bg-green-700 border-none text-white">
                            <option>ENG</option>
                            <option>TR</option>
                        </select>
                        <select className="bg-green-700 border-none text-white">
                            <option>USD</option>
                            <option>EUR</option>
                            <option>TRY</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Alt Menü */}
            <div className="container mx-auto flex items-center justify-between py-4 px-4">
                {/* Arama Kutusu */}
                <div className="flex justify-center items-center border rounded-full px-2 mx-auto py-2 w-1/3">
                    <input
                        type="text"
                        placeholder="Aradığınız ürün veya markayı yazınız..."
                        className="flex-grow focus:outline-none p-2"
                    />
                    <button className="text-white bg-green-600 rounded-full w-10 h-10 flex items-center justify-center">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                {/* Sağ İkonlar */}
                <div className="flex items-center space-x-4">
                    <button className="text-green-700 text-2xl">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                    <button className="relative text-2xl text-green-700">
                        <i className="fa-solid fa-bell"></i>
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
                    </button>
                    <button className="border border-green-700 text-green-700 rounded-full px-4 py-1 hover:bg-green-700 hover:text-white">
                        İlan Giriş
                    </button>
                    <button className="bg-green-700 text-white rounded-full px-4 py-1 hover:bg-green-800">
                        Üye Giriş
                    </button>
                </div>
            </div>

            {/* Kategoriler Menüsü */}
            <div className="container mx-auto border-t">
                <div className="flex items-center space-x-2 px-4 mx-12 text-black font-medium border-x border-gray-300 py-2 w-40">
                    <i className="fa-solid fa-table-cells"></i> {/* 4x4'e yakın bir ikon */}
                    <span>Kategoriler</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
