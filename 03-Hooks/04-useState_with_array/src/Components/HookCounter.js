import React,{useState} from 'react'
function HookCounter() {
  const [item, setItem] = useState([])
  const addItem = () => {
    setItem([...item, {
      id: item.length,
      value: Math.floor(Math.random() * 10 + 1)
    }
    ])
  }
  return (
    <div>
        <button onClick={addItem}>Add Element</button>
      <ul style={{listStyle:'none'}}>
        {item.map(item => (
          <li key={item.id}>{item.value }</li>
        ))}
      </ul>
    </div>
  )
}
export default HookCounter
