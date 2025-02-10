const InventoryList = ({ inventory, updateQuantity, alerted}) => {
  return (
    <div className="inventory-list">
      <h2>Current Inventory</h2>
      <div className="inventory-grid">
        {inventory.map((item) => (
          <div key={item.id} className="inventory-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s"></img>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <div className="item-actions">
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <button onClick={() => alerted()}>Avisar</button>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InventoryList