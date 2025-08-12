import React from 'react';
import { Sparkles, Users, Lightbulb, Award } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Sparkles size={32} />,
      title: 'Bioluminescent Innovation',
      description: 'Discover cutting-edge technologies inspired by nature\'s own light sources and sustainable solutions.'
    },
    {
      icon: <Users size={32} />,
      title: 'Global Community',
      description: 'Connect with visionaries, researchers, and innovators from around the world in an immersive environment.'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Breakthrough Ideas',
      description: 'Explore revolutionary concepts that merge biological systems with advanced technology.'
    },
    {
      icon: <Award size={32} />,
      title: 'Recognition & Growth',
      description: 'Showcase your innovations and gain recognition from industry leaders and academic pioneers.'
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Biolume Summit</h2>
        <p className="section-subtitle">
          An extraordinary convergence of nature-inspired technology, sustainable innovation, 
          and visionary thinking. Join us for two days of discovery in the heart of Chennai.
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Biolume Summit 2025 brings together the brightest minds in biotechnology, 
              sustainable engineering, and bio-inspired design. Our event celebrates the 
              intersection of natural phenomena and technological advancement, creating 
              a unique platform for innovation and collaboration.
            </p>
            <p>
              From bioluminescent organisms that light up our oceans to the intricate 
              networks of forest ecosystems, nature provides endless inspiration for 
              revolutionary technologies. Join us as we explore these connections and 
              their potential to transform our world.
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-content {
          display: grid;
          gap: 4rem;
          margin-top: 2rem;
        }

        .about-text {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .about-text p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--muted);
          margin-bottom: 1.5rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .feature-card {
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
        }

        .feature-icon {
          color: var(--reef-cyan);
          margin-bottom: 1.5rem;
          filter: drop-shadow(0 0 12px var(--glow-soft));
        }

        .feature-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text);
        }

        .feature-card p {
          color: var(--muted);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .about-content {
            gap: 2rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            margin-top: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;