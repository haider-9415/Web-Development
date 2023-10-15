import './App.css';
import React from 'react';
import Home from './Component/Home'
import About from './Component/About'
import CustomerCare from './Component/CustomerCare'
import NavBar from './Component/Navbar';
import User from './Component/User';
import Filter from './Component/Filter';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Company from './Component/Company';
import Channel from './Component/Channel';
import Other from './Component/Other';
import Login from './Component/Login';
import Protected from './Component/protected';
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
          <Route path='/customerCare' element={<Protected Component={CustomerCare} />}></Route>
          <Route path='/filter' element={<Protected Component={Filter}  />}></Route>
          <Route path='/user/:name' element={<User/>}></Route>
          <Route path='/*' element={<Home/> }></Route>
          <Route path='/login' element={<Login /> }></Route>
        </Routes>
      </Router>
      </div>
    )
} 
export default App;
