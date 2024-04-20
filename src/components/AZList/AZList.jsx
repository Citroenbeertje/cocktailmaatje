import axios from 'axios';
import SearchBar from "../SearchBar/SearchBar.jsx";


// List all cocktails by first letter
// www.thecocktaildb.com/api/json/v1/1/search.php?f=a

// Lookup full cocktail details by id
// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
function AZList() {

    return (

        <div>
            <SearchBar />
        </div>


    )
}

export default AZList

