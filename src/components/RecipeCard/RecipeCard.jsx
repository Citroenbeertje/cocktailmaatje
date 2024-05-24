
import './RecipeCard.css'
import ClickedHeart from "../ClickedHeart/ClickedHeart.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function RecipeCard({cocktail, favorites}) {
    const [cocktailInfo, setCocktailInfo] = useState({})

    useEffect(() => {
        const fetchDrinkInformation = async () => {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`);
            console.log("response", response)
            setCocktailInfo(response.data.drinks[0])
        }

        fetchDrinkInformation();
    }, [cocktail.idDrink])


    return (
        <div className="recipe-card-container">
            <div className="title-likebutton-container">
                <div className="rcard-title">{cocktailInfo.strDrink}</div>
                <ClickedHeart cocktailID={cocktailInfo.idDrink} favorites={favorites} />
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
                    {/*<div className="mocktail-glassshape">*/}
                    <span className="specifics">{cocktailInfo.strAlcoholic}</span>
                    <span className="specifics">Glass: {cocktailInfo.strGlass}</span>
                    {/*</div>*/}
                </div>
                <div className="instructions-title">Instructions:</div>
                <div className="instructions-text">{cocktailInfo.strInstructions}</div>
            </div>
        </div>
    );
}

export default RecipeCard;