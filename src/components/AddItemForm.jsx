/*import { useState } from "react"
import Header from "../assets/headerF.jsx"
import "../global.css"
import "../styles/AddItemForm.css";

const AddItemForm = ({ addItem }) => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && quantity && price && description) {
      addItem({
        name,
        description,
        quantity: Number.parseInt(quantity),
        price: Number.parseFloat(price),
      });
      setName("");
      setDescription("");
      setQuantity("");
      setPrice("");
    }
  };*/
  

import { useState } from "react"
import Header from "../assets/headerF.jsx"
import "../global.css"
import "../styles/AddItemForm.css"
import { handleAddItem } from "../api/products";

const AddItemForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !quantity || !price || !description) return;

    setLoading(true);

    await handleAddItem(
      {
        name,
        description,
        quantity: parseInt(quantity),
        price: parseFloat(price),
      },
o
    );

    setName("");
    setDescription("");
    setQuantity("");
    setPrice("");
    setLoading(false);
  };

  return (
    <div className="inventory-stock-page">
      <Header />

      <div className="add-item-form-container">
        <form className="add-item-form" onSubmit={handleSubmit}>
          <h2>Add New Item</h2>

          <input
            type="text"
            placeholder="Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            min="0"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            min="0"
            step="0.01"
          />
          <button type="submit">Add Item</button>
        </form>
      </div>
    </div>
  );
}

export default AddItemForm