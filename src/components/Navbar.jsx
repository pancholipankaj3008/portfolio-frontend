import React, { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {

    const onScroll = () => {

      // navbar background
      setScrolled(window.scrollY > 20);

      // active section detect
      const sections = links
        .map(link => document.getElementById(link.id))
        .filter(Boolean);

      for (let i = sections.length - 1; i >= 0; i--) {

        if (window.scrollY >= sections[i].offsetTop - 120) {

          setActive(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };

  }, []);

  // Smooth Scroll
  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // mobile menu close after click
      setTimeout(() => {
        setMenuOpen(false);
      }, 400);
    }
  };

  return (
    <>

      {/* NAVBAR */}
      <nav className={`navbar ${scrolled || menuOpen ? 'scrolled' : ''}`}>

        {/* LOGO */}
        <button
          className="nav-logo"
          onClick={() => scrollToSection('home')}
        >
          Pankaj<span>.</span>
        </button>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>

          {links.map(link => (

            <li key={link.id}>

              <button
                className={active === link.id ? 'active' : ''}
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </button>

            </li>

          ))}

        </ul>

        {/* HAMBURGER */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

      </nav>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="nav-overlay show"
          onClick={() => setMenuOpen(false)}
        />
      )}

    </>
  );
}