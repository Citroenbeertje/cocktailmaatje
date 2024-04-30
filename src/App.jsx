import React, { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import DetailCocktailCard from "./components/DetailCocktailCard/DetailCocktailCard.jsx";
import BigCocktailCard from "./components/BigCocktailCard/BigCocktailCard.jsx";
import LoginRegisterForm from "./components/Form/LoginRegisterForm.jsx";
import DisplaySearchResults from "./components/DisplaySearchResults/DisplaySearchResults.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
    const [cocktails, setCocktails] = useState([]);
    return (
        <div className='background'>
            <div className='header-section'>
                <div className='header-left-logo'>
                    <h1>Cocktailmaatje</h1>
                    <h2>Cocktail recepten en inspiratie</h2>
                </div>
                <div className="header-right">
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/favorites" element={<Favorites/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/register" element={<Register/>} />
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
                </div>
            </div>
            <SearchBar setCocktails={setCocktails} />
            <DisplaySearchResults cocktails={cocktails} />
            <LoginRegisterForm/>
            <DetailCocktailCard/>
            <BigCocktailCard/>
        </div>
    );
}

export default App;
