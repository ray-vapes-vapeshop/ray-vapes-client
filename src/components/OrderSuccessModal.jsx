import { toast } from "react-toastify";

const OrderSuccessModal = ({ isOpen, orderText, onClose }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(orderText);
    toast.success("Текст заказа скопирован!");
  };

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`} role="dialog">
      <div className="modal-box max-w-xl">
        <h2 className="font-bold text-lg mb-4 text-center">
          Заказ успешно оформлен!
        </h2>
        <div className="text-sm font-semibold opacity-60 text-center mb-4">
          Скопируйте сгенерированый текст заказа ниже и отправьте его нашему менеджеру в Telegram,
          чтобы мы могли быстро подтвердить и оформить доставку.
        </div>
        <textarea
          value={orderText}
          readOnly
          className="textarea textarea-bordered w-full h-48"
        />
        <div className="flex w-full justify-between gap-2 mt-4 md:gap-6">
          <button
            onClick={handleCopy}
            className="btn btn-outline h-[45px] w-[50%] sm:w-auto"
          >
            Копировать
          </button>
          <a
            href="https://t.me/ray_manager1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-default h-[45px] bg-yellow-100 border-yellow-200 text-yellow-900 w-[50%] sm:w-auto"
          >
            <label>Написать в Telegram</label>
          </a>
          <button
            className="btn btn-md btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessModal;
