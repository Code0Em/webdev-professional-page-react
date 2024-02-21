import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ProjectGallery from './components/Projects/ProjectGallery';
import Contact from './components/Contact/Contact';
import './App.css'

function App() {

  return (
    <Router>
    <Header />
    <Routes>
        <Route index element={<Home />} />
        <Route path="projects" element={<ProjectGallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
  </Router>
  )
}

export default App
