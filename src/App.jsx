import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Contact />
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Pankaj Pancholi.| All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
