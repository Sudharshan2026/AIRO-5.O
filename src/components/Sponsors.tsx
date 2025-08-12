import React from 'react';

const Sponsors: React.FC = () => {
  // TODO: Replace with actual sponsor data and logos
  const sponsorTiers = {
    platinum: [
      { name: 'BioTech Innovations', logo: '/api/placeholder/200/80' },
      { name: 'GreenTech Solutions', logo: '/api/placeholder/200/80' }
    ],
    gold: [
      { name: 'NanoSystems Corp', logo: '/api/placeholder/160/60' },
      { name: 'EcoLab Industries', logo: '/api/placeholder/160/60' },
      { name: 'Future Materials', logo: '/api/placeholder/160/60' }
    ],
    silver: [
      { name: 'BioLight Labs', logo: '/api/placeholder/120/50' },
      { name: 'Sustainable Tech', logo: '/api/placeholder/120/50' },
      { name: 'Innovation Hub', logo: '/api/placeholder/120/50' },
      { name: 'Research Institute', logo: '/api/placeholder/120/50' }
    ]
  };

  return (
    <section id="sponsors" className="section section-dark">
      <div className="container">
        <h2 className="section-title">Our Partners</h2>
        <p className="section-subtitle">
          Proudly supported by industry leaders who share our vision for bio-inspired innovation
        </p>
        
        <div className="sponsors-content">
          {/* Platinum Sponsors */}
          <div className="sponsor-tier">
            <h3 className="tier-title platinum">Platinum Partners</h3>
            <div className="sponsors-grid platinum-grid">
              {sponsorTiers.platinum.map((sponsor, index) => (
                <div key={index} className="sponsor-card platinum-card">
                  <img src={sponsor.logo} alt={sponsor.name} />
                </div>
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="sponsor-tier">
            <h3 className="tier-title gold">Gold Partners</h3>
            <div className="sponsors-grid gold-grid">
              {sponsorTiers.gold.map((sponsor, index) => (
                <div key={index} className="sponsor-card gold-card">
                  <img src={sponsor.logo} alt={sponsor.name} />
                </div>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div className="sponsor-tier">
            <h3 className="tier-title silver">Silver Partners</h3>
            <div className="sponsors-grid silver-grid">
              {sponsorTiers.silver.map((sponsor, index) => (
                <div key={index} className="sponsor-card silver-card">
                  <img src={sponsor.logo} alt={sponsor.name} />
                </div>
              ))}
            </div>
          </div>

          {/* Become a Sponsor CTA */}
          <div className="sponsor-cta">
            <div className="cta-content card">
              <h4>Become a Partner</h4>
              <p>
                Join us in shaping the future of bio-inspired technology. 
                Partner with Biolume Summit 2025 and connect with innovators, 
                researchers, and industry leaders.
              </p>
              <button className="btn btn-primary">
                Partnership Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sponsors-content {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .sponsor-tier {
          text-align: center;
        }

        .tier-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .tier-title.platinum {
          color: var(--sunset-gold);
          filter: drop-shadow(0 0 12px rgba(255, 199, 102, 0.3));
        }

        .tier-title.gold {
          color: var(--seed-peach);
          filter: drop-shadow(0 0 12px rgba(255, 176, 133, 0.3));
        }

        .tier-title.silver {
          color: var(--muted);
          filter: drop-shadow(0 0 12px rgba(156, 199, 209, 0.3));
        }

        .sponsors-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .sponsor-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: var(--radius);
          padding: 1.5rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .sponsor-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .platinum-card {
          border: 2px solid var(--sunset-gold);
          box-shadow: 0 4px 20px rgba(255, 199, 102, 0.2);
        }

        .platinum-card:hover {
          box-shadow: 0 8px 30px rgba(255, 199, 102, 0.3);
        }

        .gold-card {
          border: 2px solid var(--seed-peach);
          box-shadow: 0 4px 20px rgba(255, 176, 133, 0.2);
        }

        .gold-card:hover {
          box-shadow: 0 8px 30px rgba(255, 176, 133, 0.3);
        }

        .silver-card {
          border: 2px solid var(--muted);
          box-shadow: 0 4px 20px rgba(156, 199, 209, 0.2);
        }

        .silver-card:hover {
          box-shadow: 0 8px 30px rgba(156, 199, 209, 0.3);
        }

        .sponsor-card img {
          max-width: 100%;
          height: auto;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }

        .sponsor-card:hover img {
          filter: grayscale(0%);
        }

        .platinum-grid .sponsor-card {
          width: 250px;
          height: 120px;
        }

        .gold-grid .sponsor-card {
          width: 200px;
          height: 100px;
        }

        .silver-grid .sponsor-card {
          width: 160px;
          height: 80px;
        }

        .sponsor-cta {
          margin-top: 2rem;
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
          padding: 3rem;
          text-align: center;
        }

        .cta-content h4 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 1rem;
        }

        .cta-content p {
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .sponsors-content {
            gap: 3rem;
          }

          .sponsors-grid {
            gap: 1rem;
          }

          .platinum-grid .sponsor-card {
            width: 200px;
            height: 100px;
          }

          .gold-grid .sponsor-card {
            width: 160px;
            height: 80px;
          }

          .silver-grid .sponsor-card {
            width: 140px;
            height: 70px;
          }

          .cta-content {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Sponsors;