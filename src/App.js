import '@fortawesome/fontawesome-free/css/all.min.css';
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AdvertisementSection from './components/Advertisement';



const SortingDropdown = () => {
  const options = [
    "En düşük fiyat",
    "En yüksek fiyat",
    "En yeniler",
    "Çok satanlar",
    "Çok beğenilenler",
  ];

  return (
    
    <div className="relative">
      <select className="bg-white border rounded-lg px-4 py-2">
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

const ProductCard = ({ title, price }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
    <div className="h-32 bg-gray-200 rounded-md mb-4"></div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-gray-600">Kısa açıklama</p>
    <span className="block text-green-500 font-bold mt-2">{price}</span>
  </div>
);

const CategorySection = ({ title, products }) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <AdvertisementSection />
    <div className="grid grid-cols-3 gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} title={product.title} price={product.price} />
      ))}
    </div>
    <div className="flex items-center justify-center my-2">
      <button className="border border-green-600 rounded-md text-green-600 px-8 py-2 hover:bg-green-700 hover:text-white">
        Daha Fazlasını Göster
      </button>
    </div>
  </section>
);

const FilterSection = ({ title, options, customContent }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-green-600 mb-2">{title}</h3>
    {customContent ? (
      customContent
    ) : (
      <ul className="space-y-2 overflow-y-auto max-h-40 pr-2">
        {options.map((option, index) => (
          <li key={index} className="text-gray-700 flex items-center">
            <input
              type="checkbox"
              id={`${title}-${index}`}
              className="mr-2"
            />
            <label htmlFor={`${title}-${index}`} className="cursor-pointer">
              {option}
            </label>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const App = () => {
  const products = [
    { title: "Apple AirPods Pro", price: "4.599 TL" },
    { title: "Apple AirPods Pro", price: "4.599 TL" },
    { title: "Apple AirPods Pro", price: "4.599 TL" },
    { title: "Apple AirPods Pro", price: "4.599 TL" },
    { title: "Apple AirPods Pro", price: "4.599 TL" },
    { title: "Apple AirPods Pro", price: "4.599 TL" },
  ];

  return (
    
    <div className="bg-gray-100 min-h-screen">
      <Header />
    

      <div className="container mx-auto py-8 flex">
        {/* Sidebar */}
        <aside className="w-1/4 h-[64rem] bg-white rounded-lg shadow-md p-6">

          
          <FilterSection
            title="Kategoriler"
            options={[
              "Metal işleme makineleri",
              "Tarım / İşleme makineleri",
              "İnşaat makineleri",
              "Forklift",
              "Otomasyon teknolojisi",
              "Makine teknolojisi",
              "Tarım / Kamyonet teknolojisi",
            ]}
          />
          <FilterSection
            title="Marka"
            options={["Marka 1", "Marka 2", "Marka 3", "Marka 4"]}
          />
          <FilterSection
            title="Durumu"
            options={["Yeni", "Kullanılmış", "Yenilenmiş"]}
          />
          <FilterSection
            title="Satıcı Tip"
            options={["Bireysel", "Kurumsal"]}
          />
          <FilterSection
            title="Fiyat"
            customContent={(
              <div>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    placeholder="En az"
                    className="w-1/2 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                  <input
                    type="number"
                    placeholder="En çok"
                    className="w-1/2 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                  <button className="bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700">Ara
                  </button>
                </div>
                <ul className="space-y-2 mt-2">
                  {["50 - 1200 TL", "1200 - 5300 TL", "5300 - 11000 TL"].map((range, index) => (
                    <li key={index} className="text-gray-700 flex items-center">
                      <input
                        type="radio"
                        name="price"
                        id={`price-${index}`}
                        className="mr-2"
                      />
                      <label htmlFor={`price-${index}`} className="cursor-pointer">
                        {range}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          />
          <FilterSection
  title="Kelime Filtresi"
  customContent={(
    <div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Kelime yazınız"
          className="flex-grow px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button className="flex justify-center items-center bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700">
          Ara
        </button>
      </div>
    </div>
  )}
/>
          
        </aside>

        {/* Main Content */}
        <main className="w-3/4 pl-6">
          <div className="flex justify-end mb-4">
            <SortingDropdown />
          </div>
          <CategorySection title="İlan Kategorisi" products={products} />
          <CategorySection title="Alışveriş Kategorisi" products={products} />
        </main>
      </div>

      <Footer/>
    </div>
  );
};

export default App;
