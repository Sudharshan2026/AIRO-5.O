import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'tracks', label: 'Tracks' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'venue', label: 'Venue' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-brand" onClick={() => scrollToSection('hero')}>
            <Leaf className="brand-icon" />
            <span>Biolume Summit</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="navbar-nav desktop-nav">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <ul className="mobile-nav">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
          background: rgba(10, 16, 32, 0.1);
          backdrop-filter: blur(10px);
        }

        .navbar.scrolled {
          background: rgba(10, 16, 32, 0.9);
          backdrop-filter: blur(20px);
          box-shadow: 0 2px 20px rgba(31, 224, 215, 0.1);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .navbar-brand:hover {
          color: var(--reef-cyan);
        }

        .brand-icon {
          color: var(--reef-cyan);
          filter: drop-shadow(0 0 8px var(--glow-soft));
        }

        .desktop-nav {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          background: none;
          border: none;
          color: var(--muted);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          padding: 0.5rem 0;
          position: relative;
          transition: all 0.2s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--reef-cyan);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--reef-cyan), var(--biolum-violet));
          border-radius: 1px;
          box-shadow: 0 0 8px var(--glow-soft);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .mobile-menu-btn:hover {
          background: var(--glow-soft);
          color: var(--reef-cyan);
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 999;
          background: rgba(10, 16, 32, 0.95);
          backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-content {
          text-align: center;
        }

        .mobile-nav {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .mobile-nav-link {
          display: block;
          background: none;
          border: none;
          color: var(--text);
          font-size: 1.5rem;
          font-weight: 600;
          padding: 1rem 2rem;
          cursor: pointer;
          transition: all 0.2s ease;
          border-radius: var(--radius);
          margin: 0.5rem 0;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--reef-cyan);
          background: var(--glow-soft);
          box-shadow: 0 0 20px var(--glow-soft);
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default NavBar;