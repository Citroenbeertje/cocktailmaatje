import React, { useContext } from 'react';
import DisplaySearchResults from "../../components/DisplaySearchResults/DisplaySearchResults.jsx";
import "./Favorites.css"
import {LoginContext} from "../../context/LoginContext.jsx";

function Favorites() {
    const { userIsLoggedIn, username, JWTToken, favorites, setFavorites } = useContext(LoginContext);
    return (
        <div className="favorites-page">
            <h1>Your Cocktail Favorites</h1>
            <DisplaySearchResults
                cocktails={favorites}
                userIsLoggedIn={userIsLoggedIn}
                username={username}
                JWTToken={JWTToken}
                favorites={favorites}
                setFavorites={setFavorites}
            />
        </div>
    );
}


export default Favorites;