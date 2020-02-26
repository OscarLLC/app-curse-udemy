import React, {Component} from 'react'

class TextUno extends Component{
  render(){
    const {enenciadoUno,enenciadoDos,numero,boolean,arrayNumber } = this.props
    return(
      <div>
        <p>{enenciadoUno}</p>
        <p>{enenciadoDos}</p>
        <p>{numero}</p>
         <p>{boolean} </p>
         <p>{arrayNumber.join(',')}</p>
      </div>
    )
  }
}

class TituloDefault extends Component{
  render(){
    return(
      <div>
        <h3>{this.props.titulodefecto}</h3>
      </div>
    )
    
  }
}

TituloDefault.defaultProps ={
  titulodefecto: "este es un texto por defecto"
}

class Text extends Component{
  render(){
    return(
      <div>
        <h1>texto principal</h1>
        <TextUno 
          enenciadoUno="te amo amor nunca lo olvides te amo mucho"
          enenciadoDos="eres y seras mi unico amor te amo"
          numero={2}
          boolean
          arrayNumber={[1,2,2,7]}
        />
         <TituloDefault />
      </div>
    )
  }
}

export default Text;