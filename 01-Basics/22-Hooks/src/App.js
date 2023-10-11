import './App.css';
import React, { useState } from 'react';
function App() {
  const [name, setName] = useState('haider')
    return (
      <div className='App'>
        <h1>Name: {name}</h1>
      </div>
    )

}
export default App;
