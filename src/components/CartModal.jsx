import { useSelector } from "react-redux";

const productsList = [
  { id: 1, title: "Vape X", price: 100 },
  { id: 2, title: "Vape Y", price: 120 },
  { id: 3, title: "Vape Z", price: 150 },
];

const CartModal = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const cartProducts = cartItems.map((id) =>
    productsList.find((product) => product.id === id)
  );

  return (
    <div className="modal" role="dialog">
      <div className="modal-box">
        <h3 className="text-lg font-bold">🛒 Ваш кошик</h3>

        {cartProducts.length === 0 ? (
          <p className="py-4">Кошик порожній.</p>
        ) : (
          <ul className="py-4 space-y-2">
            {cartProducts.map((product, index) => (
              <li key={index} className="border-b pb-2">
                <span className="font-semibold">{product?.title}</span> —{" "}
                {product?.price}₴
              </li>
            ))}
          </ul>
        )}

        <div className="modal-action">
          <label htmlFor="my_modal_6" className="btn">
            Закрити
          </label>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
