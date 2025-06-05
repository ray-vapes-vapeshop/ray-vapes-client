import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

const ProductList = ({ type, extraParams = {}, sort = { id: "asc" }, isBestseller }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const params = {
      currentPage: 1,
      pageSize: 10,
      sortBy: { id: "asc" },
      type,
      ...extraParams,
    };

    if (typeof isBestseller === "boolean") {
      params.isBestseller = isBestseller;
    }

    axios
      .get("http://localhost:5050/api/products", { params })
      .then((response) => {
        let items = response.data?.data?.content || [];

        if (sort?.priceCents) {
          items = items.sort((a, b) => {
            const aPrice = a.priceTiers?.[0]?.priceCents ?? 0;
            const bPrice = b.priceTiers?.[0]?.priceCents ?? 0;
            return sort.priceCents === "asc"
              ? aPrice - bPrice
              : bPrice - aPrice;
          });
        }

        setProducts(items);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [type, JSON.stringify(extraParams), JSON.stringify(sort), isBestseller]);

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
