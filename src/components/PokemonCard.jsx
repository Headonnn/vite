import PropTypes from "prop-types";
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
  PokemonCard.PropTypes={
    list: PropTypes.shape({
        name:PropTypes.string.isRequired,
        imgSrc:PropTypes.string,
    }).isRequired

  }
export default PokemonCard;