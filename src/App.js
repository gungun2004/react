
import React from 'react';
import './App.css';
import Home from './Home';
import Navigations from './Navigations';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Login';
import Cards from './Cards';
function App() {
  return (<>
 <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Courses" element={<Cards />} />
        <Route path='/Logout' element={<Login/>}/>
      </Routes>
    </Router>
    
    </>

);
}
