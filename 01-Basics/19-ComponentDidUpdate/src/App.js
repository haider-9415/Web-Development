import React from 'react';
import './App.css';
class App extends React.Component {
  constructor() {
    super()
    console.log('constructor')
    this.state = {
      // name : 'haider',
      count: 0
    }
  }
  componentDidUpdate(preprop, prestate, snapshot) {
    console.log('componentDidUpdate')
    
    // console.log('prestate.name --> ', prestate.name)
    
    if (this.state.count < 4) {
      this.setState({count:this.state.count+1})
    }
  }
  // shouldComponentUpdate() {
  //   return false
  // }
  render() {
    console.log('Render')
    return (
      <div className='App'>
        <h1>Component Did Update</h1>

        {/* <h2>Name: {this.state.name}</h2>
        <button onClick={() => { this.setState({ name:'harry'})}}>Update Name</button> */}

        <h2>Count: {this.state.count}</h2>
        <button onClick={() => { this.setState({ count:1})}}>Update Count</button>
      </div>
    )
  }
}
export default App;
