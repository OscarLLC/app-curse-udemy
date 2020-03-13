import React from 'react'
import PropTypes from 'prop-types'

class UseChildren extends React.Component{
  static propTypes = { 
    autor: PropTypes.string.isRequired
  }
    render(){ 
    const {title, autor, content} = this.props
    return(
      <section>
        <article>
          <h3>{title}</h3>
            {autor && <p>escrito por: <strong>{autor}</strong></p>}
            <p>{content}</p>
          {this.props.children}
        </article>
      </section>
    )
  }
}


export default UseChildren;