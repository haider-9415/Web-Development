import React, {useReducer} from 'react'
const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }}
function Counterone() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
      <div>
          <h2>Count One: { count.secondCounter }</h2>
          <h2>Count Two: { count.secondCounter }</h2>
          <button onClick={() => dispatch({ type: 'increment', value:1 })}>Increase 1st Counter
          </button>
          <button onClick={() => dispatch({ type: 'decrement', value:1 })}>Decrease 1st Counter
          </button><br/>
          <button onClick={() => dispatch({ type: 'increment', value:5 })}>Increase 5
          </button>
          <button onClick={() => dispatch({ type: 'decrement', value:5 })}>Decrease 5
          </button><br />
          <div>
          <button onClick={() => dispatch({ type: 'increment2', value:1 })}>Increase 2nd Counter
          </button>
          <button onClick={() => dispatch({ type: 'decrement2', value:1 })}>Decrease 2nd Counter
          </button><br/>
          </div>
          <button onClick={() => dispatch({ type: 'reset' })}>Reset
          </button>
    </div>
  )
}
export default Counterone

