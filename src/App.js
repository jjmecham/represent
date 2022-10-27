import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Navbar from "./components/Navbar"

//import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/services' element={<Services/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
