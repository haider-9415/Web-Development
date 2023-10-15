import './App.css';
import React from 'react';
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import NavBar from './Component/Navbar';
import Page404 from './Component/Page404';
import User from './Component/User';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/home' element={<Home /> }></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/user/:name' element={<User/>}></Route>
          <Route path='/*' element={<Page404/> }></Route>
        </Routes>
      </Router>
      </div>
    )
}
export default App;
