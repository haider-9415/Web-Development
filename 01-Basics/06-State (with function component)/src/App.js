import { useState } from 'react';
import './App.css';
function App() {
  let [name,updateTo] = useState('haider')
  function updateName() {
     updateTo('harry')
  }

  // let [num,updateTo] = useState(0)
  // function updateName() {
  //    updateTo(num+1)
  // }

  return (
    <div className="App">
      <h1>State In React</h1>
      <h2>Name: {name}</h2>
      <button onClick={updateName}>Click Me</button>
      
      {/* <h2>Num: {num}</h2>
      <button onClick={updateName}>Increase by 1</button> */}
    
    </div>
  );
}
export default App;

