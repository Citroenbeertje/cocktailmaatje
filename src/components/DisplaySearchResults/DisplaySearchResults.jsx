
function DisplaySearchResults ({cocktails}) {
    return (
        <div className='drink-list-parent'>
        <div className='drink-list'>
            {cocktails.map((drink) =>
                <button
                    className='clickable-item'
                    key={drink.idDrink}>{drink.strDrink}</button>)}
        </div>
    </div>
    );

}


export default DisplaySearchResults;