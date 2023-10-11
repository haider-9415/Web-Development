import './App.css';
import React,{useRef} from 'react';
function App() {
  const inpuRef1 = useRef(null)
  const inpuRef2 = useRef(null)
  function ssubmitHandler(e) {
    e.preventDefault()
    console.log('input field 1 value: ',inpuRef1.current.value)
    console.log('input field 2 value: ', inpuRef2.current.value)
    
    // let in1 = document.getElementById('input1').value
    // console.log("input feild id-input1 value: ", in1)
    // let in2 = document.getElementById('input2').value
    // console.log("input feild id-input2 value: ",in2)
    
  }
  return (
      <div className='App'>
      <h1>Uncontrolled Component</h1>
      <form onSubmit={ssubmitHandler}>
        <input ref={inpuRef1} type='text' /><br/><br/>
        <input ref={inpuRef2} type='text' /><br /><br />
        
        {/* <input id='input1' type='text' /><br /><br />
        <input id='input2' type='text'/><br/><br/> */}
          <button>Submit</button>
        </form>
      </div>
    )
}
export default App;

