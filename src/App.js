<<<<<<< HEAD
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

    
=======
import Alert from 'react-bootstrap/Alert';
import Functions from './Functions';

function App() {
  return (
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
        
      ))}
      <Functions/>
    </>
>>>>>>> 6d9400c90efbf4d46e06f7b432cf583b1fab420d
  );
}
export default App;
  