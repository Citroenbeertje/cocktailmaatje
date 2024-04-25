import './SearchBar.css';
import axios from 'axios';
import AZList from "../AZList/AZList.jsx";
<<<<<<< HEAD
import React, { useState } from 'react';
// import icon from '../../assets/glass-icon.png';
=======
>>>>>>> feature/CocktailInfo

// List all cocktails by first letter
// www.thecocktaildb.com/api/json/v1/1/search.php?f=a

function SearchBar({placeholder= "Search for cocktails", data}) {

<<<<<<< HEAD
    const [filterType, setFilterType] = useState("search all")


    // console.log(filterType)

    const handleClick = () => {
    //     console.log('search');
    //     // TODO letter nog meegeven axios om cocktail lijst te tonen
    };

    const renderBar = (filterTypeValue) => {
        console.log("filterTypeValue", filterTypeValue)
        if (filterTypeValue === "cocktails" || filterTypeValue === "search all") {
            console.log("AAA")
            return <>
                {/*<div className="searchbar-box">*/}
                    <input type="text" placeholder="search for cocktails"/>
                {/*    <img src={icon} alt="magnifying-glass"/>*/}
                {/*</div>*/}
                <button className="search-button" onClick={handleClick}>Search</button>
            </>
        }
        else {
            console.log("BBB")
            return <>
                <select
                    name="secondary-dropdown"
                    id="blabla">

                    <option value="ingredient">---- Choose Ingredient ----</option>
                </select>
            </>
        }
    }
=======
    // const handleClick = (letter) => {
    //     console.log(letter);
    //     // TODO letter nog meegeven axios om cocktail lijst te tonen
    // }
>>>>>>> feature/CocktailInfo

    return (
        <div className="search-section-parent-container">
            <div className="search-section">
                <div className="filter-search-function">
                    <select
                        className="main-dropdown"
                        name="filterType"
                        id="varieerbaar"
                        value={filterType}
                        onChange={(event) => setFilterType(event.target.value)}
                    >
                        <option value="search all">Search all</option>
                        <option value="cocktails">Cocktails</option>
                        <option value="ingredients">Ingredients</option>
                        <option value="category">Category</option>
                        <option value="glass type">Glass type</option>
                        <option value="virgin Drinks">Virgin drinks</option>
                    </select>

                    {renderBar(filterType)}
                </div>
                <AZList/>
<<<<<<< HEAD
=======

>>>>>>> feature/CocktailInfo
            </div>
        </div>


    )
}

// function SearchDropdownMain() {
//     const [filterType, setFilterType] = useState('Ingredients');
//
//     const handleChange = (event) => {
//         setFilterType(event.target.value);
//     };
//
//     return (
//
//     );
// }

//
// select geeft dropdown met 4 extra keuzes:
// ingredients, category, virgin drinks?, glass shape
//
// wanneer je een daarvan selecteerd verandert:
//     het zoekveld in een dropdown.
//     zoekknop verdwijnt
//
// het alfabet blijft staat, waardoor je ook op alfabet kan klikken
// en elke letter toont bijbehorende lijst aan.

export default SearchBar;
