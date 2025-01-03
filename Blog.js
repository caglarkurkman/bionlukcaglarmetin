import Footer from "./components/Footer";
import Header from "./components/Header";
import React from 'react';

<Header />

const Sidebar = () => {
    return (
        <div className="w-full max-w-xs p-4 space-y-6">
            {/* Blog Kategorileri */}
            <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-bold text-green-700 mb-4">Blog Kategorileri</h2>
                <ul className="space-y-2">
                    {['Turizm', 'Eğlence', 'Mekanik', 'Finans', 'Kariyer', 'Kategori Başlık'].map((category, index) => (
                        <li key={index} className="flex justify-between items-center">
                            <span>{category}</span>
                            <span className="text-green-600">&gt;</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Trend Haberler */}
            <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-bold text-green-700 mb-4">Trend Haberler</h2>
                <div className="space-y-4">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gray-300 rounded-md"></div>
                            <div>
                                <h3 className="text-sm font-bold">Blog Başlık</h3>
                                <p className="text-xs text-gray-500">Kısa açıklama...</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-4">
                    <button className="w-2 h-2 bg-gray-300 rounded-full mx-1"></button>
                    <button className="w-2 h-2 bg-green-600 rounded-full mx-1"></button>
                    <button className="w-2 h-2 bg-gray-300 rounded-full mx-1"></button>
                </div>
            </div>

            {/* Etiketler */}
            <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-bold text-green-700 mb-4">Etiketler</h2>
                <div className="flex flex-wrap gap-2">
                    {['Etiket', 'Etiket', 'Etiket', 'Etiket', 'Etiket'].map((tag, index) => (
                        <span
                            key={index}
                            className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Banner Alanı */}
            <div className="bg-gray-100 rounded-lg shadow-md p-4 h-32 flex items-center justify-center">
                <span className="text-gray-500">Banner Alanı</span>
            </div>
        </div>
    );
};

export default Sidebar;



<Footer />