import React, {useContext} from "react";
import Heart from "../../assets/heart-outline.svg?react";
import HeartSolid from "../../assets/heart-solid.svg?react";
import "./ClickedHeart.css"
import axios from "axios";
import {favoritesArrayToString} from "../../helpers/helpers.js";
import {LoginContext} from "../../context/LoginContext.jsx";

function ClickedHeart({cocktailID, cocktailName}) {
    const {userIsLoggedIn, username, JWTToken, favorites, setFavorites} = useContext(LoginContext);
    const favorite = favorites !== null && favorites.map((data) => data.idDrink).includes(cocktailID);

    async function toggleFavorite() {
        let updatedFavorites;
        if (userIsLoggedIn !== true) {
            alert("Log in to save your favorite cocktails");
            return null
        }

        if (favorite === false) {
            updatedFavorites = [...favorites, {idDrink: cocktailID, strDrink: cocktailName}];
        } else {
            updatedFavorites = favorites.filter((data) => data.idDrink !== cocktailID)
            alert("Cocktail removed from your favorite list")
        }


        // 1 backend call voor updaten: van Array een string maken met komma's
        //   gescheiden. Die data opsturen naar backend met call.
        const favoritesString = favoritesArrayToString(updatedFavorites);
        await axios.put(`https://api.datavortex.nl/cocktailmaatje/users/${username}`, {
            "info": favoritesString
        }, {
            headers: {
                'Authorization': `Bearer ${JWTToken}`
            }
        });
        setFavorites(updatedFavorites)

    }

    return !favorite ? (
        <button id="heart-outline" className="icon-heart" onClick={toggleFavorite}><Heart/></button>
    ) : (
        <button id="heart-solid" className="icon-heart" onClick={toggleFavorite}><HeartSolid/></button>
    )
}

export default ClickedHeart;