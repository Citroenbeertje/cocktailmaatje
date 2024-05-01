import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import DisplaySearchResults from "../../components/DisplaySearchResults/DisplaySearchResults.jsx";
import React, {useState} from "react";


function Home() {
  const [cocktails, setCocktails] = useState([]);
  return (
      <div className="home-container">
        <SearchBar setCocktails={setCocktails} />
        <DisplaySearchResults cocktails={cocktails} />
      </div>

  )
}

export default Home;