import './SearchBar.css'
import axios from 'axios';
import AZList from "../AZList/AZList.jsx";

// List all cocktails by first letter
// www.thecocktaildb.com/api/json/v1/1/search.php?f=a

function SearchBar({placeholder= "Search for cocktails", data}) {

    const handleClick = () => {
        console.log('search');
        // TODO letter nog meegeven axios om cocktail lijst te tonen
    };

    return (
        <div className="search">
            <div className="search-bar-section">
                <div className="search-bar-core">
                    <select name="filterType" id="varieerbaar">
                        <option value="Cocktails">Cocktails</option>
                    </select>
                    <input type="text" placeholder="search for cocktails"/>
                    <div className="search-icon">searchicon</div>
                    <button onClick={handleClick}>Search</button>
                </div>
                <AZList/>
            </div>
        </div>


    )
}
//
// select geeft dropdown met 4 extra keuzes:
// ingredients, category, virgin drinks?, glass shape
//
// wanneer je een daarvan selecteerd verandert:
//     het zoekveld in een dropdown.
//     zoekknop verdwijnt
//
// het alfabet blijft staat, waardoor je ook op alfabet kan klikken
// en elke letter toont bijbehorende lijst aan.

export default SearchBar;
