import React, {Component} from 'react'
import '../Styles/Children.css'


export default class Children extends Component {
  render(){
    return(
      <div className="content__children">
          {this.props.children}
      </div>
    )
  }
}