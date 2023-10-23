import React, { useEffect, useState } from 'react'

function IntervalCounter() {
    const [count, setCount] = useState(0)
    const tick = () => {
        setCount(count + 1)
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000) // 1000 = 1s
        return () => {
            clearInterval(interval)
        }
    }, [count])
  return (
      <div>
          <h2>Count: {count }</h2>
    </div>
  )
}

export default IntervalCounter