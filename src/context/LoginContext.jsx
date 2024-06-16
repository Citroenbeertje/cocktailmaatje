import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { favoritesStringToArray} from "../helpers/helpers.js";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    const [JWTToken, setJWTToken] = useState(null);

    useEffect(() => {
        if (username !== null && JWTToken !== null) {
            setUserIsLoggedIn(true);
        }
    }, [username, JWTToken]);

    return (
        <LoginContext.Provider value={{ userIsLoggedIn, setUserIsLoggedIn, username, setUsername, JWTToken, setJWTToken, favorites, setFavorites, handleLogout }}>
            {children}
        </LoginContext.Provider>
    );
};

export { LoginContext, LoginProvider };