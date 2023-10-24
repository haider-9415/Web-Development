import React, {useReducer} from 'react'
const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }}
function Counterone() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
  return (
      <div>
          <h2>Count: { count }</h2>
        <button onClick={() => dispatch('increment')}>Increase</button>
        <button onClick={() => dispatch('decrement')}>Decrease</button>
          <button onClick={() => dispatch('reset')}>Reset</button>
          <div>
          <h2>Count Two: { countTwo }</h2>
        <button onClick={() => dispatchTwo('increment')}>Increase</button>
        <button onClick={() => dispatchTwo('decrement')}>Decrease</button>
        <button onClick={() => dispatchTwo('reset')}>Reset</button>
          </div>
    </div>
  )
}
export default Counterone

