import React from 'react'
import Title from './components/Title'
import './App.sass'
import Scoreboard from './containers/Scoreboard'

class App extends React.Component {
  render() {
    const { players } = this.props

    return (
      <div className="app">
        <Title label="Scoreboard:" />
        <Scoreboard players={ players } />
      </div>
    )
  }
}

export default App
