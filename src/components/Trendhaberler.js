import React from "react";

function TrendHaberler() {
  const trendHaberler = [
    {
      id: 1,
      baslik: "Blog Başlık 1",
      tarih: "Aralık 31, 2024",
      okumaSayisi: "3 kere okundu",
    },
    {
      id: 2,
      baslik: "Blog Başlık 2",
      tarih: "Aralık 30, 2024",
      okumaSayisi: "5 kere okundu",
    },
    {
      id: 3,
      baslik: "Blog Başlık 3",
      tarih: "Aralık 29, 2024",
      okumaSayisi: "2 kere okundu",
    },
    {
      id: 4,
      baslik: "Blog Başlık 4",
      tarih: "Aralık 28, 2024",
      okumaSayisi: "4 kere okundu",
    },
    {
      id: 5,
      baslik: "Blog Başlık 5",
      tarih: "Aralık 27, 2024",
      okumaSayisi: "6 kere okundu",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full max-w-md mx-auto">
      {/* Başlık */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-green-600">Trend Haberler</h2>
        <div className="flex gap-2">
          <button className="p-2 text-green-600">&lt;</button>
          <button className="p-2 text-green-600">&gt;</button>
        </div>
      </div>

      {/* Trend Haberler Listesi */}
      <ul className="space-y-4">
        {trendHaberler.map((haber) => (
          <li
            key={haber.id}
            className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg shadow-sm"
          >
            {/* Görsel Placeholder */}
            <div className="bg-gray-200 w-16 h-16 rounded-lg"></div>

            {/* Metin İçeriği */}
            <div className="flex flex-col">
              <h3 className="font-bold text-base text-gray-800">{haber.baslik}</h3>
              <p className="text-sm text-gray-500">{haber.tarih}</p>
              <p className="text-xs text-gray-400">{haber.okumaSayisi}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrendHaberler;
