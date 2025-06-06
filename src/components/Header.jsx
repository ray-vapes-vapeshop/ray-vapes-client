import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartModal from "./CartModal";
import OrderFormModal from "./OrderFormModal";
import OrderSuccessModal from "./OrderSuccessModal";

const Header = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 w-full z-50">
      <div className="flex w-full justify-between">
        <Link to="/">
          <img
            className="h-14 w-17 ml-4 my-1"
            src="../assets/logos/Logo.png"
            alt="Logo"
          />
        </Link>

        <ul className="hidden md:flex menu menu-horizontal px-1 gap-4 items-center">
          <li>
            <Link to="/electronics">Электронные сигареты</Link>
          </li>
          <li>
            <Link to="/snus">Снюс</Link>
          </li>
          <li>
            <Link to="/cigarettes">Сигареты</Link>
          </li>
          <li>
            <Link to="/liquids">Жидкости</Link>
          </li>
          <li>
            <Link to="/delivery">Доставка и инструкция</Link>
          </li>
        </ul>

        <div className="flex flex-row mt-6 mx-6">
          <div className="dropdown dropdown-end flex gap-4">
            <div className="indicator hidden md:block">
              <Link to="/">
                <img
                  src="../assets/icons/homePageIcon.svg"
                  alt="home page icon"
                  className="h-5 w-5 cursor-pointer"
                />
              </Link>
            </div>
            <label htmlFor="my_modal_6" className="cursor-pointer">
              <div className="indicator mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item bg-yellow-100 border-yellow-200 rounded-full">
                  <label className="text-yellow-900 text-xs">
                    {items.length}
                  </label>
                </span>
              </div>
            </label>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <CartModal />
            <input type="checkbox" id="order_modal" className="modal-toggle" />
            <OrderFormModal />
            <OrderSuccessModal />
          </div>

          <div className="drawer drawer-end md:hidden my-auto">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mb-5">
              <label htmlFor="my-drawer-4">
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </label>
            </div>

            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="menu bg-base-200 text-base-content min-h-full w-full p-4 relative">
                <label
                  htmlFor="my-drawer-4"
                  className="absolute top-7 right-3 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </label>

                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                  <li className="p-2 mt-4">
                    <Link to="/">Главная</Link>
                  </li>
                  <li className="p-2">
                    <Link to="/electronics">Электронные сигареты</Link>
                  </li>
                  <li className="p-2">
                    <Link to="/snus">Снюс</Link>
                  </li>
                  <li className="p-2">
                    <Link to="/cigarettes">Сигареты</Link>
                  </li>
                  <li className="p-2">
                    <Link to="/liquids">Жидкости</Link>
                  </li>
                  <li className="p-2">
                    <Link to="/delivery">Доставка и инструкция</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
