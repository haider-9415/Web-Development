import './App.css';
import React,{useRef, useState} from 'react';
function App() {
  return (
      <div className='App'>
      <h1>HOC - High Order Component</h1>
      <HOCone cmp={Counter } />
      <HOCtwo cmp={Counter } />
      </div>
    )
}
function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={()=> setCount(count+1)}>Update Count</button>
    </div>
  )
}
function HOCone(props) {
  return (
    <div>
      <h2 style={{background:'wheat',margin:'30px',color:'purple'}}><props.cmp/></h2>
    </div>
  )
}
function HOCtwo(props) {
  return (
    <div>
      <h2 style={{background:'purple',margin:'30px',color:'wheat'}}><props.cmp/></h2>
    </div>
  )
}
export default App;
