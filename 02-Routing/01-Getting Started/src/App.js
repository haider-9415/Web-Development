import './App.css';
import React from 'react';
import Home from './Component/Home';
import About from './Component/About';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <h1>React Routing</h1>
      <Router>
        <Routes>
          <Route path='home' element={<Home /> }></Route>
          <Route path='about' element={<About /> }></Route>
        </Routes>
      </Router>
      </div>
    )
}
export default App;
