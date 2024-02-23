import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/utils/Navbar';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
function App() {

  return (
    <div className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/projects' element={<Project />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
