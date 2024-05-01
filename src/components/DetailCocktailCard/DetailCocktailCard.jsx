import './DetailCocktailCard.css'
function DetailCocktailCard(drinks) {
    return (
            <div className="cocktail-card">
                <div className="image-container">
                    <img className="detail-image"
                        src="https://cocktail-stack.netlify.app/static/3b40847ea8709ee1224bef4e95b6485d/9a128/k6v97f1487602550.jpg"
                        alt="Cocktail Image"
                    />
                </div>
                <div className="information-side">
                    <div className="title-detail-card">Jack Rose Cocktail{drinks.strDrink}</div>
                    <div className="">Ingredients{drinks.strIngredient1}</div>
                    <div className="">Category drink{drinks.strCategory}</div>
                    <span>non-alcoholic{drinks.strAlcoholic}</span>
                    <span>glass shape{drinks.strGlass}</span>
                </div>
            </div>
    );
}

export default DetailCocktailCard;
