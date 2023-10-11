import './App.css';
import React,{useState} from 'react';
function App() {
  const [data,setData] = useState(null)
    function getData(val) {
      setData(val.target.value)
    }
    return (
      <div className="App">
        <h1>Get Input Box Value</h1>
        <h2>Entered: { data}</h2>
        <input type='text' onChange={getData}></input>
      </div>
    );
}
export default App;

