import axios from 'axios';


// List all cocktails by first letter
// www.thecocktaildb.com/api/json/v1/1/search.php?f=a

// Lookup full cocktail details by id
// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
function AZList() {

    const handleClick = (letter) => {
        console.log(letter);
        // TODO letter nog meegeven axios om cocktail lijst te tonen
    }

    return (
        <div className='a-z-list'>{"A B C D E F G H J".split(" ").map((letter) => (
            <div key={letter} onClick={() => handleClick(letter)}>
                {letter}
            </div>
        ))}</div>


    )
}

export default AZList

