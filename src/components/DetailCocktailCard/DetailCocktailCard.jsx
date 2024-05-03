import { useState } from "react";
import './DetailCocktailCard.css'
import Heart from '../../assets/heart-outline.svg?react';
import HeartSolid from '../../assets/heart-solid.svg?react';
import ClickedHeart from "../ClickedHeart/ClickedHeart.jsx";
function DetailCocktailCard(drinks) {
    const [favorite, setFavorite] = useState(false)
    console.log("favorite: ", favorite)

    function clickedHeart() {
        setFavorite(!favorite);
    }



    return (
            <div className="cocktail-card">
                <div className="image-container">
                    <img className="detailcard-image"
                        src="https://cocktail-stack.netlify.app/static/3b40847ea8709ee1224bef4e95b6485d/9a128/k6v97f1487602550.jpg"
                        alt="Cocktail Image"
                    />
                </div>
                <div className="information-side">
                    <div className="container-title-heart">
                        <div className="title-detail-card">Jack Rose Cocktail{drinks.strDrink}</div>
                        <ClickedHeart/>
                        {/*{!favorite &&*/}
                        {/*    <button id="heart-outline" className="icon-heart" onClick={clickHeart}><Heart/></button>}*/}
                        {/*{favorite &&*/}
                        {/*    <button id="heart-solid" className="icon-heart" onClick={clickHeart}><HeartSolid/></button>}*/}
                    </div>

                    <div className="">Ingredients{drinks.strIngredient1}</div>
                    <div className="">Category drink{drinks.strCategory}</div>
                    <span>non-alcoholic{drinks.strAlcoholic}</span>
                    <span>glass shape{drinks.strGlass}</span>
                </div>
            </div>
    );
}

export default DetailCocktailCard;
