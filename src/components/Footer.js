import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-6 mt-8 shadow-md">
      <div className="container mx-auto grid grid-cols-5 gap-4 text-gray-700">
        {/* Sol Alan */}
        <div className="text-left">
          <p className="text-sm mb-4">
            Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook text-2xl"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter text-2xl"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin text-2xl"></i>
            </a>
          </div>
          
        </div>

        {/* Hızlı Linkler - 1 */}
        <div className="text-left">
          <h3 className="font-bold mb-4">Hızlı Linkler</h3>
          <ul className="space-y-2">
            <li><a href="#">Anasayfa</a></li>
            <li><a href="#">Hakkımızda</a></li>
            <li><a href="#">Hizmetlerimiz</a></li>
            <li><a href="#">Çiftçi Yapı</a></li>
            <li><a href="#">Şartlar ve Koşullar</a></li>
            <li><a href="#">Mağazalar</a></li>
            <li><a href="#">Kontratlarımız</a></li>
            <li><a href="#">Emlak</a></li>
          </ul>
        </div>

        {/* Hızlı Linkler - 2 */}
        <div className="text-left">
          <h3 className="font-bold mb-4">Hızlı Linkler</h3>
          <ul className="space-y-2">
            <li><a href="#">Otomotiv</a></li>
            <li><a href="#">Tekstil</a></li>
            <li><a href="#">Tablet</a></li>
            <li><a href="#">Bilgisayar & Ofis</a></li>
          </ul>
        </div>

        {/* Kaynaklar */}
        <div className="text-left">
          <h3 className="font-bold mb-4">Kaynaklar</h3>
          <ul className="space-y-2">
          <li><Link to="/bloglarimiz">Bloglarımız</Link></li>
            <li><Link to="/kaynaklar">Kaynaklar</Link></li>
            <li><Link to="/gizlilik">Gizlilik Politikası</Link></li>
            <li><Link to="/bizkimiz">Biz Kimiz</Link></li>
          </ul>
        </div>

        {/* Yardım */}
        <div className="text-left">
          <h3 className="font-bold mb-4">Yardım</h3>
          <ul className="space-y-2">
            <li><a href="#">Yardım</a></li>
            <li><a href="#">Sıkça Sorulan Sorular</a></li>
            <li><a href="#">İletişim</a></li>
          </ul>
          <p className="text-sm mt-4">
            Harman bir mağaza oluşturmak istiyor
            <br />
            <a href="#" className="text-green-600">Mağaza oluştur.</a>
          </p>
          <p className="text-sm font-bold mt-4">
            +90 222 222 22 22
            <br />
            <a href="mailto:support@website.com" className="text-green-600">support@website.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;