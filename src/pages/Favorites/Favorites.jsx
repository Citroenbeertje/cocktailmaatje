import DisplaySearchResults from "../../components/DisplaySearchResults/DisplaySearchResults.jsx";

function Favorites({ userIsLoggedIn, username, JWTToken, favorites, setFavorites }) {
    return (
        <div className="">
            <h1>Favorites</h1>
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