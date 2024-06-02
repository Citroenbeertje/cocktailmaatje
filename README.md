
![Screenshot](dist/assets/Screenshot%202024-06-02%20003838%20-%20Copy.png)


## README: Cocktailmaatje Applicatie

### Inleiding
Deze applicatie, "Cocktailmaatje", is ontwikkeld als eindproject van de front-end bootcamp aan Novi Hogeschool. 
Het doel was om de lesstof in praktijk te brengen met een zelfgemaakte applicatie die gebruik maakt van een API. 
Cocktailmaatje maakt gebruik van de The Cocktail DB API, beschikbaar op 
[The Cocktail DB API](https://www.thecocktaildb.com/api.php).

**Waarom Cocktailmaatje?**
Met het enorme aanbod aan cocktails kan het makkelijk zijn om overweldigd te raken. Cocktailmaatje maakt het makkelijker voor gebruikers om nieuwe cocktails te ontdekken.

### Applicatie clonen en ontkoppelen
Om je eigen versie van deze applicatie te draaien 
1. Clone je dit project naar je lokale computer.
2. Maak een nieuwe repository aan op GitHub.
3. In je IDE ontkoppel het project van de oorspronkelijke repository met het commando: `git remote remove origin`

### Installatie
De app "Cocktailmaatje" is gemaakt met node v20.12.1. Om deze applicatie te draaien moet node geinstalleerd zijn. 
Node kan gedownload worden op [Node.js Downloads](https://nodejs.org/en/download/package-manager).

Volg deze stappen om de applicatie te installeren:
1. Open je terminal. 
2. Ga naar de map waarin het `package.json` bestand staat.

3. In de terminal installer je de node packages met:
`npm install`

Dit zal het package.json bestand gebruiken om de applicatie te installeren.


### Commando's voor applicatie
Na de installatie zijn er verschillende commando's beschikbaar in package.json. 
Deze commando's kun je uitvoeren op de volgende manier: `npm run <commando naam>`


Zo kun je met de commando's:
1. `npm run dev` de Vite server draaien door op link http://localhost:5173/ te klikken die verschijnt. 
Daarmee open je lokaal de applicatie in de browser. 
2. `npm run build` creeert een geoptimaliseerde versie van de applicatie. 