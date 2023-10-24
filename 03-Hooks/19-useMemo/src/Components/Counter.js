import React, { useMemo, useState } from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)
    const increamentOne = () => {
        setCounterOne( counterOne + 1 )
    }
    const increamentTwo = () => {
        setCounterTwo( counterTwo + 1 )
    }
    /*
    const isEven = () => {
        let i = 0
        while (i < 2000000000) {
        i++
    }
        return counterOne % 2 === 0
    }
    */
    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) {
        i++
        }
        return counterOne % 2 === 0
    }, [counterOne])
  return (
    <div>
          <div>
              <h2>Counter One: {counterOne}<span> - { isEven() ? 'Even' : 'Odd' }</span></h2>
              <button onClick={increamentOne}>Update counterOne</button>
          </div>
          <div>
              <h2>Counter Two: { counterTwo }</h2>
              <button onClick={increamentTwo}>Update counterTwo</button>
          </div>
    </div>
  )
}

export default Counter