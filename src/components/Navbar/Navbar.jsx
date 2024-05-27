import React from "react"
import './Navbar.css'
import { NavLink} from "react-router-dom";


function Navbar({userIsLoggedIn, onLogout}) {

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
                    <li id="logout-link" onClick={onLogout}>
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