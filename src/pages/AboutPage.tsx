import React from 'react';
import type { Route } from '../router';

interface AboutPageProps {
  onNavigate: (r: Route) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="about-page-root">
      {/* Hero Strip */}
      <div className="about-hero-section">
        <div className="container container-narrow">
          <span className="eyebrow eyebrow-gold">THE ETHOS OF AFTERLIGHT</span>
          <h1 className="about-hero-title">The Story Behind Afterlight</h1>
          <p className="lead about-hero-lead">
            "The mission ended. The story didn't."
          </p>
          <p className="about-hero-text">
            Across the Moon, Mars, and beyond, humanity left machines behind. Some completed their missions. Some failed. Others changed what we know about the universe. Their stories are still worth discovering.
          </p>
        </div>
      </div>

      <div className="container container-narrow section">
        {/* Core Narrative */}
        <article className="about-editorial-article">
          <section className="about-prose-block">
            <h2>Humanity's Mechanical Outposts</h2>
            <p>
              When human spaceflight captured the world's imagination in the 1960s, our attention was naturally drawn to the brave men and women who rode rockets into orbit. But as our reach extended beyond the Moon, human bodies could not easily follow. The radiation belts of Jupiter, the minus-150-degree cold of Mars' arctic winters, and the crushing pressures of the outer planets required another kind of explorer.
            </p>
            <p>
              We designed machines that could withstand the vacuum of space, land in bouncing airbags, survive dragging broken wheels across alien craters, and plunge directly into gas giant atmospheres. We gave them silicon eyes, automated cameras, and radio transmitters to speak across millions of miles.
            </p>
          </section>

          {/* Three Pillars Grid */}
          <section className="about-pillars-grid">
            <div className="about-pillar-card">
              <span className="pillar-num">01</span>
              <h3 className="pillar-title">Space Archaeology</h3>
              <p className="pillar-text">
                The hardware left on the Moon and Mars represents the earliest physical monuments of humanity's expansion beyond Earth. From Apollo 11's Eagle descent stage to the tracks of Opportunity, these sites are protected heritage locations under the One Small Step to Protect Human Heritage in Space Act.
              </p>
            </div>

            <div className="about-pillar-card">
              <span className="pillar-num">02</span>
              <h3 className="pillar-title">Planetary Protection</h3>
              <p className="pillar-text">
                Exploration carries a moral duty: never contaminate an alien ecosystem with Earth microbes. This principle led to Cassini's heroic Grand Finale dive into Saturn's clouds in 2017 — destroying a \$3 billion flagship to ensure the pristine, potentially living oceans of Enceladus and Titan remained untouched.
              </p>
            </div>

            <div className="about-pillar-card">
              <span className="pillar-num">03</span>
              <h3 className="pillar-title">Perpetual Science</h3>
              <p className="pillar-text">
                Missions do not stop teaching us when their batteries die. Surveyor 3 taught us how materials degrade in space; Apollo retroreflectors still test Einstein's relativity today; Phoenix gave us the coordinates for Mars drinking water; and Voyager 1 is our only active witness to interstellar space.
              </p>
            </div>
          </section>

          {/* Project Heritage & NASA Space Apps */}
          <section className="about-heritage-card">
            <span className="eyebrow eyebrow-cyan">PROJECT HERITAGE</span>
            <h3>Created for NASA Space Apps Challenge 2026</h3>
            <p>
              AFTERLIGHT was conceived and engineered for the NASA Space Apps Challenge 2026. Built with a commitment to documentary realism and scientific integrity:
            </p>
            <ul className="about-checklist">
              <li>
                <span className="check-icon">✓</span>
                <span><strong>Authentic NASA Imagery:</strong> All 54 photographs across the 9 missions are authentic unretouched captures from the NASA Image and Video Library, JPL, JSC, and KSC archives. Zero AI-generated images.</span>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <span><strong>Preserved Scientific Rigor:</strong> Accurate distinction between intentionally abandoned hardware, operational probes, decommissioned rovers, and planetary protection disposals.</span>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <span><strong>Deployment Ready:</strong> Lightweight, zero paid API dependencies, zero external backend requirement, optimized for instant edge hosting on Vercel.</span>
              </li>
            </ul>

            <div className="about-action-row">
              <button
                className="btn btn-primary"
                onClick={() => onNavigate({ page: 'missions' })}
              >
                Explore the Missions Fleet →
              </button>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};
