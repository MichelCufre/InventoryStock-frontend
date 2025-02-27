
import { api, API_URL } from "./config";


// Obtener todos los productos
export const getProducts = async () => {
    try {
      const response = await api.get("/products");
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };

// Obtener un producto por ID
export const getItemById = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`);
  return response.json();
};

// Agregar un nuevo producto
/*export const addItem = async (item) => {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return response.json();
};*/

export const addItem = async (item) => {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return response.json();
};

// Función para agregar el producto y actualizar la UI
export const handleAddItem = async (newItem, setInventory) => {
  try {
    const addedItem = await addItem(newItem);
    if (addedItem) {
      setInventory((prevInventory) => [
        ...prevInventory,
        {
          id: addedItem.id, 
          name: addedItem.name,
          description: addedItem.description || "No description available",
          quantity: addedItem.quantity,
          originalQuantity: addedItem.quantity,
          price: addedItem.price,
          taken: 0,
          originalTaken: addedItem.quantity,
        },
      ]);
    }
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

// Actualizar un producto por ID
export const updateProduct = async (id, updatedData) => {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    return response.json();
  };

// Eliminar un producto por ID
export const deleteItem = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });
  return response.json();
};

