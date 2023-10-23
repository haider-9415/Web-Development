import React,{useEffect, useState} from 'react'
function HookCounter() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const mousePosition = e => {
    console.log('mouse event')
    setX( e.clientX)
    setY( e.clientY)
  }
  useEffect(() => {
    console.log('called useEffect')
    window.addEventListener('mousemove',mousePosition)
  }, [])
  return (
    <div>
      <h2>X-coor:{x} - Y-coor:{y}</h2>
    </div>
  )
}
export default HookCounter
