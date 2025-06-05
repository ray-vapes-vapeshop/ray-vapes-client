import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

const ProductList = ({ type, extraParams = {} }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/api/products", {
        params: {
          currentPage: 1,
          pageSize: 10,
          "sortBy[id]": "asc",
          type,
          ...extraParams,
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.success && data.data && Array.isArray(data.data.content)) {
          setProducts(data.data.content);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [type, JSON.stringify(extraParams)]);

  return (
    <>
      <div className="flex flex-wrap items-start gap-4 p-4 justify-center">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            priceCents={product.priceTiers[0]?.priceCents || 0}
            quantity={product.stockItems[0]?.quantity || 0}
            variants={
              product.electronicSpec?.variants ||
              product.snusSpec?.variants ||
              product.liquidSpec?.variants ||
              product.cigaretteSpec?.variants ||
              []
            }
            puffs={product.electronicSpec?.puffs}
            nicotinePct={product.electronicSpec?.nicotinePct}
            chargingType={product.electronicSpec?.chargingType}
            flavourMode={product.electronicSpec?.flavourMode}
            type={product.type}
            priceCentsPack={
              product.type === "CIGARETTE"
                ? product.priceTiers[0]?.priceCents || 0
                : undefined
            }
            priceCentsBlock={
              product.type === "CIGARETTE"
                ? product.priceTiers[1]?.priceCents || 0
                : undefined
            }
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
