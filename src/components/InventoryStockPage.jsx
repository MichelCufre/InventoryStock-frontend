import { useState, useEffect } from "react"
import InventoryList from "./InventoryList"
import "../global.css"
import Header from "../assets/headerF.jsx"
import Footer from "../assets/footer.jsx"
import "../styles/InventoryStockPage.css"
import { getProducts, addItem } from "../api/products"  // Importamos la API

const InventoryStockPage = () => {
  const [inventory, setInventory] = useState([])


  // Cargar productos desde la API al montar el componente
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsFromAPI = await getProducts() // Llamamos a la API
        const processedProducts = productsFromAPI.map((product) => ({
          ...product, 
          originalQuantity: product.quantity, // Guardamos el valor original de la cantidad
          taken: 0, 
          originalTaken: product.quantity, // Guardamos el original para manejar "tomados"
          img: product.img || "https://static.thenounproject.com/png/2535689-200.png" // Imagen por defecto
        }))
        setInventory(processedProducts) // Guardamos los datos en el estado
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    fetchProducts()
  }, []) 
  

   // Agregar nuevo producto a la API y actualizar el estado
   const handleAddItem = async (newItem) => {
    const addedItem = await addItem(newItem) // Enviar a la API
    if (addedItem) {
      setInventory((prevInventory) => [
        ...prevInventory,
        {
          id: addedItem.id, // ID generado por la BD
          name: addedItem.name,
          description: addedItem.description || "No description available",
          quantity: addedItem.quantity,
          originalQuantity: addedItem.quantity,
          price: addedItem.price,
          taken: 0,
          originalTaken: addedItem.quantity,
        },
      ])
    }
  }


  
  const updateQuantity = (id, change) => {
    setInventory(
      inventory.map((item) => (item.id === id ? { ...item, quantity: Math.min(item.originalQuantity, Math.max(0, item.quantity - change)),
                                                            taken: Math.min(item.originalTaken, Math.max(0, item.taken + change)) } : item)),
    )
  }

  const alerted = () => { 
    alert();
  }

  return (
    <div className="inventory-stock-page">
      <Header />
      <h1>Inventory Stock Management</h1>
      <InventoryList inventory={inventory} updateQuantity={updateQuantity} alerted={alerted}/>
      
      <Footer />
    </div>
  )
  
}

export default InventoryStockPage