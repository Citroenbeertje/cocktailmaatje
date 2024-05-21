import React, { useState } from 'react'
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

function App() {
    const [JWTToken, setJWTToken] = useState(null);
    const [username, setUsername] = useState(null);
    const [savedFavorites, setSavedFavorites] = useState();

    console.log("username", username);
    console.log("JWTToken", JWTToken);

    let userIsLoggedIn = false;
    if (username !== null && JWTToken !== null) {
        userIsLoggedIn = true;
    }
    console.log("userIsLoggedIn", userIsLoggedIn)

    return (
        <div className='background'>
            <div className='header-section'>
                <div className='leftheader-logo'>
                    <h1 className="cocktailmaatje-title">Cocktailmaatje</h1>
                    <h2 className="sub-title">Cocktailmaatje: Your assist for recipes and inspiration</h2>
                </div>
                <div className="rightheader-navbar">
                    <Navbar/>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/favorites" element={<Favorites/>} />
                <Route path="/login" element={<Login setUsername={setUsername} setJWTToken={setJWTToken}/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
            {/*<DetailCocktailCard/>*/}
            {/*<RecipeCard/>*/}

        </div>
    );
}

export default App;
