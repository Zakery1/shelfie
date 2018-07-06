import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state= {

    }
  }

  componentDidMount() {
    axios.get('/api/test').then(response=> {
      console.log(response)
    })
  }

  render() {
    return (
      <div classname="App">

      </div>
    );
  }
}

export default App;
