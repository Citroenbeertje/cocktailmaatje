
import './RecipeCard.css'
import ClickedHeart from "../ClickedHeart/ClickedHeart.jsx";
import {useState} from "react";
function RecipeCard({cocktail}) {
    const [favorite, setFavorite] = useState(false)
    console.log("favorite: ", favorite)

    function clickedHeart() {
        setFavorite(!favorite);
    }


    return (
        <div className="recipe-card-container">
            <div className="title-likebutton-container">
                <div className="rcard-title">{cocktail.strDrink}</div>
                <ClickedHeart/>
            </div>
            <div className="upper-recipe">
                <div className="cocktail-image-container">
                    <img className="cocktail-image"
                         src={cocktail.strDrinkThumb}
                         alt="Cocktail Image"
                    />
                </div>
                <div className="ingredient-textbox">

                    <div className="ingredients-title">Ingredients</div>
                    <table>
                        <tbody>
                        <tr>
                            <td>{cocktail.strMeasure1}</td>
                            <td>{cocktail.strIngredient1}</td>
                        </tr>
                        <tr>
                            <td>{cocktail.strMeasure2}</td>
                            <td>{cocktail.strIngredient2}</td>
                        </tr>
                        <tr>
                            <td>{cocktail.strMeasure3}</td>
                            <td>{cocktail.strIngredient3}</td>
                        </tr>
                        <tr>
                            <td>{cocktail.strMeasure4}</td>
                            <td>{cocktail.strIngredient4}</td>
                        </tr>
                        <tr>
                            <td>{cocktail.strMeasure5}</td>
                            <td>{cocktail.strIngredient5}</td>
                        </tr>
                        <tr>
                            <td>{cocktail.strMeasure6}</td>
                            <td>{cocktail.strIngredient6}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <div className="lower-textbox">
                <div className="recipe-specifics">
                    {/*<div className="mocktail-glassshape">*/}
                    <span className="specifics">{cocktail.strAlcoholic}</span>
                    <span className="specifics">Glass: {cocktail.strGlass}</span>
                    {/*</div>*/}
                </div>
                <div className="instructions-title">Instructions:</div>
                <div className="instructions-text">{cocktail.strInstructions}</div>
            </div>
        </div>
    );
}

export default RecipeCard;