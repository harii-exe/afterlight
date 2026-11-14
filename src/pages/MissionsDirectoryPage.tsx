import React, { useState } from 'react';
import type { Route } from '../router';
import { missionsData, MISSION_ORDER } from '../data/missionsData';
import { MissionCard } from '../components/MissionCard';

interface MissionsDirectoryPageProps {
  onNavigate: (r: Route) => void;
}

export const MissionsDirectoryPage: React.FC<MissionsDirectoryPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'moon' | 'mars' | 'deep-space'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMissions = MISSION_ORDER.filter((id) => {
    const m = missionsData[id];
    const matchesFilter = activeFilter === 'all' || m.destinationGroup === activeFilter;
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.equipment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.classification.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="missions-directory-page">
      <div className="directory-hero-strip">
        <div className="container">
          <span className="eyebrow eyebrow-gold">ARCHIVAL FLEET</span>
          <h1 className="directory-title">The Nine Missions</h1>
          <p className="lead directory-lead">
            Every mission represents a milestone chapter in humanity's robotic diaspora. Select any mission to enter its dedicated documentary story.
          </p>

          {/* Search and Filters Bar */}
          <div className="directory-search-bar-row">
            <div className="search-input-wrap">
              <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
              <input
                type="text"
                placeholder="Search missions, equipment, destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mission-search-input"
              />
              {searchQuery && (
                <button
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="directory-tabs">
              <button
                className={`tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                All (9)
              </button>
              <button
                className={`tab-btn ${activeFilter === 'moon' ? 'active' : ''}`}
                onClick={() => setActiveFilter('moon')}
              >
                The Moon (2)
              </button>
              <button
                className={`tab-btn ${activeFilter === 'mars' ? 'active' : ''}`}
                onClick={() => setActiveFilter('mars')}
              >
                Mars (5)
              </button>
              <button
                className={`tab-btn ${activeFilter === 'deep-space' ? 'active' : ''}`}
                onClick={() => setActiveFilter('deep-space')}
              >
                Deep Space (2)
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container section">
        {filteredMissions.length === 0 ? (
          <div className="empty-results-box">
            <p>No missions found matching "{searchQuery}".</p>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="missions-grid">
            {filteredMissions.map((id) => (
              <MissionCard
                key={id}
                mission={missionsData[id]}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
