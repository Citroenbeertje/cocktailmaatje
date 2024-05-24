import Heart from "../../assets/heart-outline.svg?react";
import HeartSolid from "../../assets/heart-solid.svg?react";
import "./ClickedHeart.css"
import axios from "axios";

function ClickedHeart({cocktailID, userIsLoggedIn, username, JWTToken, favorites, setFavorites}) {
    const favorite = favorites !== null && favorites.includes(cocktailID);
    console.log("favorite: ", favorite);
    console.log("userIsLoggedIn", userIsLoggedIn)

    async function toggleFavorite() {
        let updatedFavorites;
        if (userIsLoggedIn !== true) {
            alert("U moet ingelogd zijn om favorieten op te kunnen slaan");
            return null
        }

        if (favorite === false) {
            updatedFavorites = [...favorites, cocktailID];
        } else {
            updatedFavorites = favorites.filter(ID => ID !== cocktailID)
            alert("Cocktail verwijderd uit favorietenlijst")
        }

        // 1 backend call voor updaten: van Array een string maken met komma's
        //   gescheiden. Die data opsturen naar backend met call.
        const response = await axios.put(`https://api.datavortex.nl/cocktailmaatje/users/${username}`, {
            // "name": "string",
            // "email": "string",
            // "password": "string",
            "info": updatedFavorites.join(",")
        }, {
            headers: {
                'Authorization': `Bearer ${JWTToken}`
            }
        });

        // 2 setFavorites(updatedFavorites)
        setFavorites(updatedFavorites)

    }

    return !favorite ? (
        <button id="heart-outline" className="icon-heart" onClick={toggleFavorite}><Heart/></button>
    ) : (
        <button id="heart-solid" className="icon-heart" onClick={toggleFavorite}><HeartSolid/></button>
    )
}

export default ClickedHeart;