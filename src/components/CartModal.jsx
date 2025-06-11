import { clearCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import Cart from "./Cart";

const CartModal = () => {
  const handleClear = () => {
    dispatch(clearCart());
  };

  const dispatch = useDispatch();

  return (
    <div className="modal" role="dialog">
      <div className="modal-box">
        <Cart />
        <div className="modal-action flex justify-between">
          <label htmlFor="my_modal_6" className="btn w-[30%] sm:w-auto" onClick={handleClear}>
            Очистить
          </label>
          <label
            htmlFor="order_modal"
            className="btn btn-default bg-yellow-100 border-yellow-200 text-yellow-900 w-[30%] sm:w-auto"
          >
            Оформить заказ
          </label>
          <label htmlFor="my_modal_6" className="btn w-[30%] sm:w-auto">
            Закрыть
          </label>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
