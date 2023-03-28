import "./NavBar.css"

function NavBar(props){
  const boutPok =(e)=>{props.setIndex(props.list.indexOf(e))
                         if( e.catchPhrase!=undefined) { alert(e.catchPhrase)}
      
  }

    return (
      <div className = "barre" >
     
          {props.list.map((e)=>( <button key={e.name} onClick={()=>boutPok(e)}  style={{color :e.color,borderColor:e.color}}> {e.name}</button> ))}
       
      </div>
    )


}
export default NavBar;


    
    

 