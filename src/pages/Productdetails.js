import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductDetail from "../components/PrDetails";

const ProductDetails = () => {
    const { id } = useParams();
    const location = useLocation();

    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <div className="bg-gray-100">
            <Header />
            <ProductDetail/>
            <Footer />
        </div>
    );

}
export default ProductDetails;