import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'haider',
      // num:0
    }
  }
  UpdateTo() {
    this.setState({name:'harry'})
    // this.setState({num:this.state.num + 1})
  }
  render() {
    return (
      <div className="App">
        <h1>State In React</h1>
        <h2>Name: {this.state.name}</h2>
        <button onClick= {()=>this.UpdateTo()}>Update Name</button>

        {/* <h2>Number of clicking: {this.state.num}</h2>
        <button onClick= {()=>this.UpdateTo()}>Increase number by 1</button> */}
  
      </div>
    );
  }
}
export default App;

