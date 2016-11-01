import React, { Component} from 'react'
import Title from './components/Title'
import './App.sass'

class App extends Component {
  render() {
    return (
        <div className="app">
          <Title label='Scoreboard' />
        </div>
    )
  }
}

export default App
