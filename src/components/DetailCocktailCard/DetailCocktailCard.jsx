import './DetailCocktailCard.css'
import Heart from '../../assets/heart-outline.svg?react';
import HeartSolid from '../../assets/heart-solid.svg?react';
function DetailCocktailCard(drinks) {



    function clickHeart() {
        alert("Cocktail added to favorites");
        // if (btn.classList.contains()) {
        //     btn.classList.removed();
        //     btn.classList.add();
        // } else {
        //
        // }
    }
    return (
            <div className="cocktail-card">
                <div className="image-container">
                    <img className="detail-image"
                        src="https://cocktail-stack.netlify.app/static/3b40847ea8709ee1224bef4e95b6485d/9a128/k6v97f1487602550.jpg"
                        alt="Cocktail Image"
                    />
                </div>
                <div className="information-side">
                    <div className="container-heart">
                        <div className="title-detail-card">Jack Rose Cocktail{drinks.strDrink}</div>
                        <button id="heart-outline" className="icon-heart" onClick={clickHeart}><Heart/></button>
                        <button id="heart-solid" className="icon-heart" onClick={clickHeart}><HeartSolid/></button>
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
