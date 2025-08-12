import React, { useState } from 'react';
import { Clock, MapPin, User } from 'lucide-react';

interface ScheduleItem {
  time: string;
  title: string;
  speaker?: string;
  location: string;
  type: 'keynote' | 'session' | 'break' | 'workshop';
}

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState(1);

  // TODO: Replace with actual schedule data
  const scheduleData = {
    1: [
      {
        time: '09:00 - 09:30',
        title: 'Registration & Welcome Coffee',
        location: 'Main Lobby',
        type: 'break' as const
      },
      {
        time: '09:30 - 10:30',
        title: 'Opening Keynote: The Future of Bioluminescence',
        speaker: 'Dr. Maya Chen',
        location: 'Main Auditorium',
        type: 'keynote' as const
      },
      {
        time: '10:30 - 11:00',
        title: 'Networking Break',
        location: 'Exhibition Hall',
        type: 'break' as const
      },
      {
        time: '11:00 - 12:00',
        title: 'Biomimicry in Modern Engineering',
        speaker: 'Prof. Alex Rivera',
        location: 'Hall A',
        type: 'session' as const
      },
      {
        time: '12:00 - 13:00',
        title: 'Synthetic Biology Workshop',
        speaker: 'Dr. Zara Okafor',
        location: 'Workshop Room 1',
        type: 'workshop' as const
      },
      {
        time: '13:00 - 14:00',
        title: 'Lunch & Networking',
        location: 'Dining Hall',
        type: 'break' as const
      },
      {
        time: '14:00 - 15:00',
        title: 'Nano-Bio Systems: The Next Frontier',
        speaker: 'Dr. James Park',
        location: 'Hall B',
        type: 'session' as const
      },
      {
        time: '15:00 - 16:00',
        title: 'Climate Tech Innovation Panel',
        speaker: 'Dr. Priya Sharma & Others',
        location: 'Main Auditorium',
        type: 'session' as const
      },
      {
        time: '16:00 - 16:30',
        title: 'Afternoon Break',
        location: 'Exhibition Hall',
        type: 'break' as const
      },
      {
        time: '16:30 - 17:30',
        title: 'Bio-Computing: Living Systems as Computers',
        speaker: 'Prof. David Kim',
        location: 'Hall A',
        type: 'session' as const
      },
      {
        time: '17:30 - 18:00',
        title: 'Day 1 Wrap-up & Announcements',
        location: 'Main Auditorium',
        type: 'session' as const
      }
    ],
    2: [
      {
        time: '09:00 - 09:30',
        title: 'Morning Coffee & Networking',
        location: 'Main Lobby',
        type: 'break' as const
      },
      {
        time: '09:30 - 10:30',
        title: 'Sustainable Innovation Keynote',
        speaker: 'Dr. Priya Sharma',
        location: 'Main Auditorium',
        type: 'keynote' as const
      },
      {
        time: '10:30 - 11:30',
        title: 'Advanced Biotechnology Workshop',
        speaker: 'Dr. Maya Chen',
        location: 'Workshop Room 2',
        type: 'workshop' as const
      },
      {
        time: '11:30 - 12:00',
        title: 'Coffee Break',
        location: 'Exhibition Hall',
        type: 'break' as const
      },
      {
        time: '12:00 - 13:00',
        title: 'Future of Bio-Inspired Materials',
        speaker: 'Prof. Alex Rivera',
        location: 'Hall A',
        type: 'session' as const
      },
      {
        time: '13:00 - 14:00',
        title: 'Lunch & Final Networking',
        location: 'Dining Hall',
        type: 'break' as const
      },
      {
        time: '14:00 - 15:00',
        title: 'Innovation Showcase & Demos',
        location: 'Exhibition Hall',
        type: 'session' as const
      },
      {
        time: '15:00 - 16:00',
        title: 'Closing Panel: The Road Ahead',
        speaker: 'All Speakers',
        location: 'Main Auditorium',
        type: 'session' as const
      },
      {
        time: '16:00 - 16:30',
        title: 'Closing Ceremony & Awards',
        location: 'Main Auditorium',
        type: 'keynote' as const
      }
    ]
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'keynote':
        return 'var(--reef-cyan)';
      case 'session':
        return 'var(--biolum-violet)';
      case 'workshop':
        return 'var(--seed-peach)';
      case 'break':
        return 'var(--muted)';
      default:
        return 'var(--text)';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'keynote':
        return 'Keynote';
      case 'session':
        return 'Session';
      case 'workshop':
        return 'Workshop';
      case 'break':
        return 'Break';
      default:
        return '';
    }
  };

  return (
    <section id="schedule" className="section section-darker">
      <div className="container">
        <h2 className="section-title">Event Schedule</h2>
        <p className="section-subtitle">
          Two days of immersive learning, networking, and innovation in bio-inspired technology
        </p>
        
        <div className="schedule-container">
          {/* Day Tabs */}
          <div className="day-tabs">
            <button
              className={`day-tab ${activeDay === 1 ? 'active' : ''}`}
              onClick={() => setActiveDay(1)}
            >
              Day 1
              <span className="day-date">September 12</span>
            </button>
            <button
              className={`day-tab ${activeDay === 2 ? 'active' : ''}`}
              onClick={() => setActiveDay(2)}
            >
              Day 2
              <span className="day-date">September 13</span>
            </button>
          </div>

          {/* Schedule Content */}
          <div className="schedule-content">
            <div className="schedule-timeline">
              {scheduleData[activeDay as keyof typeof scheduleData].map((item, index) => (
                <div key={index} className="schedule-item card">
                  <div className="schedule-time">
                    <Clock size={16} />
                    <span>{item.time}</span>
                  </div>
                  
                  <div className="schedule-details">
                    <div className="schedule-header">
                      <h3>{item.title}</h3>
                      <span 
                        className="schedule-type"
                        style={{ color: getTypeColor(item.type) }}
                      >
                        {getTypeLabel(item.type)}
                      </span>
                    </div>
                    
                    {item.speaker && (
                      <div className="schedule-speaker">
                        <User size={14} />
                        <span>{item.speaker}</span>
                      </div>
                    )}
                    
                    <div className="schedule-location">
                      <MapPin size={14} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .schedule-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .day-tabs {
          display: flex;
          justify-content: center;
          margin-bottom: 3rem;
          gap: 1rem;
        }

        .day-tab {
          background: transparent;
          border: 2px solid rgba(31, 224, 215, 0.2);
          border-radius: var(--radius);
          padding: 1rem 2rem;
          color: var(--muted);
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          font-weight: 600;
        }

        .day-tab.active {
          border-color: var(--reef-cyan);
          background: rgba(31, 224, 215, 0.1);
          color: var(--reef-cyan);
          box-shadow: 0 0 20px var(--glow-soft);
        }

        .day-tab:hover:not(.active) {
          border-color: rgba(31, 224, 215, 0.4);
          background: rgba(31, 224, 215, 0.05);
        }

        .day-date {
          font-size: 0.875rem;
          font-weight: 400;
          opacity: 0.8;
        }

        .schedule-content {
          position: relative;
        }

        .schedule-timeline {
          position: relative;
          padding-left: 2rem;
        }

        .schedule-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, var(--reef-cyan), var(--biolum-violet));
          border-radius: 1px;
        }

        .schedule-item {
          position: relative;
          margin-bottom: 1.5rem;
          padding: 1.5rem;
          margin-left: 1rem;
        }

        .schedule-item::before {
          content: '';
          position: absolute;
          left: -2.5rem;
          top: 2rem;
          width: 12px;
          height: 12px;
          background: var(--reef-cyan);
          border-radius: 50%;
          box-shadow: 0 0 0 4px var(--bg), 0 0 12px var(--glow-soft);
        }

        .schedule-time {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--reef-cyan);
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .schedule-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.75rem;
          gap: 1rem;
        }

        .schedule-details h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text);
          margin: 0;
          flex: 1;
        }

        .schedule-type {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          flex-shrink: 0;
        }

        .schedule-speaker,
        .schedule-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--muted);
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        .schedule-speaker:last-child,
        .schedule-location:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .day-tabs {
            flex-direction: column;
            align-items: center;
          }

          .day-tab {
            width: 100%;
            max-width: 200px;
          }

          .schedule-timeline {
            padding-left: 1rem;
          }

          .schedule-item {
            margin-left: 0.5rem;
          }

          .schedule-item::before {
            left: -1.75rem;
          }

          .schedule-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Schedule;