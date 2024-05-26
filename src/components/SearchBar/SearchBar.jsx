import './SearchBar.css';
import axios from 'axios';
import AZList from "../AZList/AZList.jsx";
import React, { useEffect, useState } from 'react';
import Button from "../Button/Button.jsx";

// import icon from '../../assets/glass-icon.png';

// List all cocktails by first letter
// www.thecocktaildb.com/api/json/v1/1/search.php?f=a

function SearchBar({setCocktails}) {
    const [filterType, setFilterType] = useState("search cocktails");
    const [ingredientOption, setIngredientOption] = useState([]);
    const [categoryOption, setCategoryOption] = useState([]);
    const [glassOption, setGlassOption] = useState([]);
    const [mocktailsOption, setMocktailsOption] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [selectedIngredient, setSelectedIngredient] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedGlass, setSelectedGlass] = useState("");
    const [selectedMocktail, setSelectedMocktail] = useState("");

    const handleSearchClick = async () => {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`);
        setCocktails(response.data.drinks);
    };

    //
    useEffect(() => {
        const dropdownFetchIngredient = async () => {
            const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
            setIngredientOption(response.data.drinks);
        };
        dropdownFetchIngredient();
    }, [])

    useEffect(() => {
        const dropdownFetchCategory = async () => {
            const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
            setCategoryOption(response.data.drinks);
        };
        dropdownFetchCategory();
    }, [])

    useEffect(() => {
        const dropdownFetchGlass = async () => {
            const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list');
            setGlassOption(response.data.drinks);
        };
        dropdownFetchGlass();
    }, [])

    useEffect(() => {
        const dropdownFetchMocktails = async () => {
            const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list');
            setMocktailsOption(response.data.drinks);
        };
        dropdownFetchMocktails();
    }, [])


    useEffect(() => {
        const fetchDrinksByIngredient = async () => {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${selectedIngredient}`);
            console.log("response", response)
            setCocktails(response.data.drinks);
        }

        if (selectedIngredient !== "") {
            fetchDrinksByIngredient();
        }

    }, [selectedIngredient, setCocktails])

    useEffect(() => {
        const fetchDrinksByCategory = async () => {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
            console.log("response", response)
            setCocktails(response.data.drinks);
        }

        if (selectedCategory !== "") {
            fetchDrinksByCategory();
        }

    }, [selectedCategory, setCocktails])

    useEffect(() => {
        const fetchGlassByCategory = async () => {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${selectedGlass}`);
            console.log("response", response)
            setCocktails(response.data.drinks);
        }

        if (selectedGlass !== "") {
            fetchGlassByCategory();
        }

    }, [selectedGlass, setCocktails])

    useEffect(() => {
        const fetchDrinksByMocktail = async () => {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${selectedMocktail}`);
            console.log("response", response)
            setCocktails(response.data.drinks);
        }

        if (selectedCategory !== "") {
            fetchDrinksByMocktail();
        }

    }, [selectedMocktail, setCocktails])



    // --renderbar functie --
    // rendered conditioneel het tweede deel van de zoekfunctie
    const renderBar = (filterTypeValue) => {
        if (filterTypeValue === "search cocktails") {
            return <>
                {/*<div className="searchbar-box">*/}
                    <input type="text"
                           className="search-input-bar"
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
            return <select
                        name="secondary-dropdown"
                        id="blabla"
                        onChange={(e) => setSelectedIngredient(e.target.value)}
                        value={selectedIngredient}
                    >
                    <option key="ingredient-picker" value={""}>---- Choose ingredient ----</option>
                    {ingredientOption.map((ingredient) => {
                        return <option key={ingredient.strIngredient1}  value={ingredient.strIngredient1}>{ingredient.strIngredient1}</option>
                    })}
                </select>

        } else if (filterTypeValue === "category"){
            return <select
                        name="secondary-dropdown"
                        id="blabla"
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        value={selectedCategory}
                    >
                    <option key="category-picker" value={""}>--- Choose category of drink ---</option>
                    {categoryOption.map((category) => {
                        return <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                    })}
                </select>
        }
        else if (filterTypeValue === "glassType"){
            return <select
                name="secondary-dropdown"
                id="blabla"
                onChange={(e) => setSelectedGlass(e.target.value)}
                value={selectedGlass}
                >
                <option key="glass-picker" value={""}>---- Choose glass type ----</option>
                {glassOption.map((glassType) => {
                    return <option key={glassType.strGlass} value={glassType.strGlass}>{glassType.strGlass}</option>
                })}
            </select>
        }
        else if (filterTypeValue === "mocktails") {
            return <select
                    name="secondary-dropdown"
                    id="blabla"
                    onChange={(e) => setSelectedMocktail(e.target.value)}
                    value={selectedMocktail}
                    >
                    {mocktailsOption.map((mocktails) => {
                        return <option key={mocktails.strAlcoholic} value={mocktails.strAlcoholic}>{mocktails.strAlcoholic}</option>
                    })}

                </select>
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
                        <option value="category">Category of drink</option>
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