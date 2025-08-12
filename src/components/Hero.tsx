import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface HeroProps {
  reducedMotion: boolean;
}

const Hero: React.FC<HeroProps> = ({ reducedMotion }) => {
  return (
    <section id="hero" className="hero">
      {/* TODO: Replace with actual hero video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg" // TODO: Add actual poster image
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        {/* TODO: Add actual video source */}
      </video>
      
      <div className="scrim" />
      
      <div className="content">
        <h1>Biolume Summit 2025</h1>
        <p className="tagline">Where light meets wonder</p>
        
        <div className="event-details">
          <div className="detail-item">
            <Calendar size={20} />
            <span>September 12-13, 2025</span>
          </div>
          <div className="detail-item">
            <MapPin size={20} />
            <span>Chennai, India</span>
          </div>
        </div>
        
        <div className="cta-buttons">
          <a href="#registration" className="btn btn-primary">
            Register Now
          </a>
          <a href="#about" className="btn btn-secondary">
            Learn More
          </a>
        </div>
      </div>

      <style jsx>{`
        .event-details {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text);
          font-weight: 500;
        }

        .detail-item svg {
          color: var(--reef-cyan);
          filter: drop-shadow(0 0 8px var(--glow-soft));
        }

        @media (max-width: 768px) {
          .event-details {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;