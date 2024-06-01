export function favoritesStringToArray(favorites) {
    const favoritesArray = favorites.split(",");
    return favoritesArray.map((favorite) => {
        const favoriteData = favorite.split(".");
        return {
            idDrink: favoriteData[0],
            strDrink: favoriteData[1]
        }
    })
}

export function favoritesArrayToString(favorites) {
    return favorites.map((data) => `${data.idDrink}.${data.strDrink}`).join(",");
}