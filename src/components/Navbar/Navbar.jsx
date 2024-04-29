import React from "react"
import './Navbar.css'

function Navbar() {

    return (
        <ul className="header__nav-list">
            <nav className="nav-container">
                <li>
                    <a href="/home" className="header__nav-link">Home</a>
                </li>
                <li>
                    <a href="/about" className="header__nav-link">About</a>
                </li>
                <li>
                    <a href="/favorites" className="header__nav-link">Favorites</a>
                </li>
                <li>
                    <a href="login" className="header__nav-link">Login</a>
                </li>
                <li>
                    <a href="register" className="header__nav-link">Register</a>
                </li>
            </nav>
        </ul>
    )

}


export default Navbar;