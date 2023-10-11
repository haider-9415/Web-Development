// import logo from './logo.svg';
import './App.css';
// import Cl1 from './ClassComponent';
import React, { Component } from 'react'

function App() {
  // we can create component inside of a component
  function Inside() {
    return (
      <div><h3>Component inside of a component</h3></div>
    )
  }
  return (
    <div className="App">
      <h1>this is App.js</h1>
      <Cl1 />
      
      {Inside()}
      <Inside />

    </div>
  );
}
export default App;

class Cl1 extends Component{
  render() {
      return (
          <div>
              <h1>this is class component</h1>
          </div>
      )
  }
}
