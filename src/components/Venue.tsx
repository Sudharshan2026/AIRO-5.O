import React from 'react';
import { MapPin, Navigation, Phone, Mail, Clock } from 'lucide-react';

const Venue: React.FC = () => {
  return (
    <section id="venue" className="section">
      <div className="container">
        <h2 className="section-title">Venue & Location</h2>
        <p className="section-subtitle">
          Join us at the heart of Chennai's innovation district for two days of groundbreaking discoveries
        </p>
        
        <div className="venue-content">
          <div className="venue-info">
            <div className="venue-card card">
              <h3>Chennai Convention Centre</h3>
              <div className="venue-details">
                <div className="venue-detail">
                  <MapPin size={18} />
                  <div>
                    <strong>Address</strong>
                    <p>123 Innovation Drive, Tech City<br />Chennai, Tamil Nadu 600001</p>
                  </div>
                </div>
                
                <div className="venue-detail">
                  <Clock size={18} />
                  <div>
                    <strong>Event Hours</strong>
                    <p>Day 1: 9:00 AM - 6:00 PM<br />Day 2: 9:00 AM - 4:30 PM</p>
                  </div>
                </div>
                
                <div className="venue-detail">
                  <Phone size={18} />
                  <div>
                    <strong>Contact</strong>
                    <p>+91 44 1234 5678</p>
                  </div>
                </div>
                
                <div className="venue-detail">
                  <Mail size={18} />
                  <div>
                    <strong>Email</strong>
                    <p>info@biolumesummit.com</p>
                  </div>
                </div>
              </div>
              
              <button className="btn btn-secondary directions-btn">
                <Navigation size={18} />
                Get Directions
              </button>
            </div>
            
            <div className="travel-info card">
              <h4>Getting There</h4>
              <div className="travel-options">
                <div className="travel-option">
                  <strong>By Metro</strong>
                  <p>Tech City Metro Station (5 min walk)</p>
                </div>
                <div className="travel-option">
                  <strong>By Car</strong>
                  <p>Ample parking available on-site</p>
                </div>
                <div className="travel-option">
                  <strong>By Airport</strong>
                  <p>Chennai International Airport (45 min drive)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="venue-map">
            <div className="map-container">
              {/* TODO: Replace with actual map embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8663679755913!2d80.24565731482226!3d13.044262990816705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526650e0b6c595%3A0x4f74ddbff946af6b!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: 'var(--radius)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .venue-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .venue-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .venue-card {
          padding: 2rem;
        }

        .venue-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 1.5rem;
        }

        .venue-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .venue-detail {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .venue-detail svg {
          color: var(--reef-cyan);
          margin-top: 0.25rem;
          flex-shrink: 0;
        }

        .venue-detail strong {
          color: var(--text);
          display: block;
          margin-bottom: 0.25rem;
        }

        .venue-detail p {
          color: var(--muted);
          margin: 0;
          line-height: 1.5;
        }

        .directions-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: fit-content;
        }

        .travel-info {
          padding: 2rem;
        }

        .travel-info h4 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 1.5rem;
        }

        .travel-options {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .travel-option strong {
          color: var(--reef-cyan);
          display: block;
          margin-bottom: 0.25rem;
        }

        .travel-option p {
          color: var(--muted);
          margin: 0;
          font-size: 0.875rem;
        }

        .venue-map {
          position: sticky;
          top: 2rem;
        }

        .map-container {
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: var(--shadow-card);
          border: 1px solid rgba(31, 224, 215, 0.2);
        }

        @media (max-width: 768px) {
          .venue-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .venue-map {
            position: static;
          }

          .venue-card,
          .travel-info {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Venue;