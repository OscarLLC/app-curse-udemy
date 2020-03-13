import React from 'react'


class Ciclovdconstructor extends React.Component{
  constructor(props){
    console.log("constructor");
    super(props)
    this.state = {mensajeInicial:"este es el mensaje inicial "}
  }

  handleclic = () =>{
    this.setState({mensajeInicial:"mensaje cambiado"})
  }
 render(){
    console.log("render");
    return(
      <div>
        {this.state.mensajeInicial}
        <button onClick={this.handleclic}>
          enviar
        </button>
      </div>
    )
  }
}

export default Ciclovdconstructor;