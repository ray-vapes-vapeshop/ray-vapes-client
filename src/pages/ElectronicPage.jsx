import Header from "../components/Header";
import ProductList from "../components/ProductList";

const ElectronicPage = () => {
  return (
    <>
      <Header />
      <div className="h-18"></div>
      <ProductList type="ELECTRONIC_CIGARETTE" />
    </>
  );
};

export default ElectronicPage;
