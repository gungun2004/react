import React from 'react';
import Carousal from './Carousal';
import Navigations from './Navigations';
import './App.css';
import { Route, Router,Routes } from 'react-router-dom';
import Footer from './Footer';
import Ourinfo from './Ourinfo';
import Accordions from './Accordians';
import Marquee from 'react-fast-marquee';



function Home() {
  return (<div>
        
        <Navigations/>
        <Marquee className='bg-secondary text-white'  speed={100}> Here! you will get a conceptual and logical learning of each and every conceot of programming languages .....Hurry up .....Enroll now for a better future:)</Marquee>
     <Carousal/>
     <Accordions/>
     <Ourinfo/>
    <Footer/>
    </div> 
  );
}
export default Home;