import React, {useEffect, useState} from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import DetailCocktailCard from "./components/DetailCocktailCard/DetailCocktailCard.jsx";
import RecipeCard from "./components/RecipeCard/RecipeCard.jsx";
import RegisterForm from "./components/Form/RegisterForm.jsx";
import DisplaySearchResults from "./components/DisplaySearchResults/DisplaySearchResults.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

import HomePage from "./pages/Home/HomePage.jsx";
import About from "./pages/About/About.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import axios from "axios";

function App() {
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
                    const favoritesArray = favoritesString.split(",");
                    const storedFavorites = favoritesArray.map((favorite) => {
                        const favoriteData = favorite.split(".");
                        return {
                            idDrink: favoriteData[0],
                            strDrink: favoriteData[1]
                        }
                    })
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
        <div className='background'>
            <div className='header-section'>
                <div className='leftheader-logo'>
                    <h1 className="cocktailmaatje-title">Cocktailmaatje</h1>
                    <h2 className="sub-title">Cocktailmaatje: Your assist for recipes and inspiration</h2>
                </div>
                <div className="rightheader-navbar">
                    <Navbar userIsLoggedIn={userIsLoggedIn} onLogout={handleLogout}/>
                </div>
            </div>
            <Routes>
                <Route path="/" element={
                    <HomePage
                        userIsLoggedIn={userIsLoggedIn}
                        username={username}
                        JWTToken={JWTToken}
                        favorites={favorites}
                        setFavorites={setFavorites}
                    />
                } />
                <Route path="/about" element={<About/>} />
                <Route path="/favorites" element={
                    <Favorites
                        userIsLoggedIn={userIsLoggedIn}
                        username={username}
                        JWTToken={JWTToken}
                        favorites={favorites}
                        setFavorites={setFavorites}
                    />
                } />
                <Route path="/login" element={
                    <Login
                        username={username}
                        setUsername={setUsername}
                        setJWTToken={setJWTToken}
                        userIsLoggedIn={userIsLoggedIn}
                    />
                } />
                <Route path="/register" element={<Register/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
    );
}

export default App;