import './App.css';
import React, {useRef  } from 'react';
import User from './MyFile';
function App() {
  const inputRef = useRef(null)
  function updateInput() {
    inputRef.current.value = 'Search'
    inputRef.current.style.color = 'purple'
    inputRef.current.style.background = 'wheat'
  }
    return (
      <div className='App'>
        <h1>createRef</h1>
        <User ref={inputRef} />
        <button onClick={updateInput}>Clck & Update</button>
      </div>
    )
}
export default App;
