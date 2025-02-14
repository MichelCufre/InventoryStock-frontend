"use client"

import { useState } from "react"
import "../styles/OrderLogs.css"
import "../global.css"
import Header from "../assets/headerF.jsx"

const OrderLogs = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      date: "2025-02-14",
      items: [
        { name: "Widget A", quantity: 2 },
        { name: "Gadget B", quantity: 1 },
      ],
    },
    {
      id: 2,
      date: "2025-02-13",
      items: [
        { name: "Doohickey C", quantity: 3 },
        { name: "Widget A", quantity: 1 },
      ],
    },
  ])

  return (
    <div className="inventory-stock-page">
      <Header />
    <div className="order-logs">
      <h2>Order Logs</h2>
      <div className="add-item-form-container">
      {orders.map((order) => (
        <div key={order.id} className="order-card">
          <h3>Order #{order.id}</h3>
          <p>Date: {order.date}</p>
          <ul>
            {order.items.map((item, index) => (
              <li key={index}>
                {item.name} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
    </div>
  )
}

export default OrderLogs