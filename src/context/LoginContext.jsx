import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { favoritesStringToArray} from "../helpers/helpers.js";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    const [JWTToken, setJWTToken] = useState(null);
    const [username, setUsername] = useState(null);
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
    const [favorites, setFavorites] = useState(null);

    useEffect(() => {
        if (username !== null && JWTToken !== null) {
            setUserIsLoggedIn(true);
        }
    }, [username, JWTToken]);

    useEffect(() => {
        if (userIsLoggedIn) {
            const fetchFavorites = async () => {
                // Dit gebruik van de backend heeft de JWT token nodig, en die wordt hier extra meegegeven
                // door het aan axios te geven
                const response = await axios.get(`https://api.datavortex.nl/cocktailmaatje/users/${username}`, {
                    headers: {
                        'Authorization': `Bearer ${JWTToken}`
                    }
                });
                const favoritesString = response.data.info;
                // Voordat er ooit favorieten zijn opgeslagen is de use info null, en nog geen
                // string die gesplit kan worden op komma's. Dus zet ik de eerste keer een Lege
                // Array zodat er favorieten opgeslagen in kunnen worden.
                // favorites wordt opgeslagen als "id.naam,id.naam,...." en kan opgesplitst
                // worden
                if (favoritesString !== null && favoritesString !== "") {
                    const storedFavorites = favoritesStringToArray(favoritesString);
                    setFavorites(storedFavorites);
                } else {
                    setFavorites([]);
                }
            };
            fetchFavorites();
        }
    }, [userIsLoggedIn, username, JWTToken]);
    const handleLogout = () => {
        // Zorgt ervoor dat een gebruiker wordt uitgelogd
        alert(`Goodbye ${username}\n\ \n\ and remember to drink wisely`);
        setJWTToken(null);
        setUsername(null);
        setUserIsLoggedIn(false);
        setFavorites(null);
    }

    return (
        <LoginContext.Provider value={{ userIsLoggedIn, setUserIsLoggedIn, username, setUsername, JWTToken, setJWTToken, favorites, setFavorites, handleLogout }}>
            {children}
        </LoginContext.Provider>
    );
};

export {LoginContext, LoginProvider};