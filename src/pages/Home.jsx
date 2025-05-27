import React from "react";
import Header from "../components/Header";
import Product from "../components/Product";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="h-18"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Home;
