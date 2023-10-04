import React from "react";
import "../index.css";
import Products from "../components/product/Products";
import charger from "../assets/charger.jpg";
import ProductContainer from "../components/ProductsContainer/ProductContainer";

const ShopPage = () => {
  return (
    <>
      <div className=" z-10 mt-32 flex  min-h-screen flex-col content-center items-center justify-center scroll-smooth  sm:mt-20  ">
        <h1 className="m-8">products</h1>

        <ProductContainer />
      </div>
    </>
  );
};

export default ShopPage;
