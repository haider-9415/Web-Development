import './App.css';
import React, {createRef  } from 'react';
class App extends React.Component {
  constructor() {
    super()
    this.inputRef = createRef()
  }
  componentDidMount() {
    this.inputRef.current.value = 'Search'
  }
  getValue() {
    console.log(this.inputRef.current.value)
    this.inputRef.current.style.background = 'black'
    this.inputRef.current.style.color = 'white'
  }
  render() {
    return (
      <div className='App'>
        <h1>createRef</h1>
        <input type='text' ref={this.inputRef} />
        <button onClick={()=> this.getValue()}>Submit</button>
      </div>
    )
  }
}
export default App;
