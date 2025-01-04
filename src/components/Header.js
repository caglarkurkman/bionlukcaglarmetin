import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
    const [activeLink, setActiveLink] = useState("Anasayfa");
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        "Metal İşleme Makineleri",
        "Tahta işleme Makineleri",
        "İnşaat Makineleri",
        "Forklift",
        "Otomasyon teknolojisi",
        "Makine teknolojisi",
        "Tahrik / Konveynör teknolojisi",
    ];

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    const handleCategoryClick = (category) => {
        navigate(`/categories`);
        setIsOpen(false);
    };


    return (
        <nav className="border-b bg-white">
            <div className="bg-green-700 text-white text-sm py-4 px-2">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Sol Menü */}
                    <ul className="flex space-x-6">
                        {[
                            { name: "Anasayfa", path: "/" },
                            { name: "Hakkımızda", path: "/about" },
                            { name: "Hizmetlerimiz", path: "/services" },
                            { name: "Mağazalar", path: "/stores" },
                            { name: "Markalar", path: "/brands" },
                        ].map((link, index) => (
                            <li key={index}>
                                <Link
                                    to={link.path} // Link yönlendirmesi
                                    className={`${activeLink === link.name
                                            ? "text-black px-2 py-1 rounded-md"
                                            : "text-white"
                                        } hover:text-black`}
                                    onClick={() => handleLinkClick(link.name)} // Aktif linki belirle
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Sağ Menü */}
                    <div className="flex items-center space-x-6">
                        {["Hakkımızda", "İade Politikası", "Yardım Merkezi", "Mağaza Aç"].map((link, index) => (
                            <Link
                                key={index}
                                to="/about"
                                className={`${activeLink === link
                                        ? "text-black px-2 py-1 rounded-md"
                                        : "text-white"
                                    } hover:text-black`}
                                onClick={() => handleLinkClick(link)}
                            >
                                {link}
                            </Link>
                        ))}

                        {/* Dil ve Para Birimi */}
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

            <div className="container mx-auto border-t relative">
                <div
                    onClick={toggleDropdown}
                    className="flex items-center space-x-2 px-4 mx-12 text-black font-medium border-x border-gray-300 py-2 w-[10rem] cursor-pointer hover:bg-gray-100"
                >
                    <i className="fa-solid fa-table-cells"></i>
                    <span>Kategoriler</span>
                    <i className={`fa-solid fa-chevron-${isOpen ? "up" : "down"} ml-auto text-sm`}></i>
                </div>

                {isOpen && (
                    <div className="absolute left-[3rem] bg-white border border-gray-300 mt-1 w-[15rem] rounded-md shadow-lg z-10">
                        <ul className="py-2">
                            {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleCategoryClick(item.toLowerCase())}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;
