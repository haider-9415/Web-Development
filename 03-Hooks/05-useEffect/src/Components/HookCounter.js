import React,{useEffect, useState} from 'react'
function HookCounter() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `you clicked ${count} times`
  })
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}
export default HookCounter
