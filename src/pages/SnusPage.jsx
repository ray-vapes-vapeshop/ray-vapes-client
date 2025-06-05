import { useState } from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import SortDropdown from "../components/SortDropdown";

const SnusPage = () => {
  const [sort, setSort] = useState({ id: "asc" });

  const handleSortChange = (value) => {
    if (value === "price-asc") setSort({ priceCents: "asc" });
    else if (value === "price-desc") setSort({ priceCents: "desc" });
    else setSort({ id: "asc" });
  };
  return (
    <>
      <Header />
      <div className="h-18"></div>
      <SortDropdown onChange={handleSortChange} />
      <ProductList type="SNUS" sort={sort} />
    </>
  );
};

export default SnusPage;
