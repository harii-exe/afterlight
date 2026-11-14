import React from 'react';
import type { Route } from '../router';
import type { MissionData } from '../types/mission';

interface MissionCardProps {
  mission: MissionData;
  onNavigate: (r: Route) => void;
}

export const MissionCard: React.FC<MissionCardProps> = ({ mission, onNavigate }) => {
  const getDestinationBadgeClass = (dest: string) => {
    switch (dest) {
      case 'Moon':
        return 'badge-gold';
      case 'Mars':
        return 'badge-mars';
      case 'Saturn':
      case 'Interstellar Space':
        return 'badge-cyan';
      default:
        return 'badge-cyan';
    }
  };

  return (
    <article
      className="mission-editorial-card"
      onClick={() => onNavigate({ page: 'mission', mission: mission.id })}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onNavigate({ page: 'mission', mission: mission.id });
      }}
      aria-label={`Explore ${mission.name} mission`}
    >
      <div className="card-image-box">
        <img
          src={`/img/${mission.heroImage}`}
          alt={mission.name}
          className="card-bg-img"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/img/apollo11/img1.jpg';
          }}
        />
        <div className="card-overlay-gradient"></div>

        <div className="card-top-tags">
          <span className={`badge ${getDestinationBadgeClass(mission.destination)}`}>
            {mission.destination}
          </span>
          <span className="card-class-tag">{mission.classification}</span>
        </div>

        <div className="card-hover-hint">
          <span>Read Mission Story →</span>
        </div>
      </div>

      <div className="card-content-box">
        <div className="card-meta-line">
          <span className="card-date-launched">Launched: {new Date(mission.dates.launch).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</span>
          <span className="card-status-dot">
            <span className="status-pulse"></span>
            {mission.statusBadge}
          </span>
        </div>

        <h3 className="card-title">{mission.name}</h3>
        <p className="card-tagline">"{mission.tagline}"</p>

        <p className="card-excerpt">
          {mission.educationalSummary.slice(0, 140)}...
        </p>

        <div className="card-footer-strip">
          <div className="card-hardware-info">
            <span className="hardware-label">HARDWARE:</span>
            <span className="hardware-val">{mission.equipment.name}</span>
          </div>
          <span className="card-read-arrow">→</span>
        </div>
      </div>
    </article>
  );
};
