import './App.css';
import React,{useState} from 'react';
function App() {
  const [val, setVal] = useState('Serch')
    return (
      <div className='App'>
        <h1>Controlled Component</h1>
        <h2>Input: { val}</h2>
        <input type='text' value={val} onChange={(e) => setVal(e.target.value)} />
      </div>
    )
}
export default App;
