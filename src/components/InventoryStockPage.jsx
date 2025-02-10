import { useState } from "react"
import InventoryList from "./InventoryList"
import AddItemForm from "./AddItemForm"
import "../styles/InventoryStockPage.css"
import Header from "../assets/headerF.jsx"



const InventoryStockPage = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Widget A", quantity: 50, price: 9.99 },
    { id: 2, name: "Gadget B", quantity: 30, price: 19.99 },
    { id: 3, name: "Doohickey C", quantity: 75, price: 4.99 },
  ])

  const addItem = (newItem) => {
    setInventory([...inventory, { ...newItem, id: inventory.length + 1 }])
  }

  const updateQuantity = (id, change) => {
    setInventory(
      inventory.map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item)),
    )
  }

  const alerted = () => { 
    alert();
  }

  return (
    <div className="inventory-stock-page">
      <Header />
      <h1>Inventory Stock Management</h1>
      <AddItemForm addItem={addItem} />
      <InventoryList inventory={inventory} updateQuantity={updateQuantity} alerted={alerted}/>
    </div>
  )
  
}

export default InventoryStockPage