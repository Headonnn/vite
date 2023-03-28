
import './App.css'
import { useState } from "react";
import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar"
function App() {
  const pokemonList = [
    {
        name: "Bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        color:"green",
      },
     
      {
        name: "Charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
          color : "orange",
      },
      {
        name: "Squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
          color : "blue",
      },
      {
        name: "Pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
          color : "yellow",
      },
      {
        name: "Mew",
        color : "purple"
      },
    ];

   
    
    const [pokeInd, setPokeInd] = useState(0);

    return (<><h1 style={{color:"white"}}>Mon POKEDEX ^^</h1>
            <PokemonCard list={pokemonList[pokeInd]}/>
          <NavBar setIndex = {setPokeInd} index={pokeInd} list ={pokemonList}/></>)

  
  
    


}

export default App;