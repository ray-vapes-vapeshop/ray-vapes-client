import Header from "../components/Header";
import Product from "../components/Product";

const products = [1, 2, 3, 4, 5, 6, 7];

const Home = () => {
  return (
    <div>
      <Header />
      <div className="h-18"></div>
      <div className="flex flex-wrap items-start gap-4 p-4 justify-center">
        {products.map((id) => (
          <Product key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
