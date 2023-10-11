import React from 'react';
import './App.css';
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'haider'
    }
    console.log('constructor')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  render() {
    console.log('Render')
    return (
      <div className='App'>
        <h1>Component Did Mount</h1>
        <h2>Name: {this.state.name }</h2>
        <button onClick={() => {this.setState({name:'harry'})}}>Update Name</button>
      </div>
    )
  }
}
export default App;
