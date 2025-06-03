import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalCents = useSelector((state) => state.cart.totalCents);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="p-2 max-w-xl mx-auto max-h-[500px] overflow-auto">
      <h2 className="text-xl font-bold mb-6 text-center">Корзина товаров:</h2>

      {items.length === 0 ? (
        <p className="text-gray-500">Корзина пуста.</p>
      ) : (
        <>
          <ul className="space-y-2 max-h-[400px] overflow-auto px-2">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b py-2"
              >
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-gray-600">
                    {(item.priceCents / 100).toFixed(2)} €
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 font-bold text-lg">
            Итого: {(totalCents / 100).toFixed(2)} €
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
