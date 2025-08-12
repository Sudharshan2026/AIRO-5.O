import React from 'react';
import { ArrowRight, Users, Calendar, Award } from 'lucide-react';

const RegistrationBand: React.FC = () => {
  const benefits = [
    {
      icon: <Users size={20} />,
      text: 'Network with 500+ innovators'
    },
    {
      icon: <Calendar size={20} />,
      text: '2 days of intensive learning'
    },
    {
      icon: <Award size={20} />,
      text: 'Certificate of participation'
    }
  ];

  return (
    <section id="registration" className="registration-band">
      <div className="container">
        <div className="registration-content">
          <div className="registration-text">
            <h2>Ready to Join the Biolume Revolution?</h2>
            <p>
              Secure your spot at the most innovative bio-tech event of 2025. 
              Limited seats available for this exclusive gathering of visionaries.
            </p>
            
            <div className="registration-benefits">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">
                    {benefit.icon}
                  </div>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="registration-cta">
            <div className="pricing">
              <span className="price-label">Early Bird</span>
              <span className="price">₹2,999</span>
              <span className="price-note">Regular: ₹4,999</span>
            </div>
            
            <button className="btn btn-primary registration-btn">
              Register Now
              <ArrowRight size={20} />
            </button>
            
            <p className="registration-note">
              Early bird pricing ends March 15, 2025
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .registration-band {
          background: linear-gradient(135deg, var(--deep-indigo), var(--darker-bg));
          padding: 4rem 0;
          position: relative;
          overflow: hidden;
        }

        .registration-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 50%, var(--glow-soft), transparent 50%),
            radial-gradient(circle at 80% 50%, var(--glow-violet), transparent 50%);
          opacity: 0.3;
        }

        .registration-content {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 3rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .registration-text h2 {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--reef-cyan), var(--text));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .registration-text p {
          font-size: 1.125rem;
          color: var(--muted);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .registration-benefits {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text);
        }

        .benefit-icon {
          color: var(--reef-cyan);
          filter: drop-shadow(0 0 8px var(--glow-soft));
        }

        .registration-cta {
          text-align: center;
          padding: 2rem;
          background: rgba(9, 18, 36, 0.6);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(31, 224, 215, 0.2);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-card);
        }

        .pricing {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 2rem;
        }

        .price-label {
          color: var(--seed-peach);
          font-weight: 600;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
        }

        .price {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--reef-cyan);
          margin-bottom: 0.25rem;
          filter: drop-shadow(0 0 12px var(--glow-soft));
        }

        .price-note {
          color: var(--muted);
          font-size: 0.875rem;
          text-decoration: line-through;
        }

        .registration-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0 auto 1rem;
          padding: 1rem 2rem;
          font-size: 1.125rem;
        }

        .registration-note {
          color: var(--muted);
          font-size: 0.875rem;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .registration-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .registration-benefits {
            justify-content: center;
          }

          .registration-cta {
            padding: 1.5rem;
          }

          .price {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default RegistrationBand;