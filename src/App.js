import React, {Component} from 'react'
import Condicional from './Component/Condicional'
import List from './Component/List'
import Datas from './Component/Datas'
import Button from './Component/Events'
import Children from './Component/Children'

class Contador extends Component {
  constructor(props){
    super(props)
    this.state = {contador: this.props.contadorIncial}
    setInterval(()=>{
      this.setState({contador: this.state.contador + 1})
    },1000)
  }
  render(){
    return(
    <ContadorHijo numerito ={this.state.contador} />
    )
  }
}

Contador.defaultProps = {
  contadorIncial: 0
}

class ContadorHijo extends Component{
  render(){
    return(
    <p>{this.props.numerito}</p>
    )
  }
}

class TextUno extends Component{
  render(){
    const {enenciadoUno,enenciadoDos,boolean,arrayNumber } = this.props
    return(
      <div>
        <p>{enenciadoUno}</p>
        <p>{enenciadoDos}</p>
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
          enenciadoDos="eres y seras mi unico amor te amoñññññññññññññññ"
          numero={2}
          boolean
          arrayNumber={[1,2,2,7]}
        />
         <TituloDefault />
         <Contador contadorIncial = {200} />
         <Condicional />
         <List />
         <Datas />
         <Button />
         <Children>
           hola este es un contenido
         </Children>
         <Children>
           este es otro contenido
         </Children>
      </div>
    )
  }
}

export default Text;