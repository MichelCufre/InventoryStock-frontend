import Header from "./assets/header.jsx"
const HomePage = () => {
    return (
      <div className="home-page">
        
        <Header />
        <main>
          <section className="hero">
            <h1>Streamline Your Inventory Management</h1>
            <p>Efficient. Accurate. Real-time.</p>
            <button className="cta-button">Get Started</button>
          </section>
  
          <section className="features" id="features">
            <h2>Our Features</h2>
            <div className="feature-grid">
              <div className="feature-item">
                <h3>Real-time Tracking</h3>
                <p>Monitor your stock levels in real-time across all locations.</p>
              </div>
              <div className="feature-item">
                <h3>Automated Reordering</h3>
                <p>Set up automatic reorders when stock reaches a certain level.</p>
              </div>
              <div className="feature-item">
                <h3>Detailed Analytics</h3>
                <p>Gain insights with comprehensive reporting and analytics.</p>
              </div>
              <div className="feature-item">
                <h3>Multi-location Support</h3>
                <p>Manage inventory across multiple warehouses or stores.</p>
              </div>
            </div>
          </section>
        </main>
  
        <footer>
          <p>&copy; 2025 Inventory Stock Service. All rights reserved.</p>
        </footer>
  
        <style jsx>{`
          .home-page {
            font-family: Arial, sans-serif;
            color: #333;
            line-height: 1.6;
          }
  
          header {
            background-color: rgb(80, 136, 161);
            padding: 1rem 0;
          }
  
          nav ul {
            display: flex;
            justify-content: center;
            list-style-type: none;
            padding: 0;
          }
  
          nav ul li {
            margin: 0 1rem;
          }
  
          nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: bold;
          }
  
          .hero {
            background-color: rgb(80, 136, 161);
            color: white;
            text-align: center;
            padding: 4rem 2rem;
          }
  
          .hero h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: white;
          }
  
          .cta-button {
            background-color: rgb(80, 136, 161);
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
  
          .cta-button:hover {
            background-color: #ff6347;
          }
  
          .features {
            padding: 4rem 2rem;
            background-color: #fff5e6;
          }
  
          .features h2 {
            text-align: center;
            color: rgb(80, 136, 161);
            margin-bottom: 2rem;
          }
  
          .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }
  
          .feature-item {
            background-color: white;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
  
          .feature-item h3 {
            color:rgb(80, 136, 161);
            margin-bottom: 0.5rem;
          }
  
          footer {
            background-color: rgb(80, 136, 161);
            color: white;
            text-align: center;
            padding: 1rem 0;
            margin-top: 2rem;
          }
        `}</style>
      </div>
    )
  }
  
  export default HomePage