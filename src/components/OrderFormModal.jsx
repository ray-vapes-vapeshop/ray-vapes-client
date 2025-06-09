import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import OrderSuccessModal from "./OrderSuccessModal";

const schema = z.object({
  firstName: z.string().min(2, "Обязательное поле"),
  lastName: z.string().min(2, "Обязательное поле"),
  address: z.string().min(2, "Обязательное поле"),
  email: z.string().email("Некорректный email"),
  telegramNickname: z.string().min(1, "Обязательное поле"),
  phoneNumber: z.string().min(5, "Обязательное поле"),
  orderMethod: z.enum(["PICKUP", "DELIVERY"]),
  pickupLocation: z.string().optional(),
  deliveryNotes: z.string().optional(),
});

const meetingCities = [
  "Арнем",
  "Амстердам",
  "Роттердам",
  "Апелдорн",
  "Зютфен",
  "Зволле",
  "Неймеген",
];

const OrderFormModal = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [orderMethod, setOrderMethod] = useState("DELIVERY");

  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [orderText, setOrderText] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    if (items.length === 0) {
      toast.error("Корзина пуста");
      return;
    }

    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      email: data.email,
      telegramNickname: data.telegramNickname,
      phoneNumber: data.phoneNumber,
      orderMethod: data.orderMethod,
      pickupLocation: data.orderMethod === "PICKUP" ? data.pickupLocation : "",
      deliveryNotes:
        data.orderMethod === "DELIVERY" ? data.deliveryNotes || "" : "",
      items: items.map((item) => ({
        name: item.product?.name,
        productId: item.productId,
        quantity: item.quantity || 1,
        priceCents: item.priceCents,
        ...(item.variantId ? { variantId: item.variantId } : {}),
      })),
    };

    try {
      const response = await axios.post(
        "http://localhost:5050/api/orders",
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const result = response.data;
      console.log(result);

      document.getElementById("order_modal").checked = false;
      document.getElementById("my_modal_6").checked = false;

      dispatch(clearCart());

      const orderItems = result.data.items.map((item, i) => {
        const name = item.product?.name || "Неизвестный товар";
        const flavour = item.product?.variant?.flavour?.name;
        const fullName = flavour ? `${name} (${flavour})` : name;
        const priceEuro = (item.priceCents / 100).toFixed(2);
        return `${i + 1}. Название товара: ${fullName}, Кол-во: ${
          item.quantity
        }, Цена: ${priceEuro} €`;
      });

      const totalCents = result.data.items.reduce(
        (sum, item) => sum + item.priceCents * item.quantity,
        0
      );
      const totalEuros = (totalCents / 100).toFixed(2);

      const orderSummary = `
  Имя: ${result.data.firstName} ${result.data.lastName}
  Адрес: ${result.data.address}
  Метод: ${result.data.orderMethod === "PICKUP" ? "Личная встреча" : "Доставка"}
  ${
    result.data.pickupLocation
      ? "Город встречи: " + result.data.pickupLocation
      : ""
  }
  Телефон: ${result.data.phoneNumber}
  Telegram: ${result.data.telegramNickname}
  Email: ${result.data.email}

  Товары:
  ${orderItems.join("\n")}
  Общая сумма: ${totalEuros} €
`;

      setOrderText(orderSummary);
      setIsSuccessOpen(true);
      toast.success("Заказ успешно отправлен!");
    } catch (error) {
      toast.error(error.message || "Ошибка при отправке заказа");
    }
  };

  return (
    <>
      <div className="modal" role="dialog">
        <div className="modal-box max-w-xl">
          <h2 className="text-lg font-bold mb-4 text-center">
            Оформление заказа:
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <input
              {...register("firstName")}
              placeholder="Имя"
              className="input input-bordered w-full"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs">{errors.firstName.message}</p>
            )}

            <input
              {...register("lastName")}
              placeholder="Фамилия"
              className="input input-bordered w-full"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs">{errors.lastName.message}</p>
            )}

            <input
              {...register("address")}
              placeholder="Адрес"
              className="input input-bordered w-full"
            />
            {errors.address && (
              <p className="text-red-500 text-xs">{errors.address.message}</p>
            )}

            <input
              {...register("email")}
              placeholder="Email"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}

            <input
              {...register("telegramNickname")}
              placeholder="Telegram @nickname"
              className="input input-bordered w-full"
            />
            {errors.telegramNickname && (
              <p className="text-red-500 text-xs">
                {errors.telegramNickname.message}
              </p>
            )}

            <input
              {...register("phoneNumber")}
              placeholder="Телефон"
              className="input input-bordered w-full"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs">
                {errors.phoneNumber.message}
              </p>
            )}

            <select
              {...register("orderMethod")}
              onChange={(e) => setOrderMethod(e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="DELIVERY">Доставка</option>
              <option value="PICKUP">Личная встреча</option>
            </select>

            {orderMethod === "PICKUP" && (
              <select
                {...register("pickupLocation")}
                className="select select-bordered w-full"
              >
                <option value="">Выберите город:</option>
                {meetingCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            )}

            {orderMethod === "DELIVERY" && (
              <input
                {...register("deliveryNotes")}
                placeholder="Город, страна (для доставки)"
                className="input input-bordered w-full"
              />
            )}

            <div className="modal-action justify-between mt-4">
              <button
                type="submit"
                className="btn btn-default bg-yellow-100 border-yellow-200 text-yellow-900 w-[50%] sm:w-auto"
              >
                Подтвердить заказ
              </button>
              <label htmlFor="order_modal" className="btn w-[50%] sm:w-auto">
                Закрыть
              </label>
            </div>
          </form>
        </div>
      </div>
      <OrderSuccessModal
        isOpen={isSuccessOpen}
        orderText={orderText}
        onClose={() => setIsSuccessOpen(false)}
      />
    </>
  );
};

export default OrderFormModal;
