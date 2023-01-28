import React,{ Component } from "react";
let mour=[0,1,2,3,5,4,6,7,8,9]

class App extends Component{
    constructor(){
        super();
        this.state={
                num:0,
            i:0
        }
        // لازمة؟
     this.eventHandler=this.eventHandler.bind(this)
    }

   
    eventHandler(){
      

   this.setState( 
    
    prevState=>{
        
    return { 
        i:prevState.i+1,
        num:prevState.num+ this.eve(prevState.i)
    }
}
            

            //  او
            //  num:this.state.num+1
    
     );


    }




    render(){
        return(
        <>
        <h1>{this.state.num}</h1>
        <button className="click"  onClick={this.eventHandler}>click !!!</button>
        </>
        
        
        
        )
    }
}

export default App