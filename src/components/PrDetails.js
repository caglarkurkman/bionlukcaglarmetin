import React from "react";

const ProductDetail = () => {
  const items = [
    "Ahşap kesme makinesi",
    "Ahşap kesme makinesi",
    "Ahşap kesme makinesi",
    "Ahşap kesme makinesi",
    "Ahşap kesme makinesi",
    "Ahşap kesme makinesi",
    "Ahşap kesme makinesi",
    "Ahşap kesme makinesi",
    "Ahşap kesme makinesi"
  ];
  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      {/* Ana Kart */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Sol Alan */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <div className="border rounded-lg p-4">
            <img
              src="https://via.placeholder.com/400"
              alt="Product"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <button className="p-2 bg-gray-300 rounded-full hover:bg-gray-400">
              {"<"}
            </button>
            <div className="flex space-x-2">
              {/* Thumbnail List */}
              <img
                src="https://via.placeholder.com/100"
                alt="Thumbnail 1"
                className="w-16 h-16 rounded-lg border"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Thumbnail 2"
                className="w-16 h-16 rounded-lg border"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Thumbnail 3"
                className="w-16 h-16 rounded-lg border"
              />
            </div>
            <button className="p-2 bg-gray-300 rounded-full hover:bg-gray-400">
              {">"}
            </button>
          </div>
        </div>

        {/* Sağ Alan */}
        <div className="w-full lg:w-2/3 flex flex-col space-y-4">


          {/* Ürün Bilgileri ve Şirket Bilgileri */}
          <div className="flex flex-row lg:flex-row lg:space-x-6 space-y-3 lg:space-y-2">
            {/* Ürün Bilgileri */}
            <table className="table-auto text-sm text-gray-700 flex-1">
              <thead>
                <tr>
                  <th colSpan="2" className="text-xl font-bold">
                    Kapı Kasa Ve Pervaz Boyama Kabini ve Makinası
                  </th>
                </tr>
                <tr>
                  <th colSpan="2" className="flex justify-between items-center space-x-2 text-gray-600 text-sm">
                    <span className="flex items-center">
                      <i className="fa fa-star text-yellow-500"></i>
                      <i className="fa fa-star text-yellow-500"></i>
                      <i className="fa fa-star text-yellow-500"></i>
                      <i className="fa fa-star text-yellow-500"></i>
                      <i className="fa fa-star text-yellow-500"></i>
                      <span className="ml-1">(76)</span>
                    </span>
                    <span className="flex items-center">
                      <i className="fa-solid fa-eye text-green-500"></i>
                      <span className="ml-1">görüntülenme</span>
                    </span>
                    <span>(5)</span>
                  </th>
                </tr>
              </thead>
              <tbody className="space-y-4"> {/* Her satır arasında boşluk */}
                <tr className="bg-gray-200 border shadow-md rounded-lg">
                  <td className="font-bold pr-4">Marka:</td>
                  <td>Yeni</td>
                </tr>
                <tr className="bg-gray-200 border shadow-md rounded-lg">
                  <td className="font-bold pr-4">Durumu:</td>
                  <td>Yeni</td>
                </tr>
                <tr className="bg-gray-200 border shadow-md rounded-lg">
                  <td className="font-bold pr-4">İlan no:</td>
                  <td>-</td>
                </tr>
                <tr className="bg-gray-200 border shadow-md rounded-lg">
                  <td className="font-bold pr-4">Kimden:</td>
                  <td>-</td>
                </tr>
                <tr className="bg-gray-200 border shadow-md rounded-lg">
                  <td className="font-bold pr-4">Yıl:</td>
                  <td>2024</td>
                </tr>
                <tr className="bg-gray-200 border shadow-md rounded-lg">
                  <td className="font-bold pr-4">Adet:</td>
                  <td>1</td>
                </tr>
                <tr className="bg-gray-200 border shadow-md rounded-lg">
                  <td className="font-bold pr-4">Fiyatı:</td>
                  <td>24.000</td>
                </tr>
              </tbody>
            </table>

            {/* Şirket Bilgileri */}
            <div className="flex flex-col items-center md:w-[15rem] justify-center border rounded-lg p-4 mx-1 bg-green-50">
              <div className="bg-white p-2 border border-green-400 rounded-lg">
                <b>Şirket Bilgisi:</b>Soylu otomasyon sanayi ticaret ltd şti
                <p>
                  <span className="font-bold">Adres:</span> SSS mah SSS sok SSS Kafe Yanı KEPEZ ANTALYA
                </p>
                <p>
                  <span className="font-bold">Tel:</span> +90 532 000 00 00
                </p>
                <p className="flex justify-center">
                  <a className="text-green-500 font-bold" href="#">WHATSAPP YAZ</a>
                </p>
              </div>
              <div>
                <button className="my-[2rem] border border-2 border-green-500 hover:bg-green-100 rounded-full px-[2rem] py-[0.5rem]">
                  Mağazaya Git
                </button>
              </div>
            </div>
          </div>
          {/* Satıcının Diğer Ürünleri */}
          <div className="mt-6 bg-gray-100 shadow-md rounded-lg p-4 md:w-[15rem] ml-auto">
            <h6 className="font-semibold text-white mb-4 bg-green-500 rounded-full p-3">Satıcının Diğer Ürünleri</h6>
            <div className="overflow-y-auto max-h-60"> {/* Kaydırılabilir pencere */}
              <ul className="space-y-2 bg-white">
                {items.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="flex items-center">
                      <i className="fa-solid fa-caret-right mr-2 text-green-500"></i>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-4 w-full border-2 border-green-500 py-2 rounded-full">
              <span className="text-green-500">Tümünü Gör</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
