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

function useConditionalRendering(mostrarA){
  if(mostrarA){
    return <ComponenteA />
  }
  return <ComponenteB />
}

export default class Condicional extends Component{
  constructor(){
    super()
    this.state = {mostrarA: false}
  }
  render(){
    return(
      <div>
        <h3>Renderizado Condicional</h3>
        {useConditionalRendering(this.state.mostrarA)}
      </div>
    )
  }
}

