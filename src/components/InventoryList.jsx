const InventoryList = ({ inventory, updateQuantity }) => {
    return (
      <div className="inventory-list">
        <h2>Current Inventory</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  
  export default InventoryList