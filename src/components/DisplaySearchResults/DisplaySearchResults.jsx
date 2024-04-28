
function DisplaySearchResults ({cocktails}) {

    const renderDrinkList = () => {
        if (cocktails === null) {
            return (
                <div>Oopsie! These cocktails don't exist in our database. Please check the spelling or try searching for another drink.</div>
            )
        }
        else {
            return (
                <div className='drink-list'>
                    {cocktails.map((drink) =>
                        <button
                            className='clickable-item'
                            key={drink.idDrink}>{drink.strDrink}</button>)}
                </div>
            )
        }
    }

    return (
        <div className='drink-list-parent'>
            {renderDrinkList()}
        </div>
    );

}


export default DisplaySearchResults;