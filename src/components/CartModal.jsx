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
          <label htmlFor="my_modal_6" className="btn" onClick={handleClear}>
            Очистить
          </label>
          <label htmlFor="my_modal_6" className="btn">
            Закрыть
          </label>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
