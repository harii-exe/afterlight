import React, { useState } from 'react';
import type { TimelineEvent } from '../types/mission';

interface TimelineProps {
  events: (string | TimelineEvent)[];
  missionName: string;
}

export const Timeline: React.FC<TimelineProps> = ({ events, missionName }) => {
  // Normalize string[] to TimelineEvent[]
  const parsedEvents: TimelineEvent[] = events.map((ev, i) => {
    if (typeof ev === 'string') {
      // e.g. "Launch from Kennedy Space Center (July 16, 1969)"
      const dateMatch = ev.match(/\(([^)]+)\)/);
      const date = dateMatch ? dateMatch[1] : `Phase ${i + 1}`;
      const title = ev.replace(/\([^)]+\)/, '').trim();
      return {
        date,
        title,
        description: ev,
        phase: `Milestone 0${i + 1}`
      };
    }
    return ev;
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const activeEvent = parsedEvents[activeIndex] || parsedEvents[0];

  const goNext = () => {
    if (activeIndex < parsedEvents.length - 1) setActiveIndex(activeIndex + 1);
  };

  const goPrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  return (
    <div className="interactive-timeline-wrapper">
      <div className="timeline-header-row">
        <div>
          <span className="eyebrow eyebrow-gold">CHRONOLOGY OF DISCOVERY</span>
          <h2 className="timeline-title">Mission Timeline</h2>
        </div>
        <div className="timeline-step-indicator">
          <span>EVENT {activeIndex + 1} OF {parsedEvents.length}</span>
        </div>
      </div>

      {/* Desktop Horizontal Scrubber Track */}
      <div className="timeline-horizontal-container">
        <div className="timeline-track-rail">
          {/* Progress bar */}
          <div
            className="timeline-progress-fill"
            style={{ width: `${(activeIndex / (parsedEvents.length - 1)) * 100}%` }}
          ></div>

          {parsedEvents.map((ev, idx) => {
            const isCompleted = idx <= activeIndex;
            const isCurrent = idx === activeIndex;
            return (
              <button
                key={idx}
                className={`timeline-node-btn ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Select event: ${ev.title}`}
              >
                <span className="node-marker">
                  {isCurrent && <span className="node-ring"></span>}
                </span>
                <span className="node-date">{ev.date}</span>
                <span className="node-label-short">{ev.title.slice(0, 24)}...</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Event Focus Card */}
      <div className="timeline-active-event-card">
        <div className="event-card-topbar">
          <span className="badge badge-gold">{activeEvent.phase || `Phase 0${activeIndex + 1}`}</span>
          <span className="event-card-date">{activeEvent.date}</span>
        </div>

        <div className="event-card-body">
          <h3 className="event-card-title">{activeEvent.title}</h3>
          <p className="event-card-desc">{activeEvent.description}</p>
        </div>

        <div className="event-card-footer">
          <div className="event-nav-buttons">
            <button
              className="btn btn-secondary btn-sm"
              onClick={goPrev}
              disabled={activeIndex === 0}
            >
              ← Previous
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={goNext}
              disabled={activeIndex === parsedEvents.length - 1}
            >
              Next Milestone →
            </button>
          </div>
          <span className="timeline-mission-tag">{missionName} Chronology</span>
        </div>
      </div>

      {/* Mobile Vertical View (Responsive Accordion style) */}
      <div className="timeline-mobile-list">
        {parsedEvents.map((ev, idx) => {
          const isSelected = idx === activeIndex;
          return (
            <div
              key={idx}
              className={`timeline-mobile-item ${isSelected ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              <div className="mobile-item-spine">
                <span className={`mobile-spine-dot ${isSelected ? 'active' : ''}`}></span>
              </div>
              <div className="mobile-item-content">
                <div className="mobile-item-meta">
                  <span className="mobile-date">{ev.date}</span>
                  <span className="mobile-phase">{ev.phase || `Milestone ${idx + 1}`}</span>
                </div>
                <h4 className="mobile-title">{ev.title}</h4>
                {isSelected && (
                  <p className="mobile-desc">{ev.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
