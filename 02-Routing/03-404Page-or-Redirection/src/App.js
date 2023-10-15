import './App.css';
import React from 'react';
import Home from './Component/Home';
import About from './Component/About';
import NavBar from './Component/Navbar';
import Page404 from './Component/Page404';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <h1>React Routing</h1>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/home' element={<Home /> }></Route>
          <Route path='/about' element={<About /> }></Route>
          <Route path='/*' element={<Navigate to='/home' /> }></Route>
        </Routes>
      </Router>
      </div>
    )
}
export default App;
