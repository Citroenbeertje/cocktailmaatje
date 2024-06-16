import React, { createContext, useEffect, useState } from 'react';
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
import {favoritesStringToArray} from "./helpers/helpers.js";
import { LoginProvider } from './context/LoginContext';

function App() {

    return (
        <LoginProvider>
            <div className='background'>
                <div className='header-section'>
                    <div className='leftheader-logo'>
                        <h1 className="cocktailmaatje-title">Cocktailmaatje</h1>
                        <h2 className="sub-title">Cocktailmaatje: Your assist for recipes and inspiration</h2>
                    </div>
                    <div className="rightheader-navbar">
                        <Navbar />
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/favorites" element={<Favorites/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        </LoginProvider>
    );
}
export default App;

// function App() {
//
//     return (
//         <LoginContext.Provider value={{ userIsLoggedIn, setUserIsLoggedIn, username, setUsername, JWTToken, setJWTToken, favorites, setFavorites}}>
//             <div className='background'>
//                 <div className='header-section'>
//                     <div className='leftheader-logo'>
//                         <h1 className="cocktailmaatje-title">Cocktailmaatje</h1>
//                         <h2 className="sub-title">Cocktailmaatje: Your assist for recipes and inspiration</h2>
//                     </div>
//                     <div className="rightheader-navbar">
//                         <Navbar userIsLoggedIn={userIsLoggedIn} onLogout={handleLogout}/>
//                     </div>
//                 </div>
//                 <Routes>
//                     <Route path="/" element={
//                         <HomePage
//                             userIsLoggedIn={userIsLoggedIn}
//                             username={username}
//                             JWTToken={JWTToken}
//                             favorites={favorites}
//                             setFavorites={setFavorites}
//                         />
//                     }/>
//                     <Route path="/about" element={<About/>}/>
//                     <Route path="/favorites" element={
//                         <Favorites
//                             userIsLoggedIn={userIsLoggedIn}
//                             username={username}
//                             JWTToken={JWTToken}
//                             favorites={favorites}
//                             setFavorites={setFavorites}
//                         />
//                     }/>
//                     <Route path="/login" element={
//                         <Login
//                             username={username}
//                             setUsername={setUsername}
//                             setJWTToken={setJWTToken}
//                             userIsLoggedIn={userIsLoggedIn}
//                         />
//                     }/>
//                     <Route path="/register" element={<Register/>}/>
//                     <Route path="*" element={<NotFound/>}/>
//                 </Routes>
//             </div>
//         </LoginContext.Provider>
//     );
// }

