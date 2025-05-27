const Product = () => {
  return (
    <div className="card bg-base-100 min-w-80 shadow-md m-4">
      <figure>
        <img src="../assets/images/test.jpg" alt="Vape" />
      </figure>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="checkbox" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">title</div>
        <div className="collapse-content text-sm">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
    </div>
  );
};

export default Product;
