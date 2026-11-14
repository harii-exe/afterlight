import React, { useState } from 'react';
import type { Route } from '../router';
import { missionsData, MISSION_ORDER } from '../data/missionsData';
import type { ScientificDiscovery } from '../types/mission';

interface DiscoveriesPageProps {
  onNavigate: (r: Route) => void;
}

interface FlattenedDiscovery extends ScientificDiscovery {
  missionId: string;
  missionName: string;
  destination: string;
}

export const DiscoveriesPage: React.FC<DiscoveriesPageProps> = ({ onNavigate }) => {
  const [activeTag, setActiveTag] = useState<string>('all');

  // Collect all discoveries across the 9 missions
  const allDiscoveries: FlattenedDiscovery[] = [];
  MISSION_ORDER.forEach((id) => {
    const m = missionsData[id];
    m.discoveries.forEach((d) => {
      if (typeof d === 'object') {
        allDiscoveries.push({
          ...d,
          missionId: m.id,
          missionName: m.name,
          destination: m.destination
        });
      }
    });
  });

  const allTags = ['all', ...Array.from(new Set(allDiscoveries.map((d) => d.tag))).sort()];

  const filteredDiscoveries = allDiscoveries.filter((d) => {
    if (activeTag === 'all') return true;
    return d.tag.toLowerCase() === activeTag.toLowerCase();
  });

  return (
    <div className="discoveries-page-root">
      <div className="discoveries-page-hero">
        <div className="container">
          <span className="eyebrow eyebrow-gold">SCIENCE EXHIBITION</span>
          <h1 className="discoveries-page-title">Discoveries That Changed the Universe</h1>
          <p className="lead discoveries-page-lead">
            The enduring legacy of space exploration is not just where we travelled, but what we learned. Explore the scientific breakthroughs from 50+ years of NASA missions that continue to shape modern astrophysics and astrobiology.
          </p>

          {/* Filter Pills */}
          <div className="discovery-filter-strip">
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`tag-pill ${activeTag === tag ? 'active' : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container section">
        <div className="discoveries-catalog-grid">
          {filteredDiscoveries.map((disc, idx) => (
            <article key={idx} className="discovery-catalog-card">
              <div className="catalog-card-header">
                <span className="badge badge-gold">{disc.tag}</span>
                <button
                  className="catalog-mission-link"
                  onClick={() => onNavigate({ page: 'mission', mission: disc.missionId })}
                >
                  {disc.missionName} ({disc.destination}) →
                </button>
              </div>

              <h3 className="catalog-card-title">{disc.title}</h3>
              <p className="catalog-card-desc">{disc.description}</p>

              <div className="catalog-insight-box">
                <div className="catalog-insight-row">
                  <span className="catalog-insight-label">Significance:</span>
                  <span className="catalog-insight-text">{disc.significance}</span>
                </div>
                <div className="catalog-insight-row">
                  <span className="catalog-insight-label">Why It Still Matters:</span>
                  <span className="catalog-insight-text">{disc.todayImpact}</span>
                </div>
              </div>

              <div className="catalog-card-footer">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => onNavigate({ page: 'mission', mission: disc.missionId })}
                >
                  Read Mission Chapter →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
