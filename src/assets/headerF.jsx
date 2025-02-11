import { Link } from "react-router-dom";

const HeaderF = () => {
    return (
        <header className="header">
            <nav className="nav-container">
                <Link to="/" className="logo">
                    <img className="box" src="./boxIcon.png" alt="box" />
                    <p className="textIcon">StockInv</p>
                </Link>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/inventoryList">Inventory</Link></li>
                    <li><Link to="/AddItemForm">Add</Link></li>
                    <li><Link to="/update">Update</Link></li>
                    <li><Link to="/log">Logs</Link></li>
                </ul>
            </nav>

            <style>{`
                .header {
                    background-color: rgb(80, 136, 161);
                    padding: 15px 0;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
                }

                .nav-container {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .logo {
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                }

                .box {
                    width: 50px;
                    height: 50px;
                    filter: brightness(0) invert(1);
                    margin-right: 10px;
                }

                .textIcon {
                    color: white;
                    font-size: 1.5rem;
                    font-weight: bold;
                }

                .nav-links {
                    list-style: none;
                    display: flex;
                    gap: 20px;
                }

                .nav-links li {
                    display: inline-block;
                }

                .nav-links a {
                    text-decoration: none;
                    color: white;
                    font-size: 1.1rem;
                    font-weight: 500;
                    transition: color 0.3s ease-in-out;
                }

                .nav-links a:hover {
                    color:rgb(228, 220, 220);
                }

                @media (max-width: 768px) {
                    .nav-container {
                        flex-direction: column;
                        text-align: center;
                    }
                    .nav-links {
                        flex-direction: column;
                        gap: 10px;
                        margin-top: 10px;
                    }
                }
            `}</style>
        </header>
    );
};

export default HeaderF;