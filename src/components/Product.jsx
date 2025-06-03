import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

import { toast, Flip } from "react-toastify";

const Product = ({
  id,
  name,
  imageUrl,
  priceCents,
  variants,
  puffs,
  nicotinePct,
  chargingType,
  flavourMode,
  priceCentsPack,
  priceCentsBlock,
  type,
}) => {
  const [, setModalId] = useState(null);
  const dispatch = useDispatch();
  const hasFlavours = variants && variants.length > 0;

  const handleAddToCart = (variant) => {
    const item = {
      id: `${id}-${variant.id}`,
      productId: id,
      name: variant.flavour?.name ? `${name} - ${variant.flavour.name}` : name,
      priceCents: priceCents || priceCentsPack || priceCentsBlock || 0,
      variantId: variant.id,
    };
    dispatch(addToCart(item));

    toast.success("Товар добавлен в корзину!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });
  };

  return (
    <div className="card bg-base-100 w-[320px] shadow-md m-2">
      <figure>
        <img src={imageUrl} alt={name} />
      </figure>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="checkbox" id={`accordion-${id}`} />
        <div className="collapse-title font-bold text-md">{name}</div>
        <div className="collapse-content text-sm">
          {type === "SNUS" && <>Цена - {(priceCents / 100).toFixed(2)}€</>}
          {type === "ELECTRONIC_CIGARETTE" && (
            <>
              Цена - {(priceCents / 100).toFixed(2)}€
              <br />
              Кол-во затяжек: {puffs}
              <br />
              Никотин: {nicotinePct} %
              <br />
              Зарядка: {chargingType.replaceAll("_", "-")}
              <br />
              Разнообразие вкуса: {flavourMode.replaceAll("_", " ")}
              <br />
            </>
          )}
          {type === "CIGARETTE" && (
            <>
              Пачка: {(priceCentsPack / 100).toFixed(2)}€
              <br />
              Блок: {(priceCentsBlock / 100).toFixed(2)}€
            </>
          )}
          {type === "LIQUID" && <>Цена - {(priceCents / 100).toFixed(2)}€</>}
          {hasFlavours ? (
            <div className="mt-3 w-[150px]">
              <label
                htmlFor={`modal-${id}`}
                className="btn btn-outline w-full"
                onClick={() => setModalId(id)}
              >
                Вкусы
              </label>
            </div>
          ) : (
            <div className="mt-3 w-[150px]">
              <button
              className="absolute top-15 right-4"
                onClick={handleAddToCart}
              >
                <img
                  src="../assets/icons/addToCartIcon.svg"
                  alt="add to cart"
                  className="h-[22px] w-[22px] cursor-pointer"
                />
              </button>
            </div>
          )}
        </div>
      </div>

      <input type="checkbox" id={`modal-${id}`} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-2">Вкусы: {name}</h3>

          {variants && variants.length > 0 ? (
            <ul className="space-y-2 list max-h-[400px] overflow-auto">
              {variants.map((variant) => (
                <>
                  <li
                    key={variant.id}
                    className="flex items-center justify-between list-row"
                  >
                    <span>{variant.flavour?.name || "Неизвестный вкус"}</span>
                    <button onClick={() => handleAddToCart(variant)}>
                      <img
                        src="../assets/icons/addToCartIcon.svg"
                        alt="add to cart"
                        className="h-[22px] w-[22px] cursor-pointer"
                      />
                    </button>
                  </li>
                </>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Нет информации о вкусах.</p>
          )}

          <div className="modal-action">
            <label htmlFor={`modal-${id}`} className="btn">
              Закрыть
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
