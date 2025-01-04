import React, { useRef } from 'react';
import { useState } from 'react';

const ProductDetail = () => {
  const carouselRef = useRef(null);
  const [activeButton, setActiveButton] = useState("Ürün Açıklaması");
  const [rating, setRating] = useState(0);
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (index) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Sağ ve sola kaydırma işlevi
  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -150,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 150,
      behavior: 'smooth',
    });
  };

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
  const buttons = [
    "Ürün Açıklaması",
    "Ürün Yorumu",
    "İlan Konum",
    "İlan Soru Sor",
    "Teklif Gönder",
    "Pdf Alanı",
  ];
  const questions = [
    "Ahşap Kesme Makinası ne İşe Yarar?",
    "Ahşap Kesme Makinasının Fiyatı Nedir?",
    "Ahşap Kesme Makinası Nereden Alınır?",
    "Ahşap Kesme Makinası Garantili mi?",
    "Ahşap Kesme Makinasının Özellikleri Nelerdir?",
  ];
  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      {/* Ana Kart */}
      <div className="bg-white rounded-lg p-6 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
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
            <button
              className="w-[2.5rem] h-[2.5rem] bg-green-500 text-white font-bold rounded-full hover:bg-green-400 flex items-center justify-center"
              onClick={scrollLeft}
            >
              {<i class="fa-solid fa-angle-left"></i>}
            </button>


            <div
              ref={carouselRef}
              className="flex space-x-2 overflow-x-auto max-w-full scrollbar-hide"
            >
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
              <img
                src="https://via.placeholder.com/100"
                alt="Thumbnail 4"
                className="w-16 h-16 rounded-lg border"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Thumbnail 5"
                className="w-16 h-16 rounded-lg border"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Thumbnail 6"
                className="w-16 h-16 rounded-lg border"
              />
            </div>

            <button
              className="w-[2.5rem] h-[2.5rem] text-white font-bold bg-green-500 rounded-full hover:bg-green-400"
              onClick={scrollRight}
            >
              {<i class="fa-solid fa-angle-right"></i>}
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
          <button className="mt-4 md:w-[15rem] ml-auto border-2 border-green-500 py-2 rounded-full">
            <span className="text-green-500">Hata Bildirimi</span>
          </button>
        </div>

      </div>
      <div className="bg-white mt-[3rem] p-4 rounded-lg  p-6 flex flex-col lg:flex-col space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="bg-white rounded-lg p-6 flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-6">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`w-[10rem] p-2 border-2 rounded-full text-center ${activeButton === button
                ? "bg-green-600 text-white border-green-600"
                : "bg-green-50 border-green-500"
                }`}
              onClick={() => setActiveButton(button)}
            >
              {button}
            </button>
          ))}
        </div>
        <div className='bg-white rounded-lg p-6 flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6'>
          <div className='flex flex-col'>
            <h1 className='font-bold'>Yorum Yapın</h1>
            <span>Yorum yapabilmek için üye girişi yapılması zorunludur</span>
            <div>
              <button className='w-[10rem] p-2 m-[1rem] border-2 rounded-full text-center bg-green-600 hover:bg-white text-white hover:text-green-600 border-green-600'>
                Giriş Yap
              </button>
              <button className='w-[10rem] p-2 m-[1rem] border-2 rounded-full text-center bg-green-600 hover:bg-white text-white hover:text-green-600 border-green-600'>
                Kayıt Ol
              </button>
            </div>
          </div>
          <div className="bg-green-50 border-2 w-1/2 p-6 items-center border-green-600 flex md:flex-row rounded-xl">
            <div className="bg-white border-2 border-green-600 rounded-xl mr-[1rem] w-1/2 h-[15rem]">
              <img src="" alt="Product" />
            </div>
            <div className="flex flex-col text-center">
              <span>0 Değerlendirme ve Yorum</span>
              <span className="text-green-600">Bu Ürün İçin Değerlendirme Yapılmamış!</span>
              <div className="mt-4 flex justify-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i
                    key={star}
                    className={`fa-star ${rating >= star ? "fa-solid text-green-600" : "fa-regular text-gray-400"
                      } text-2xl cursor-pointer`}
                    onClick={() => setRating(star)}
                  ></i>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white mt-[3rem] p-4 rounded-lg  p-6 flex flex-col lg:flex-col space-y-6 lg:space-y-0 lg:space-x-6'>

        <h1 className='font-bold text-xl'>Sıkça Sorulan Sorular</h1>
        <div className='space-y-4 '>
          {questions.map((question, index) => (
            <div key={index}>
              <div
                className="cursor-pointer rounded-full text-green-600 p-[1rem] flex justify-between items-center border-2 border-green-600"
                onClick={() => toggleQuestion(index)}
              >
                <span>{question}</span>
                <i className={`fa-solid ${openQuestions[index] ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              </div>
              {openQuestions[index] && (
                <div className="bg-green-100 p-[1rem] border-2 border-t-0 rounded-b-2xl border-green-600">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
