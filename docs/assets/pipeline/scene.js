/**
 * Cinematic scroll-driven EO pipeline — Three.js
 */
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';

const STAGES = [
  { title: 'Deep space', desc: 'Starfield and Earth limb — the observation chain begins in orbit.' },
  { title: 'Satellite in orbit', desc: 'Multispectral payload acquires raw instrument data over the limb.' },
  { title: 'RF downlink', desc: 'CCSDS packets stream from spacecraft to ground segment.' },
  { title: 'Ground station', desc: 'Antenna reception — L0 ISP enters the processing facility.' },
  { title: 'Data processing', desc: 'L0 decode, radiometric chain, and L1/L2 product generation.' },
  { title: 'Science products', desc: 'Calibrated imagery tiles — ready for Cal/Val and applications.' },
];

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const smoothstep = (e0, e1, x) => {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
};

function prefersFallback() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    || window.matchMedia('(max-width: 768px)').matches;
}

function makeStarfield(count, spread, size, color = 0xffffff) {
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * spread;
    pos[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.6;
    pos[i * 3 + 2] = (Math.random() - 0.5) * spread - 10;
    sizes[i] = Math.random() * size + size * 0.3;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
  const mat = new THREE.PointsMaterial({
    color,
    size: 0.12,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
  });
  return new THREE.Points(geo, mat);
}

function makeEoTexture(seed) {
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 128;
  const ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 128, 128);
  const palettes = [
    ['#1a3d2a', '#2d5a3d', '#4a7c59', '#1f6feb'],
    ['#1a2d4a', '#2a4a6e', '#3d6a9e', '#58a6ff'],
    ['#3d2a1a', '#6e4a2a', '#9e6a03', '#c9a227'],
    ['#2d1a4a', '#4a2d6e', '#6e3d9e', '#8957e5'],
  ];
  const p = palettes[seed % palettes.length];
  g.addColorStop(0, p[0]);
  g.addColorStop(0.4, p[1]);
  g.addColorStop(0.7, p[2]);
  g.addColorStop(1, p[3]);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 40; i++) {
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.08})`;
    ctx.fillRect(Math.random() * 128, Math.random() * 128, 2 + Math.random() * 8, 2 + Math.random() * 8);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function buildSatellite() {
  const g = new THREE.Group();
  const metal = new THREE.MeshStandardMaterial({ color: 0xc9d1d9, metalness: 0.85, roughness: 0.25 });
  const panelMat = new THREE.MeshStandardMaterial({
    color: 0x0d419d,
    metalness: 0.4,
    roughness: 0.35,
    emissive: 0x1f6feb,
    emissiveIntensity: 0.15,
  });

  const bus = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.7, 0.9), metal);
  g.add(bus);

  const wingL = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.04, 1.0), panelMat);
  wingL.position.x = -2.1;
  const wingR = wingL.clone();
  wingR.position.x = 2.1;
  g.add(wingL, wingR);

  const dish = new THREE.Mesh(
    new THREE.CylinderGeometry(0.02, 0.35, 0.12, 16),
    metal
  );
  dish.position.set(0, 0.5, 0.35);
  dish.rotation.x = -0.4;
  g.add(dish);

  const sensor = new THREE.Mesh(
    new THREE.BoxGeometry(0.25, 0.15, 0.2),
    new THREE.MeshStandardMaterial({ color: 0x21262d, emissive: 0x238636, emissiveIntensity: 0.3 })
  );
  sensor.position.set(0, -0.35, 0.5);
  g.add(sensor);

  return g;
}

function buildEarth() {
  const g = new THREE.Group();
  const earth = new THREE.Mesh(
    new THREE.SphereGeometry(4, 48, 48),
    new THREE.MeshStandardMaterial({ color: 0x1a4d7a, roughness: 0.85, metalness: 0.05 })
  );
  g.add(earth);

  const atmos = new THREE.Mesh(
    new THREE.SphereGeometry(4.15, 48, 48),
    new THREE.MeshBasicMaterial({ color: 0x58a6ff, transparent: true, opacity: 0.12, side: THREE.BackSide })
  );
  g.add(atmos);

  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(4.35, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0x388bfd, transparent: true, opacity: 0.06, side: THREE.BackSide })
  );
  g.add(glow);

  return g;
}

function buildGroundStation() {
  const g = new THREE.Group();
  const base = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 0.4, 1.8),
    new THREE.MeshStandardMaterial({ color: 0x21262d, roughness: 0.8 })
  );
  base.position.y = -0.2;
  g.add(base);

  const mast = new THREE.Mesh(
    new THREE.CylinderGeometry(0.06, 0.1, 2.2, 8),
    new THREE.MeshStandardMaterial({ color: 0x484f58, metalness: 0.5 })
  );
  mast.position.y = 1.1;
  g.add(mast);

  const dishPivot = new THREE.Group();
  dishPivot.position.y = 2.2;
  const dish = new THREE.Mesh(
    new THREE.SphereGeometry(1.4, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.55),
    new THREE.MeshStandardMaterial({ color: 0xc9a227, metalness: 0.9, roughness: 0.2, side: THREE.DoubleSide })
  );
  dish.rotation.x = Math.PI;
  dishPivot.add(dish);
  g.add(dishPivot);
  g.userData.dishPivot = dishPivot;

  return g;
}

function buildDataCenter() {
  const g = new THREE.Group();
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(8, 4),
    new THREE.MeshStandardMaterial({ color: 0x0d1117, roughness: 0.9 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -1;
  g.add(floor);

  const leds = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      const rack = new THREE.Mesh(
        new THREE.BoxGeometry(0.55, 2.0, 0.45),
        new THREE.MeshStandardMaterial({ color: 0x161b22, roughness: 0.7 })
      );
      rack.position.set((col - 1) * 0.85, 0.1, (row - 1.5) * 0.7);
      g.add(rack);

      for (let l = 0; l < 5; l++) {
        const led = new THREE.Mesh(
          new THREE.PlaneGeometry(0.35, 0.04),
          new THREE.MeshBasicMaterial({ color: 0x238636, transparent: true, opacity: 0.8 })
        );
        led.position.set(0, 0.6 - l * 0.35, 0.23);
        rack.add(led);
        leds.push(led);
      }
    }
  }
  g.userData.leds = leds;
  return g;
}

function buildProductTiles() {
  const g = new THREE.Group();
  for (let i = 0; i < 4; i++) {
    const tex = makeEoTexture(i);
    const tile = new THREE.Mesh(
      new THREE.PlaneGeometry(1.4, 1.4),
      new THREE.MeshStandardMaterial({
        map: tex,
        emissive: 0x111111,
        emissiveIntensity: 0.2,
        roughness: 0.6,
      })
    );
    tile.position.set((i - 1.5) * 1.55, 0, 0);
    const frame = new THREE.Mesh(
      new THREE.PlaneGeometry(1.48, 1.48),
      new THREE.MeshBasicMaterial({ color: 0x58a6ff, transparent: true, opacity: 0.25 })
    );
    frame.position.z = -0.02;
    tile.add(frame);
    g.add(tile);
  }
  return g;
}

function createBeamParticles(count, curve) {
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
    color: 0x79c0ff,
    size: 0.14,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const pts = new THREE.Points(geo, mat);
  pts.userData.curve = curve;
  pts.userData.offsets = Array.from({ length: count }, () => Math.random());
  return pts;
}

function initPipeline() {
  const container = document.getElementById('pipeline-hero');
  const canvas = document.getElementById('pipeline-canvas');
  const scrollCue = document.getElementById('pipeline-scroll-cue');
  const stageNum = document.getElementById('pipeline-stage-num');
  const stageTitle = document.getElementById('pipeline-stage-title');
  const stageDesc = document.getElementById('pipeline-stage-desc');
  const dots = document.querySelectorAll('.pipeline-dot');
  if (!container || !canvas) return;

  if (prefersFallback()) {
    container.classList.add('is-fallback');
    return;
  }

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
  } catch {
    container.classList.add('is-fallback');
    return;
  }

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x030508);
  scene.fog = new THREE.FogExp2(0x030508, 0.012);

  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 300);

  const resize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener('resize', resize);

  // Layers
  const starsFar = makeStarfield(2000, 120, 0.15, 0xffffff);
  const starsNear = makeStarfield(400, 50, 0.2, 0x79c0ff);
  scene.add(starsFar, starsNear);

  const earthGroup = buildEarth();
  earthGroup.position.set(0, -6, -22);
  scene.add(earthGroup);

  const satellite = buildSatellite();
  satellite.position.set(-3, 2.5, -2);
  scene.add(satellite);

  const groundStation = buildGroundStation();
  groundStation.position.set(4, -1.5, 8);
  groundStation.rotation.y = -0.6;
  scene.add(groundStation);

  const dataCenter = buildDataCenter();
  dataCenter.position.set(0, -0.5, 16);
  scene.add(dataCenter);

  const products = buildProductTiles();
  products.position.set(0, 1.2, 26);
  scene.add(products);

  // RF beam curve: satellite → ground
  const beamCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-2.5, 1.5, 0),
    new THREE.Vector3(-1, 0, 3),
    new THREE.Vector3(1, -0.5, 6),
    new THREE.Vector3(3.5, -1, 8),
  ]);
  const beamTube = new THREE.Mesh(
    new THREE.TubeGeometry(beamCurve, 64, 0.06, 8, false),
    new THREE.MeshBasicMaterial({ color: 0x58a6ff, transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending })
  );
  scene.add(beamTube);

  const beamCore = new THREE.Mesh(
    new THREE.TubeGeometry(beamCurve, 64, 0.02, 6, false),
    new THREE.MeshBasicMaterial({ color: 0x79c0ff, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending })
  );
  scene.add(beamCore);

  const beamParticles = createBeamParticles(80, beamCurve);
  scene.add(beamParticles);

  // Cable curve: ground → data center
  const cableCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(4, -1.2, 9),
    new THREE.Vector3(2, -1.5, 12),
    new THREE.Vector3(0, -1.2, 15),
  ]);
  const cableParticles = createBeamParticles(40, cableCurve);
  cableParticles.material.color.setHex(0x238636);
  scene.add(cableParticles);

  // Lights
  scene.add(new THREE.AmbientLight(0x303050, 0.45));
  const key = new THREE.DirectionalLight(0xfff5e6, 1.4);
  key.position.set(8, 12, 6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x58a6ff, 0.5);
  rim.position.set(-6, 4, -8);
  scene.add(rim);
  const fill = new THREE.PointLight(0x388bfd, 0.6, 40);
  fill.position.set(0, 3, 10);
  scene.add(fill);

  // Camera path — cinematic spline through the story
  const camPoints = [
    new THREE.Vector3(0, 4, 28),      // wide space
    new THREE.Vector3(-4, 2, 6),      // satellite close-up
    new THREE.Vector3(0, 0.5, 10),    // riding the beam
    new THREE.Vector3(7, 2, 10),      // ground station
    new THREE.Vector3(0, 3, 18),      // data center overview
    new THREE.Vector3(0, 2.5, 30),    // product tiles
  ];
  const camCurve = new THREE.CatmullRomCurve3(camPoints, false, 'catmullrom', 0.35);

  const lookPoints = [
    new THREE.Vector3(0, -2, -10),
    new THREE.Vector3(-3, 2.5, -2),
    new THREE.Vector3(3, -1, 8),
    new THREE.Vector3(4, 0, 8),
    new THREE.Vector3(0, 0, 16),
    new THREE.Vector3(0, 1.2, 26),
  ];
  const lookCurve = new THREE.CatmullRomCurve3(lookPoints, false, 'catmullrom', 0.35);

  const lookTarget = new THREE.Vector3();

  function scrollProgress() {
    const scrollContainer = document.querySelector('.pipeline-scroll-container');
    if (!scrollContainer) return 0;
    const start = scrollContainer.offsetTop;
    const scrollRange = scrollContainer.offsetHeight - window.innerHeight;
    if (scrollRange <= 0) return 0;
    const raw = Math.max(0, Math.min(1, (window.scrollY - start) / scrollRange));
    return easeInOutCubic(raw);
  }

  function updateUI(t) {
    const stageIdx = Math.min(STAGES.length - 1, Math.floor(t * STAGES.length));
    const stage = STAGES[stageIdx];
    if (stageNum) stageNum.textContent = String(stageIdx + 1).padStart(2, '0');
    if (stageTitle) stageTitle.textContent = stage.title;
    if (stageDesc) stageDesc.textContent = stage.desc;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === stageIdx);
      dot.classList.toggle('passed', i < stageIdx);
    });
    if (scrollCue) scrollCue.style.opacity = t > 0.05 ? '0' : '1';
  }

  function setGroupOpacity(group, opacity) {
    group.traverse((child) => {
      if (child.isMesh && child.material) {
        const mats = Array.isArray(child.material) ? child.material : [child.material];
        mats.forEach((m) => {
          if (m.userData.baseOpacity === undefined) m.userData.baseOpacity = m.opacity ?? 1;
          m.transparent = true;
          m.opacity = m.userData.baseOpacity * opacity;
        });
      }
    });
  }

  function animateParticles(pts, time, speed = 0.15) {
    const curve = pts.userData.curve;
    const offsets = pts.userData.offsets;
    const posAttr = pts.geometry.attributes.position;
    for (let i = 0; i < offsets.length; i++) {
      const u = (offsets[i] + time * speed) % 1;
      const p = curve.getPoint(u);
      posAttr.setXYZ(i, p.x, p.y, p.z);
    }
    posAttr.needsUpdate = true;
  }

  let running = true;
  let clock = 0;

  function animate() {
    if (!running) return;
    requestAnimationFrame(animate);
    clock += 0.016;

    const t = scrollProgress();
    const camT = camCurve.getPointAt(t);
    const lookT = lookCurve.getPointAt(t);
    camera.position.copy(camT);
    lookTarget.copy(lookT);
    camera.lookAt(lookTarget);

    // Stage-based visibility (soft transitions)
    const stageT = t * 5;
    setGroupOpacity(satellite, 1);
    setGroupOpacity(earthGroup, 1);

    const beamVis = smoothstep(0.9, 1.6, stageT) * (1 - smoothstep(3.2, 4.0, stageT)) + 0.08;
    beamTube.material.opacity = 0.25 * beamVis;
    beamCore.material.opacity = 0.65 * beamVis;
    beamParticles.material.opacity = 0.9 * beamVis;
    cableParticles.material.opacity = 0.75 * smoothstep(2.2, 3.0, stageT);

    setGroupOpacity(groundStation, smoothstep(1.8, 2.6, stageT) * (1 - smoothstep(4.0, 4.8, stageT)) + 0.12);
    setGroupOpacity(dataCenter, smoothstep(2.8, 3.6, stageT) * (1 - smoothstep(4.6, 5.2, stageT)) + 0.1);
    setGroupOpacity(products, smoothstep(3.8, 4.6, stageT));

    // Motion
    earthGroup.rotation.y = clock * 0.02;
    satellite.rotation.y = clock * 0.15;
    satellite.position.y = 2.5 + Math.sin(clock * 0.8) * 0.08;
    starsFar.rotation.y = clock * 0.004;
    starsNear.rotation.y = clock * 0.008;

    const dishPivot = groundStation.userData.dishPivot;
    if (dishPivot) {
      dishPivot.rotation.y = Math.sin(clock * 0.5) * 0.25 - 0.4;
      dishPivot.rotation.x = Math.sin(clock * 0.3) * 0.1 + 0.2;
    }

    dataCenter.userData.leds?.forEach((led, i) => {
      led.material.opacity = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(clock * 3 + i * 0.7));
      const colors = [0x238636, 0x1f6feb, 0x58a6ff];
      led.material.color.setHex(colors[Math.floor((clock + i) * 0.5) % colors.length]);
    });

    products.rotation.y = Math.sin(clock * 0.2) * 0.08;
    products.children.forEach((tile, i) => {
      tile.position.y = Math.sin(clock * 0.6 + i) * 0.06;
    });

    animateParticles(beamParticles, clock, 0.12);
    animateParticles(cableParticles, clock, 0.18);

    updateUI(t);
    renderer.render(scene, camera);
  }
  animate();

  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) animate();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPipeline);
} else {
  initPipeline();
}
