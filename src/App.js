import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Service from './components/Service'; // Import Service component
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('dark-mode') === 'true';
    setIsDarkMode(savedTheme);
    document.body.classList.toggle('dark-mode', savedTheme);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('dark-mode', newMode);
    document.body.classList.toggle('dark-mode', newMode);
  };

  const appClass = isDarkMode ? 'app dark-mode' : 'app light-mode';

  return (
    <div className={appClass}>
      <header>
        <Navbar />
        <button
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? ' Light Mode' : ' Dark Mode'}
        </button>
      </header>

      {/* Sections */}
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="service"><Service /></section> {/* Add Service section */}
      <section id="contact"><Contact /></section>

      <Footer />
    </div>
  );
};

export default App;
