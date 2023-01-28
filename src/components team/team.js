import React from 'react';
import Teammember from './teammember';



        
       


let info=[
{   id:1,  name:'Mounir1',       phone:'+213542417526',  email:'mounirawt@gamil.com',
    about:'frontend devloper',  img:'/assets/02.jpg '
},
{   id:4,  name:'Mounir2',       phone:'+213542417526',  email:'mounirawt@gamil.com',
    about:'frontend devloper',  img:'/assets/01.jpg '
},
{   id:5,  name:'Mounir3',       phone:'+213542417526',  email:'mounirawt@gamil.com',
    about:'frontend devloper',  img:'/assets/03.jpg '
},
{   id:6,  name:'Mounir4',       phone:'+213542417526',  email:'mounirawt@gamil.com',
    about:'frontend devloper',  img:'/assets/03.jpg '
},
{   id:7,  name:'Mounir5',       phone:'+213542417526',  email:'mounirawt@gamil.com',
    about:'frontend devloper',  img:'/assets/03.jpg '
},
{   id:8,  name:'Mounir6',       phone:'+213542417526',  email:'mounirawt@gamil.com',
    about:'frontend devloper',  img:'/assets/03.jpg '
},
{
    id:2,  name:'adel7',    phone:'+213********',   email:'adelzoughbi07@gamil.com',
    about:'Backend devloper',img:'/assets/03.jpg'
},
{
    id:3,  name:'lamis8',   phone:'+213*******',    email:'####gmail.com',
    about:'writer',img:'/assets/02.jpg'
}
]






function team(props) {


     let teamMem=info.map((info)=> {return <Teammember key={info.id} info={
   
            {   
                
                name:info.name,
                phone:info.phone,
                email:info.email,
                about:info.about,
                img:info.img
            }



     }/>})
    return (
    <div className='container'>
      
   {teamMem}
    </div>
 
)
       
        

         

}

export default team;