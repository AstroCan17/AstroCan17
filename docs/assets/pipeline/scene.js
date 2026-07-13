/**
 * Scroll-driven satellite → ground → processing pipeline (Three.js).
 * Falls back to SVG on reduced-motion, narrow viewports, or WebGL failure.
 */
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';

const STAGES = [
  'Deep space — starfield',
  'Satellite in orbit — Earth observation',
  'RF downlink — data transmission',
  'Ground station — antenna reception',
  'Data centre — L0 decode & processing',
  'Science products — L1/L2 imagery',
];

function prefersFallback() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
  if (window.matchMedia('(max-width: 768px)').matches) return true;
  return false;
}

function initPipeline() {
  const container = document.getElementById('pipeline-hero');
  const canvas = document.getElementById('pipeline-canvas');
  const label = document.getElementById('pipeline-stage-label');
  const spacer = document.getElementById('pipeline-scroll-spacer');
  if (!container || !canvas || !label || !spacer) return;

  if (prefersFallback()) {
    container.classList.add('is-fallback');
    return;
  }

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  } catch {
    container.classList.add('is-fallback');
    return;
  }

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x050810);
  scene.fog = new THREE.FogExp2(0x050810, 0.018);

  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 200);
  camera.position.set(0, 2, 12);

  const resize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener('resize', resize);

  // Starfield
  const starGeo = new THREE.BufferGeometry();
  const starCount = 1200;
  const positions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 80;
    positions[i + 1] = (Math.random() - 0.5) * 40;
    positions[i + 2] = (Math.random() - 0.5) * 80 - 20;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.08, sizeAttenuation: true }));
  scene.add(stars);

  // Earth
  const earth = new THREE.Mesh(
    new THREE.SphereGeometry(3.5, 32, 32),
    new THREE.MeshStandardMaterial({ color: 0x1a4d7a, roughness: 0.9, metalness: 0.1 })
  );
  earth.position.set(0, -8, -15);
  scene.add(earth);

  // Satellite body
  const satGroup = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(1.2, 0.6, 0.8),
    new THREE.MeshStandardMaterial({ color: 0x8b949e, metalness: 0.6, roughness: 0.35 })
  );
  const panelL = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 0.05, 0.9),
    new THREE.MeshStandardMaterial({ color: 0x1f6feb, metalness: 0.3, roughness: 0.5 })
  );
  panelL.position.x = -1.8;
  const panelR = panelL.clone();
  panelR.position.x = 1.8;
  satGroup.add(body, panelL, panelR);
  satGroup.position.set(-2, 1, 0);
  scene.add(satGroup);

  // Downlink beam
  const beamGeo = new THREE.CylinderGeometry(0.02, 0.15, 8, 8, 1, true);
  const beam = new THREE.Mesh(
    beamGeo,
    new THREE.MeshBasicMaterial({ color: 0x58a6ff, transparent: true, opacity: 0.35, side: THREE.DoubleSide })
  );
  beam.rotation.x = Math.PI / 2;
  beam.position.set(0, -2, 4);
  scene.add(beam);

  // Ground dish
  const dishGroup = new THREE.Group();
  const dish = new THREE.Mesh(
    new THREE.SphereGeometry(1.5, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: 0x9e6a03, metalness: 0.7, roughness: 0.3, side: THREE.DoubleSide })
  );
  dish.rotation.x = Math.PI;
  const tower = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.12, 2, 8),
    new THREE.MeshStandardMaterial({ color: 0x484f58 })
  );
  tower.position.y = -1;
  dishGroup.add(dish, tower);
  dishGroup.position.set(2, -1, 6);
  scene.add(dishGroup);

  // Server racks
  const rackGroup = new THREE.Group();
  for (let i = 0; i < 3; i++) {
    const rack = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 1.8, 0.4),
      new THREE.MeshStandardMaterial({ color: 0x161b22 })
    );
    rack.position.x = (i - 1) * 0.7;
    const led = new THREE.Mesh(
      new THREE.BoxGeometry(0.35, 0.05, 0.02),
      new THREE.MeshBasicMaterial({ color: 0x238636 })
    );
    led.position.set(0, 0.5, 0.21);
    rack.add(led);
    rackGroup.add(rack);
  }
  rackGroup.position.set(0, -0.5, 10);
  scene.add(rackGroup);

  // Product tiles (image planes)
  const tileGroup = new THREE.Group();
  const colors = [0x238636, 0x1f6feb, 0x8957e5, 0x9e6a03];
  for (let i = 0; i < 4; i++) {
    const tile = new THREE.Mesh(
      new THREE.PlaneGeometry(1.2, 1.2),
      new THREE.MeshBasicMaterial({ color: colors[i], transparent: true, opacity: 0.85 })
    );
    tile.position.set((i - 1.5) * 1.4, 0.5, 0);
    tileGroup.add(tile);
  }
  tileGroup.position.set(0, 0, 14);
  scene.add(tileGroup);

  // Ambient + sun
  scene.add(new THREE.AmbientLight(0x404060, 0.6));
  const sun = new THREE.DirectionalLight(0xffffff, 1.1);
  sun.position.set(5, 8, 5);
  scene.add(sun);

  const cameraKeyframes = [
    { pos: [0, 2, 12], look: [0, 0, 0] },
    { pos: [-1, 1.5, 4], look: [-2, 1, 0] },
    { pos: [0, 0, 6], look: [0, -2, 5] },
    { pos: [3, 1, 8], look: [2, -1, 6] },
    { pos: [0, 1.5, 11], look: [0, -0.5, 10] },
    { pos: [0, 2, 15], look: [0, 0.5, 14] },
  ];

  const lookTarget = new THREE.Vector3();
  const tmpVec = new THREE.Vector3();

  function lerpKeyframes(t) {
    const n = cameraKeyframes.length - 1;
    const scaled = Math.max(0, Math.min(1, t)) * n;
    const i = Math.min(Math.floor(scaled), n - 1);
    const f = scaled - i;
    const a = cameraKeyframes[i];
    const b = cameraKeyframes[i + 1];
    camera.position.set(
      THREE.MathUtils.lerp(a.pos[0], b.pos[0], f),
      THREE.MathUtils.lerp(a.pos[1], b.pos[1], f),
      THREE.MathUtils.lerp(a.pos[2], b.pos[2], f)
    );
    lookTarget.set(
      THREE.MathUtils.lerp(a.look[0], b.look[0], f),
      THREE.MathUtils.lerp(a.look[1], b.look[1], f),
      THREE.MathUtils.lerp(a.look[2], b.look[2], f)
    );
    camera.lookAt(lookTarget);
  }

  function scrollProgress() {
    const container = document.querySelector('.pipeline-scroll-container');
    if (!container) return 0;
    const start = container.offsetTop;
    const scrollRange = container.offsetHeight - window.innerHeight;
    if (scrollRange <= 0) return 0;
    return Math.max(0, Math.min(1, (window.scrollY - start) / scrollRange));
  }

  function updateLabel(t) {
    const idx = Math.min(STAGES.length - 1, Math.floor(t * STAGES.length));
    label.textContent = STAGES[idx];
  }

  let running = true;
  function animate() {
    if (!running) return;
    requestAnimationFrame(animate);
    const t = scrollProgress();
    lerpKeyframes(t);
    updateLabel(t);
    satGroup.rotation.y += 0.004;
    earth.rotation.y += 0.001;
    stars.rotation.y += 0.0003;
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
