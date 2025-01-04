import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductDetail from "../components/PrDetails";
import IlanlarSlider from "../components/Ilanlar";

const ProductDetails = () => {
    const { id } = useParams();
    const location = useLocation();

    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <div className="bg-gray-100">
            <Header />
            <ProductDetail />
            <div className="m-[2rem] bg-white my-[1rem] border rounded-2xl">
                <div className="bg-white px-[5rem] py-[1rem] text-2xl rounded-2xl font-bold">
                    <span className="m-4">İlan Ürünler</span>
                </div>
                <div className="p-[2rem]">
                    <IlanlarSlider />
                </div>
            </div>
            <div className="m-[2rem] bg-white border rounded-2xl">
                <div className="bg-white px-[5rem] py-[1rem] text-2xl rounded-2xl font-bold">
                    <span className="m-4">Alışveriş Ürünler</span>
                </div>
                <div className="p-[2rem]">
                    <IlanlarSlider />
                </div>
            </div>
            <Footer />
        </div>
    );

}
export default ProductDetails;