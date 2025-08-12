import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  // TODO: Replace with actual FAQ data
  const faqData: FAQItem[] = [
    {
      question: 'What is Biolume Summit 2025?',
      answer: 'Biolume Summit 2025 is a two-day conference focused on bio-inspired technology, sustainable innovation, and the intersection of biology and technology. It brings together researchers, innovators, and industry leaders to explore cutting-edge developments in biotechnology, biomimicry, and sustainable solutions.'
    },
    {
      question: 'Who should attend this event?',
      answer: 'This event is perfect for researchers, scientists, engineers, entrepreneurs, students, and professionals working in biotechnology, sustainable technology, materials science, environmental solutions, and related fields. Anyone interested in bio-inspired innovation and sustainable technology will find value in attending.'
    },
    {
      question: 'What is included in the registration fee?',
      answer: 'Your registration includes access to all keynote sessions, workshops, networking events, exhibition hall, welcome coffee, lunch on both days, afternoon breaks, conference materials, and a certificate of participation. Accommodation is not included but we can provide recommendations for nearby hotels.'
    },
    {
      question: 'Are there any prerequisites for attending?',
      answer: 'No specific prerequisites are required. While some sessions may be technical, we welcome attendees from all backgrounds. Basic knowledge of science or technology is helpful but not mandatory. We encourage curious minds from diverse fields to join us.'
    },
    {
      question: 'Will the sessions be recorded?',
      answer: 'Selected keynote sessions will be recorded and made available to registered attendees after the event. However, workshops and networking sessions will not be recorded to encourage open discussion and interaction.'
    },
    {
      question: 'What COVID-19 safety measures are in place?',
      answer: 'We are committed to providing a safe environment for all attendees. We will follow all local health guidelines and recommendations current at the time of the event. Updates on specific safety measures will be communicated to registered attendees closer to the event date.'
    },
    {
      question: 'Can I get a refund if I cannot attend?',
      answer: 'Refunds are available according to our cancellation policy: Full refund (minus processing fee) if cancelled 30+ days before the event, 50% refund if cancelled 15-29 days before, and no refund for cancellations less than 15 days before the event. However, registrations can be transferred to another person.'
    },
    {
      question: 'Are there networking opportunities?',
      answer: 'Absolutely! The event is designed with multiple networking opportunities including welcome coffee, lunch breaks, afternoon breaks, and dedicated networking sessions. We also have an exhibition hall where you can connect with sponsors and partners.'
    },
    {
      question: 'Will there be opportunities for startups to showcase?',
      answer: 'Yes! We have dedicated showcase sessions and exhibition spaces for startups and innovative companies. If you\'re interested in showcasing your bio-tech innovation, please contact us at partnerships@biolumesummit.com for more information.'
    },
    {
      question: 'How can I become a speaker or sponsor?',
      answer: 'We welcome proposals from potential speakers and sponsors. For speaking opportunities, please submit your proposal through our website. For sponsorship and partnership opportunities, contact us at partnerships@biolumesummit.com. We offer various partnership packages to suit different needs and budgets.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Find answers to common questions about Biolume Summit 2025
        </p>
        
        <div className="faq-container">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item card">
              <button
                className="faq-question"
                onClick={() => toggleItem(index)}
                aria-expanded={openItems.includes(index)}
              >
                <span>{item.question}</span>
                <div className="faq-icon">
                  {openItems.includes(index) ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </div>
              </button>
              
              <div className={`faq-answer ${openItems.includes(index) ? 'open' : ''}`}>
                <div className="faq-answer-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-contact">
          <div className="contact-card card">
            <h3>Still have questions?</h3>
            <p>
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="contact-buttons">
              <a href="mailto:info@biolumesummit.com" className="btn btn-primary">
                Email Us
              </a>
              <a href="tel:+914412345678" className="btn btn-secondary">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .faq-container {
          max-width: 800px;
          margin: 0 auto 4rem;
        }

        .faq-item {
          margin-bottom: 1rem;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: rgba(31, 224, 215, 0.3);
        }

        .faq-question {
          width: 100%;
          padding: 1.5rem;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          color: var(--text);
          font-size: 1.125rem;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .faq-question:hover {
          color: var(--reef-cyan);
        }

        .faq-icon {
          color: var(--reef-cyan);
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .faq-answer.open {
          max-height: 500px;
        }

        .faq-answer-content {
          padding: 0 1.5rem 1.5rem;
          border-top: 1px solid rgba(31, 224, 215, 0.1);
        }

        .faq-answer p {
          color: var(--muted);
          line-height: 1.7;
          margin: 1rem 0 0;
        }

        .faq-contact {
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-card {
          padding: 3rem;
          text-align: center;
        }

        .contact-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 1rem;
        }

        .contact-card p {
          color: var(--muted);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .contact-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .faq-question {
            padding: 1.25rem;
            font-size: 1rem;
          }

          .faq-answer-content {
            padding: 0 1.25rem 1.25rem;
          }

          .contact-card {
            padding: 2rem;
          }

          .contact-buttons {
            flex-direction: column;
            align-items: center;
          }

          .contact-buttons .btn {
            width: 100%;
            max-width: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;