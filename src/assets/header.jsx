const Header = () => {
    return (
    <div className="header">
    <header>
          <nav>
            <a href="../HomePage.jsx">
            <img class="box" src="../public/boxIcon.png" alt="box" />
            </a>
            <p class="textIcon">StockInv</p>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
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
        }

        .box {
            margin-left: 25px;
            width: 64px;
            heigth: 64px;
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