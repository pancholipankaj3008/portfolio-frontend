import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './index.css';

function App() {
  useEffect(() => {
    const animatedItems = document.querySelectorAll(
      '.fade-up, .highlight-card, .social-chip, .contact-form-wrap, .profile-frame, .skill-tag, .stack-tag'
    );

    animatedItems.forEach((item, index) => {
      item.classList.add('scroll-animate');

      if (!item.style.getPropertyValue('--reveal-delay')) {
        item.style.setProperty('--reveal-delay', `${Math.min(index % 8, 7) * 70}ms`);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    animatedItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

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
          <p>© {new Date().getFullYear()} Pankaj Pancholi. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
