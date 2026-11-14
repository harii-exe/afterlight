# AFTERLIGHT — NASA Space Apps Challenge 2026
## Complete Submission Pack & Documentation

**Project Name:** AFTERLIGHT  
**Tagline:** Every mission leaves a light behind.  
**Core Ethos:** The mission ended. The story didn't.  
**Target Audience:** Students & space enthusiasts aged 9–14 (and curious lifelong learners)  
**Primary Challenge Track:** Planetary Exploration / Space History & Education / Digital Storytelling  

---

## Table of Contents
1. [Section 1: Project Details (Submission Form Response)](#section-1-project-details)
2. [Section 2: Project Summary (50–200 Words)](#section-2-project-summary)
3. [Section 3: NASA Data & Resources](#section-3-nasa-data--resources)
4. [Section 4: Space Agency Partner & Other Resources](#section-4-space-agency-partner--other-resources)
5. [Section 5: Super Intelligence (SI) & AI Usage Disclosure](#section-5-super-intelligence-si-usage-disclosure)
6. [Section 6: Seven-Slide Presentation Deck](#section-6-seven-slide-presentation-deck)
7. [Section 7: Final Submission Checklist](#section-7-final-submission-checklist)

---

<a id="section-1-project-details"></a>
## Section 1: Project Details (Submission Form Response)

*This comprehensive response directly addresses the NASA Space Apps Challenge submission prompt: "What does it do or how does it work? What benefits does it have? What is the intended impact of the project? What tools, coding languages, hardware, or software did you use to develop your project? How is your project creative? What factors did your team consider?"*

### A. What AFTERLIGHT Is
**AFTERLIGHT** is an interactive, cinematic educational web application that chronicles humanity’s mechanical outposts across the solar system. Spanning nine historic NASA missions across the Moon, Mars, Saturn, and the interstellar void, AFTERLIGHT reframes space hardware left behind—from Apollo 11’s descent stage at Tranquility Base to the Opportunity rover on the rim of Endeavour Crater—not as discarded space junk, but as permanent scientific time capsules and cultural monuments of human exploration.

### B. The Educational Opportunity & Problem Addressed
When space missions conclude, public attention quickly fades once headlines stop reporting daily operations. Many students and young learners believe that when a spacecraft’s battery expires, its journey and scientific usefulness end permanently. In reality:
1. **Physical Artifacts Remain**: The hardware rests on extraterrestrial surfaces as archaeological records of human ingenuity.
2. **Enduring Science**: Data gathered by past missions—and even active hardware like Apollo 11's Laser Ranging Retroreflector—continues to drive active research, satellite navigation, and future astronaut landing plans.
3. **Planetary Protection**: Sacrifices like Cassini's plunge into Saturn’s clouds demonstrate humanity’s moral obligation to preserve pristine alien environments (such as the ocean moons Enceladus and Titan).

AFTERLIGHT bridges the gap between dry academic mission archives and young students' imaginations, turning complex planetary astrophysics into an inspiring, story-driven journey.

### C. How the Website Works
AFTERLIGHT is architected as a high-performance single-page web application (SPA) built with **React 19**, **TypeScript**, and **Vite**. The application runs client-side with zero paid API dependencies, zero external backend requirements, and instantaneous hash-based navigation:
- **Client-Side Data Architecture**: All telemetry, scientific discoveries, chronological timelines, and metadata for the 9 missions are stored in typed local datasets (`src/data/missionsData.ts`).
- **Authentic Asset Loading**: 54 high-resolution NASA archival photographs (6 per mission) are stored locally and mapped via an automated image manifest (`image-manifest.json`), eliminating external rate limits, broken third-party links, or paid content delivery networks.
- **Synthesized Ambient Audio**: A real-time procedural sound generator powered by the browser's native **Web Audio API** synthesizes a cinematic deep-space drone (55 Hz sub-bass, 110.5 Hz harmonic, 164.8 Hz resonant shimmer) with zero external audio assets.

### D. Major Implemented Features
1. **Interactive 3D WebGL Solar System (`SolarSystem3D.tsx`)**:
   - Built with **Three.js**, rendering an interactive 3D solar system featuring an animated glowing Sun with multi-layer coronal halos, Earth-Moon system, Mars with polar ice caps, Saturn with tilted 3D double-sided rings, and an interstellar escape trajectory.
   - Distinct 3D Spacecraft Probe models with dual solar panel arrays, communication dish antennas, and planetary survey lasers.
   - Interactive orbit controls (360° rotate, smooth scroll zoom, pan), hover raycasting with floating HUD tooltips, click-to-fly camera animations, and quick-focus jump buttons.
2. **2D Schematic Cartography View (`SolarSystemMap.tsx`)**:
   - A clean 2D vector fallback view with real-time switching between 3D Cosmos and 2D Schematic modes, complete with responsive Hardware Dossier preview cards.
3. **Nine Mission Deep-Dive Chapters (`MissionPage.tsx`)**:
   - Dedicated documentary experiences for: **Apollo 11**, **Surveyor 3**, **Viking 1**, **Mars Pathfinder**, **Spirit (MER-A)**, **Opportunity (MER-B)**, **Phoenix**, **Voyager 1**, and **Cassini-Huygens**.
4. **Hardware Dossiers & Spec Spotlights (`EquipmentSpotlight.tsx`)**:
   - Technical breakdowns of equipment mass, power sources (RTG nuclear vs. solar arrays), primary tools (rock grinders, spectrometers, robotic claws), and exact final hardware fates.
5. **Interactive Mission Timelines (`Timeline.tsx`)**:
   - Chronological event feeds with phase tags (Launch, Cruise, Landing, Discoveries, Conclusion) and interactive expanded event details.
6. **Scientific Discovery Explorer (`DiscoveriesGrid.tsx` & `DiscoveriesPage.tsx`)**:
   - Categorized discoveries explaining what the robot found, why it shocked scientists at the time, and why it matters today, filterable by dynamic tags (Ancient Water, Moon Rocks, Alien Volcanoes, Weather, etc.).
7. **Documentary Photo Gallery & Lightbox (`PhotoGallery.tsx` & `Lightbox.tsx`)**:
   - Full-screen photo lightbox with keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`), original NASA Center credits, capture dates, NASA image IDs, and links to the original NASA archive entries.
8. **"Then vs. Now" Historical Context Sliders (`ThenNowComparison.tsx`)**:
   - Interactive split-slider and side-by-side toggles comparing early exploration limitations with modern missions (e.g., Apollo 11's 2-hour walk vs. the Artemis Lunar Base; Sojourner microrover vs. Perseverance).

### E. How Visitors Interact with the Experience
- **Explore Freely**: Visitors rotate the 3D Solar System, click on glowing spacecraft beacons, and immediately see mission dossiers update on the fly.
- **Journey by Destination**: Filter missions across three planetary theaters: *The Moon*, *Mars Surface*, and *Saturn & Deep Space*.
- **Examine Historic Hardware**: Inspect authentic NASA photographs of actual hardware resting on lunar soil and Martian sand.
- **Deep-Dive into Mission Chapters**: Read step-by-step stories of bouncing airbag landings, stuck wheels uncovering hot springs, and message-in-a-bottle golden records.

### F. Intended Audience
Specifically tailored for learners aged **9 to 14** (middle school / upper elementary grades), as well as educators and family science enthusiasts. Scientific vocabulary is intentionally translated into clear, relatable stories and analogies without compromising factual accuracy.

### G. Educational Benefits
- **Demystifies Space Exploration**: Explains complex concepts (laser retroreflection, hydrothermal vents, atmospheric sublimation, rocker-bogie suspension) using everyday metaphors.
- **Encourages Engineering Problem-Solving**: Shows students that mission anomalies often yield historic breakthroughs (e.g., Spirit’s broken wheel dragging backward and uncovering volcanic hot springs; Surveyor 3’s camera retrieved by Apollo 12).
- **Instills Planetary Ethics**: Explains planetary protection and why scientists sacrificed Cassini in Saturn’s atmosphere to safeguard potential life in Enceladus' underground oceans.

### H. Intended Impact
AFTERLIGHT transforms passive history into active curiosity. By highlighting the enduring legacy of NASA's hardware, it connects past achievements to upcoming exploration—such as NASA's Artemis Moon landings, the Mars Sample Return campaign, and the Dragonfly drone to Titan—inspiring the next generation of engineers, astronomers, and explorers.

### I. Creative Approach & Storytelling
Instead of presenting a clinical database or generic dashboard, AFTERLIGHT adopts a **Hybrid Cinematic Museum Editorial** design:
- Deep-space black and navy color palettes accented by celestial gold and cyan.
- Editorial typography featuring **Cinzel** for monumental headlines, **Plus Jakarta Sans** for readable prose, and **Space Grotesk** / **JetBrains Mono** for telemetry data.
- Narrative framing that treats each spacecraft like a brave pioneer with its own personality and enduring legacy.

### J. Technology Stack & Development Tools
- **Core Framework**: React 19 (`react` 19.3.1, `react-dom` 19.3.1)
- **Language**: TypeScript (`typescript` 5.7+ / 7.0.2 compiler)
- **3D Graphics Engine**: Three.js (`three` 0.187.0) with OrbitControls & WebGL
- **Bundler & Dev Server**: Vite (`vite` 8.3.8) with `@vitejs/plugin-react` (Oxc engine)
- **Linter**: Oxlint (`oxlint` 1.90.0)
- **Audio**: HTML5 Web Audio API (procedural harmonic synthesizer)
- **Styling**: Pure CSS Custom Properties (CSS variables, modern grid, responsive flexbox)
- **Image Pipeline**: Node.js script querying the official NASA Image and Video Library API (`https://images-api.nasa.gov/`)
- **Hosting Target**: Vercel (static edge deployment ready)

### K. Design & Accessibility Considerations
- **Responsive Layout**: Fluid layouts adapting across smartphones, tablets, laptops, and ultra-wide desktop monitors.
- **Keyboard Navigation**: Lightbox supports `Escape` to close, `ArrowLeft` for previous image, and `ArrowRight` for next image.
- **Reduced Motion & Control**: Sound starts muted by default; 3D auto-spin can be paused with a single click; 2D schematic fallback is always accessible.
- **Readability**: High contrast ratios (WCAG AA compliant) with crisp off-white text over deep void backgrounds.

### L. Scientific Accuracy & Source Attribution
- Every photograph is authentic NASA documentary imagery with complete provenance: capture date, originating NASA center (JSC, KSC, JPL, MSFC, HQ), and public NASA image ID.
- Hardware statuses distinguish between **Intentionally Abandoned** (Apollo 11), **Visited Time Capsule** (Surveyor 3), **Decommissioned Equipment** (Viking 1, Pathfinder, Opportunity, Phoenix), **Failed Equipment** (Spirit), **Controlled Planetary Protection Disposal** (Cassini), and **Operational Spacecraft** (Voyager 1).
- No facts, discoveries, or technical capabilities have been fabricated.

---

<a id="section-2-project-summary"></a>
## Section 2: Project Summary (50–200 Words)

### Project Summary
**AFTERLIGHT** is an interactive educational web experience celebrating humanity’s robotic pioneers and lunar monuments resting across the cosmos. Developed for the NASA Space Apps Challenge 2026, the project explores nine historic NASA missions across the Moon, Mars, Saturn, and the interstellar void. Rather than treating deactivated spacecraft as discarded debris, AFTERLIGHT reframes them as permanent archaeological time capsules of human curiosity.

Designed specifically for students aged 9–14, the platform pairs an interactive 3D WebGL solar system with rich documentary chapters, animated timelines, and accessible science explainers. Learners explore how Spirit’s jammed wheel accidentally unearthed ancient Martian hot springs, how Apollo 11’s Moon mirror still bounces Earth lasers today, and why Cassini made a fiery sacrifice into Saturn to safeguard alien ocean worlds.

Powered by 54 authentic NASA archival photographs, interactive Three.js 3D models, and real-time synthesized ambient audio, AFTERLIGHT proves that while missions eventually end, their stories and scientific discoveries illuminate our universe forever.

---
**Word Count:** 157 words *(Strictly within the 50–200 word requirement)*

---

<a id="section-3-nasa-data--resources"></a>
## Section 3: NASA Data & Resources

Every NASA resource listed below was genuinely used in the research, content verification, or asset procurement for AFTERLIGHT.

| # | Link Text | Complete Public URL | Usage in AFTERLIGHT |
|---|---|---|---|
| 1 | **NASA Image and Video Library** | https://images.nasa.gov/ | Primary public search portal used to discover authentic historical documentary photographs from all participating NASA field centers. |
| 2 | **NASA Image and Video Library API** | https://images-api.nasa.gov/ | Automated API endpoint queried by `fetch-images.cjs` to retrieve high-resolution images, descriptive captions, capture dates, and NASA Center attributions. |
| 3 | **NASA Image Assets CDN** | https://images-assets.nasa.gov/ | Public content delivery network used to source and download the 54 official NASA photographs stored in `public/img/`. |
| 4 | **NASA Science: Apollo 11 Mission Overview** | https://www.nasa.gov/mission/apollo-11/ | Researched Apollo 11 Lunar Module descent stage specifications, landing coordinates at Tranquility Base, and lunar sample science. |
| 5 | **NASA Science: Surveyor 3 Mission Page** | https://science.nasa.gov/mission/surveyor-3/ | Verified Surveyor 3 landing date, robotic claw trenching results, and Apollo 12's astronaut rendezvous in Ocean of Storms. |
| 6 | **NASA Science: Viking 1 Lander Archive** | https://science.nasa.gov/mission/viking-1/ | Sourced telemetry duration (2,245 sols), Chryse Planitia landing site details, soil chemistry data, and first color surface images. |
| 7 | **NASA Science: Mars Pathfinder & Sojourner** | https://science.nasa.gov/mission/mars-pathfinder/ | Verified airbag landing dynamics at Ares Vallis, Sojourner microrover dimensions, and rock analyses ("Barnacle Bill" and "Yogi"). |
| 8 | **NASA Science: Mars Exploration Rovers (Spirit & Opportunity)** | https://science.nasa.gov/mission/mer/ | Verified Spirit's silica discovery at Home Plate, Opportunity's 28.06-mile off-world marathon record, hematite "blueberries", and Endeavour Crater science. |
| 9 | **NASA Science: Phoenix Mars Lander** | https://science.nasa.gov/mission/phoenix/ | Verified arctic permafrost excavation data, water ice sublimation observations in "Dodo-Goldilocks" trench, and soil perchlorate discoveries. |
| 10 | **NASA Jet Propulsion Laboratory: Voyager Interstellar Mission** | https://voyager.jpl.nasa.gov/ | Verified Voyager 1's distance (>24.3 billion km), heliopause crossing telemetry, Golden Record contents, and Carl Sagan's Pale Blue Dot photo history. |
| 11 | **NASA Science: Cassini at Saturn** | https://science.nasa.gov/mission/cassini/ | Researched Cassini's 13-year orbital tour, ESA Huygens Titan landing data, Enceladus hydrothermal geyser plumes, and Grand Finale atmospheric plunge. |
| 12 | **NASA Solar System Exploration** | https://science.nasa.gov/solar-system/ | Reference for planetary orbital scales, celestial radii, planetary coordinates, and physical properties used in the 3D WebGL solar system. |
| 13 | **NASA Office of Safety & Mission Assurance: Planetary Protection** | https://sma.nasa.gov/sma-disciplines/planetary-protection | Sourced formal NASA bioburden and planetary quarantine standards explaining the ethical protocols behind controlled spacecraft disposal. |

---

<a id="section-4-space-agency-partner--other-resources"></a>
## Section 4: Space Agency Partner & Other Resources

### Space Agency Partner Data Clarification
*No direct data access from other Space Agency Partners (such as ESA, JAXA, or CSA) was used. The project highlights ESA's Huygens probe (which landed on Titan as part of the joint NASA/ESA/ASI Cassini-Huygens mission) and the Canadian Space Agency's lidar instrument on Phoenix, but all telemetry, imagery, and documentation were sourced through NASA public archives.*

### Third-Party Software, Frameworks & Development Tools

| Category | Resource / Link Text | Complete Public URL | Usage in AFTERLIGHT |
|---|---|---|---|
| **Frontend Framework** | **React 19** | https://react.dev/ | Core UI component library used for state management, component tree rendering, and single-page navigation. |
| **Language** | **TypeScript** | https://www.typescriptlang.org/ | Static typing system ensuring strict interface enforcement across mission datasets, telemetry, and component props. |
| **3D Graphics** | **Three.js** | https://threejs.org/ | WebGL 3D rendering library used to construct the interactive 3D solar system, orbital rings, custom spacecraft models, and starfield. |
| **Build Tooling** | **Vite** | https://vite.dev/ | Next-generation frontend build tool providing lightning-fast HMR and optimized production asset compilation. |
| **Linter** | **Oxlint** | https://oxc.rs/ | High-speed Rust-based linter used to enforce clean code standards and catch runtime regressions. |
| **Typography** | **Google Fonts** | https://fonts.google.com/ | Hosted font service providing Cinzel, Plus Jakarta Sans, Space Grotesk, and JetBrains Mono under SIL Open Font License. |
| **Runtime** | **Node.js** | https://nodejs.org/ | Local JavaScript runtime environment used to execute build commands, package management, and asset scripts. |
| **Deployment** | **Vercel** | https://vercel.com/ | Cloud deployment platform targeted for production static hosting of the Vite build output. |
| **AI Tooling** | **Claude Code (Anthropic)** | https://docs.anthropic.com/en/docs/agents-and-tools/claude-code | Terminal-based agentic coding tool used for initial project scaffolding and file structure generation. |
| **AI Tooling** | **FreeLLMAPI** | https://freellmapi.com/ | Model gateway endpoint used in conjunction with terminal CLI development tools. |
| **AI Tooling** | **Google Antigravity (DeepMind)** | https://deepmind.google/ | Agentic AI environment utilized for full UI redesign, Three.js 3D implementation, folder size optimization, content age-adaptation, and submission documentation. |

---

<a id="section-5-super-intelligence-si-usage-disclosure"></a>
## Section 5: Super Intelligence (SI) & AI Usage Disclosure

### Mandatory Form Selection Recommendations
Based on the actual development workflow of AFTERLIGHT, the following selections should be made in the official Space Apps Challenge submission form:

- [x] **I used AI-assisted / Super Intelligence tools in developing this project** *(DO NOT select "I did not use SI")*
- [x] **AI-assisted code generation / refactoring** *(Acknowledged)*
- [x] **AI-assisted research, structuring, and educational content adaptation** *(Acknowledged)*
- [ ] **AI-generated images** *(DO NOT SELECT — Zero AI images used; all 54 photos are authentic NASA archival images)*
- [ ] **AI-generated audio** *(DO NOT SELECT — Audio is procedurally synthesized via browser native Web Audio API oscillators)*
- [ ] **AI-generated video** *(DO NOT SELECT — No video assets used)*

---

### Detailed Transparent Disclosure Statement

#### 1. What AI Tools Were Used
- **Google Antigravity (Google DeepMind)**: Advanced multi-agent software engineering assistant used for codebase inspection, full website redesign, Three.js WebGL 3D solar system implementation, folder cleanup, content simplification for young learners, and submission preparation.
- **Claude Code (Anthropic)**: Terminal development agent utilized during earlier architectural setup and script orchestration.
- **FreeLLMAPI**: API proxy gateway utilized during early development sessions.

#### 2. How AI Assisted Code Development
- Assisted in authoring React 19 TypeScript components, routing mechanics, responsive CSS layouts, and Three.js 3D WebGL scenes.
- Assisted in building the automated image manifest loader and optimizing build bundle performance.
- Assisted in cleaning up temporary build files and reducing directory size by over 622 MB.

#### 3. How AI Assisted Research and Content Structuring
- Assisted in formatting researched NASA mission data into typed TypeScript schemas (`MissionData`, `TimelineEvent`, `ScientificDiscovery`, `ThenVsNowData`).
- Assisted in adapting technical mission reports into age-appropriate (ages 9–14), engaging storytelling copy, replacing academic jargon with relatable analogies.

#### 4. Absolute Protection of Documentary Authenticity (Images & Audio)
- **NASA Imagery**: **Zero AI-generated or AI-altered images were used.** All 54 photographs across all 9 missions are authentic documentary photographs captured by NASA astronauts, robotic landers, rovers, and planetary orbiters, fetched directly from the official NASA Image and Video Library.
- **Audio Ambience**: **Zero AI audio or pre-recorded synthetic voices were used.** The deep-space audio ambience is procedurally generated in real time using the browser's native HTML5 **Web Audio API** (`OscillatorNode` running at 55 Hz, 110.5 Hz, and 164.8 Hz).

#### 5. Human Verification & Oversight
- All code was compiled, linted with Oxlint, and verified via production builds (`tsc -b && vite build`).
- All mission coordinates, dates, instruments, and historical facts were cross-checked against official NASA Science mission pages.
- Visual inspections were conducted in live browser sessions to verify responsiveness, WebGL performance, and interactive controls.

---

<a id="section-6-seven-slide-presentation-deck"></a>
## Section 6: Seven-Slide Presentation Deck

*This deck contains EXACTLY 7 slides, tailored specifically for the NASA Space Apps Challenge judging panel.*

```
================================================================================
SLIDE 1 of 7: TITLE & INTRODUCTION
================================================================================
```
### Slide Title: AFTERLIGHT
**Subtitle / Tagline:** Every Mission Leaves a Light Behind.  
**Track:** NASA Space Apps Challenge 2026 — Planetary Exploration & Digital Storytelling  
**Team Name:** [Insert Team Name Here]  

#### Slide Text (Exact Content on Slide):
- **AFTERLIGHT: The mission ended. The story didn't.**
- A cinematic, interactive web experience exploring humanity's mechanical outposts across the Moon, Mars, Saturn, and the interstellar void.
- Reframing left-behind spacecraft not as space debris, but as permanent monuments of human curiosity.
- Designed to inspire students aged 9–14 through authentic NASA imagery, 3D WebGL solar system cartography, and story-driven science.

#### Suggested Layout:
- **Hero Split Screen / Cinematic Full Bleed**: Deep cosmic void background (`#020408`) with a high-impact, authentic NASA photograph on the right: Apollo 11's Eagle Lunar Module descent stage resting in the lunar regolith at Tranquility Base (`apollo11/img3.jpg` or `apollo11/img4.jpg`).
- Left pane: Clean, high-contrast typography featuring the AFTERLIGHT wordmark in **Cinzel**, with gold accent line (`#F59E0B`) and metadata badges.

#### Recommended Visual Assets:
- `public/img/apollo11/img4.jpg` (Apollo 11 Lunar Module Descent Stage resting on the Moon).
- Brand badges: "9 Historic NASA Missions" | "54 Authentic NASA Photos" | "Interactive 3D WebGL".

#### Visual Design Direction:
- Premium museum documentary aesthetic. Restrained gold and cyan accents against deep navy and obsidian black. Generous whitespace, zero cluttered clip art.

#### Speaker Notes:
> "Judges, every time a rocket launches, the world watches with bated breath. But when the batteries run dry and official communications end, public attention drifts away. We often think of these spacecraft as gone, or worse, as space junk. 
> 
> Welcome to AFTERLIGHT. Our project is an interactive, educational experience built for the NASA Space Apps Challenge 2026. Our core message is simple: 'The mission ended. The story didn't.' We take young explorers on a cinematic journey across the Moon, Mars, and Saturn to discover the physical hardware humanity left behind, the groundbreaking science they unlocked, and why their stories continue to shape our future."

---

```
================================================================================
SLIDE 2 of 7: THE CHALLENGE & THE PROBLEM
================================================================================
```
### Slide Title: THE CHALLENGE: BEYOND THE HEADLINES
**Focus:** The Educational Gap in Space Mission Heritage

#### Slide Text (Exact Content on Slide):
- **The Knowledge Gap**: When NASA missions end, their stories fade from public consciousness—students rarely learn what happens to the hardware or why past data still matters today.
- **The "Space Junk" Misconception**: Decommissioned planetary hardware is frequently misunderstood as abandoned trash rather than historic scientific monuments.
- **Academic Jargon Barrier**: Official archives and mission reports are written for PhD astrophysicists, alienating middle school students (ages 9–14).
- **The Opportunity**: Connect the machines of the past with the Artemis generation of the future through interactive digital storytelling and authentic documentary evidence.

#### Suggested Layout:
- **Three-Column Problem Cards**: Three sleek, dark-surface cards highlighting:
  1. *Lost Continuity* (Forgotten hardware on other worlds)
  2. *The Jargon Wall* (Technical archives intimidating young learners)
  3. *Unrealized Relevance* (How 50-year-old missions power modern missions today)
- Bottom banner: Visual contrast showing the Surveyor 3 lander with Apollo 12 astronauts visiting it 2 years later.

#### Recommended Visual Assets:
- `public/img/surveyor3/img2.jpg` (Apollo 12 astronaut Alan Bean examining the Surveyor 3 robotic lander in the Ocean of Storms).

#### Visual Design Direction:
- Clean editorial cards with subtle borders (`rgba(255, 255, 255, 0.1)`), gold numbering (`01`, `02`, `03`), and crisp typography.

#### Speaker Notes:
> "Consider this: Apollo 11 didn't just leave footprints; it left the Eagle descent stage and a laser reflector that Earth scientists still bounce green lasers off of tonight. Surveyor 3 didn't just sit in a crater; Apollo 12 astronauts actually walked over to inspect it face-to-face. 
> 
> Yet, for most 9-to-14-year-olds, NASA mission archives look like intimidating walls of technical jargon—terms like 'titanium-rich regolith' or 'hyper-reactive soil oxidizers'. Young students miss the sheer human adventure and engineering brilliance. The challenge we took on was to tear down this jargon wall, preserve 100% scientific integrity, and turn these forgotten outposts into an unforgettable educational adventure."

---

```
================================================================================
SLIDE 3 of 7: OUR SOLUTION — AFTERLIGHT
================================================================================
```
### Slide Title: OUR SOLUTION: AN INTERACTIVE COSMIC TIME CAPSULE
**Focus:** Transforming Mission History into an Interactive Digital Museum

#### Slide Text (Exact Content on Slide):
- **AFTERLIGHT Platform**: A zero-dependency, high-performance web experience built with React 19, TypeScript, and Three.js WebGL.
- **Nine Researched NASA Chapters**:
  - *The Moon*: Apollo 11 (1969) & Surveyor 3 (1967)
  - *Mars Surface*: Viking 1 (1976), Pathfinder & Sojourner (1997), Spirit (2004), Opportunity (2004), Phoenix (2008)
  - *Saturn & Deep Space*: Cassini-Huygens (1997–2017) & Voyager 1 (1977–Present)
- **Age-Adapted Storytelling (Ages 9–14)**: Complex geochemistry and orbital mechanics translated into relatable real-world analogies without sacrificing scientific truth.
- **100% Authentic Imagery**: 54 official NASA photographs retrieved directly from the NASA Image and Video Library—zero AI-generated imagery.

#### Suggested Layout:
- **Left Column (40%)**: Core solution pillars (Interactive 3D Cartography, Authentic NASA Archives, Age-Tailored Science, Procedural Audio).
- **Right Column (60%)**: Collage screenshot of the AFTERLIGHT homepage showcase showing the mission filter pills, hardware spotlight cards, and destination badges.

#### Recommended Visual Assets:
- Screenshot of the AFTERLIGHT homepage Hero and Missions Grid (`#/` and `#/missions`).
- Supporting inset: `public/img/opportunity/img1.jpg` (Opportunity Rover on Mars).

#### Visual Design Direction:
- High-tech, dark cosmic UI showcase. Emphasize responsiveness and clean information hierarchy.

#### Speaker Notes:
> "Our solution is AFTERLIGHT. We built a fast, client-side web platform covering nine foundational NASA missions across three distinct cosmic realms: the Moon, the surface of Mars, and deep space out to the edge of the solar system.
> 
> We specifically targeted the critical 9-to-14 age bracket—the years when students decide whether STEM is exciting or boring. Instead of dry tables, we tell gripping true stories: how tiny Sojourner was the size of a microwave oven, how Spirit dragged a broken front wheel backward and accidentally plowed up ancient boiling hot springs, and how Opportunity ran a full 26-mile Olympic marathon across the Martian dunes. Everything is anchored by 54 authentic NASA photographs downloaded straight from NASA archives."

---

```
================================================================================
SLIDE 4 of 7: EXPLORE THE EXPERIENCE
================================================================================
```
### Slide Title: INTERACTIVE ARCHITECTURE & FEATURES
**Focus:** Genuinely Interactive Educational Exploration

#### Slide Text (Exact Content on Slide):
- **3D WebGL Solar System**: Fully interactive Three.js cosmos with orbital controls, animated glowing Sun, planets, custom 3D spacecraft probe models with solar wings, and click-to-fly camera focusing.
- **2D Schematic Cartography**: Instant toggle to an accessible vector orbital map with live Hardware Dossier preview cards.
- **Chronological Mission Timelines**: Interactive event streams tracing launches, translunar insertions, airbag touchdowns, and record-breaking surface milestones.
- **Then vs. Now Historical Sliders**: Interactive split-screen comparisons contrasting retro equipment (like Voyager's 8-track tapes) with modern successors (like the Artemis Moon Base and Perseverance rover).
- **Full-Screen Documentary Lightbox**: Archival photo viewer displaying official NASA IDs, camera details, center credits, and original archive links.

#### Suggested Layout:
- **2x2 Feature Grid** with crisp UI screenshots:
  1. *Top-Left*: 3D WebGL Solar System view with glowing orbits and probe models.
  2. *Top-Right*: Interactive Then-vs-Now split slider on Apollo 11 or Cassini.
  3. *Bottom-Left*: Hardware Dossier panel with technical specifications and status badges.
  4. *Bottom-Right*: Fullscreen Lightbox displaying high-res NASA archival photography.

#### Recommended Visual Assets:
- Screenshot of the 3D Solar System view (`SolarSystem3D.tsx`).
- Screenshot of Then vs. Now slider (`ThenNowComparison.tsx`).
- `public/img/cassini/img1.jpg` (Cassini Grand Finale artwork/photo).
- `public/img/pathfinder/img3.jpg` (Sojourner driving down the ramp onto Martian soil).

#### Visual Design Direction:
- Clean UI callouts with labeled feature badges (`3D ENGINE`, `INTERACTIVE TIMELINE`, `LIGHTBOX VIEWER`, `THEN VS NOW`).

#### Speaker Notes:
> "AFTERLIGHT is built for active exploration, not passive reading. 
> 
> In the center of the experience is our custom Three.js 3D Solar System. Visitors can grab the cosmos with their mouse or finger, rotate 360 degrees, zoom past the asteroid belt, and click on any robotic probe to fly directly to it. Every probe model features geometric solar wings, communication dishes, and planetary targeting pins.
> 
> Each mission chapter features an interactive timeline where students trace key moments, an equipment dossier breaking down power sources and tools, and our interactive 'Then vs. Now' slider. Students can drag the slider to compare early Apollo equipment from 1969 with the Artemis base camp planned for the Moon's South Pole today."

---

```
================================================================================
SLIDE 5 of 7: SCIENCE AND DATA
================================================================================
```
### Slide Title: SCIENTIFIC RIGOR & AUTHENTIC NASA DATA
**Focus:** Preserving Scientific Truth & Planetary Protection

#### Slide Text (Exact Content on Slide):
- **100% Authentic NASA Imagery**: All 54 photographs across 9 missions sourced from the NASA Image and Video Library API across 5 NASA Centers (JSC, KSC, MSFC, JPL, HQ).
- **Accurate Hardware Classifications**:
  - *Intentionally Abandoned*: Apollo 11 Descent Stage & Laser Retroreflector (Moon monument)
  - *Visited Time Capsule*: Surveyor 3 (inspected by Apollo 12)
  - *Decommissioned Equipment*: Viking 1, Pathfinder, Opportunity, Phoenix
  - *Failed Equipment*: Spirit (trapped at Troy, operated as stationary post)
  - *Controlled Disposal (Planetary Protection)*: Cassini (vaporized in Saturn to protect Enceladus/Titan oceans)
  - *Operational Spacecraft*: Voyager 1 (>24.3 billion km in interstellar space)
- **Living Science Discoveries**: Highlighting findings that still guide active missions: buried arctic freshwater ice (Phoenix), hydrothermal silica vents (Spirit), and lunar laser ranging (Apollo 11).

#### Suggested Layout:
- **Left Side (50%)**: Data provenance breakdown (API ingestion, Center citations, formal classification schema).
- **Right Side (50%)**: Three highlighted science breakthrough callout cards:
  - *Card 1: Moon Laser Ranging* (Moon moving 3.8 cm/year away)
  - *Card 2: Buried Mars Ice* (Phoenix proving ice 2 inches under dust for future human habitats)
  - *Card 3: Ocean Worlds* (Cassini tasting Enceladus hydrothermal geysers)

#### Recommended Visual Assets:
- `public/img/phoenix/img1.jpg` (Phoenix trenches showing bright sublimating water ice on Mars).
- `public/img/voyager1/img2.jpg` (Voyager 1 Golden Record and spacecraft assembly).

#### Visual Design Direction:
- Museum archival aesthetic: clean divider lines, monospace coordinate tags, and official NASA center credit pills.

#### Speaker Notes:
> "Scientific integrity was our highest priority. We refused to invent facts, dates, or fictional scenarios.
> 
> Crucially, we do not call all hardware 'space junk'. We teach students the critical distinction between intentionally abandoned equipment like Apollo 11, robotic field veterans like Opportunity, and deliberate sacrifices driven by NASA's Planetary Protection protocols. When Cassini ran low on fuel, scientists intentionally plunged the billion-dollar craft into Saturn's clouds to ensure it could never crash into and contaminate the pristine, habitable ocean moons of Enceladus and Titan. 
> 
> Furthermore, every single image on our site is an authentic, unedited NASA photograph with full metadata and archive links. When students look at a photograph in AFTERLIGHT, they are looking at real history captured by real space explorers."

---

```
================================================================================
SLIDE 6 of 7: TECHNOLOGY, CREATIVITY & IMPACT
================================================================================
```
### Slide Title: ENGINEERING, CREATIVITY & ACCESSIBILITY
**Focus:** Modern Web Performance, Procedural Audio, and Educational Impact

#### Slide Text (Exact Content on Slide):
- **Ultra-Lean Modern Stack**: React 19, TypeScript, Three.js, and Vite compiling to static edge-ready assets in ~580 ms with zero external backend dependencies.
- **Synthesized Deep Space Ambience**: 100% programmatic Web Audio API real-time drone (55 Hz / 110.5 Hz / 164.8 Hz oscillators)—zero heavy audio files or streaming bandwidth.
- **Project Optimization**: Cleaned redundant dependencies, reducing development directory footprint by over 622 MB.
- **Accessibility & Ethics**:
  - Full WCAG AA contrast compliance with scalable typography.
  - Keyboard navigation across modal galleries (`Esc`, `ArrowLeft`, `ArrowRight`).
  - Strict Super Intelligence (SI) compliance: AI used for code scaffolding and age-adapted educational rewriting; 0% AI images or AI audio.

#### Suggested Layout:
- **Split Technical & Creative Metrics**:
  - *Left Column*: Technical Architecture diagram / stack badges (React 19, Vite, Three.js, Web Audio API, TypeScript).
  - *Right Column*: Educational Impact Metrics (Target age 9–14, zero API cost, instantaneous edge load, offline resilience).

#### Recommended Visual Assets:
- Screenshot of the Web Audio ambient sound toggle in the navigation bar.
- Code snippet or architectural diagram of Three.js probe raycaster and Web Audio oscillator nodes.

#### Visual Design Direction:
- Sleek engineering schematic aesthetic. Tech-spec badges with cyan glowing borders and clean system typography.

#### Speaker Notes:
> "Behind the cinematic design is an ultra-lean, modern software architecture. AFTERLIGHT uses React 19 and Three.js, bundled with Vite to compile in under 600 milliseconds. 
> 
> Rather than bloating the website with heavy MP3 files, we built a procedural synthesizer using the browser's native Web Audio API. When visitors click the sound button, three mathematical audio oscillators weave together a soothing 55-hertz sub-bass ambient drone in real time. 
> 
> We also maintained total transparency regarding Super Intelligence: AI assisted our engineering workflow and helped adapt technical texts into middle-school-level storytelling, but every piece of scientific data was human-verified, and every single photograph is 100% authentic NASA documentary heritage. The site is fast, accessible, free of paid APIs, and ready for global deployment on Vercel."

---

```
================================================================================
SLIDE 7 of 7: CONCLUSION & THE LASTING LEGACY
================================================================================
```
### Slide Title: THE LASTING LIGHT OF EXPLORATION
**Focus:** The Core Takeaway and Future Horizon

#### Slide Text (Exact Content on Slide):
- **Every Machine Left Behind Is a Beacon**: From Tranquility Base to the interstellar void, these outposts mark the exact moments humanity became an interplanetary species.
- **Paving the Way for Artemis & Beyond**:
  - Apollo 11 & Surveyor 3 paved the path for Artemis lunar base camps.
  - Pathfinder, Spirit, and Opportunity made the Perseverance sample return possible.
  - Phoenix discovered the buried water ice that future human Mars crews will drink.
  - Cassini inspired the Dragonfly mission launching to Titan.
- **Explore the Archive Live**: [Insert Live Production URL / `http://localhost:5173/`]
- *"The mission ended. The story didn't."*

#### Suggested Layout:
- **Cinematic Closing Slide**: Deep black background featuring Voyager 1's "Pale Blue Dot" photograph (`voyager1/img3.jpg` or `voyager1/img1.jpg`) showing Earth suspended in a sunbeam.
- Centered bold takeaway statement in **Cinzel**, with team credits and live project link at the bottom.

#### Recommended Visual Assets:
- `public/img/voyager1/img3.jpg` (Voyager 1 view of solar system / deep space) or `public/img/apollo11/img1.jpg` (Astronaut on the Moon with Lunar Module).

#### Visual Design Direction:
- Emotional, memorable, and uncluttered. High-contrast typography with a radiant gold border.

#### Speaker Notes:
> "To conclude: space exploration is often measured in rocket launches and splashdowns. But the real story of exploration is written in the quiet dust of the Moon, the red sands of Mars, and the cold void between the stars. 
> 
> The machines humanity left behind are not relics of the past—they are lanterns lighting the way forward. The ice Phoenix touched in 2008 will supply drinking water and rocket fuel for the first astronauts on Mars. The geysers Cassini flew through in 2005 are sending the Dragonfly drone back to Titan. And Voyager 1 continues to carry the sounds of Earth into eternity.
> 
> We invite you to experience AFTERLIGHT live. Thank you, and remember: Every mission leaves a light behind."

---

<a id="section-7-final-submission-checklist"></a>
## Section 7: Final Submission Checklist

Before submitting your project on the NASA Space Apps Challenge portal, confirm and finalize the following details:

### 1. Team & Submission Metadata
- [ ] **Project Title**: Confirmed as `AFTERLIGHT`
- [ ] **Project Tagline**: Confirmed as `Every mission leaves a light behind.`
- [ ] **Challenge Name**: Confirm the exact 2026 Space Apps Challenge track name selected during team registration.
- [ ] **Team Members**: Add all official registered team member names, roles, and Space Apps usernames.
- [ ] **Local Event / Location**: Confirm your local virtual or in-person Space Apps event city.

### 2. External Links & Deployment
- [ ] **Production Deployment URL**: Deploy the project to Vercel (or your chosen static host) and paste the live public link (e.g., `https://afterlight-spaceapps.vercel.app`).
  - *Verification command*: Run `npm run build` in `afterlight/` to ensure `dist/` builds with 0 errors.
- [ ] **Public Source Code Repository**: Ensure your GitHub/GitLab repository is set to **Public** and contains the clean codebase and `README.md`.
- [ ] **Demo Video / Presentation Video**: If your local challenge lead requires a 30-second or 2-minute video pitch, record a screen walkthrough of the 3D Solar System, the mission timeline, and the Then-vs-Now slider.

### 3. Submission Form Copy-Paste Check
- [ ] **Project Summary**: Use Section 2 of this pack (157 words; verified within the 50–200 word rule).
- [ ] **Project Details**: Copy the comprehensive narrative from Section 1 directly into the Project Details box.
- [ ] **NASA Data & Resources**: Copy the structured list from Section 3 into the resources section.
- [ ] **Space Agency & Other Resources**: Copy the software/tooling table from Section 4.
- [ ] **Super Intelligence (SI) Declaration**: Follow the exact checkmark guidance in Section 5 (acknowledge code/content assistance; explicitly clarify 0% AI images and 0% AI audio).
- [ ] **Presentation Deck**: Use Section 6 for your 7-slide pitch deck (verified at exactly 7 slides).

---
*AFTERLIGHT — NASA Space Apps Challenge 2026. Document prepared and verified against authentic project code, assets, and data.*
