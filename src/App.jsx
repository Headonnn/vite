
import './App.css'
import { useState } from "react";
import PokemonCard from "./components/PokemonCard"
function App() {
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

    const [pokeInd, setPokeInd] = useState(0);
    const Suivant =() =>{ setPokeInd(pokeInd + 1)}
    const Precedent =() =>{ setPokeInd(pokeInd - 1)}
    
   
      return pokeInd>0 && pokeInd < pokemonList.length - 1?
    <div>
      <PokemonCard list={pokemonList[pokeInd]}/>
      <button onClick={Precedent}>Précédent</button>
      <button onClick={Suivant}>Suivant</button>
    </div> : pokeInd==0 && pokeInd < pokeInd < pokemonList.length - 1 ?
    <div>
    <PokemonCard list={pokemonList[pokeInd]}/>
    
    <button onClick={Suivant}>Suivant</button>
  </div> :  pokeInd == pokemonList.length - 1 ?
    <div>
    <PokemonCard list={pokemonList[pokeInd]}/>
    <button onClick={Precedent}>Précédent</button>
    
  </div>  :
    <div>
    <PokemonCard list={pokemonList[pokeInd]}/>
    
    
  </div>

    
  
  



}

export default App;