import React from 'react';
import './App.css';
import Student from './MyFile';
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      show: true
    }
  }
  render() {
    return (
      <div className='App'>
        <h1>Component Will Unmount</h1>
        {
          this.state.show ? <Student/> : <h1>the component removed</h1>
        }
        <button onClick={()=>this.setState({show: !this.state.show})}>Click Me</button>
      </div>
    )
  }
}
export default App;
