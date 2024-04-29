import React, { useState } from 'react'
import './App.css'
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import DetailCocktailCard from "./components/DetailCocktailCard/DetailCocktailCard.jsx";
import BigCocktailCard from "./components/BigCocktailCard/BigCocktailCard.jsx";
import LoginRegisterForm from "./components/Form/LoginRegisterForm.jsx";
import DisplaySearchResults from "./components/DisplaySearchResults/DisplaySearchResults.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

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
                </div>
            </div>
            <SearchBar setCocktails={setCocktails} />
            <DisplaySearchResults cocktails={cocktails} />
            <LoginRegisterForm/>
            {/*<DetailCocktailCard/>*/}
            {/*<BigCocktailCard/>*/}
        </div>
    );
}

export default App;
