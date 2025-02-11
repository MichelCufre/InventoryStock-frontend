import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons"; 
import { faTrashCan } from "@fortawesome/free-regular-svg-icons"; 
const InventoryList = ({ inventory, updateQuantity, alerted }) => {
  // Usar un `Set` para evitar duplicados
  const selectedItems = [...new Map(inventory.filter(item => item.taken > 0).map(item => [item.id, item])).values()];

  return (
    <main>
      <div className="inventory-list">
        <h2>Current Inventory</h2>
        <div className="inventory-grid">
          {inventory.map((item) => (
            <div key={item.id} className="inventory-item">
              
              <img src="https://static.thenounproject.com/png/2535689-200.png"></img>
              
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Taken: {item.taken}</p>
              <div className="item-actions">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <button onClick={() => alerted()}>Avisar</button>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="selectedItems">
        <h2>Already Selected</h2>
        {selectedItems.length > 0 ? (
          selectedItems.map((item) => (
            <div key={item.id}>
              <p>Taken: {item.taken}, {item.name}</p>
            </div>
          ))
        ) : (
          <p>No items selected.</p>
        )}
      </div>
    </main>
  );
};

export default InventoryList;