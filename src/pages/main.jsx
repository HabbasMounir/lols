import React from "react";
import Radio from "./radio"



const conntent ={
   zero: {
        text:"Mounir",
        value:"lol",
        id:"lol",
        name:'NON'
   },
   one: {
        text:"Mounir",
        value:"lol",
        id:"lol",
        name:'NON'
   },
   two: {
        text:"Mounir",
        value:"lol",
        id:"lol",
        name:'NON'
   },
}


let Lol=()=>{
//     const stylediv={
//             color:"red",
//             fontSize:'20px',
//             reSize:"both",
//             minHight:'100px',
//             maxWidth:'100px',
//             background:'black'
// }
    let myName='Mounir habbas'
    let firstName=myName.split(' ')[0]
    let myRadio
    let i=0
     myName.split(' ').length<=2?i="<div>12</div>":i="ydek";
    return(
<>
        <div className="lol">
        <h1>{myName}</h1>
        <p>My name is {firstName} </p>
    </div>
   <Radio 
    conntent={{
         text:"Mounir",
         value:"lol",
         id:"lol",
         name:'NON'
    }
    }
   
   
   
   
   />
   
  
  

    

{/* <label className="container">NAme
  <input type="radio" name="lol" value="1" />
  <span className="checkmark"></span>
</label>
<label className="container">Three
  <input type="radio" name="lol" value="1"  />
  <span className="checkmark"></span>
</label>
<label className="container">Four
  <input type="radio" name="lol" value="1" />
  <span className="checkmark"></span>
</label> */}
</>
    )
}

 

export default Lol