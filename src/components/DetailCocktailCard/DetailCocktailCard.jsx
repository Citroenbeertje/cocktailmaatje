import './DetailCocktailCard.css'
import ClickedHeart from "../ClickedHeart/ClickedHeart.jsx";
function DetailCocktailCard({cocktail, userIsLoggedIn, username, JWTToken, favorites, setFavorites }) {

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
                    <div className="heart"><ClickedHeart cocktailID={cocktail.idDrink} cocktailName={cocktail.strDrink} userIsLoggedIn={userIsLoggedIn} username={username} JWTToken={JWTToken} favorites={favorites} setFavorites={setFavorites} /></div>
                </div>
            </div>
    );
}

export default DetailCocktailCard;
