import { useState } from "react"
import InventoryList from "./InventoryList"
import AddItemForm from "./AddItemForm"
import "../styles/InventoryStockPage.css"
import Header from "../assets/headerF.jsx"



const InventoryStockPage = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Widget A", quantity: 50, originalQuantity: 50, price: 9.99, taken:0, originalTaken:50},
    { id: 2, name: "Gadget B", quantity: 30, originalQuantity: 30, price: 19.99, taken:0, originalTaken:30},
    { id: 3, name: "Doohickey C", quantity: 75, originalQuantity: 75, price: 4.99, taken:0, originalTaken:75},
    { id: 4, name: "Widget A", quantity: 50, originalQuantity: 50, price: 9.99, taken:0, originalTaken:50},
    { id: 5, name: "Gadget B", quantity: 30, originalQuantity: 30, price: 19.99, taken:0, originalTaken:30},
    { id: 6, name: "Doohickey C", quantity: 75, originalQuantity: 75, price: 4.99, taken:0, originalTaken:75},
  ])

  const addItem = (newItem) => {
    setInventory([...inventory, { ...newItem, id: inventory.length + 1 }])
  }

  const updateQuantity = (id, change) => {
    setInventory(
      inventory.map((item) => (item.id === id ? { ...item, quantity: Math.min(item.originalQuantity, Math.max(0, item.quantity - change)),
                                                            taken: Math.min(item.originalTaken, Math.max(0, item.taken + change)) } : item)),
    )

  }

  const alerted = () => { 
    alert();
  }

  return (
    <div className="inventory-stock-page">
      <Header />
      <h1>Inventory Stock Management</h1>
      <InventoryList inventory={inventory} updateQuantity={updateQuantity} alerted={alerted}/>
    </div>
  )
  
}

export default InventoryStockPage