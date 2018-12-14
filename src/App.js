import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard.js';
import Form from './components/Form/Form';

import './base.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    }
    this.getInventory = this.getInventory.bind(this);
  }
  componentDidMount() {
    this.getInventory();
  }
  getInventory() {
    axios.get('/api/inventory')
      .then(res => this.setState({ inventory: res.data }  ))
  }
  render() {
    return (
      <div className="App">
        <Header />
         {/* <Form getInventory={this.getInventory} /> */}
        <Form/>
        <Dashboard inventory={this.state.inventory}/>
      </div>
    );
  }
}

export default App;
