import './App.css';
import React, {useRef  } from 'react';
function App() {
  const inpputRef = useRef(null)
  function handleInput() {
    console.log('function called')
    inpputRef.current.value = 'Search' // for by-default value 
    inpputRef.current.style.background  = 'wheat'
    inpputRef.current.style.color  = 'purple'

  }
  function handleFocus() {
    inpputRef.current.focus()
  }
    return (
      <div className='App'>
        <h1>createRef</h1>
        <button onClick={handleFocus}>for focus</button>
        <input type='text' ref={inpputRef} />
        <button onClick={handleInput}>Click Me</button>
      </div>
    )
}
export default App;
