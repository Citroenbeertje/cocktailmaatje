import DisplaySearchResults from "../../components/DisplaySearchResults/DisplaySearchResults.jsx";
import "./Favorites.css"

function Favorites({ userIsLoggedIn, username, JWTToken, favorites, setFavorites }) {
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