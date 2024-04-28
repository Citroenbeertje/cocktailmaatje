import './SearchBar.css';
import axios from 'axios';
import AZList from "../AZList/AZList.jsx";
import React, { useEffect, useState } from 'react';
import Button from "../Button/Button.jsx";

// import icon from '../../assets/glass-icon.png';

// List all cocktails by first letter
// www.thecocktaildb.com/api/json/v1/1/search.php?f=a

function SearchBar({setCocktails}) {
    const [filterType, setFilterType] = useState("search all");
    const [ingredientOption, setIngredientOption] = useState([]);
    const [categoryOption, setCategoryOption] = useState([]);
    const [glassOption, setGlassOption] = useState([]);
    const [mocktailsOption, setMocktailsOption] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const handleSearchClick = async () => {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`);
        setCocktails(response.data.drinks);
    };

    //
    useEffect(() => {
        const fetchIngredient = async () => {
            const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
            setIngredientOption(response.data.drinks);
        };
        fetchIngredient();
    }, [])

    useEffect(() => {
        const fetchCategory = async () => {
            const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
            setCategoryOption(response.data.drinks);
        };
        fetchCategory();
    }, [])

    useEffect(() => {
        const fetchGlass = async () => {
            const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list');
            setGlassOption(response.data.drinks);
        };
        fetchGlass();
    }, [])

    useEffect(() => {
        const fetchMocktails = async () => {
            const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list');
            setMocktailsOption(response.data.drinks);
        };
        fetchMocktails();
    }, [])


    // --renderbar functie --
    // rendered conditioneel het tweede deel van de zoekfunctie
    const renderBar = (filterTypeValue) => {
        // TODO onnodige fragments weghalen
        if (filterTypeValue === "search cocktails") {
            return <>
                {/*<div className="searchbar-box">*/}
                    <input type="text"
                           placeholder="search for cocktails"
                           value={searchInput}
                           onChange={(e) => setSearchInput(e.target.value)}
                    />
                {/*    <img src={icon} alt="magnifying-glass"/>*/}
                {/*</div>*/}
                <Button onClick={handleSearchClick}>Search</Button>
            </>
        }
        else if (filterTypeValue === "ingredient"){
            return <>
                <select
                    name="secondary-dropdown"
                    id="blabla">
                    {ingredientOption.map((ingredient) => {
                        return <option value={ingredient.strIngredient1}>{ingredient.strIngredient1}</option>
                    })}
                </select>
            </>
        }
        else if (filterTypeValue === "category"){
            return <>
                <select
                    name="secondary-dropdown"
                    id="blabla">
                    {categoryOption.map((category) => {
                        return <option value={category.strCategory}>{category.strCategory}</option>
                    })}
                </select>
            </>
        }
        else if (filterTypeValue === "glassType"){
            return <>
                <select
                    name="secondary-dropdown"
                    id="blabla">
                    {glassOption.map((glassType) => {
                        return <option value={glassType.strGlass}>{glassType.strGlass}</option>
                    })}
                </select>
            </>
        }
        else if (filterTypeValue === "mocktails"){
            return <>
                <select
                    name="secondary-dropdown"
                    id="blabla">
                    {mocktailsOption.map((mocktails) => {
                        return <option value={mocktails.strAlcoholic}>{mocktails.strAlcoholic}</option>
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
                        <option value="search cocktails">Search cocktails</option>
                        <option value="ingredient">Ingredient</option>
                        <option value="category">Drink category</option>
                        <option value="glassType">Glass type</option>
                        <option value="mocktails">Mocktails</option>
                    </select>

                    {renderBar(filterType)}
                </div>
                <AZList setCocktails={setCocktails}/>

            </div>
        </div>


    )
}


export default SearchBar;