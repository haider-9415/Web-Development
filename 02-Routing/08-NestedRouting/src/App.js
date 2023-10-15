import './App.css';
import React from 'react';
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import NavBar from './Component/Navbar';
import User from './Component/User';
import Filter from './Component/Filter';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Company from './Component/Company';
import Channel from './Component/Channel';
import Other from './Component/Other';
function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/home' element={<Home /> }></Route>
          <Route path='/about' element={<About />}>
            <Route path='company' element={<Company />} />
            <Route path='channel' element={<Channel />} />
            <Route path='other' element={<Other />} />
          </Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/filter' element={<Filter />}></Route>
          <Route path='/user/:name' element={<User/>}></Route>
          <Route path='/*' element={<Home/> }></Route>
        </Routes>
      </Router>
      </div>
    )
}
export default App;
