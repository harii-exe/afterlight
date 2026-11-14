import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { Route } from '../router';
import { missionsData, type MissionId } from '../data/missionsData';

interface SolarSystem3DProps {
  onNavigate: (r: Route) => void;
  initialSelectedId?: string;
  onToggleView?: () => void;
}

interface ProbeNode {
  id: MissionId;
  name: string;
  year: string;
  destination: string;
  group: 'moon' | 'mars' | 'deep-space';
  color: string;
  // Position relative to its parent planet or system
  parent: 'sun' | 'earth' | 'mars' | 'saturn' | 'interstellar';
  offset: [number, number, number];
}

const PROBES: ProbeNode[] = [
  // Moon System (around Moon / Earth)
  { id: 'apollo11', name: 'Apollo 11', year: '1969', destination: 'The Moon', group: 'moon', color: '#F59E0B', parent: 'earth', offset: [5, 2, 4] },
  { id: 'surveyor3', name: 'Surveyor 3', year: '1967', destination: 'The Moon', group: 'moon', color: '#FCD34D', parent: 'earth', offset: [-4, -2, 5] },

  // Mars Surface & Orbit
  { id: 'viking1', name: 'Viking 1', year: '1976', destination: 'Mars', group: 'mars', color: '#FB7185', parent: 'mars', offset: [4, 2, -2] },
  { id: 'pathfinder', name: 'Pathfinder', year: '1997', destination: 'Mars', group: 'mars', color: '#F43F5E', parent: 'mars', offset: [-4, 3, 2] },
  { id: 'spirit', name: 'Spirit', year: '2004', destination: 'Mars', group: 'mars', color: '#E11D48', parent: 'mars', offset: [3, -3, 3] },
  { id: 'opportunity', name: 'Opportunity', year: '2004', destination: 'Mars', group: 'mars', color: '#FDA4AF', parent: 'mars', offset: [-3, -2, -4] },
  { id: 'phoenix', name: 'Phoenix', year: '2008', destination: 'Mars Polar Ice', group: 'mars', color: '#F472B6', parent: 'mars', offset: [0, 5, 0] },

  // Saturn & Interstellar
  { id: 'cassini', name: 'Cassini', year: '1997', destination: 'Saturn Rings', group: 'deep-space', color: '#FBBF24', parent: 'saturn', offset: [14, 4, 8] },
  { id: 'voyager1', name: 'Voyager 1', year: '1977', destination: 'Interstellar Space', group: 'deep-space', color: '#38BDF8', parent: 'interstellar', offset: [0, 0, 0] },
];

export const SolarSystem3D: React.FC<SolarSystem3DProps> = ({
  onNavigate,
  initialSelectedId = 'apollo11',
  onToggleView
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState<MissionId>((initialSelectedId as MissionId) || 'apollo11');
  const [activeFilter, setActiveFilter] = useState<'all' | 'moon' | 'mars' | 'deep-space'>('all');
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [hoveredProbe, setHoveredProbe] = useState<{ name: string; dest: string; year: string; x: number; y: number } | null>(null);

  // Focus target reference
  const controlsRef = useRef<OrbitControls | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const targetLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const targetCamPos = useRef<THREE.Vector3 | null>(null);

  const selectedMission = missionsData[selectedId] || missionsData.apollo11;

  // Jump camera to specific celestial system
  const focusOnSystem = useCallback((system: 'overview' | 'moon' | 'mars' | 'saturn' | 'voyager') => {
    if (!controlsRef.current || !cameraRef.current) return;

    if (system === 'overview') {
      targetLookAt.current.set(0, 0, 0);
      targetCamPos.current = new THREE.Vector3(0, 160, 240);
    } else if (system === 'moon') {
      targetLookAt.current.set(80, 0, 0);
      targetCamPos.current = new THREE.Vector3(80, 25, 45);
      setSelectedId('apollo11');
    } else if (system === 'mars') {
      targetLookAt.current.set(150, 0, 0);
      targetCamPos.current = new THREE.Vector3(150, 25, 45);
      setSelectedId('pathfinder');
    } else if (system === 'saturn') {
      targetLookAt.current.set(230, 0, 0);
      targetCamPos.current = new THREE.Vector3(230, 35, 60);
      setSelectedId('cassini');
    } else if (system === 'voyager') {
      targetLookAt.current.set(310, 45, -70);
      targetCamPos.current = new THREE.Vector3(290, 65, -40);
      setSelectedId('voyager1');
    }
  }, []);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = Math.max(container.clientHeight || 520, 500);

    // 1. SCENE
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020408);

    // 2. CAMERA
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.5, 3000);
    camera.position.set(0, 170, 240);
    cameraRef.current = camera;

    // 3. RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. CONTROLS
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 25;
    controls.maxDistance = 600;
    controls.maxPolarAngle = Math.PI / 2 + 0.15; // Don't flip below bottom horizon
    controlsRef.current = controls;

    // 5. LIGHTING
    const ambientLight = new THREE.AmbientLight(0x223355, 1.4);
    scene.add(ambientLight);

    const sunLight = new THREE.PointLight(0xfff7e6, 5, 1200, 0.5);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    const softFill = new THREE.DirectionalLight(0x4466aa, 0.8);
    softFill.position.set(-100, 150, -50);
    scene.add(softFill);

    // 6. STARFIELD
    const starsGeo = new THREE.BufferGeometry();
    const starCount = 2400;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const palette = [
      new THREE.Color(0xffffff),
      new THREE.Color(0x93c5fd),
      new THREE.Color(0xfef08a),
      new THREE.Color(0xf472b6),
      new THREE.Color(0x38bdf8)
    ];

    for (let i = 0; i < starCount; i++) {
      const radius = 600 + Math.random() * 800;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = radius * Math.cos(phi);

      const col = palette[Math.floor(Math.random() * palette.length)];
      starColors[i * 3] = col.r;
      starColors[i * 3 + 1] = col.g;
      starColors[i * 3 + 2] = col.b;
    }

    starsGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starsGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starsMat = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });
    const starField = new THREE.Points(starsGeo, starsMat);
    scene.add(starField);

    // 7. THE SUN (Center)
    const sunGeo = new THREE.SphereGeometry(16, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({
      color: 0xffb703
    });
    const sunMesh = new THREE.Mesh(sunGeo, sunMat);
    scene.add(sunMesh);

    // Sun Inner Glow Halo
    const sunGlowGeo = new THREE.SphereGeometry(18.5, 32, 32);
    const sunGlowMat = new THREE.MeshBasicMaterial({
      color: 0xfb8500,
      transparent: true,
      opacity: 0.35,
      side: THREE.BackSide
    });
    const sunGlow = new THREE.Mesh(sunGlowGeo, sunGlowMat);
    scene.add(sunGlow);

    // Sun Outer Aura Halo
    const sunAuraGeo = new THREE.SphereGeometry(22, 32, 32);
    const sunAuraMat = new THREE.MeshBasicMaterial({
      color: 0xffd166,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide
    });
    const sunAura = new THREE.Mesh(sunAuraGeo, sunAuraMat);
    scene.add(sunAura);

    // Orbit Ring Helper function
    const createOrbitRing = (radius: number, color: number, opacity = 0.35) => {
      const curve = new THREE.EllipseCurve(0, 0, radius, radius * 0.98, 0, 2 * Math.PI, false, 0);
      const points = curve.getPoints(120);
      const orbitGeo = new THREE.BufferGeometry().setFromPoints(
        points.map(p => new THREE.Vector3(p.x, 0, p.y))
      );
      const orbitMat = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity,
        linewidth: 1
      });
      return new THREE.Line(orbitGeo, orbitMat);
    };

    // 8. EARTH & MOON SYSTEM
    const earthDist = 80;
    scene.add(createOrbitRing(earthDist, 0x38bdf8, 0.4));

    const earthGroup = new THREE.Group();
    earthGroup.position.set(earthDist, 0, 0);
    scene.add(earthGroup);

    // Earth Body
    const earthGeo = new THREE.SphereGeometry(5.2, 32, 32);
    const earthMat = new THREE.MeshStandardMaterial({
      color: 0x1d4ed8,
      roughness: 0.6,
      metalness: 0.1,
      emissive: 0x0a1945,
      emissiveIntensity: 0.2
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    earthGroup.add(earthMesh);

    // Earth Atmosphere Glow
    const earthAtmoGeo = new THREE.SphereGeometry(5.8, 32, 32);
    const earthAtmoMat = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.25,
      side: THREE.BackSide
    });
    earthGroup.add(new THREE.Mesh(earthAtmoGeo, earthAtmoMat));

    // Moon Orbit & Moon Body
    const moonDist = 14;
    const moonOrbit = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.EllipseCurve(0, 0, moonDist, moonDist, 0, 2 * Math.PI, false, 0)
          .getPoints(64)
          .map(p => new THREE.Vector3(p.x, 0, p.y))
      ),
      new THREE.LineBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.3 })
    );
    earthGroup.add(moonOrbit);

    const moonGeo = new THREE.SphereGeometry(1.8, 24, 24);
    const moonMat = new THREE.MeshStandardMaterial({
      color: 0xd1d5db,
      roughness: 0.9,
      metalness: 0.05
    });
    const moonMesh = new THREE.Mesh(moonGeo, moonMat);
    moonMesh.position.set(moonDist, 0, 0);
    earthGroup.add(moonMesh);

    // 9. MARS SYSTEM
    const marsDist = 150;
    scene.add(createOrbitRing(marsDist, 0xf43f5e, 0.4));

    const marsGroup = new THREE.Group();
    marsGroup.position.set(marsDist, 0, 0);
    scene.add(marsGroup);

    const marsGeo = new THREE.SphereGeometry(4.2, 32, 32);
    const marsMat = new THREE.MeshStandardMaterial({
      color: 0xe11d48,
      roughness: 0.7,
      metalness: 0.1,
      emissive: 0x4c0519,
      emissiveIntensity: 0.2
    });
    const marsMesh = new THREE.Mesh(marsGeo, marsMat);
    marsGroup.add(marsMesh);

    // Mars Polar Cap
    const polarCapGeo = new THREE.SphereGeometry(1.4, 16, 16);
    const polarCapMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 });
    const northCap = new THREE.Mesh(polarCapGeo, polarCapMat);
    northCap.position.set(0, 3.8, 0);
    marsGroup.add(northCap);

    // 10. SATURN SYSTEM & RINGS
    const saturnDist = 230;
    scene.add(createOrbitRing(saturnDist, 0xfbbf24, 0.35));

    const saturnGroup = new THREE.Group();
    saturnGroup.position.set(saturnDist, 0, 0);
    scene.add(saturnGroup);

    const saturnGeo = new THREE.SphereGeometry(8.5, 32, 32);
    const saturnMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.6,
      metalness: 0.1,
      emissive: 0x451a03,
      emissiveIntensity: 0.25
    });
    const saturnMesh = new THREE.Mesh(saturnGeo, saturnMat);
    saturnGroup.add(saturnMesh);

    // Saturn Ring Disc
    const ringInner = 11.5;
    const ringOuter = 21.0;
    const ringGeo = new THREE.RingGeometry(ringInner, ringOuter, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xfde68a,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.55
    });
    const saturnRing = new THREE.Mesh(ringGeo, ringMat);
    saturnRing.rotation.x = Math.PI / 2.3;
    saturnRing.rotation.y = Math.PI / 10;
    saturnGroup.add(saturnRing);

    // 11. INTERSTELLAR TRAJECTORY (VOYAGER 1)
    const curvePoints = [
      new THREE.Vector3(earthDist, 0, 0),
      new THREE.Vector3(120, 15, -30),
      new THREE.Vector3(180, 28, -50),
      new THREE.Vector3(250, 38, -60),
      new THREE.Vector3(310, 45, -70),
      new THREE.Vector3(380, 55, -85)
    ];
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const trajectoryGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(100));
    const trajectoryMat = new THREE.LineDashedMaterial({
      color: 0x38bdf8,
      dashSize: 4,
      gapSize: 2,
      linewidth: 1.5,
      transparent: true,
      opacity: 0.6
    });
    const trajectoryLine = new THREE.Line(trajectoryGeo, trajectoryMat);
    trajectoryLine.computeLineDistances();
    scene.add(trajectoryLine);

    // 12. PROBE INTERACTIVE MESHES (Clickable Markers)
    const interactiveObjects: THREE.Mesh[] = [];
    const probeMeshes: Record<string, THREE.Group> = {};

    PROBES.forEach((probe) => {
      const probeGroup = new THREE.Group();
      probeGroup.userData = { probeId: probe.id, probeData: probe };

      // 1. Invisible larger Hit Sphere for easy raycasting & mouse clicking
      const hitGeo = new THREE.SphereGeometry(3.6, 8, 8);
      const hitMat = new THREE.MeshBasicMaterial({ visible: false });
      const hitMesh = new THREE.Mesh(hitGeo, hitMat);
      hitMesh.userData = { probeId: probe.id, probeData: probe };
      probeGroup.add(hitMesh);
      interactiveObjects.push(hitMesh);

      // 2. Spacecraft Avionics Body (geometric cubical/hex core)
      const bodyGeo = new THREE.BoxGeometry(1.6, 1.4, 1.4);
      const bodyMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(probe.color),
        metalness: 0.8,
        roughness: 0.25,
        emissive: new THREE.Color(probe.color),
        emissiveIntensity: 0.45
      });
      const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
      bodyMesh.userData = { probeId: probe.id, probeData: probe };
      probeGroup.add(bodyMesh);

      // 3. Solar Panel Wings (horizontal solar array wings extending to sides)
      const wingGeo = new THREE.BoxGeometry(5.4, 0.08, 1.3);
      const wingMat = new THREE.MeshStandardMaterial({
        color: 0x1e3a8a, // deep solar cell blue
        metalness: 0.6,
        roughness: 0.2,
        emissive: 0x1d4ed8,
        emissiveIntensity: 0.35
      });
      const wingMesh = new THREE.Mesh(wingGeo, wingMat);
      probeGroup.add(wingMesh);

      // 4. Parabolic Dish Antenna (pointing upward)
      const dishGeo = new THREE.ConeGeometry(0.85, 0.6, 12, 1, true);
      const dishMat = new THREE.MeshStandardMaterial({
        color: 0xf8fafc,
        side: THREE.DoubleSide,
        metalness: 0.8,
        roughness: 0.2
      });
      const dishMesh = new THREE.Mesh(dishGeo, dishMat);
      dishMesh.position.set(0, 1.1, 0);
      dishMesh.rotation.x = Math.PI; // open facing upward
      probeGroup.add(dishMesh);

      // Antenna Feed Horn (rod in dish)
      const hornGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.7, 6);
      const hornMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const hornMesh = new THREE.Mesh(hornGeo, hornMat);
      hornMesh.position.set(0, 1.4, 0);
      probeGroup.add(hornMesh);

      // 5. Vertical Target Pin / Beacon Laser pointing down toward surface
      const pinGeo = new THREE.CylinderGeometry(0.06, 0.06, 4.0, 6);
      const pinMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(probe.color),
        transparent: true,
        opacity: 0.55
      });
      const pinMesh = new THREE.Mesh(pinGeo, pinMat);
      pinMesh.position.set(0, -2.4, 0);
      probeGroup.add(pinMesh);

      // Ground beacon dot at bottom of pin
      const dotGeo = new THREE.SphereGeometry(0.4, 8, 8);
      const dotMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(probe.color)
      });
      const dotMesh = new THREE.Mesh(dotGeo, dotMat);
      dotMesh.position.set(0, -4.4, 0);
      probeGroup.add(dotMesh);

      // Attach probe to its parent body
      if (probe.parent === 'earth') {
        probeGroup.position.set(
          moonDist + probe.offset[0],
          probe.offset[1],
          probe.offset[2]
        );
        earthGroup.add(probeGroup);
      } else if (probe.parent === 'mars') {
        probeGroup.position.set(...probe.offset);
        marsGroup.add(probeGroup);
      } else if (probe.parent === 'saturn') {
        probeGroup.position.set(...probe.offset);
        saturnGroup.add(probeGroup);
      } else if (probe.parent === 'interstellar') {
        probeGroup.position.set(310, 45, -70);
        scene.add(probeGroup);
      }

      probeMeshes[probe.id] = probeGroup;
    });

    // 13. RAYCASTER (Hover & Click detection)
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onPointerMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(interactiveObjects);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        const p = hit.userData.probeData as ProbeNode;
        if (p) {
          renderer.domElement.style.cursor = 'pointer';
          setHoveredProbe({
            name: p.name,
            dest: p.destination,
            year: p.year,
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          });
          return;
        }
      }
      renderer.domElement.style.cursor = 'grab';
      setHoveredProbe(null);
    };

    const onPointerDown = (e: MouseEvent) => {
      // Only handle left click
      if (e.button !== 0) return;

      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(interactiveObjects);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        const probeId = hit.userData.probeId as MissionId;
        if (probeId) {
          setSelectedId(probeId);

          // Focus camera smoothly towards the clicked probe
          const worldPos = new THREE.Vector3();
          hit.getWorldPosition(worldPos);
          targetLookAt.current.copy(worldPos);

          // Smooth offset position
          const offset = camera.position.clone().sub(controls.target).normalize().multiplyScalar(40);
          targetCamPos.current = worldPos.clone().add(offset);
        }
      }
    };

    renderer.domElement.addEventListener('mousemove', onPointerMove);
    renderer.domElement.addEventListener('click', onPointerDown);

    // 14. RESIZE OBSERVER
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = Math.max(container.clientHeight || 520, 500);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 15. ANIMATION LOOP
    let animId = 0;

    const animate = (time: number) => {
      animId = requestAnimationFrame(animate);
      const elapsed = time * 0.001;

      // Sun pulse & slow rotation
      sunMesh.rotation.y += 0.002;
      sunGlow.rotation.y -= 0.003;
      const sunPulse = 1 + Math.sin(elapsed * 2) * 0.03;
      sunGlow.scale.set(sunPulse, sunPulse, sunPulse);

      // Earth & Mars rotation
      earthMesh.rotation.y += 0.008;
      marsMesh.rotation.y += 0.007;
      saturnMesh.rotation.y += 0.01;

      // Rotate spacecraft models to showcase solar wings & antennas
      PROBES.forEach(p => {
        const group = probeMeshes[p.id];
        if (group) {
          group.rotation.y += 0.015;
        }
      });

      // Smooth camera transition if target is set
      if (targetCamPos.current) {
        camera.position.lerp(targetCamPos.current, 0.05);
        controls.target.lerp(targetLookAt.current, 0.05);

        if (camera.position.distanceTo(targetCamPos.current) < 0.5) {
          targetCamPos.current = null;
        }
      }

      // Auto rotation when enabled and user isn't dragging
      if (isAutoRotate && !targetCamPos.current) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.45;
      } else {
        controls.autoRotate = false;
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousemove', onPointerMove);
      renderer.domElement.removeEventListener('click', onPointerDown);
      renderer.dispose();
      scene.clear();
    };
  }, [isAutoRotate]);

  return (
    <div className="solar-system-wrapper">
      {/* Top Header & Destination Filter Tabs */}
      <div className="map-controls-row">
        <div className="map-title-block">
          <span className="eyebrow eyebrow-cyan">3D INTERACTIVE COSMOS</span>
          <h2 className="map-heading">Interactive Solar System</h2>
          <p className="map-subhead">
            Drag to rotate in 3D, scroll to zoom, and click on any planet or robotic beacon to inspect humanity's hardware.
          </p>
        </div>

        {/* Filter / Focus Quick Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="destination-filter-tabs">
            <button
              className={`tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => {
                setActiveFilter('all');
                focusOnSystem('overview');
              }}
            >
              Solar Overview
            </button>
            <button
              className={`tab-btn ${activeFilter === 'moon' ? 'active' : ''}`}
              onClick={() => {
                setActiveFilter('moon');
                focusOnSystem('moon');
              }}
            >
              Moon Base (2)
            </button>
            <button
              className={`tab-btn ${activeFilter === 'mars' ? 'active' : ''}`}
              onClick={() => {
                setActiveFilter('mars');
                focusOnSystem('mars');
              }}
            >
              Mars Surface (5)
            </button>
            <button
              className={`tab-btn ${activeFilter === 'deep-space' ? 'active' : ''}`}
              onClick={() => {
                setActiveFilter('deep-space');
                focusOnSystem('saturn');
              }}
            >
              Saturn & Void (2)
            </button>
          </div>

          {onToggleView && (
            <div className="destination-filter-tabs" style={{ background: 'rgba(56, 189, 248, 0.1)' }}>
              <button className="tab-btn active" style={{ color: 'var(--accent-gold)' }}>
                🌐 3D Cosmos
              </button>
              <button className="tab-btn" onClick={onToggleView}>
                🗺️ 2D Map
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="map-stage-container">
        {/* 3D WebGL Canvas Box */}
        <div className="map-canvas-box" style={{ minHeight: '520px', position: 'relative' }}>
          <div ref={mountRef} style={{ width: '100%', height: '100%', minHeight: '520px' }} />

          {/* Floating 3D Tooltip */}
          {hoveredProbe && (
            <div
              style={{
                position: 'absolute',
                top: `${hoveredProbe.y - 48}px`,
                left: `${hoveredProbe.x + 16}px`,
                background: 'rgba(3, 5, 8, 0.92)',
                border: '1px solid var(--accent-gold)',
                borderRadius: '6px',
                padding: '0.45rem 0.85rem',
                pointerEvents: 'none',
                zIndex: 20,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)'
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>
                {hoveredProbe.name} ({hoveredProbe.year})
              </div>
              <div style={{ fontFamily: 'var(--font-tech)', color: 'var(--accent-cyan)', fontSize: '0.72rem' }}>
                📍 {hoveredProbe.dest}
              </div>
            </div>
          )}

          {/* 3D Canvas Controls Overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              right: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              pointerEvents: 'none',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}
          >
            <div
              style={{
                background: 'rgba(3, 5, 8, 0.75)',
                backdropFilter: 'blur(8px)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '6px',
                padding: '0.35rem 0.75rem',
                fontSize: '0.76rem',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-tech)',
                letterSpacing: '0.04em'
              }}
            >
              🖱️ Drag to rotate 3D view · Scroll to zoom · Click any probe
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', pointerEvents: 'auto' }}>
              <button
                className="btn btn-secondary btn-sm"
                style={{ fontSize: '0.75rem', padding: '0.3rem 0.75rem' }}
                onClick={() => setIsAutoRotate(!isAutoRotate)}
              >
                {isAutoRotate ? '⏸ Pause Spin' : '▶ Auto Spin'}
              </button>
              <button
                className="btn btn-secondary btn-sm"
                style={{ fontSize: '0.75rem', padding: '0.3rem 0.75rem' }}
                onClick={() => focusOnSystem('overview')}
              >
                ↺ Reset View
              </button>
            </div>
          </div>
        </div>

        {/* Selected Mission Dossier Panel */}
        <div className="mission-dossier-panel">
          <div className="dossier-header-strip">
            <span className="dossier-label">HARDWARE DOSSIER</span>
            <span className="badge badge-gold">{selectedMission.destination}</span>
          </div>

          <div className="dossier-image-box">
            <img
              src={`/img/${selectedMission.heroImage}`}
              alt={selectedMission.name}
              className="dossier-img"
            />
            <div className="dossier-img-overlay">
              <span className="badge badge-cyan">{selectedMission.statusBadge}</span>
            </div>
          </div>

          <div className="dossier-body">
            <div className="dossier-title-row">
              <h3 className="dossier-title">{selectedMission.name}</h3>
              <span className="dossier-status-pill">{selectedMission.classification}</span>
            </div>

            {selectedMission.quote && (
              <p className="dossier-quote">"{selectedMission.quote.text}"</p>
            )}

            <div className="dossier-meta-list">
              <div className="dossier-meta-item">
                <span className="meta-key">SITE</span>
                <span className="meta-val">{selectedMission.landingSite}</span>
              </div>
              <div className="dossier-meta-item">
                <span className="meta-key">DISTANCE</span>
                <span className="meta-val">{selectedMission.distance}</span>
              </div>
              <div className="dossier-meta-item">
                <span className="meta-key">ACTIVE PERIOD</span>
                <span className="meta-val">{selectedMission.dates.launch} – {selectedMission.dates.end || 'Active'}</span>
              </div>
            </div>

            <p className="dossier-summary">
              {selectedMission.educationalSummary}
            </p>

            <button
              className="btn btn-primary dossier-action-btn"
              onClick={() => onNavigate({ page: 'mission', mission: selectedMission.id })}
            >
              Explore {selectedMission.name} Story →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
