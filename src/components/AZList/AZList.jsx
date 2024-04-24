import axios from "axios";
import React, { useState } from 'react';
import SearchBar from "../SearchBar/SearchBar.jsx";
import './AZList.css'


// List all cocktails by first letter
// www.thecocktaildb.com/api/json/v1/1/search.php?f=a

// Lookup full cocktail details by id
// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
function AZList() {
    const [cocktails, setCocktails] = useState([]);
    console.log("cocktails", cocktails);
    const handleClick = async (letter) => {
        // console.log(letter);
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
        console.log("response", response);
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
                    <button key={letter} onClick={() => handleClick(letter.toLowerCase())}>
                        {letter}
                    </button>
                ))}
            </div>
            <div className='drink-list'>
                {cocktails.map((drink) => <button key={drink.idDrink}>{drink.strDrink}</button>)}

            </div>
        </div>
    );
}

export default AZList;