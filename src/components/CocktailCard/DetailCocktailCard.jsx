import './DetailCocktailCard.css'
function DetailCocktailCard(drinks) {
    return (
        <div className="parent-container">
            <div className="cocktail-card">
                <div className="image-side">
                    <img
                        src="https://cocktail-stack.netlify.app/static/3b40847ea8709ee1224bef4e95b6485d/9a128/k6v97f1487602550.jpg"
                        alt="Cocktail Image"
                    />
                </div>
                <div className="information-side">
                    <div className="title-detail-card">Grizzly Bear{drinks.strDrink}</div>
                    <div className="">main ingredient{drinks.strIngredient1}</div>
                    <div className="">Category drink{drinks.strCategory}</div>
                    <div className="">
                        <span>non-alcoholic{drinks.strAlcoholic}</span>
                        <span>glass shape{drinks.strGlass}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailCocktailCard;
