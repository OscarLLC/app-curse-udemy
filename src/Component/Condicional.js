import React, {Component} from 'react'

class ComponenteA extends Component {
  render(){
    return(
      <div>
        <p>Componente A</p>
      </div>
    )
  }
}

class ComponenteB extends Component {
  render(){
    return(
      <div>
        <p>Componente B</p>
      </div>
    )
  }
}

export default class Condicional extends Component{
  constructor(){
    super()
    this.state = {mostrarA: true}
  }

  render(){
    return(
      <div>
        <h3>Renderizado Condicional</h3>
        {this.state.mostrarA
          ? <ComponenteA /> 
          : <ComponenteB />}
      </div>
    )
  }
}

