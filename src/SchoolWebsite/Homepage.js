import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home'
import Information from './Information'
import Footer from './Footer'
import Contactus from './Contactus'
import Aboutuspage from './Aboutuspage'
import NB from './NB';
import ProfileRun from './ProfileRun';
import WhyGurukulRun from './WhyGurukulRun';
import AboutusRun from './AboutusRun';
import Events from './Event';


function Homepage() {
  return (
    <div>
        <Router>
        
        <NB/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutuspage" element={<AboutusRun/>} />
          <Route path="/admission" element={<Information/>} />
          <Route path="/Contact-us" element={<Contactus/>} />
          <Route path="/aboutmanagement" element={<ProfileRun/>} />
          <Route path="/whygurukul" element={<WhyGurukulRun/>} />
          <Route path="/whygurukul" element={<WhyGurukulRun/>} />
          <Route path="/events" element={<Events/>} />
          
          </Routes>
         <Footer/>
      </Router>
    </div>
  )
}

export default Homepage
