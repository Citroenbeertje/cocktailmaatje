import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import DisplaySearchResults from "../../components/DisplaySearchResults/DisplaySearchResults.jsx";
import React, {useState} from "react";
import cocktailone from "../../assets/cocktail1.jpg";
import cocktailtwo from "../../assets/cocktai2.jpg";
import cocktailthree from "../../assets/cocktai3.jpg";
import cocktailfour from "../../assets/cocktai4.jpg";
import cocktailfive from "../../assets/cocktai5.jpg";
import cocktailsix from "../../assets/cocktai6.jpg";
import cocktailseven from "../../assets/cocktai7.jpg";
import cocktaileight from "../../assets/cocktai8.jpg";
import "./HomePage.css"

function HomePage({userIsLoggedIn, username, JWTToken, favorites, setFavorites}) {
  const [cocktails, setCocktails] = useState([]);
  return ( <>
      <div className="home-container">
        <SearchBar setCocktails={setCocktails} />
        <DisplaySearchResults cocktails={cocktails} userIsLoggedIn={userIsLoggedIn} username={username} JWTToken={JWTToken} favorites={favorites} setFavorites={setFavorites}/>
      </div>
      <div className="header-image-container">
              <img className="cocktail-image-group" src={cocktailone} alt="cocktail-image-citrus " loading="lazy"/>
              <img className="cocktail-image-group" src={cocktailtwo} alt="cocktail-image-green" loading="lazy"/>
              <img className="cocktail-image-group" src={cocktailthree} alt="cocktail-image-apple" loading="lazy"/>
              <img className="cocktail-image-group" src={cocktailfour} alt="cocktail-image-mocktails" loading="lazy"/>
              <img className="cocktail-image-group" src={cocktailfive} alt="cocktail-image-smoke" loading="lazy"/>
              <img className="cocktail-image-group" src={cocktailsix} alt="cocktail-image-happy" loading="lazy"/>
              <img className="cocktail-image-group" src={cocktailseven} alt="cocktail-image-figheart" loading="lazy"/>
              <img className="cocktail-image-group" src={cocktaileight} alt="cocktail-image-burn-rosemary" loading="lazy"/>
      </div>
  </>
  );
}

export default HomePage;