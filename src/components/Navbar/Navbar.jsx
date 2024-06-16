import React, { useContext } from 'react';
import './Navbar.css'
import { NavLink} from "react-router-dom";
import {LoginContext} from "../../context/LoginContext.jsx";

function Navbar() {
    const {userIsLoggedIn, handleLogout} = useContext(LoginContext);
    console.log({ userIsLoggedIn, handleLogout });
    return (

        <nav className="nav-container">
            <ul className="default-link-list">
                <li>
                    <NavLink to="/"
                             className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about"
                             className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                        About
                    </NavLink>
                </li>

                {userIsLoggedIn ? <>
                    <li>
                        <NavLink to="/favorites"
                                 className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                            Favorites
                        </NavLink>
                    </li>
                    <li id="logout-link" onClick={handleLogout}>
                        Log out
                    </li>
                </> : <>

                    <li>
                        <NavLink to="/login"
                                 className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/register"
                                 className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                            Register
                        </NavLink>
                    </li>
                </>}


                </ul>
                    </nav>

                    )

                }


                export default Navbar;