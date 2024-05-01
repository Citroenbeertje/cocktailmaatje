
import './RecipeCard.css'
import DetailCocktailCard from "../DetailCocktailCard/DetailCocktailCard.jsx";
function RecipeCard() {
    const drinks = {
        strDrink: 'Grizzly Bear',
        strIngredient1: 'Main Ingredient',
        strCategory: 'Category',
        strAlcoholic: 'Non-alcoholic',
        strGlass: 'Glass Shape'
    };

    return (
        <div className="recipe-card-parent">
            <DetailCocktailCard/>
                <div className="recipe-text-measurement">
                    Measure</div>
                <div className="recipe-text-instructions">
                    Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.</div>
        </div>

    );
}

export default RecipeCard;