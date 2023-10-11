import './App.css';
import React, {PureComponent} from 'react';
class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      name: 'haider'
    }
  }
  render() {
    console.warn('check Rerendering')
    return (
      <div className='App'>
        <h1>Pure Component</h1>
        <h2>Name: {this.state.name}</h2>
        <button onClick={() => this.setState({ name: 'harry' })}>
          Update State
        </button>
      </div>
    );
  }
}
export default App;
