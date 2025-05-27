const Product = ({ id }) => {
  return (
    <div className="card bg-base-100 w-[320px] shadow-md m-2">
      <figure>
        <img src="../assets/images/test.jpg" alt="Vape" />
      </figure>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="checkbox" id={`accordion-${id}`} />
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
