import './App.css';
import React from 'react';
import Home from './Component/Home';
import About from './Component/About';
import NavBar from './Component/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <h1>React Routing</h1>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='home' element={<Home /> }></Route>
          <Route path='about' element={<About /> }></Route>
        </Routes>
      </Router>
      </div>
    )
}
export default App;
