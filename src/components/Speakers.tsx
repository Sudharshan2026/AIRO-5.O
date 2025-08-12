import React, { useState } from 'react';
import { X, Linkedin, Twitter, Globe } from 'lucide-react';
import SpeakerModal from './SpeakerModal';

interface Speaker {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string; // TODO: Replace with actual speaker images
  bio: string;
  expertise: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

const Speakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  // TODO: Replace with actual speaker data
  const speakers: Speaker[] = [
    {
      id: 1,
      name: 'Dr. Maya Chen',
      title: 'Director of Bioluminescence Research',
      company: 'BioLight Institute',
      image: '/api/placeholder/300/300',
      bio: 'Dr. Maya Chen is a pioneering researcher in bioluminescence applications, with over 15 years of experience in developing sustainable lighting solutions inspired by marine organisms. Her work has led to breakthrough innovations in energy-efficient bio-lighting systems.',
      expertise: ['Bioluminescence', 'Marine Biology', 'Sustainable Technology'],
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
    },
    {
      id: 2,
      name: 'Prof. Alex Rivera',
      title: 'Biomimicry Engineering Lead',
      company: 'Nature Tech Solutions',
      image: '/api/placeholder/300/300',
      bio: 'Professor Rivera specializes in translating natural phenomena into practical engineering solutions. His research focuses on creating materials and systems that replicate the efficiency and sustainability found in biological processes.',
      expertise: ['Biomimicry', 'Materials Science', 'Engineering'],
      social: {
        linkedin: '#',
        website: '#'
      }
    },
    {
      id: 3,
      name: 'Dr. Zara Okafor',
      title: 'Synthetic Biology Pioneer',
      company: 'GeneTech Innovations',
      image: '/api/placeholder/300/300',
      bio: 'Dr. Okafor is at the forefront of synthetic biology, designing biological systems for environmental remediation and sustainable manufacturing. Her work bridges the gap between laboratory research and real-world applications.',
      expertise: ['Synthetic Biology', 'Environmental Science', 'Biotechnology'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 4,
      name: 'Dr. James Park',
      title: 'Nano-Bio Systems Researcher',
      company: 'Quantum Bio Labs',
      image: '/api/placeholder/300/300',
      bio: 'Dr. Park explores the intersection of nanotechnology and biological systems, developing revolutionary medical devices and diagnostic tools. His research has applications in precision medicine and targeted drug delivery.',
      expertise: ['Nanotechnology', 'Biomedical Engineering', 'Quantum Biology'],
      social: {
        linkedin: '#',
        website: '#'
      }
    },
    {
      id: 5,
      name: 'Dr. Priya Sharma',
      title: 'Climate Tech Innovator',
      company: 'EcoSphere Dynamics',
      image: '/api/placeholder/300/300',
      bio: 'Dr. Sharma develops nature-inspired solutions for climate change mitigation. Her work includes bio-based carbon capture systems and ecosystem restoration technologies that scale natural processes.',
      expertise: ['Climate Technology', 'Carbon Capture', 'Ecosystem Engineering'],
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
    },
    {
      id: 6,
      name: 'Prof. David Kim',
      title: 'Bio-Computing Architect',
      company: 'Living Systems Computing',
      image: '/api/placeholder/300/300',
      bio: 'Professor Kim pioneers the field of biological computing, creating systems that use DNA and cellular processes for data storage and computation. His work represents the future of sustainable computing.',
      expertise: ['Bio-Computing', 'DNA Storage', 'Cellular Engineering'],
      social: {
        linkedin: '#',
        website: '#'
      }
    }
  ];

  return (
    <>
      <section id="speakers" className="section">
        <div className="container">
          <h2 className="section-title">Visionary Speakers</h2>
          <p className="section-subtitle">
            Learn from world-renowned experts who are shaping the future of bio-inspired technology
          </p>
          
          <div className="speakers-grid">
            {speakers.map((speaker) => (
              <div 
                key={speaker.id} 
                className="speaker-card card"
                onClick={() => setSelectedSpeaker(speaker)}
              >
                <div className="speaker-image">
                  <img src={speaker.image} alt={speaker.name} />
                  <div className="speaker-overlay">
                    <span>View Bio</span>
                  </div>
                </div>
                <div className="speaker-info">
                  <h3>{speaker.name}</h3>
                  <p className="speaker-title">{speaker.title}</p>
                  <p className="speaker-company">{speaker.company}</p>
                  <div className="speaker-expertise">
                    {speaker.expertise.slice(0, 2).map((skill, index) => (
                      <span key={index} className="expertise-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedSpeaker && (
        <SpeakerModal 
          speaker={selectedSpeaker} 
          onClose={() => setSelectedSpeaker(null)} 
        />
      )}

      <style jsx>{`
        .speakers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .speaker-card {
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .speaker-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-card), 0 0 30px var(--glow-soft);
        }

        .speaker-image {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
        }

        .speaker-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .speaker-card:hover .speaker-image img {
          transform: scale(1.05);
        }

        .speaker-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 16, 32, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .speaker-card:hover .speaker-overlay {
          opacity: 1;
        }

        .speaker-overlay span {
          color: var(--reef-cyan);
          font-weight: 600;
          font-size: 1.1rem;
        }

        .speaker-info {
          padding: 2rem;
        }

        .speaker-info h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text);
        }

        .speaker-title {
          color: var(--reef-cyan);
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .speaker-company {
          color: var(--muted);
          margin-bottom: 1.5rem;
        }

        .speaker-expertise {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .expertise-tag {
          background: rgba(122, 92, 255, 0.1);
          color: var(--biolum-violet);
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
          border: 1px solid rgba(122, 92, 255, 0.2);
        }

        @media (max-width: 768px) {
          .speakers-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default Speakers;