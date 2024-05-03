import Heart from "../../assets/heart-outline.svg?react";
import HeartSolid from "../../assets/heart-solid.svg?react";
import {useState} from "react";
import "./ClickedHeart.css"

function ClickedHeart() {
    const [favorite, setFavorite] = useState(false);
    console.log("favorite: ", favorite)
    const clickHeart = () => {
    setFavorite(!favorite);
};

    return !favorite ? (
        <button id="heart-outline" className="icon-heart" onClick={clickHeart}><Heart/></button>
    ) : (
        <button id="heart-solid" className="icon-heart" onClick={clickHeart}><HeartSolid/></button>
    )
}

export default ClickedHeart;