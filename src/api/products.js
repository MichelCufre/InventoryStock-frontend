
import { api } from "./config"; 

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
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};

// Agregar un nuevo producto
export const addItem = async (item) => {
  try {
    const response = await api.post("/products/register", item);
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

// Función para agregar el producto y actualizar la UI
export const handleAddItem = async (newItem) => {
  try {
    const addedItem = await addItem(newItem);
    return addedItem; // Retorna el producto agregado
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

// Actualizar un producto por ID
export const updateProduct = async (id, updatedData) => {
  try {
    const response = await api.put(`/products/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

// Eliminar un producto por ID
export const deleteItem = async (id) => {
  try {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};