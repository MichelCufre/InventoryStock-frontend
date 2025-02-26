import { Link } from "react-router-dom";
import "../global.css"

const Header = () => {
    return (
    <div className="header">
    <header>
        <nav>
          <Link to="/">
            <img className="box" src="./boxIcon.png" alt="box" />
          </Link>
          <p className="textIcon">StockInv</p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

    <style>{`
        header {
        background-color: var(--primary-color);
        padding: 1rem 0;
        }

        .textIcon{
        color: white;
        padding-left:0.1em;
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
export default Header