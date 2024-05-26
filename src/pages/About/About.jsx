import React from "react";
import aboutcocktail from "../../assets/about-unsplash.jpg";
import "./About.css"
function About() {
    return (
        <>
            <h1 id="about-title">About</h1>
            <div className="about-container">
                <div className="about-image-container">
                    <img className="cocktail-image-about" src={aboutcocktail} alt="cocktail-pink" loading="lazy"/>
                </div>
                <div className="about-content">
                    <p>This application is being developed as part of a front-end bootcamp by Novi Hogeschool,
                        showcasing
                        the application of course materials to a project. This cocktailmaatje application makes use of
                        The
                        Cocktail DB API available at{' '}
                        <a href="https://www.thecocktaildb.com/api.php" target="_blank" rel="noopener noreferrer">The
                            Cocktail DB.
                        </a></p>
                    <h2>Why Cocktailmaatje?</h2>
                    <p>With so many cocktails available, it’s easy to feel overwhelmed. You might end up making the same
                        cocktails over and over due to decision fatigue. The goal of Cocktailmaatje is to make it easy
                        for
                        you to discover new cocktails.</p>
                    <h2>How to use this application?</h2>
                    <p>You can search for cocktails in various ways:</p>
                    <ul>
                        <li>First letter of the name by selecting the letter in de A to Z list under de search bar</li>
                        <li>Sequence of characters in the cocktail's name</li>
                        <li>ingredient</li>
                        <li>Drink category such as cocktails, party drinks or shots</li>
                        <li>Type of glass used</li>
                        <li>filter on non-alcoholic or optionally alcoholic drinks</li>
                    </ul>
                    <p>Enjoy browsing through our collection of cocktails!</p>
                </div>

            </div>
        </>


    )
}

export default About;