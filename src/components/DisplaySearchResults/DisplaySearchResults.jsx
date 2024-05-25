import {useState} from "react";
import RecipeCard from "../RecipeCard/RecipeCard.jsx";
import DetailCocktailCard from "../DetailCocktailCard/DetailCocktailCard.jsx";

function DisplaySearchResults ({cocktails, userIsLoggedIn, username, JWTToken, favorites, setFavorites}) {

    const [selectedCocktail, setSelectedCocktail] = useState(null)

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

    const renderCocktailCard = () => {
        if (userIsLoggedIn) {
            return <RecipeCard
                cocktail={selectedCocktail}
                userIsLoggedIn={userIsLoggedIn}
                username={username}
                JWTToken={JWTToken}
                favorites={favorites}
                setFavorites={setFavorites}
            />
        } else {
            return <DetailCocktailCard
                cocktail={selectedCocktail}
                userIsLoggedIn={userIsLoggedIn}
                username={username}
                JWTToken={JWTToken}
                favorites={favorites}
                setFavorites={setFavorites}
            />
        }
    }

    return (
        <div className='drink-list-parent'>
            {renderDrinkList()}
            {selectedCocktail && renderCocktailCard()}
        </div>
    );

}


export default DisplaySearchResults;