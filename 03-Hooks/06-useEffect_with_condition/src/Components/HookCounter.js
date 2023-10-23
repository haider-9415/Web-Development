import React,{useEffect, useState} from 'react'
function HookCounter() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  useEffect(() => {
    console.log('updating document title')
    document.title = `you clicked ${count} times`
  }, [count])
  return (
    <div>
      <h2>Count: {count}</h2>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}
export default HookCounter

