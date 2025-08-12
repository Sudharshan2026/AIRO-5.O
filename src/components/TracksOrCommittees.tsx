import React from 'react';
import { Dna, Leaf, Zap, Microscope, Globe, Cpu } from 'lucide-react';

const TracksOrCommittees: React.FC = () => {
  const tracks = [
    {
      icon: <Dna size={40} />,
      title: 'Biotechnology & Genetics',
      description: 'Explore genetic engineering, synthetic biology, and breakthrough medical applications inspired by natural systems.',
      topics: ['Gene Editing', 'Synthetic Biology', 'Biomedical Engineering']
    },
    {
      icon: <Leaf size={40} />,
      title: 'Sustainable Systems',
      description: 'Discover eco-friendly technologies and renewable solutions that mimic nature\'s efficiency.',
      topics: ['Green Energy', 'Biomimicry', 'Circular Economy']
    },
    {
      icon: <Zap size={40} />,
      title: 'Bioluminescence Tech',
      description: 'Harness the power of natural light production for innovative applications and energy solutions.',
      topics: ['Bio-lighting', 'Energy Harvesting', 'Optical Systems']
    },
    {
      icon: <Microscope size={40} />,
      title: 'Nano-Bio Engineering',
      description: 'Merge nanotechnology with biological systems for revolutionary medical and industrial applications.',
      topics: ['Nanomedecine', 'Bio-sensors', 'Smart Materials']
    },
    {
      icon: <Globe size={40} />,
      title: 'Environmental Solutions',
      description: 'Address climate change and environmental challenges through bio-inspired innovations.',
      topics: ['Carbon Capture', 'Ecosystem Restoration', 'Climate Tech']
    },
    {
      icon: <Cpu size={40} />,
      title: 'Bio-Computing',
      description: 'Explore the intersection of biological processes and computational systems for next-gen technology.',
      topics: ['DNA Computing', 'Neural Networks', 'Quantum Biology']
    }
  ];

  return (
    <section id="tracks" className="section section-dark">
      <div className="container">
        <h2 className="section-title">Innovation Tracks</h2>
        <p className="section-subtitle">
          Choose your path of discovery across six cutting-edge domains where biology meets technology
        </p>
        
        <div className="tracks-grid">
          {tracks.map((track, index) => (
            <div key={index} className="track-card card">
              <div className="track-icon">
                {track.icon}
              </div>
              <h3>{track.title}</h3>
              <p className="track-description">{track.description}</p>
              <div className="track-topics">
                {track.topics.map((topic, topicIndex) => (
                  <span key={topicIndex} className="topic-tag">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tracks-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .track-card {
          padding: 2.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .track-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--reef-cyan), var(--biolum-violet));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .track-card:hover::before {
          opacity: 1;
        }

        .track-icon {
          color: var(--reef-cyan);
          margin-bottom: 1.5rem;
          filter: drop-shadow(0 0 15px var(--glow-soft));
          transition: all 0.3s ease;
        }

        .track-card:hover .track-icon {
          transform: scale(1.1);
          filter: drop-shadow(0 0 25px var(--glow-strong));
        }

        .track-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text);
        }

        .track-description {
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .track-topics {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        .topic-tag {
          background: rgba(31, 224, 215, 0.1);
          color: var(--reef-cyan);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
          border: 1px solid rgba(31, 224, 215, 0.2);
          transition: all 0.2s ease;
        }

        .topic-tag:hover {
          background: rgba(31, 224, 215, 0.2);
          border-color: var(--reef-cyan);
        }

        @media (max-width: 768px) {
          .tracks-grid {
            grid-template-columns: 1fr;
          }

          .track-card {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default TracksOrCommittees;