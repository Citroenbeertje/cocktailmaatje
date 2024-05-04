import { useState } from "react";
import './DetailCocktailCard.css'
import Heart from '../../assets/heart-outline.svg?react';
import HeartSolid from '../../assets/heart-solid.svg?react';
import ClickedHeart from "../ClickedHeart/ClickedHeart.jsx";
function DetailCocktailCard({cocktail}) {
    const [favorite, setFavorite] = useState(false)
    console.log("favorite: ", favorite)

    function clickedHeart() {
        setFavorite(!favorite);
    }



    return (
            <div className="detail-cocktail-card">
                <div className="image-container">
                    <img className="detailcard-image"
                        src={cocktail.strDrinkThumb}
                        alt="Cocktail Image"
                    />
                </div>
                <div className="information-side">
                    {/*<div className="container-title-heart">*/}
                    {/*    <div className="title-detail-card">{cocktail.strDrink}</div>*/}
                    {/*    <div className="heart-container"><ClickedHeart/></div>*/}

                    {/*</div>*/}
                    <div className="title-detail-card">{cocktail.strDrink}</div>
                    <div className="main-ingredient">{cocktail.strIngredient1}</div>
                    <div className="">Category:{cocktail.strCategory}</div>
                    <div className="">{cocktail.strAlcoholic}</div>
                    <div className="">Glass: {cocktail.strGlass}</div>
                    <div className="heart"><ClickedHeart/></div>
                </div>
            </div>
    );
}

export default DetailCocktailCard;
