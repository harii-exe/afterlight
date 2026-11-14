# AFTERLIGHT ✦

> *"The mission ended. The story didn't."*  
> *"Every mission leaves a light behind."*

[![NASA Space Apps Challenge 2026](https://img.shields.io/badge/NASA%20Space%20Apps-Challenge%202026-0b3d91?style=for-the-badge&logo=nasa&logoColor=white)](https://www.spaceappschallenge.org/)
[![React 19](https://img.shields.io/badge/React-19.3-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL%203D-black?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-gold?style=for-the-badge)](LICENSE)

---

## 🌌 Overview

**AFTERLIGHT** is an interactive, cinematic educational web platform created for the **NASA Space Apps Challenge 2026**. 

Across the Moon, Mars, Saturn, and the interstellar void, humanity has left robotic pioneers and landing stages behind. While public attention often fades once daily transmissions end, these machines are not merely discarded space junk—they are permanent archaeological time capsules of human courage, scientific benchmarks, and monuments marking the moment our species became interplanetary.

Tailored specifically for learners aged **9 to 14** (and curious space enthusiasts of all ages), AFTERLIGHT translates complex astrophysics, geochemistry, and planetary protection ethics into vivid, inspiring, story-driven digital adventures.

---

## 🚀 The Nine Researched Missions

AFTERLIGHT features dedicated documentary chapters for 9 milestone NASA missions across three cosmic theaters:

| Mission | Destination | Year(s) | Status Classification | Hardware Resting in Space |
|---|---|---|---|---|
| **Apollo 11** | The Moon | 1969 | *Intentionally Abandoned* | Lunar Module *Eagle* Descent Stage & Laser Retroreflector at Tranquility Base |
| **Surveyor 3** | The Moon | 1967 | *Visited Time Capsule* | Tripod Soft Lander & Robotic Claw in Ocean of Storms (inspected by Apollo 12) |
| **Viking 1** | Mars Surface | 1975–1982 | *Decommissioned Equipment* | Nuclear-powered surface laboratory at Chryse Planitia (Thomas Mutch Memorial Station) |
| **Mars Pathfinder** | Mars Surface | 1996–1997 | *Decommissioned Equipment* | Carl Sagan Memorial Station & *Sojourner* microrover (first wheels on Mars) |
| **Spirit (MER-A)** | Mars Surface | 2003–2010 | *Failed Equipment* | Trapped at Troy, Gusev Crater; dragged broken wheel to uncover ancient volcanic hot springs |
| **Opportunity (MER-B)** | Mars Surface | 2003–2018 | *Decommissioned Equipment* | Marathon runner of Mars (28.06 miles driven); resting at Perseverance Valley, Endeavour Crater |
| **Phoenix** | Mars Polar Ice | 2007–2008 | *Decommissioned Equipment* | Arctic lander that scraped 2 inches beneath red dirt to expose pure water ice |
| **Voyager 1** | Interstellar Space | 1977–Present | *Operational Spacecraft* | Humanity's farthest machine (>24.3B km away); carrying the Golden Record between the stars |
| **Cassini-Huygens** | Saturn System | 1997–2017 | *Controlled Disposal* | Deliberately plunged into Saturn's clouds to protect pristine ocean moons Enceladus and Titan |

---

## ✨ Key Features

### 1. 🪐 Interactive 3D WebGL Solar System (`SolarSystem3D.tsx`)
- Built with **Three.js**, featuring an animated radiant Sun with coronal glow, Earth-Moon system, Mars with polar ice caps, Saturn with tilted 3D double-sided rings, and an interstellar escape vector.
- Distinct 3D Spacecraft Probe models equipped with geometric solar panel wings, parabolic communication dish antennas, and planetary laser guide pins.
- Full 360° orbit rotation, smooth zoom, hover raycasting with floating HUD tooltips, click-to-fly camera focusing, and quick-jump planetary focus buttons.
- Real-time switcher between **🌐 3D Cosmos** and **🗺️ 2D Schematic Map**.

### 2. 📖 Rich Documentary Mission Chapters (`MissionPage.tsx`)
- Cinematic hero visuals with status badges and historic quotes.
- Technical Hardware Dossiers breaking down mass, power sources (RTG nuclear vs. solar arrays), scientific payload, and final fates.
- Interactive chronological timelines with mission phase tags.
- Categorized scientific discoveries explaining what was found, why it was mind-blowing, and why it matters to active NASA missions today.

### 3. 📸 100% Authentic NASA Archival Photo Galleries (`PhotoGallery.tsx` & `Lightbox.tsx`)
- 54 authentic documentary photographs (6 per mission) retrieved directly from the official NASA Image and Video Library.
- Fullscreen modal lightbox with keyboard shortcuts (`ArrowLeft`, `ArrowRight`, `Escape`), NASA Center credits (JSC, KSC, JPL, MSFC, HQ), capture dates, and links to original NASA archive records.
- **Zero AI-generated imagery.**

### 4. ⚖️ "Then vs. Now" Historical Comparison Sliders (`ThenNowComparison.tsx`)
- Interactive split-slider and side-by-side modes connecting early exploration hardware with modern successors:
  - Apollo 11's 2-hour walk ➔ NASA's Artemis Lunar Base Camp.
  - Sojourner's 23-lb microrover ➔ Perseverance & Ingenuity helicopter.
  - Phoenix permafrost trenches ➔ Global Subsurface Water Ice Mapping for human Mars crews.

### 5. 🔊 Procedural Deep Space Ambient Synthesizer (`AudioAmbience.tsx`)
- 100% programmatic real-time sound generator built with the native **Web Audio API** (`OscillatorNode` at 55 Hz sub-bass, 110.5 Hz harmonic, and 164.8 Hz shimmer).
- Zero external MP3/audio files to download; completely bandwidth-free.

---

## 🛠️ Technology Stack

- **Frontend Framework**: [React 19](https://react.dev/) (`react` 19.3.1, `react-dom` 19.3.1)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing, interface definitions)
- **3D Graphics Engine**: [Three.js](https://threejs.org/) (WebGL, OrbitControls, Raycaster, Procedural Shaders)
- **Build Tool & Dev Server**: [Vite 8.3](https://vite.dev/) (Sub-second HMR, optimized Rollup bundling)
- **Linter**: [Oxlint](https://oxc.rs/) (Rust-based high-speed linter)
- **Typography**: Cinzel, Plus Jakarta Sans, Space Grotesk, JetBrains Mono via [Google Fonts](https://fonts.google.com/)
- **Audio**: HTML5 Web Audio API (real-time harmonic oscillator synthesis)
- **Styling**: Pure CSS Custom Properties (zero CSS framework bloat, responsive CSS grid/flexbox)
- **Hosting Target**: [Vercel](https://vercel.com/) (Edge-ready static deployment)

---

## 💻 Local Development Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` (or `pnpm` / `yarn`)

### Quick Start
```bash
# 1. Clone the repository
git clone https://github.com/harii-exe/afterlight.git
cd afterlight

# 2. Install dependencies
npm install

# 3. Launch the development server
npm run dev
```

Open your browser at `http://localhost:5173/` to view the website.

### Production Build & Verification
```bash
# Type-check and build optimized static production files
npm run build

# Preview the production build locally
npm run preview
```

The build outputs to the `dist/` directory in under 1 second, ready for deployment to any static hosting provider.

---

## ☁️ Deployment (Vercel)

AFTERLIGHT runs entirely client-side with zero external database or backend requirements.

### Deploy with Vercel Git Integration
1. Push this repository to your GitHub account (`harii-exe/afterlight`).
2. Log in to [Vercel](https://vercel.com/) and click **"Add New..." ➔ "Project"**.
3. Import the `afterlight` repository.
4. Vercel automatically detects the Vite configuration:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**. Your site will be live with a free global CDN URL in ~45 seconds!

---

## 🔬 NASA Data Sources & Attribution

All documentary imagery and scientific data were retrieved from official NASA open portals:

- **NASA Image and Video Library**: [images.nasa.gov](https://images.nasa.gov/) & API [images-api.nasa.gov](https://images-api.nasa.gov/)
- **NASA Science Missions Archive**:
  - [Apollo 11 Mission Overview](https://www.nasa.gov/mission/apollo-11/)
  - [Surveyor 3 Lunar Lander](https://science.nasa.gov/mission/surveyor-3/)
  - [Viking 1 Mars Lander](https://science.nasa.gov/mission/viking-1/)
  - [Mars Pathfinder & Sojourner](https://science.nasa.gov/mission/mars-pathfinder/)
  - [Mars Exploration Rovers: Spirit & Opportunity](https://science.nasa.gov/mission/mer/)
  - [Phoenix Mars Lander](https://science.nasa.gov/mission/phoenix/)
  - [JPL Voyager Interstellar Mission](https://voyager.jpl.nasa.gov/)
  - [Cassini at Saturn](https://science.nasa.gov/mission/cassini/)
- **NASA Planetary Protection Guidelines**: [sma.nasa.gov/sma-disciplines/planetary-protection](https://sma.nasa.gov/sma-disciplines/planetary-protection)

For complete submission metadata, NASA link citations, and the 7-slide presentation deck, refer to:  
📄 **[`AFTERLIGHT_SUBMISSION_PACK.md`](AFTERLIGHT_SUBMISSION_PACK.md)**

---

## 📜 Super Intelligence (AI) Disclosure

In compliance with NASA Space Apps Challenge transparency guidelines:
- **AI-Assisted Development**: Claude Code (Anthropic) and Google Antigravity (DeepMind) were used for code scaffolding, component refactoring, Three.js 3D implementation, and adapting technical research into age-appropriate (ages 9–14) educational copy.
- **Authentic Documentary Heritage**: **Zero AI-generated images were used.** All 54 photographs are authentic NASA archival images with verified provenance.
- **Procedural Sound**: **Zero AI audio was used.** Sound is procedurally synthesized via browser native Web Audio API oscillators.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).  
NASA photographic imagery and mission descriptions are in the public domain and courtesy of NASA / JPL-Caltech / JSC / KSC / MSFC.

---

*Created with passion for the **NASA Space Apps Challenge 2026**.*  
*“Every mission leaves a light behind.”*
