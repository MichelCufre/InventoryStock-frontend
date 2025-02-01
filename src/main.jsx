import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InventoryStockPage from './components/InventoryStockPage.jsx'
import HomePage from './HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)
