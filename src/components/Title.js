import React from 'react'
import './Title.sass'

class Title extends React.Component {
  render() {
    const { label } = this.props
    // const label = this.props.label - object destructuring
    return(
      <h1>{ label }</h1>
    )
  }
}

export default Title
