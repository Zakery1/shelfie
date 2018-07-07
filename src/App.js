import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';


class App extends Component {
  constructor(){
    super()
    this.state = {
        products: []
    };
    console.log(constructor)
    
}

  componentDidMount() {
    axios.get('/api/inventory').then(response => {
      console.log(response.data)
      this.setState({
       products: response.data
      })
    })
  }



  render() {
    return (
      <div classname="App">
        <Header />
        <Dashboard listedProducts={this.state.products} />
        <Form />
      </div>
    );
  }
}

export default App;
