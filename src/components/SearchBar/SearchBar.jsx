import './SearchBar.css';
import axios from 'axios';
import AZList from "../AZList/AZList.jsx";
import React, { useEffect, useState } from 'react';
// import icon from '../../assets/glass-icon.png';

// List all cocktails by first letter
// www.thecocktaildb.com/api/json/v1/1/search.php?f=a

function SearchBar({placeholder= "Search for cocktails", data}) {
    const [filterType, setFilterType] = useState("search all");
    const [ingredientOptions, setIngredientOptions] = useState([]);
    console.log("ingredientOptions", ingredientOptions)
    const handleClick = () => {
    };


    //
    useEffect(() => {
        const fetchIngredients = async () => {
            const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
            console.log("response", response);
            setIngredientOptions(response.data.drinks);
        };

        fetchIngredients();
        console.log("ingredientOptions", ingredientOptions);
    }, [])
    // // console.log(filterType)
    //

    // --renderbar functie --
    // rendered conditioneel het tweede deel van de zoekfunctie
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
                    {ingredientOptions.map((ingredient) => {
                        return <option value={ingredient.strIngredient1}>{ingredient.strIngredient1}</option>
                    })}

                </select>
            </>
        }
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


export default SearchBar;
