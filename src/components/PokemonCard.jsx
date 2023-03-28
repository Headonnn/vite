function PokemonCard(props){
    return props.list.imgSrc!=undefined ? 
     <figure>
        
        <img src={props.list.imgSrc} ></img>
        <figcaption>{props.list.name}</figcaption>
    </figure> :
      <figure>
        
      <p>???</p>
      <figcaption>{props.list.name}</figcaption>
  </figure> 

  }
export default PokemonCard;