import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header-components/Header';
import Body from './components/body-components/Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
