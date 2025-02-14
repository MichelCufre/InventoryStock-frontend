import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import InventoryStockPage from "./components/InventoryStockPage";
import AddItemForm from "./components/AddItemForm";
import InventoryList from "./components/InventoryList";
import OrderLogs from "./components/OrderLogs";
import UpdateItem from "./components/UpdateItemForm";

/*import UpdateItemPage from "./components/UpdateItemPage";
import FeaturesPage from "./components/FeaturesPage";
import PricingPage from "./components/PricingPage";
import ContactPage from "./components/ContactPage";
import NotFoundPage from "./components/NotFoundPage";

<Route path="/update" element={<UpdateItemPage />} />
        <Route path="/log" element={<LogPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
*/

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventoryList" element={<InventoryStockPage />} />
        <Route path="/AddItemForm" element={<AddItemForm />} />
        <Route path="/inventoryList" element={<InventoryList />} />
        <Route path="/orderLogs" element={<OrderLogs />} />
        <Route path="/updateItem" element={<UpdateItem />} />
        
        
      </Routes>
    </>
  );
}

export default App;