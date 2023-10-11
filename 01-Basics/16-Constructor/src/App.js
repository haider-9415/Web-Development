import './App.css';
import React from 'react';
class App extends React.Component{
  constructor() {
    super()
    // console.log('this is constructor')
    this.state = {
      name: 'haider'
    }
  }
  render() {
    // console.log('this is render')
    return (
      <div>
        <h1>For Constructor</h1>
        <h2>Name: {this.state.name}</h2>
      </div>
    )
  }
}
export default App;
