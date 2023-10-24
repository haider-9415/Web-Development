import React, { useContext } from 'react'
import { CountContext } from './App'

function ComponentA() {
  const countContext = useContext(CountContext)
  return (
    <div>
      <h2>ComponentA</h2>
      <button onClick={() => countContext.countDispatch('increment')}>Increase</button>
        <button onClick={() => countContext.countDispatch('decrement')}>Decrease</button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA
