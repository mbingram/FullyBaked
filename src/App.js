import React, { Component } from 'react'
import JokesList from './components/JokesList'
import './App.css'

const jokeURL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist,explicit&type=twopart&amount=6"

export default class App extends Component {

  state = {
    jokes: []
  }

  componentDidMount() {
    fetch(jokeURL)
      .then(response => response.json())
      .then(({ jokes }) => this.setState({
        jokes
      }))
  }

  render() {
    return (
      <div>
        <JokesList jokes={this.state.jokes} />
      </div>
    )
  }
  
}
