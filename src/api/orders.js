import { API_URL } from "./config";

// Obtener todos los pedidos
export const getOrders = async () => {
  const response = await fetch(`${API_URL}/orders`);
  return response.json();
};

// Obtener un pedido por ID
export const getOrderById = async (id) => {
  const response = await fetch(`${API_URL}/orders/${id}`);
  return response.json();
};

// Crear un nuevo pedido
export const createOrder = async (orderData) => {
  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData),
  });
  return response.json();
};

// Actualizar un pedido por ID
export const updateOrder = async (id, updatedData) => {
  const response = await fetch(`${API_URL}/orders/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  return response.json();
};

// Eliminar un pedido por ID
export const deleteOrder = async (id) => {
  const response = await fetch(`${API_URL}/orders/${id}`, {
    method: "DELETE",
  });
  return response.json();
};