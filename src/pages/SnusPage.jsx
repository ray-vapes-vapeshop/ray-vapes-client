import Header from "../components/Header";
import ProductList from "../components/ProductList";

const SnusPage = () => {
  return (
    <>
      <Header />
      <div className="h-18"></div>
      <ProductList type="SNUS"/>
    </>
  );
};

export default SnusPage;
