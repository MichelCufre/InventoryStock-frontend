"use client"
import { useState } from "react"
import "../styles/UpdateItem.css"
import "../global.css"
import Header from "../assets/headerF.jsx"

const UpdateItemForm = ({ items, onUpdateItem }) => {
  const [selectedItem, setSelectedItem] = useState("")
  const [newName, setNewName] = useState("")
  const [newQuantity, setNewQuantity] = useState("")
  const [newPrice, setNewPrice] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedItem && (newName || newQuantity || newPrice)) {
      onUpdateItem(selectedItem, {
        name: newName || undefined,
        quantity: newQuantity ? Number.parseInt(newQuantity) : undefined,
        price: newPrice ? Number.parseFloat(newPrice) : undefined,
      })
      setSelectedItem("")
      setNewName("")
      setNewQuantity("")
      setNewPrice("")
    }
  }

  return (
    <div className="inventory-stock-page">
      <Header />
    <div className="update-item">
      <div className="add-item-form-container">
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
     
        <input
          type="text"
          placeholder="New Name (optional)"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="number"
          placeholder="New Quantity (optional)"
          value={newQuantity}
          onChange={(e) => setNewQuantity(e.target.value)}
          min="0"
        />
        <input
          type="number"
          placeholder="New Price (optional)"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          min="0"
          step="0.01"
        />
        <button type="submit">Update Item</button>
      </form>
    </div>
    </div>
    </div>
  )
}

export default UpdateItemForm