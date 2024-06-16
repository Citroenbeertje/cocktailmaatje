import './DetailCocktailCard.css'
import ClickedHeart from "../ClickedHeart/ClickedHeart.jsx";
import {useEffect, useState, useContext} from "react";
import axios from "axios";
import {LoginContext} from "../../context/LoginContext.jsx";
function DetailCocktailCard({cocktail}) {
    const {userIsLoggedIn, username, JWTToken, favorites, setFavorites} = useContext(LoginContext);
    const [cocktailInfo, setCocktailInfo] = useState({})

    useEffect(() => {
        const fetchDrinkInformation = async () => {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`);
            setCocktailInfo(response.data.drinks[0])
        }

        fetchDrinkInformation();
    }, [cocktail.idDrink])

    return (
            <div className="detail-cocktail-card">
                <div className="image-container">
                    <img className="detailcard-image"
                        src={cocktailInfo.strDrinkThumb}
                        alt="Cocktail Image"
                    />
                </div>
                <div className="information-side">
                    <div className="title-detail-card">{cocktailInfo.strDrink}</div>
                    <div className="main-ingredient">{cocktailInfo.strIngredient1}</div>
                    <div className="">Category:{cocktailInfo.strCategory}</div>
                    <div className="">{cocktailInfo.strAlcoholic}</div>
                    <div className="">Glass: {cocktailInfo.strGlass}</div>
                    <div className="heart"><ClickedHeart cocktailID={cocktailInfo.idDrink} cocktailName={cocktailInfo.strDrink} userIsLoggedIn={userIsLoggedIn} username={username} JWTToken={JWTToken} favorites={favorites} setFavorites={setFavorites} /></div>
                </div>
            </div>
    );
}

export default DetailCocktailCard;
