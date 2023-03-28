function NavBar(props){
 
    const Suivant =() =>{ props.setIndex(props.index + 1)}
    const Precedent =() =>{ props.setIndex(props.index - 1)}

    return props.index>0 && props.index < props.list.length - 1?
    <div>
      
      <button onClick={Precedent}>Précédent</button>
      <button onClick={Suivant}>Suivant</button>
    </div> : props.index==0 && props.index < props.list.length - 1 ?
    <div>
    
    
    <button onClick={Suivant}>Suivant</button>
  </div> :  props.index == props.list.length - 1 ?
    <div>
    
    <button onClick={Precedent}>Précédent</button>
    
  </div>  :
    <div>
  
    
    
  </div>


}
export default NavBar;