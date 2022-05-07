import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import EcomPage from "./EcomPage/EcomPage";
import InventoryPage from "./InventoryPage/InventoryPage";
import RFIDPage from './RFIDPage/RFIDPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/winehub-io" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/ecommerce" element={<EcomPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/rfid" element={<RFIDPage />} />
      </Routes>
    </Router>
  );
}

export default App;
