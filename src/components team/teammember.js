import React, { Component } from 'react'
// console.log(this.props.info.name)
export default class Teammember extends Component {
    constructor(props){
        super()
    }
    
  render() {
    
    return (
      <div className='card'>
        <img src={this.props.info.img} alt="" />
       <h2>{this.props.info.name}</h2>
       <h5><a href={`tel:+${this.props.info.phone}`}>{this.props.info.phone}</a></h5> 
       <h5> <a href={`mailto:${this.props.info.email}`}> {this.props.info.email}</a></h5> 
       <h3>{this.props.info.about}</h3> 

      </div>
    )
    
  }
}



