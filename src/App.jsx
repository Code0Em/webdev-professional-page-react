//===========
//  Imports 
//===========
// Imports below from the React router package.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Imports components.
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ProjectGallery from './components/Projects/ProjectGallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// Imports styling.
import './App.css'

//=============
//  Functions
//=============
// Sets up routing structure (i.e. different routes and what components should be rendered where).
// *CREDIT: Coder’s understanding of React Router developed thanks to Net Ninja (2023) React Router in Depth (https://www.youtube.com/watch?v=XN7E5tKM-no).
const App = () => {

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="projects" element={<ProjectGallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

//===========
//  Exports 
//===========
// Exports App component.
export default App;
