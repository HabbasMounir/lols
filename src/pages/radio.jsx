import React from "react";

function radio(props) {
   
    return(

        <label className="container" id={props.conntent.id}>{props.conntent.text}
        <input type="radio" name={props.conntent.name}  value={props.conntent.value} />
        <span className="checkmark"></span>
            </label>
            
    )
}

export default radio