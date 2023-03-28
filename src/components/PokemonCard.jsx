function PokemonCard(){
    const pokemon = pokemonList[0]
    console.log(pokemon.imgSrc)
    const src = pokemon.imgSrc
    const name = pokemon.name
    return src!=undefined ? 
     <figure>
        
        <img src={src} ></img>
        <figcaption>{name}</figcaption>
    </figure> :
      <figure>
        
      <p>???</p>
      <figcaption>{name}</figcaption>
  </figure> 
}
const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
export default PokemonCard;