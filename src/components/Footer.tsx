import React from 'react';
import { Leaf, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-brand">
              <Leaf className="brand-icon" />
              <span>Biolume Summit</span>
            </div>
            <p className="footer-description">
              Where light meets wonder. Join us in exploring the fascinating world 
              of bio-inspired technology and sustainable innovation.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Twitter" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="social-link">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#tracks">Tracks</a></li>
              <li><a href="#speakers">Speakers</a></li>
              <li><a href="#schedule">Schedule</a></li>
              <li><a href="#registration">Register</a></li>
            </ul>
          </div>

          {/* Information */}
          <div className="footer-section">
            <h4>Information</h4>
            <ul className="footer-links">
              <li><a href="#venue">Venue</a></li>
              <li><a href="#sponsors">Sponsors</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#">Code of Conduct</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>info@biolumesummit.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 44 1234 5678</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Biolume Summit. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--darker-bg);
          padding: 4rem 0 0;
          position: relative;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--reef-cyan), transparent);
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-section h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 1.5rem;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 1rem;
        }

        .brand-icon {
          color: var(--reef-cyan);
          filter: drop-shadow(0 0 8px var(--glow-soft));
        }

        .footer-description {
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(31, 224, 215, 0.1);
          border: 1px solid rgba(31, 224, 215, 0.2);
          border-radius: 50%;
          color: var(--muted);
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: rgba(31, 224, 215, 0.2);
          border-color: var(--reef-cyan);
          color: var(--reef-cyan);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px var(--glow-soft);
        }

        .footer-links {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: var(--reef-cyan);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--muted);
        }

        .contact-item svg {
          color: var(--reef-cyan);
          flex-shrink: 0;
        }

        .footer-bottom {
          border-top: 1px solid rgba(31, 224, 215, 0.1);
          padding: 2rem 0;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom p {
          color: var(--muted);
          margin: 0;
        }

        .footer-bottom-links {
          display: flex;
          gap: 2rem;
        }

        .footer-bottom-links a {
          color: var(--muted);
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.2s ease;
        }

        .footer-bottom-links a:hover {
          color: var(--reef-cyan);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }

          .footer-bottom-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;