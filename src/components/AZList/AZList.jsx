import axios from "axios";
import "./AZList+DisplaySearchResults.css";

function AZList({setCocktails}) {

    const handleClick = async (letter) => {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
        setCocktails(response.data.drinks);
    }

    return (
        <div>
            <div className='a-z-list'>
                {"A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ").map((letter) => (
                    <button className="letter-button" key={letter} onClick={() => handleClick(letter.toLowerCase())}>
                        {letter}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default AZList;