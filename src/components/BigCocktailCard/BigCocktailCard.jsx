
import './BigCocktailCard.css'
function BigCocktailCard() {
    const drinks = {
        strDrink: 'Grizzly Bear',
        strIngredient1: 'Main Ingredient',
        strCategory: 'Category',
        strAlcoholic: 'Non-alcoholic',
        strGlass: 'Glass Shape'
    };

    return (
        <div className="recipe-card-parent">
            <div className="title-recipecard">{drinks.strDrink}</div>
            <div className="big-card">
                <div className="recipe-image-side">
                    <img className="big-image"
                        src="https://cocktail-stack.netlify.app/static/3b40847ea8709ee1224bef4e95b6485d/9a128/k6v97f1487602550.jpg"
                        alt="Cocktail Image"
                    />
                </div>
                <div className="recipe-specs">
                    <div className="">{drinks.strIngredient1}</div>
                    <div className="">{drinks.strCategory}</div>
                    <div className="">{drinks.strAlcoholic}</div>
                    <div className="">{drinks.strGlass}</div>
                </div>
            </div>
            <div className="recipe-text-block">
                <div className="recipe-text-measurement">
                    Measure
                </div>
                <div className="recipe-text-instructions">
                    Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.
                </div>
            </div>
        </div>

    );
}

export default BigCocktailCard;