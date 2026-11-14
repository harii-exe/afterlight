import React, { useState } from 'react';
import type { ScientificDiscovery } from '../types/mission';

interface DiscoveriesGridProps {
  discoveries: (string | ScientificDiscovery)[];
  missionName: string;
}

export const DiscoveriesGrid: React.FC<DiscoveriesGridProps> = ({ discoveries, missionName }) => {
  // Normalize string[] to ScientificDiscovery[]
  const parsedDiscoveries: ScientificDiscovery[] = discoveries.map((disc, idx) => {
    if (typeof disc === 'string') {
      return {
        title: disc.split('—')[0]?.split(':')[0] || `Landmark Finding 0${idx + 1}`,
        description: disc,
        significance: 'Fundamentally expanded planetary science benchmarks established by NASA.',
        todayImpact: 'Actively cited in modern mission planning and scientific journals.',
        tag: 'Planetary Science'
      };
    }
    return disc;
  });

  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section className="discoveries-editorial-section">
      <div className="discoveries-header">
        <div>
          <span className="eyebrow eyebrow-gold">ADVANCING HUMAN KNOWLEDGE</span>
          <h2 className="discoveries-title">Scientific Discoveries That Endure</h2>
          <p className="discoveries-sub">
            The data gathered by {missionName} continues to rewrite astronomy textbooks and guide next-generation deep space probes.
          </p>
        </div>
        <div className="discoveries-badge-box">
          <span className="badge badge-gold">{parsedDiscoveries.length} REVOLUTIONARY FINDINGS</span>
        </div>
      </div>

      <div className="discoveries-editorial-grid">
        {parsedDiscoveries.map((d, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <div
              key={idx}
              className={`discovery-editorial-card ${isExpanded ? 'expanded' : ''}`}
              onClick={() => toggleExpand(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') toggleExpand(idx);
              }}
              aria-expanded={isExpanded}
            >
              <div className="card-top-indicator">
                <span className="discovery-num">0{idx + 1}</span>
                <span className="discovery-tag-pill">{d.tag}</span>
              </div>

              <h3 className="discovery-card-headline">{d.title}</h3>
              <p className="discovery-card-body">{d.description}</p>

              {/* Expandable Deep Science Section */}
              <div className="discovery-expand-content">
                <div className="insight-block">
                  <span className="insight-label">SCIENTIFIC SIGNIFICANCE:</span>
                  <p className="insight-text">{d.significance}</p>
                </div>
                <div className="insight-block insight-impact">
                  <span className="insight-label">WHY IT MATTERS TODAY:</span>
                  <p className="insight-text">{d.todayImpact}</p>
                </div>
              </div>

              <div className="card-toggle-affordance">
                <span>{isExpanded ? 'Collapse Scientific Detail ↑' : 'Expand Scientific Significance ↓'}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
