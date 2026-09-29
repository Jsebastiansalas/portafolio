import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Superpower from './components/Superpower';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Interactive Custom Cursor for desktop */}
      <CustomCursor />

      {/* Atmospheric Background Ambient Grid */}
      <div className="glow-bg" aria-hidden="true" />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Superpower />
        <Roadmap />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
