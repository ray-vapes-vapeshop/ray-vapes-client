import React from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

const CigarettesPage = () => {
  return (
    <>
      <Header />
      <div className="h-18"></div>
      <ProductList type="CIGARETTE" title="Сигареты" />
    </>
  );
};

export default CigarettesPage;
