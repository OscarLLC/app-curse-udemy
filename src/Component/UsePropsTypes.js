import React from 'react'

class UseChildren extends React.Component{
  render(){
    return(
      <section>
        <article>
          <h3>{this.props.title}</h3>
            <p><strong>{this.props.autor}</strong></p>
            <p>{this.props.content}</p>
          {this.props.children}
        </article>
      </section>
    )
  }
}


export default UseChildren;