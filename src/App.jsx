import Home from "./pages/Home";
import LiquidPage from "./pages/LiquidPage";
import DeliveryPage from "./pages/DeliveryPage";
import ElectronicPage from "./pages/ElectronicPage";
import SnusPage from "./pages/SnusPage";
import CigarettesPage from "./pages/СigarettesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
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
