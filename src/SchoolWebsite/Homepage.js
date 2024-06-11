import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home'
import Information from './Information'
import Footer from './Footer'
import Contactus from './Contactus'
import Aboutuspage from './Aboutuspage'

function Homepage() {
  return (
    <div>
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutuspage" element={<Aboutuspage />} />
          <Route path="/admission" element={<Information/>} />
          <Route path="/Contact-us" element={<Contactus/>} />
          </Routes>
         <Footer/>
      </Router>
    </div>
  )
}

export default Homepage
