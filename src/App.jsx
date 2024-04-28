import { useState } from 'react'
import './App.css'
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import DetailCocktailCard from "./components/DetailCocktailCard/DetailCocktailCard.jsx";
import BigCocktailCard from "./components/BigCocktailCard/BigCocktailCard.jsx";
import Form from "./components/Form/LoginRegisterForm.jsx";
import LoginRegisterForm from "./components/Form/LoginRegisterForm.jsx";
function App() {
    return (
        <div className='background'>

            <div className='header-section'>
                <div className='header-left-logo'>
                    <h1>Cocktailmaatje </h1>
                    <h2>Cocktail recepten en inspiratie</h2>
                </div>
                <div className="header-right">
                    <ul className="header__nav-list">
                        <nav className="nav-container">
                            <li className="header__nav-item"><a href="#" className="header__nav-link">Home</a></li>
                            <li className="header__nav-item"><a href="#" className="header__nav-link">About</a></li>
                            <li className="header__nav-item"><a href="#" className="header__nav-link">Cocktail
                                Gallery</a></li>
                            <li className="header__nav-item"><a href="#" className="header__nav-link">Favorites</a></li>
                            <li className="header__nav-item"><a href="#" className="header__nav-link">Login</a></li>
                            <li className="header__nav-item"><a href="#" className="header__nav-link">Register</a></li>
                            <li className="header__nav-item"><a href="#" className="header__nav-link">Language</a></li>
                        </nav>
                    </ul>

                </div>
            </div>

            <SearchBar/>
            <LoginRegisterForm/>
            {/*<DetailCocktailCard/>*/}
            {/*<BigCocktailCard/>*/}

        </div>
);
}



export default App;
