
import './RecipeCard.css'
function RecipeCard() {
    const drinks = {
        strDrink: 'Grizzly Bear',
        strIngredient1: 'Main Ingredient',
        strCategory: 'Category',
        strAlcoholic: 'Non-alcoholic',
        strGlass: 'Glass Shape'
    };

    return (
        <div className="recipe-card-container">
            <div className="upper-recipe">
                <div className="cocktail-image-container">
                    <img className="cocktail-image"
                         src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
                         alt="Cocktail Image"
                    />
                </div>
                <div className="title-ingredient-textbox">
                    <div className="title-recipe-card">Grizzly Bear</div>
                    <div className="">Ingredients</div>
                    <div className="">Gin{drinks.strCategory}</div>
                    <div className="">Grand Marnier{drinks.strCategory}</div>
                    <div className="">Lemon Juice{drinks.strCategory}</div>
                    <div className="">Grand Marnier{drinks.strCategory}</div>
                    <div className="">Lemon Juice{drinks.strCategory}</div>
                </div>
            </div>


            <div className="lower-textbox">
                <div className="recipe-specifics">
                    <span className="specifics">Instructions</span>
                    <div className="mocktail-glassshape">
                    <span className="specifics">non-alcoholic</span>
                    <span className="specifics">glass shape</span>
                    </div>
                </div>
                <div className="instructions">Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass.1</div>
            </div>
        </div>
    );
}

export default RecipeCard;