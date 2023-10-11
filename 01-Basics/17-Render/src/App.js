import './App.css';
// import React, { useState } from 'react';
import User from './MyFile';
function App() {
  // const [name,setName] = useState("haider")

    return (
      <div className='App'>
        <h1>For Render</h1>
        <User />

        {/* <User name={name} /> */}
        {/* <button onClick={()=> setName('harry')}>Update Name</button> */}
      </div>
    )
}
export default App;
