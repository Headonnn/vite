import "./NavBar.css"

function NavBar(props){
  const boutPok =(e)=>{props.setIndex(props.list.indexOf(e))
                        
  }
  
    return (
      <div className = "barre" >
     
          {props.list.map((e)=>( <button key={e.name} onClick={()=>boutPok(e)}  style={{color :e.color}}> {e.name}</button> ))}
       
      </div>
    )


}
export default NavBar;


    
    

 