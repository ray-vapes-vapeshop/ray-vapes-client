import Header from "../components/Header";

const DeliveryPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="h-18"></div>
      <div className="flex-grow flex-col flex items-center justify-center m-3">
        <ul className="list bg-base-100 rounded-box shadow-md w-[70%] min-w-[250px] p-4">
          <li className="list-row">
            <div>
              <div className="font-bold text-lg">Оформление заказа</div>
            </div>
            <p className="list-col-wrap text-md">
              После того как вы добавили товары в корзину, свяжитесь с нашим
              менеджером в Telegram или оставьте актуальные контактные данные —
              мы свяжемся с вами в течение часа.
            </p>
          </li>

          <li className="list-row">
            <div>
              <div className="font-bold text-lg">Оплата</div>
              <div className="text-xs font-semibold opacity-60">
                Доступны следующие способы оплаты:
              </div>
            </div>
            <p className="list-col-wrap text-md">
              • USDT (криптовалюта)
              <br />• Monobank <br />• Банковский счёт в Нидерландах (при
              доставке по стране)
              <div className="list-col-wrap text-xs font-semibold opacity-60 mt-3">
                При личной встрече возможна оплата наличными.
              </div>
            </p>
          </li>

          <li className="list-row">
            <div>
              <div className="font-bold text-lg">Доставка</div>
            </div>
            <p className="list-col-wrap text-md">
              • Срок доставки: 1–2 рабочих дня после подтверждения заказа.
              <br />
              • Стоимость доставки: €8.25
              <br />
              • Доставка осуществляется по всей территории Нидерландов. <br />
            </p>
          </li>

          <li className="list-row">
            <div>
              <div className="font-bold text-lg">Самовывоз / Встреча</div>
            </div>
            <p className="list-col-wrap text-md">
              При личной встрече в следующих городах оплата производится
              наличными: <br /> Амстердам, Роттердам, Арнем, Неймеген, Зютфен,
              Апелдорн, Зволле.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DeliveryPage;
