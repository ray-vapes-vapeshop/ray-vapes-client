import { toast } from "react-toastify";

const OrderSuccessModal = ({ isOpen, orderText, onClose }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(orderText);
    toast.success("Текст заказа скопирован!");
  };

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`} role="dialog">
      <div className="modal-box max-w-xl">
        <h2 className="font-bold text-lg mb-4">Заказ успешно оформлен!</h2>
        <textarea
          value={orderText}
          readOnly
          className="textarea textarea-bordered w-full h-48"
        />
        <div className="flex justify-between mt-4">
          <button
            onClick={handleCopy}
            className="btn btn-outline w-[40%] sm:w-auto"
          >
            Копировать
          </button>
          <a
            href="https://t.me/your_manager_username"
            target="_blank"
            className="btn btn-default bg-yellow-100 border-yellow-200 text-yellow-900 w-[40%] sm:w-auto"
          >
            Написать в Telegram
          </a>
        </div>
        <div className="modal-action justify-center mt-4">
          <button onClick={onClose} className="btn">
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessModal;
