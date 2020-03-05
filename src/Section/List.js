import React, {Component} from 'react'


export default class List extends Component{
  render(){
    const array = [1,1,2,3,4,5,6,7,8,9]
    return(
      <div>
        {array.map(number=>{
          return <p>yo soy el numero: {number}</p>
        })}
      </div>
    )
  }
}