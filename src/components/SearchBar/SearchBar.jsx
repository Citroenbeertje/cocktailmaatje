import './SearchBar.css'
import axios from 'axios';
import AZList from "../AZList/AZList.jsx";

// List all cocktails by first letter
// www.thecocktaildb.com/api/json/v1/1/search.php?f=a

function SearchBar({placeholder, data}) {

    // const handleClick = (letter) => {
    //     console.log(letter);
    //     // TODO letter nog meegeven axios om cocktail lijst te tonen
    // }

    return (
        <div className="search">
            <div className="search-bar-section">
                <div className="search-bar-core">
                    <select name="filterType" id="varieerbaar">
                        <option value="Cocktails">Cocktails</option>
                    </select>
                    <input type="text" placeholder="search for cocktails"/>
                    <div className="search-icon">searchicon</div>
                    <button>Search</button>
                </div>
                <AZList/>
                {/*<div className='a-z-list'>{"A B C D E F G H I J K L M N O P Q R S T U V W".split(" ").map((letter) => (*/}
                {/*    <div key={letter} onClick={() => handleClick(letter)}>*/}
                {/*        {letter}*/}
                {/*    </div>*/}
                {/*))}</div>*/}

            </div>


        </div>


    )
}

export default SearchBar

