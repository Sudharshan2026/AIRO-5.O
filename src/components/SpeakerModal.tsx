import React, { useEffect } from 'react';
import { X, Linkedin, Twitter, Globe } from 'lucide-react';

interface Speaker {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
  bio: string;
  expertise: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

interface SpeakerModalProps {
  speaker: Speaker;
  onClose: () => void;
}

const SpeakerModal: React.FC<SpeakerModalProps> = ({ speaker, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>
        
        <div className="modal-body">
          <div className="speaker-header">
            <div className="speaker-image">
              <img src={speaker.image} alt={speaker.name} />
            </div>
            <div className="speaker-details">
              <h2>{speaker.name}</h2>
              <p className="speaker-title">{speaker.title}</p>
              <p className="speaker-company">{speaker.company}</p>
              
              <div className="social-links">
                {speaker.social.linkedin && (
                  <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                  </a>
                )}
                {speaker.social.twitter && (
                  <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter size={20} />
                  </a>
                )}
                {speaker.social.website && (
                  <a href={speaker.social.website} target="_blank" rel="noopener noreferrer">
                    <Globe size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
          
          <div className="speaker-bio">
            <h3>Biography</h3>
            <p>{speaker.bio}</p>
          </div>
          
          <div className="speaker-expertise-full">
            <h3>Areas of Expertise</h3>
            <div className="expertise-tags">
              {speaker.expertise.map((skill, index) => (
                <span key={index} className="expertise-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: rgba(10, 16, 32, 0.9);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.2s ease-out;
        }

        .modal-content {
          background: var(--deep-indigo);
          border: 1px solid rgba(31, 224, 215, 0.2);
          border-radius: var(--radius-lg);
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: var(--shadow-card), 0 0 40px var(--glow-soft);
          animation: slideUp 0.3s ease-out;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(31, 224, 215, 0.1);
          border: 1px solid rgba(31, 224, 215, 0.2);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text);
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 1;
        }

        .modal-close:hover {
          background: rgba(31, 224, 215, 0.2);
          border-color: var(--reef-cyan);
          color: var(--reef-cyan);
        }

        .modal-body {
          padding: 2rem;
        }

        .speaker-header {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
          align-items: flex-start;
        }

        .speaker-image {
          flex-shrink: 0;
        }

        .speaker-image img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--reef-cyan);
          box-shadow: 0 0 20px var(--glow-soft);
        }

        .speaker-details h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text);
        }

        .speaker-title {
          color: var(--reef-cyan);
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }

        .speaker-company {
          color: var(--muted);
          margin-bottom: 1rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          color: var(--muted);
          transition: color 0.2s ease;
        }

        .social-links a:hover {
          color: var(--reef-cyan);
        }

        .speaker-bio,
        .speaker-expertise-full {
          margin-bottom: 2rem;
        }

        .speaker-bio h3,
        .speaker-expertise-full h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text);
        }

        .speaker-bio p {
          color: var(--muted);
          line-height: 1.7;
        }

        .expertise-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .expertise-tag {
          background: rgba(122, 92, 255, 0.1);
          color: var(--biolum-violet);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
          border: 1px solid rgba(122, 92, 255, 0.2);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .modal-overlay {
            padding: 1rem;
          }

          .speaker-header {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }

          .modal-body {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SpeakerModal;