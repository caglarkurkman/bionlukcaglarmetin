import React, { useRef } from "react";
import { useState } from "react";
import IlanlarSlider from "./Ilanlar";

const HomePage = () => {
    const topSliderRef = useRef(null); // Üst slider için referans
    const bottomSliderRef = useRef(null); // Alt slider için referans
    const [activeButton, setActiveButton] = useState("ilan");

    // Sağ kaydırma fonksiyonu
    const scrollRight = (ref) => {
        if (ref.current) {
            ref.current.scrollBy({
                left: 200,
                behavior: "smooth",
            });
        }
    };

    // Sol kaydırma fonksiyonu
    const scrollLeft = (ref) => {
        if (ref.current) {
            ref.current.scrollBy({
                left: -200,
                behavior: "smooth",
            });
        }
    };
    const imageUrlsTopSlider = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNOhHZ-0c3De3DFuwuosHkDnJRDwhDb-tLdw&s",
        "https://yt3.googleusercontent.com/GYhn7FfCduNnlONcpSoiD6nzbeTcHINsDd5U4M4aGL6UNLklOyE3yyCyoWl3ivxo6B9TRjSbWg=s900-c-k-c0x00ffffff-no-rj",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mercedes-Benz_Star_2022.svg/1200px-Mercedes-Benz_Star_2022.svg.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3rzpeDu6aNSWgTMrUjDu2MgX92mYAJa4UMA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGsLV5vzzPowPFJat7I3IPI0ai-_PvjcOaBw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNOhHZ-0c3De3DFuwuosHkDnJRDwhDb-tLdw&s",
        "https://yt3.googleusercontent.com/GYhn7FfCduNnlONcpSoiD6nzbeTcHINsDd5U4M4aGL6UNLklOyE3yyCyoWl3ivxo6B9TRjSbWg=s900-c-k-c0x00ffffff-no-rj",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mercedes-Benz_Star_2022.svg/1200px-Mercedes-Benz_Star_2022.svg.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3rzpeDu6aNSWgTMrUjDu2MgX92mYAJa4UMA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGsLV5vzzPowPFJat7I3IPI0ai-_PvjcOaBw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNOhHZ-0c3De3DFuwuosHkDnJRDwhDb-tLdw&s",
        "https://yt3.googleusercontent.com/GYhn7FfCduNnlONcpSoiD6nzbeTcHINsDd5U4M4aGL6UNLklOyE3yyCyoWl3ivxo6B9TRjSbWg=s900-c-k-c0x00ffffff-no-rj",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mercedes-Benz_Star_2022.svg/1200px-Mercedes-Benz_Star_2022.svg.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3rzpeDu6aNSWgTMrUjDu2MgX92mYAJa4UMA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGsLV5vzzPowPFJat7I3IPI0ai-_PvjcOaBw&s",
        // Diğer resim URL'lerini buraya ekleyebilirsiniz
    ];
    const imageUrlsBottomSlider = [
        "https://www.lassa.com.tr/Dosyalar/jokerbanner/competus-at-3-949x712.jpg",
        "https://www.lassa.com.tr/Dosyalar/jokerbanner/competus-at-3-949x712.jpg",
        "https://www.lassa.com.tr/Dosyalar/jokerbanner/competus-at-3-949x712.jpg",
        "https://www.lassa.com.tr/Dosyalar/jokerbanner/competus-at-3-949x712.jpg",
        "https://www.lassa.com.tr/Dosyalar/jokerbanner/competus-at-3-949x712.jpg",
        "https://www.lassa.com.tr/Dosyalar/jokerbanner/competus-at-3-949x712.jpg",
        "https://www.lassa.com.tr/Dosyalar/jokerbanner/competus-at-3-949x712.jpg",
        "https://www.lassa.com.tr/Dosyalar/jokerbanner/competus-at-3-949x712.jpg",
        "https://www.lassa.com.tr/Dosyalar/jokerbanner/competus-at-3-949x712.jpg",
    ];

    return (
        <div className="bg-gray-100 p-4">
            {/* Üst Simge Çubuğu */}
            <div className="flex justify-center">
                <div className="w-full max-w-screen-xl flex items-center relative">
                    {/* Üst Simge Çubuğu */}
                    <div className="mt-6 flex justify-center">
                        <div className="w-full max-w-screen-xl flex items-center space-x-4">
                            {/* Sol Ok */}
                            <button
                                onClick={() => scrollLeft(topSliderRef)}
                                className="w-[6rem] h-10 border-2 border-white bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700"
                            >
                                <i className="fa-solid fa-arrow-left"></i>
                            </button>

                            <div ref={topSliderRef} className="flex gap-3 overflow-hidden w-full">
                                {imageUrlsTopSlider.map((url, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 border-4 border-green-600 w-[6rem] h-[6rem] bg-gray-200 rounded-full shadow-md flex items-center justify-center"
                                    >
                                        <img
                                            src={url}
                                            alt={`Lassa Multiways ${index + 1}`}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Sağ Ok */}
                            <button
                                onClick={() => scrollRight(topSliderRef)}
                                className="w-[6rem] h-10 bg-green-600 border-2 border-white text-white rounded-full flex items-center justify-center hover:bg-green-700"
                            >
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reklam Alanı */}
            <div className="mt-6 bg-green-600 h-[40rem] p-8 rounded-lg shadow-sm flex flex-col text-left">
                {/* Beyaz Alan */}
                <div className="w-full bg-white p-8 rounded-lg flex flex-col md:flex-row justify-between">
                    {/* Sol Metin Alanı */}
                    <div className="w-full md:w-1/2 justify-between">
                        <h2 className="text-2xl font-bold mb-4">Lassa Ürünlerinde</h2>
                        <p className="text-3xl text-green-600 font-bold">Sepette %20 İndirim</p>
                        <p className="text-sm text-gray-500">
                            Lorem ipsum is placeholder text commonly used in the graphic,
                            print, and publishing industries.
                        </p>
                        <button className="mt-4 flex items-center justify-between bg-green-600 w-[15rem] text-white py-2 px-8 rounded-2xl">
                            <span>Şimdi Daha Fazlası</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>

                    {/* Sağ Görsel Alanı */}
                    <div className="w-full md:w-1/2 h-[20rem] mt-6 md:mt-0">
                        <div className="relative w-full h-full bg-gray-300 rounded-lg overflow-hidden">
                            <img
                                src="https://www.lassa.com.tr/Dosyalar/content/transway-mobile-last.jpg"
                                alt="Lassa Banner"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Alt Kaydırılabilir Slider */}
                <div className="mt-6 flex justify-center">
                    <div className="w-full max-w-screen-xl flex items-center space-x-4">
                        {/* Sol Ok */}
                        <button
                            onClick={() => scrollLeft(bottomSliderRef)}
                            className="w-[6rem] h-10 border-2 border-white bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700"
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>

                        {/* Alt Kaydırılabilir Slider */}
                        <div
                            ref={bottomSliderRef}
                            className="flex gap-4 overflow-hidden w-full"
                        >
                            {imageUrlsBottomSlider.map((src, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 border-4 border-white w-[14rem] h-[10rem] bg-gray-200 rounded-xl shadow-md flex items-center justify-center"
                                >
                                    <img
                                        src={src}
                                        alt={`Lassa Multiways ${index + 1}`}
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Sağ Ok */}
                        <button
                            onClick={() => scrollRight(bottomSliderRef)}
                            className="w-[6rem] h-10 bg-green-600 border-2 border-white text-white rounded-full flex items-center justify-center hover:bg-green-700"
                        >
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Ürün Listesi */}
            <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
                {/* Sekme Başlıkları */}
                <div className="flex space-x-6 border-b pb-2">
                    <button
                        className={`w-[6rem] font-semibold p-1 ${activeButton === "ilan" ? "bg-green-600 text-white border-b-2 border-green-600" : "text-green-600"}`}
                        onClick={() => setActiveButton("ilan")}
                    >
                        İlan
                    </button>
                    <button
                        className={`w-[6rem] ${activeButton === "alisveris" ? "bg-green-600 text-white border-b-2 border-green-600" : "text-green-600"}`}
                        onClick={() => setActiveButton("alisveris")}
                    >
                        Alışveriş
                    </button>
                </div>

                <div className="flex flex-col">
                    <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
                        <IlanlarSlider />
                        <IlanlarSlider />
                    </div>
                </div>

                {/* Daha Fazla Göster Butonu */}
                <div className="text-center mt-6">
                    <button className="bg-green-600 text-white py-2 px-4 rounded-md">
                        Daha Fazlasını Göster
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
