function NavBar(props){
  const boutPok =(e)=>{props.setIndex(props.list.indexOf(e))
                        
  }
  
    return (
      <div>
        <ul>
          {props.list.map((e)=>( <button key={e.name} onClick={()=>boutPok(e)}> {e.name}</button> ))}
        </ul>
      </div>
    )


}
export default NavBar;


    
    

