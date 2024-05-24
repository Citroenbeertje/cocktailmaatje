import React, {useState} from "react";
import DisplaySearchResults from "../../components/DisplaySearchResults/DisplaySearchResults.jsx";

function Favorites({ favorites }) {

    // TODO favorites moet zo omgezet worden dat het
    return (
        <div className="">
            <h1>Favorites</h1>
            <DisplaySearchResults cocktails={favorites} />
        </div>
    );
}



export default Favorites;