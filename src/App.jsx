import { useState } from 'react'
import AZList from "./components/AZList/AZList.jsx";
import './App.css'
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import CocktailCard from "./components/CocktailCard/CocktailCard.jsx";

function App() {
    return <>
        <div className='background'>

            <div className='header-section'>
                <div className='header-left-logo'>
                    <h1>Cocktailmaatje </h1>
                    <h2>Cocktailrecepten en inspiratie</h2>
                </div>
                <div className="header-right">
                    <ul className="header__nav-list">
                        <nav className="nav-container">
                            <li className="header__nav-item"><a href="#" className="header__nav-link">About</a></li>
                            <li className="header__nav-item"><a href="#" className="header__nav-link">Cocktail Gallery</a></li>
                            <li className="header__nav-item"><a href="#" className="header__nav-link">Favorites</a></li>
                            <li className="header__nav-item"><a href="#" className="header__nav-link">Login</a></li>
                            <li className="header__nav-item"><a href="#" className="header__nav-link">Register</a></li>
                            <li className="header__nav-item"><a href="#" className="header__nav-link">Lang</a></li>
                        </nav>
                    </ul>

                </div>
            </div>

            {/*<AZList/>*/}
            {/*<CocktailCard strDrink="boom" strIngredient1="aap" />*/}
        </div>
    </>
}


// {/*  <a href="https://vitejs.dev" target="_blank">*/}
// {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
// {/*  </a>*/}
// {/*  <a href="https://react.dev" target="_blank">*/}
// {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
// {/*  </a>*/}
// {/*</div>*/}
// {/*<h1>Vite + React</h1>*/}
// {/*<div className="card">*/}
// {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
// {/*    count is {count}*/}
// {/*  </button>*/}
// {/*  <p>*/}
// {/*    Edit <code>src/App.jsx</code> and save to test HMR*/}
// {/*  </p>*/}
// {/*</div>*/}
// {/*<p className="read-the-docs">*/}
// {/*  Click on the Vite and React logos to learn more*/}
// {/*</p>*/}

export default App
