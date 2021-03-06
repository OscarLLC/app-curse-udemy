
import React, {Component} from 'react'
import Car from '../Data/Car.json'


class DataItem extends Component{
  render(){
    const {Car, id} = this.props
    return(
      <div>
         <li>
            <p>key: {id}</p>
            <p><strong>Nombre: </strong>{Car.name}</p>
            <p><strong>Marca. </strong>{Car.company}</p>
          </li>
      </div>
    )
  }
}

class Datas extends Component{
  render(){
    return(
      <div>
        <h1>lista de carros</h1>
        <ul>
          {
            Car.map( Car =>{
              return(
               <DataItem id={Car.id} key={Car.id} Car={Car} />
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Datas;