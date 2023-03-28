import PropTypes from "prop-types";

import "./PokeCard.css"
function PokemonCard(props){
    return props.list.imgSrc!=undefined ? 
     <figure className="card" style={{backgroundColor : props.list.color}}>
        
        <img src={props.list.imgSrc} ></img>
        <figcaption>{props.list.name}</figcaption>
    </figure > :
      <figure className="card" style={{backgroundColor : props.list.color}}>
        
      <p>???</p>
      <figcaption>{props.list.name}</figcaption>
  </figure> 

  }
  PokemonCard.PropTypes={
    list: PropTypes.shape({
        name:PropTypes.string.isRequired,
        imgSrc:PropTypes.string,
        color:PropTypes.string.isRequired,
    }).isRequired

  }
export default PokemonCard;

