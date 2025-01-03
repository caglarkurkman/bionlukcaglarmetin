import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TrendHaberler from "../components/Trendhaberler";
import Card from "../components/Card";
import BlogCard from "../components/BlogCard";

function Bloglarimiz() {
    return (
        <>
            <Header />
            <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4 space-y-6">
                <div className="flex flex-col md:flex-row w-full max-w-7xl space-y-6 md:space-y-0 md:space-x-6">
                    {/* Sol Kolon */}
                    <div className="w-full md:w-1/4 space-y-6">
                        {/* Blog Kategorileri */}
                        <div className="bg-white rounded-lg shadow p-4">
                            <h2 className="text-xl font-bold mb-4 text-green-600">Blog Kategorileri</h2>
                            <ul className="space-y-2">
                                {[
                                    "Yazılım",
                                    "Grafik",
                                    "Network",
                                    "Ekonomik",
                                    "Kariyer",
                                    "Hardware",
                                    "Kategori Ekleyin",
                                ].map((kategori, index) => (
                                    <li
                                        key={index}
                                        className="flex justify-between items-center border-b py-2"
                                    >
                                        <span>{kategori}</span>
                                        <button className="text-green-500 font-semibold">+</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <TrendHaberler />

                        {/* Etiketler */}
                        <div className="bg-white rounded-lg shadow p-4">
                            <h2 className="text-xl font-bold mb-4 text-green-600">Etiketler</h2>
                            <div className="flex flex-wrap gap-2">
                                {["Etiket", "Etiket", "Etiket", "Etiket", "Etiket"].map(
                                    (etiket, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-200 text-sm rounded-full"
                                        >
                                            {etiket}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                        {/* Trend Haberler */}


                        {/* Banner Alanı */}
                        <div className="bg-gray-200 h-24 rounded-lg shadow flex items-center justify-center">
                            <span className="text-gray-500">Banner Alanı</span>
                        </div>
                    </div>


                    {/* Orta Kolon */}
                    <div className="w-full md:w-3/4 space-y-6">

                        <Card />
                        {/* Blog Kartları */}

                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />

                        {/* Daha Fazla Göster */}
                        <div className="flex justify-center">
                            <button className="mb-16 px-6 py-2 bg-green-600 text-white font-bold rounded-lg">
                                Daha Fazla Göster
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Bloglarimiz;
