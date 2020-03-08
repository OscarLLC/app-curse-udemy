import React, {Component} from 'react'


export default class Button extends Component{
  render(){
    return(
      <div>
        <h2>Eventos</h2>
          <button onClick={()=> alert("hello world")}>Hello</button>
      </div>
    )
  }
}