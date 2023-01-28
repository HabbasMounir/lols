import React, { Component } from 'react';
import Teammember from './teammember';
import info from '../data/info';










class Team extends Component{

constructor(){
    super()
    this.state={
        info,
        arry:[],
        i:0
    }
    this.clickHandleradd=this.clickHandleradd.bind(this)
    this.clickHandlerRemove=this.clickHandlerRemove.bind(this)
}


 clickHandlerRemove(){
    if(this.state.i!==0){

   
  
let newarry=[...this.state.arry]
newarry.pop(this.state.info[this.state.i])
    this.setState( 
    
        prevState=>{
            
        return { 
            i:prevState.i-1,
            arry:newarry
        }
    }
   
         );
    console.log(this.state.arry)

}
 }

 clickHandleradd(){
if(this.state.i!==this.state.info.length){


  
let newarry=[...this.state.arry]
newarry.push(this.state.info[this.state.i])
    this.setState( 
    
        prevState=>{
            
        return { 
            i:prevState.i+1,
            arry:newarry
        }
    }
   
         );
    console.log(this.state.arry)
}

 }

 maping(arrobj){
    let mymap=arrobj.map( info => 
    <Teammember 
        key={info.id} 
        info={
                {   
                name:info.name,
                phone:info.phone,
                email:info.email,
                about:info.about,
                img:info.img
            }
        }
    />
)
 return mymap
 }



    render(){
        return(
            <>
            <div className='aL'>
            <button className="click"  onClick={this.clickHandleradd}>+</button>
            <button className="click"  onClick={this.clickHandlerRemove}>-</button>
            </div>
             <div className='container'> {this.maping(this.state.arry)}  </div>

       
            </>
        )
    }

}

// function team(props) {


//      let teamMem=info.map((info)=> {return <Teammember key={info.id} info={
   
//             {   
                
//                 name:info.name,
//                 phone:info.phone,
//                 email:info.email,
//                 about:info.about,
//                 img:info.img
//             }



//      }/>})
//     return (
//     <div className='container'>
      
//    {teamMem}
//     </div>
 
// )
       
        

         

// }

export default Team;