import './SearchBar.css'
import axios from 'axios';
import AZList from "../AZList/AZList.jsx";
import React, { useState } from 'react';

// List all cocktails by first letter
// www.thecocktaildb.com/api/json/v1/1/search.php?f=a

function SearchBar({placeholder= "Search for cocktails", data}) {

    const [filterType, setFilterType] = useState("Search all")

    console.log(filterType)

    const handleClick = () => {
        console.log('search');
        // TODO letter nog meegeven axios om cocktail lijst te tonen
    };

    const renderBar = (filterTypeValue) => {
        console.log("filterTypeValue", filterTypeValue)
        if (filterTypeValue === "Cocktails" || filterTypeValue === "Search all") {
            console.log("AAA")
            return <>
                <input type="text" placeholder="search for cocktails"/>
                <div className="search-magnify-icon">searchicon</div>
                <button className="search-button" onClick={handleClick}>Search</button>
            </>
        }
        console.log("BBB")
    }

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
                        <option value="Search all">Search all</option>
                        <option value="Cocktails">Cocktails</option>
                        <option value="Ingredients">Ingredients</option>
                        <option value="Category">Category</option>
                        <option value="Glass Type">Glass Type</option>
                        <option value="Virgin Drinks">Virgin Drinks</option>
                    </select>

                    {renderBar(filterType)}

                </div>
                <AZList/>
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
