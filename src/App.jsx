import HomePage from "./pages/HomePage";
import LiquidPage from "./pages/LiquidPage";
import DeliveryPage from "./pages/DeliveryPage";
import ElectronicPage from "./pages/ElectronicPage";
import SnusPage from "./pages/SnusPage";
import CigarettesPage from "./pages/СigarettesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/liquids" element={<LiquidPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/electronics" element={<ElectronicPage />} />
        <Route path="/snus" element={<SnusPage />} />
        <Route path="/cigarettes" element={<CigarettesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
