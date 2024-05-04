import {useState} from "react";
import RecipeCard from "../RecipeCard/RecipeCard.jsx";
import DetailCocktailCard from "../DetailCocktailCard/DetailCocktailCard.jsx";

function DisplaySearchResults ({cocktails}) {

    const [selectedCocktail, setSelectedCocktail] = useState(null)
    console.log("selectedCocktail", selectedCocktail)

    const renderDrinkList = () => {
        if (cocktails === null) {
            return (
                <div>Oopsie! These cocktails don't exist in our database. Please check the spelling or try searching for another drink.</div>
            )
        }
        else {
            return (
                <div className='drink-list'>
                    {cocktails.map((drink) =>
                        <button
                            className='clickable-item'
                            onClick={() => setSelectedCocktail(drink)}
                            key={drink.idDrink}
                        >{drink.strDrink}</button>)}
                </div>
            )
        }
    }

    return (
        <div className='drink-list-parent'>
            {renderDrinkList()}
            {selectedCocktail && <DetailCocktailCard cocktail={selectedCocktail}/>}
        </div>
    );

}


export default DisplaySearchResults;