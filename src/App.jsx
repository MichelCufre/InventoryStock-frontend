import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import InventoryStockPage from "./components/InventoryStockPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventoryList" element={<InventoryStockPage />} />
      </Routes>
    </>
  );
}

export default App;