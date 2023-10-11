import './App.css';
import React, {useState, useMemo} from 'react';
function App() {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState(10)
  const forMemo = useMemo(function multiCount() {
    console.log('multiCount()')
    return count*5
  },[count])
    return (
      <div className='App'>
        <h1>useMemo</h1>
        <h2>Count: {count }</h2>
        <h2>Item: {item }</h2>
        <h2>multiCount: {forMemo }</h2>
        <button onClick={()=> setCount(count+1)}>Update Count</button>
        <button onClick={()=> setItem(item+10)}>Update Item</button>
      </div>
    )
}
export default App;
