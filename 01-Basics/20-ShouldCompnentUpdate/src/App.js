import React from 'react';
import './App.css';
class App extends React.Component {
  constructor() {
    super()
    console.log('constructor')
    this.state = {
      count: 0
    }
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate', ' - count: ', this.state.count)
    if (this.state.count>3 && this.state.count<7) {
      return true
    }
  }
  render() {
    console.log('Render')
    return (
      <div className='App'>
        <h1>Should Component Update</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => { this.setState({ count:this.state.count+1})}}>Update Count</button>
      </div>
    )
  }
}
export default App;
