import './App.css';
import React from 'react';
function App() {
  const [status,setStatus] = React.useState(true)
  return (
    <div className="App">
      {
        status ? <h1>Hide-Show-Toggle</h1>:null
      }
      <button onClick={()=> setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>False</button>
      
      {/* <button onClick={()=> setStatus( !status )}>Toggle</button> */}

    </div>
  );
}
export default App;
