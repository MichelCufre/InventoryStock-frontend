import axios from "axios";

const API_URL = "http://localhost:8080/api";

// Crear una instancia de axios con configuración global
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Si usas autenticación
});

export { api, API_URL };