import React from 'react';
import Teammember from './teammember';



        
       









function team(props) {
let info=[
    {name:'Mounir',  phone:'+123542417526', email:'mounirawt@gamil.com', about:'frontend devloper',img:'./01.jpg'},
    {name:'adel',  phone:'+123542417526', email:'adelzoughbi07@gamil.com', about:'Backend devloper',img:'https://pbs.twimg.com/profile_images/1542203237033562112/qpQOgak2_400x400.jpg'},
    {img:'./assets/03.jpg',name:'lamis',  phone:'+123542417526', email:'####gmail.com', about:'writer'}
]

     let teamMem=info.forEach((i)=> {return <Teammember info={info[i]}/>})
    return (
    <div className='container'>
      
   {teamMem}
    </div>
 
)
       
        

         

}

export default team;