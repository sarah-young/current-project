import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.state = null
  }
  render() {
    return (
      <div data-test= "app-container">
      </div>
    );
  }
}

export default App;