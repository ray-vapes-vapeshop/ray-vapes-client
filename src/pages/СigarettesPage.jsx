import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
import Header from "../components/Header";

const CigarettesPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/api/products", {
        params: {
          currentPage: 1,
          pageSize: 10,
          "sortBy[id]": "asc",
          type: "CIGARETTE",
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.success && data.data && Array.isArray(data.data.content)) {
          setProducts(data.data.content);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="h-18"></div>
      <div className="flex flex-wrap items-start gap-4 p-4 justify-center">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              priceCentsPack={product.priceTiers[0]?.priceCents || 0}
              priceCentsBlock={product.priceTiers[1]?.priceCents || 0}
              type={product.type}
            />
          );
        })}
      </div>
    </>
  );
};

export default CigarettesPage;

