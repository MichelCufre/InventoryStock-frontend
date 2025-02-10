import InventoryList from "../components/InventoryList"
import AddItemForm from "../components/AddItemForm"
import { Link } from "react-router-dom";

const HeaderF = () => {
    return (
    <div className="header">
    <header>
    <nav>
        <Link to="/InventoryList">
          <img className="box" src="./boxIcon.png" alt="box" />
        </Link>
        <p className="textIcon">StockInv</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/InventoryList">Inventory</Link>
          </li>
          <li>
            <Link to="/InventoryList">Add</Link>
          </li>
          <li>
            <Link to="/InventoryList">Update</Link>
          </li>
          <li>
            <Link to="/InventoryList">Log</Link>
          </li>
        </ul>
      </nav>
    </header>

    <style>{`
        header {
        background-color: rgb(80, 136, 161);
        padding: 1rem 0;
        }

        .textIcon{
        color: white;
        padding-left:0.1em;
        margin-top: 25px;
        }

        .box {
            margin-left: 25px;
            width: 64px;
            height: 64px;
            filter: brightness(0) invert(1);
        }
        nav {
            display: flex; 
        }

        ul{
            margin-left: 7em;
        
        }


    `}</style>
    </div>
    )
}
export default HeaderF