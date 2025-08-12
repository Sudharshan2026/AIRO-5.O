import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import TracksOrCommittees from './components/TracksOrCommittees';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import RegistrationBand from './components/RegistrationBand';
import Venue from './components/Venue';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ParticlesCanvas from './components/ParticlesCanvas';
import './styles/theme.css';

function App() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <Router>
      <div className="app">
        {!reducedMotion && <ParticlesCanvas />}
        <NavBar />
        <main>
          <Hero reducedMotion={reducedMotion} />
          <About />
          <TracksOrCommittees />
          <Speakers />
          <Schedule />
          <RegistrationBand />
          <Venue />
          <Sponsors />
          <FAQ />
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;