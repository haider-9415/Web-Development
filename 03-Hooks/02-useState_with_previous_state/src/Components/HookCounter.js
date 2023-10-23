import React,{useState} from 'react'
function HookCounter() {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)
  const increament5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1)
    }
  }
  return (
    <div>
      <h2>Count: {count}</h2>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase by 1</button>
        <button onClick={increament5}>Increase by 5</button><br/>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrease by 1</button><br/>
        <button onClick={() => setCount( initialCount )}>Reset</button>
    </div>
  )
}
export default HookCounter
