import axios from "axios";
import React, { useState } from 'react';
import SearchBar from "../SearchBar/SearchBar.jsx";
import "./AZList+DisplaySearchResults.css";

// List all cocktails by first letter
// www.thecocktaildb.com/api/json/v1/1/search.php?f=a

// Lookup full cocktail details by id
// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
function AZList({setCocktails}) {

    const handleClick = async (letter) => {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
        setCocktails(response.data.drinks);
    }
    // TODO letter nog meegeven axios om cocktail lijst te tonen
    //
    // stappen:
    // 1 GET request naar www.thecocktaildb.com/api/json/v1/1/search.php?f=<kleine letter hier>
    // 2 je krijgt data terug en gebruikt die data om een overzicht van cocktails te tonen
    return (
        <div>
            <div className='a-z-list'>
                {"A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ").map((letter) => (
                    <button className="letter-button" key={letter} onClick={() => handleClick(letter.toLowerCase())}>
                        {letter}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default AZList;