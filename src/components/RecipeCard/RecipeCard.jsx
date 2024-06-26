
import './RecipeCard.css'
import ClickedHeart from "../ClickedHeart/ClickedHeart.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {LoginContext} from "../../context/LoginContext.jsx";

function RecipeCard({cocktail}) {
    const {userIsLoggedIn, username, JWTToken, favorites, setFavorites} = useContext(LoginContext);
    const [cocktailInfo, setCocktailInfo] = useState({})

    useEffect(() => {
        const fetchDrinkInformation = async () => {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`);
            setCocktailInfo(response.data.drinks[0])
        }

        fetchDrinkInformation();
    }, [cocktail.idDrink])


    return (
        <div className="recipe-card-container">
            <div className="title-likebutton-container">
                <div className="rcard-title">{cocktailInfo.strDrink}</div>
                <ClickedHeart cocktailID={cocktailInfo.idDrink} cocktailName={cocktailInfo.strDrink} userIsLoggedIn={userIsLoggedIn} username={username} JWTToken={JWTToken} favorites={favorites} setFavorites={setFavorites} />
            </div>
            <div className="upper-recipe">
                <div className="cocktail-image-container">
                    <img className="cocktail-image"
                         src={cocktailInfo.strDrinkThumb}
                         alt="Cocktail Image"
                    />
                </div>
                <div className="ingredient-textbox">

                    <div className="ingredients-title">Ingredients</div>
                    <table>
                        <tbody>
                        <tr>
                            <td>{cocktailInfo.strMeasure1}</td>
                            <td>{cocktailInfo.strIngredient1}</td>
                        </tr>
                        <tr>
                            <td>{cocktailInfo.strMeasure2}</td>
                            <td>{cocktailInfo.strIngredient2}</td>
                        </tr>
                        <tr>
                            <td>{cocktailInfo.strMeasure3}</td>
                            <td>{cocktailInfo.strIngredient3}</td>
                        </tr>
                        <tr>
                            <td>{cocktailInfo.strMeasure4}</td>
                            <td>{cocktailInfo.strIngredient4}</td>
                        </tr>
                        <tr>
                            <td>{cocktailInfo.strMeasure5}</td>
                            <td>{cocktailInfo.strIngredient5}</td>
                        </tr>
                        <tr>
                            <td>{cocktailInfo.strMeasure6}</td>
                            <td>{cocktailInfo.strIngredient6}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <div className="lower-textbox">
                <div className="recipe-specifics">
                    <span className="specifics">{cocktailInfo.strAlcoholic}</span>
                    <span className="specifics">Glass: {cocktailInfo.strGlass}</span>
                </div>
                <div className="instructions-title">Instructions:</div>
                <div className="instructions-text">{cocktailInfo.strInstructions}</div>
            </div>
        </div>
    );
}

export default RecipeCard;