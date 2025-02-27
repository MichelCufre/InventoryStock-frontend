import { Link } from "react-router-dom";
import "../global.css"

const Footer = () => {
    return (
    <div className="footer">
    <footer>
        <p>&copy; 2025 Inventory Stock Service. All rights reserved.</p>
    </footer>

    <style>{`
        footer {
            background-color: var(--primary-color);
            color: white;
            text-align: center;
            padding: 1rem 0;
            margin-top: 2rem;
          }
    `}</style>
    </div>
    )
}
export default Footer