import './App.css';
import {useState} from 'react';
function App() {
  const [name, setName] = useState("") // for input taking name
  const [TNC, setTNC] = useState(false) // for checkbox
  const [option,setoption] = useState("") // for options
  
  
  
  function getFormData(e) {
    console.log(`Name: ${name} - Term&Conditions: ${TNC} - option: ${option}`)
    e.preventDefault()  // so that on clicking the submit button, the form does not submitted
  }
  return (
    <div className="App">
      <h1>Handle Form In React</h1>
      <form onSubmit={getFormData}>
        <input type='text' placeholder='Enter Name' onChange={(e) => setName(e.target.value)}></input> <br /><br />
        <select onChange={(e) => setoption(e.target.value)}>
          <option>Select</option>
          <option>Marvel</option>
          <option>DC</option>
          <option>LCU</option>
        </select><br /><br />
        <input type="checkbox" onChange={(e) => setTNC(e.target.checked)} /><span>Accept Terms and Conditions</span><br /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
export default App;
