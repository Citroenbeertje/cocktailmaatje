import React from "react"
import './Navbar.css'
import { Link} from "react-router-dom";

function Navbar() {

    return (

        <nav className="nav-container">
            <ul className="header__nav-list">
                <li><Link to="/" className="header__nav-link">Home</Link></li>
                <li><Link to="/about" className="header__nav-link">About</Link></li>
                <li><Link to="/favorites" className="header__nav-link">Favorites</Link></li>
                <li><Link to="/login" className="header__nav-link">Login</Link></li>
                <li><Link to="/register" className="header__nav-link">Register</Link></li>
            </ul>
        </nav>

    )

}


export default Navbar;