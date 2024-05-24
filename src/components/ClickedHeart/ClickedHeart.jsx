import Heart from "../../assets/heart-outline.svg?react";
import HeartSolid from "../../assets/heart-solid.svg?react";
import {useState} from "react";
import "./ClickedHeart.css"

function ClickedHeart({cocktailID, userIsLoggedIn, username, JWTToken, favorites}) {
    const favorite = favorites !== null && favorites.includes(cocktailID);
    console.log("favorite: ", favorite);
    const clickHeart = () => {
        toggleFavorite();
        // als niet ingelogd -> alert("U moet ingelogd zijn om favorieten op te kunnen slaan)
        // als wel ingelogd:
        //  als huidige drankje nog geen favoriet is: voeg toe aan favorieten (door verzoek
        //  PUT https://api.datavortex.nl/cocktailmaatje/users/<username>/)
        //  als huidige drankje al wel favoriet is: dan verwijderen uit favorieten en alert geven
        //  (door verzoek PUT https://api.datavortex.nl/cocktailmaatje/users/<username>/ )

    };

    function toggleFavorite() {
        const updatedFavorites = [...favorites];
        if (userIsLoggedIn !== true) {
            alert("U moet ingelogd zijn om favorieten op te kunnen slaan");
        } else {
            if (favorites.includes(cocktailID) !== true) {
                updatedFavorites.push(cocktailID)
            } else {
                updatedFavorites.filter(ID => ID !== cocktailID)
                alert("Cocktail verwijderd uit favorietenlijst")
            }
            // TODO updaten van favorieten in eigen state en backend
        }
    }

    return !favorite ? (
        <button id="heart-outline" className="icon-heart" onClick={clickHeart}><Heart/></button>
    ) : (
        <button id="heart-solid" className="icon-heart" onClick={clickHeart}><HeartSolid/></button>
    )
}

export default ClickedHeart;