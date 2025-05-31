import { useState } from "react";

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
  type
}) => {
  const [, setModalId] = useState(null);

  const hasFlavours = variants && variants.length > 0;

  return (
    <div className="card bg-base-100 w-[320px] shadow-md m-2">
      <figure>
        <img src={imageUrl} alt={name} />
      </figure>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="checkbox" id={`accordion-${id}`} />
        <div className="collapse-title font-bold text-md">{name}</div>
        <div className="collapse-content text-sm">
          Цена: {(priceCents / 100).toFixed(2)}€
          <br />
          {type === "ELECTRONIC_CIGARETTE" && (
            <>
              Кол-во затяжек: {puffs}
              <br />
              Никотин: {nicotinePct} %
              <br />
              Зарядка: {chargingType.replaceAll('_', '-')}
              <br />
              Разнообразие вкуса: {flavourMode.replaceAll('_', ' ')}
              <br />
            </>
          )}
          {hasFlavours && (
            <div className="mt-3 w-[150px]">
              <label
                htmlFor={`modal-${id}`}
                className="btn btn-outline w-full"
                onClick={() => setModalId(id)}
              >
                Вкусы
              </label>
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full justify-between ml-1">
        <input type="checkbox" id={`modal-${id}`} className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-2">Вкусы: {name}</h3>

            {variants && variants.length > 0 ? (
              <ul className="list bg-base-100 rounded-box text-md font-semibold">
                {variants.map((variant) => (
                  <li key={variant.id} className="list-row">
                    {variant.flavour?.name || "Неизвестный вкус"}
                  </li>
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
    </div>
  );
};

export default Product;
