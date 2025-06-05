import React from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

const LiquidPage = () => {
  return (
    <>
      <Header />
      <div className="h-18"></div>
      <ProductList type="LIQUID"/>
    </>
  );
};

export default LiquidPage;
