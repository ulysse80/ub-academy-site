// Animation 3D UB Academy pour les réseaux sociaux (Three.js / WebGL).
// 10 secondes, 1080 × 1920 (9:16), 30 images par seconde.
//
// Une étincelle explose en 70 000 particules qui écrivent « Bonjour », « Hello » puis « 你好 »,
// s'effondrent en un éclair et dessinent le logo UB Academy, qui se pose sur une carte crème.
//
// Deux modes :
//   index.html            lecture en direct, en boucle (navigateur)
//   index.html?capture    rendu image par image, piloté par outils/capture.cjs
//   &langue=en            phrase finale en anglais
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { AfterimagePass } from "three/examples/jsm/postprocessing/AfterimagePass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

import LOGO from "./ressources/logo-ub-academy-recadre.png";
import POLICE_MOTS from "./ressources/polices/inter-800-mots.woff2";
import POLICE_SURTITRE from "./ressources/polices/inter-700-surtitre.woff2";
import POLICE_PHRASE from "./ressources/polices/fraunces-italique.woff2";
import POLICE_CHINOIS from "./ressources/polices/noto-sans-sc-900-nihao.woff2";

// ------------------------------------------------------------------ réglages
const W = 1080, H = 1920, IPS = 30, DUREE = 10;
const N = 70000;                       // particules
const FOV = 35, Z_CAMERA = 14;          // caméra finale, de face
const PX_PAR_UNITE = H / (2 * Z_CAMERA * Math.tan((FOV / 2) * Math.PI / 180));

const params = new URLSearchParams(location.search);
const CAPTURE = params.has("capture");
const LANGUE = params.get("langue") === "en" ? "en" : "fr";
const TEXTES = {
  fr: { surtitre: "FRANÇAIS · ANGLAIS · CHINOIS", phrase: "En ligne, où que vous soyez" },
  en: { surtitre: "FRENCH · ENGLISH · CHINESE", phrase: "Online, wherever you are" },
}[LANGUE];

// Couleurs du site (assets/css/style.css)
const MARINE = "#04142e", HALO = "#112e67", CREME = "#f6f0e6", ORANGE = "#ff8114";

// Carte finale (pixels de l'image 1080 × 1920)
const CARTE = { cx: 540, cy: 800, l: 780, h: 573, logoL: 680 };

// ------------------------------------------------------------------ outils
function aleatoire(graine) {          // générateur déterministe (mulberry32)
  return function () {
    graine |= 0; graine = (graine + 0x6d2b79f5) | 0;
    let t = Math.imul(graine ^ (graine >>> 15), 1 | graine);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const hasard = aleatoire(20261024);
const borne = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const lisse = (a, b, x) => { const t = borne((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const entreeSortieCubique = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const sortieCubique = (t) => 1 - Math.pow(1 - t, 3);
const entreeCubique = (t) => t * t * t;
const sortieExpo = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
const sortieRetour = (t) => { const c = 1.6; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };
const lin = (hex) => new THREE.Color(hex);   // THREE convertit sRGB → linéaire

// ------------------------------------------------------------------ ressources
async function chargerPolice(nom, url, poids, style = "normal") {
  const f = new FontFace(nom, `url(${url})`, { weight: String(poids), style });
  await f.load();
  document.fonts.add(f);
}
function chargerImage(url) {
  return new Promise((ok, ko) => { const i = new Image(); i.onload = () => ok(i); i.onerror = ko; i.src = url; });
}

// Points d'une forme dessinée sur un canevas 2D → positions 3D (épaisseur en z)
function pixelsEncre(dessiner, lc, hc) {
  const c = document.createElement("canvas");
  c.width = lc; c.height = hc;
  const ctx = c.getContext("2d", { willReadFrequently: true });
  dessiner(ctx);
  const d = ctx.getImageData(0, 0, lc, hc).data;
  const liste = [];
  let x0 = lc, x1 = 0, y0 = hc, y1 = 0;
  for (let y = 0; y < hc; y++) for (let x = 0; x < lc; x++) {
    const a = d[(y * lc + x) * 4 + 3];
    if (a > 140) { liste.push(y * lc + x); if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  }
  return { liste, d, lc, x0, x1, y0, y1 };
}

function formeTexte(texte, police, largeurMax, hauteurMax, cy) {
  const lc = 2400, hc = 900;
  const e = pixelsEncre((ctx) => {
    ctx.font = police;
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(texte, lc / 2, hc / 2);
  }, lc, hc);
  const echelle = Math.min(largeurMax / (e.x1 - e.x0), hauteurMax / (e.y1 - e.y0));
  const mx = (e.x0 + e.x1) / 2, my = (e.y0 + e.y1) / 2;
  const p = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const k = e.liste[Math.floor(hasard() * e.liste.length)];
    const x = (k % lc) + hasard(), y = Math.floor(k / lc) + hasard();
    // la plupart des particules sur la face avant, les autres dans l'épaisseur (lettres en volume)
    const z = hasard() < 0.55 ? (hasard() - 0.5) * 0.08 : (hasard() - 0.5) * 0.6;
    p[i * 3] = (x - mx) * echelle;
    p[i * 3 + 1] = -(y - my) * echelle + cy;
    p[i * 3 + 2] = z;
  }
  return p;
}

// Logo : positions calées exactement sur le logo réel posé à la fin sur la carte
function formeLogo(img) {
  const e = pixelsEncre((ctx) => ctx.drawImage(img, 0, 0), img.width, img.height);
  const largeur = CARTE.logoL / PX_PAR_UNITE;
  const hauteur = largeur * img.height / img.width;
  const cy = (H / 2 - CARTE.cy) / PX_PAR_UNITE;
  const p = new Float32Array(N * 3), c = new Float32Array(N * 3);
  const col = new THREE.Color();
  for (let i = 0; i < N; i++) {
    const k = e.liste[Math.floor(hasard() * e.liste.length)];
    const x = (k % e.lc) + hasard(), y = Math.floor(k / e.lc) + hasard();
    p[i * 3] = (x / img.width - 0.5) * largeur;
    p[i * 3 + 1] = cy - (y / img.height - 0.5) * hauteur;
    p[i * 3 + 2] = (hasard() - 0.5) * 0.05;
    // couleur du pixel d'origine (bronze, orange), éclaircie pour briller
    col.setRGB(e.d[k * 4] / 255, e.d[k * 4 + 1] / 255, e.d[k * 4 + 2] / 255, THREE.SRGBColorSpace);
    c[i * 3] = Math.min(4, col.r * 3.2 + 0.05);
    c[i * 3 + 1] = Math.min(4, col.g * 3.2 + 0.03);
    c[i * 3 + 2] = Math.min(4, col.b * 3.2 + 0.01);
  }
  return { p, c, cy };
}

// ------------------------------------------------------------------ shaders des particules
const vertexParticules = /* glsl */ `
  attribute vec3 couleur;
  attribute float taille;
  attribute float alpha;
  attribute float phase;
  uniform float uEchelle;
  uniform float uTemps;
  uniform float uAlpha;
  varying vec3 vCouleur;
  varying float vAlpha;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    float d = max(-mv.z, 0.05);
    float s = taille * uEchelle / d;
    gl_PointSize = clamp(s, 1.0, 90.0);
    // un point plus petit qu'un pixel garde son énergie lumineuse
    vAlpha = alpha * uAlpha * min(1.0, s * s) * smoothstep(0.4, 2.5, d);
    vAlpha *= 0.78 + 0.22 * sin(uTemps * 5.0 + phase);
    vCouleur = couleur;
  }`;
const fragmentParticules = /* glsl */ `
  varying vec3 vCouleur;
  varying float vAlpha;
  void main() {
    vec2 d = gl_PointCoord - 0.5;
    float r2 = dot(d, d) * 4.0;
    if (r2 > 1.0) discard;
    gl_FragColor = vec4(vCouleur, exp(-r2 * 3.2) * vAlpha);
  }`;

function materiauParticules(echelle) {
  return new THREE.ShaderMaterial({
    uniforms: { uEchelle: { value: echelle }, uTemps: { value: 0 }, uAlpha: { value: 1 } },
    vertexShader: vertexParticules, fragmentShader: fragmentParticules,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
}

function texturePoint(c1, c2) {
  const c = document.createElement("canvas"); c.width = c.height = 256;
  const ctx = c.getContext("2d");
  const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.12, c1);
  g.addColorStop(0.4, c2);
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g; ctx.fillRect(0, 0, 256, 256);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// ------------------------------------------------------------------ scène
async function demarrer() {
  await Promise.all([
    chargerPolice("UB Mots", POLICE_MOTS, 800),
    chargerPolice("UB Surtitre", POLICE_SURTITRE, 700),
    chargerPolice("UB Phrase", POLICE_PHRASE, 500, "italic"),
    chargerPolice("UB Chinois", POLICE_CHINOIS, 900),
  ]);
  const logoImg = await chargerImage(LOGO);

  // Formes
  const CY_MOTS = 0.35;
  const F_BONJOUR = formeTexte("Bonjour", '800 560px "UB Mots"', 3.95, 1.6, CY_MOTS);
  const F_HELLO = formeTexte("Hello", '800 560px "UB Mots"', 3.7, 1.5, CY_MOTS);
  const F_NIHAO = formeTexte("你好", '900 560px "UB Chinois"', 3.4, 1.75, CY_MOTS);
  const LOGO_F = formeLogo(logoImg);
  const F_LOGO = LOGO_F.p;

  // Données propres à chaque particule
  const NUAGE = new Float32Array(N * 3);   // positions après l'explosion
  const R1 = new Float32Array(N), R2 = new Float32Array(N), ANNEAU = new Uint8Array(N);
  const DIR = new Float32Array(N * 3);
  const BASE = new Float32Array(N * 3);    // couleur de base
  const tailles = new Float32Array(N), phases = new Float32Array(N);
  // l'orange pur vire au rose sur le marine quand il est peu lumineux : on prend un orange ambré
  const cCreme = lin("#fff1dc"), cOrange = lin("#ffa54a"), cBleu = lin("#8ab8ff");
  for (let i = 0; i < N; i++) {
    // direction aléatoire sur la sphère, un peu plus vers la caméra
    let x, y, z, l;
    do { x = hasard() * 2 - 1; y = hasard() * 2 - 1; z = hasard() * 2 - 1; l = x * x + y * y + z * z; } while (l > 1 || l < 0.01);
    l = Math.sqrt(l); x /= l; y /= l; z /= l;
    DIR[i * 3] = x; DIR[i * 3 + 1] = y; DIR[i * 3 + 2] = z;
    const r = 0.8 + 5.0 * Math.pow(hasard(), 1.7);
    NUAGE[i * 3] = x * r; NUAGE[i * 3 + 1] = y * r * 1.4; NUAGE[i * 3 + 2] = z * r + 0.5;
    R1[i] = hasard(); R2[i] = hasard();
    ANNEAU[i] = hasard() < 0.38 ? 1 : 0;
    const u = hasard();
    const c = u < 0.84 ? cCreme : u < 0.96 ? cOrange : cBleu;
    const k = u < 0.84 ? 1.0 : u < 0.96 ? 1.5 : 1.2;
    BASE[i * 3] = c.r * k; BASE[i * 3 + 1] = c.g * k; BASE[i * 3 + 2] = c.b * k;
    tailles[i] = (u >= 0.84 && u < 0.96 ? 0.032 : 0.021) * (0.7 + 0.6 * hasard());
    phases[i] = hasard() * 6.283;
  }

  // Rendu WebGL
  const toile = document.createElement("canvas");
  toile.width = W; toile.height = H;
  const renderer = new THREE.WebGLRenderer({ canvas: toile, antialias: false, preserveDrawingBuffer: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(1);
  renderer.setSize(W, H, false);
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  const scene = new THREE.Scene();
  scene.background = lin(MARINE);
  const camera = new THREE.PerspectiveCamera(FOV, W / H, 0.1, 200);
  const echellePoints = H / (2 * Math.tan((FOV / 2) * Math.PI / 180));

  // Fond : halo bleu au centre, marine sur les bords
  const fond = new THREE.Mesh(
    new THREE.PlaneGeometry(90, 90),
    new THREE.ShaderMaterial({
      uniforms: { uA: { value: lin(HALO) }, uB: { value: lin(MARINE) } },
      vertexShader: "varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",
      fragmentShader: "uniform vec3 uA; uniform vec3 uB; varying vec2 vUv; void main(){ float d = length((vUv - vec2(0.5, 0.52)) * vec2(1.6, 1.0)); gl_FragColor = vec4(mix(uA, uB, smoothstep(0.0, 0.32, d)), 1.0); }",
      depthWrite: false,
    }));
  fond.position.z = -30;
  scene.add(fond);

  // Poussière lumineuse et bokeh : profondeur et parallaxe
  function nuageDecor(n, etendue, taille, alphaMax, couleurs, graine) {
    const h = aleatoire(graine);
    const g = new THREE.BufferGeometry();
    const p = new Float32Array(n * 3), c = new Float32Array(n * 3), t = new Float32Array(n), a = new Float32Array(n), ph = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      p[i * 3] = (h() - 0.5) * etendue[0]; p[i * 3 + 1] = (h() - 0.5) * etendue[1]; p[i * 3 + 2] = etendue[2] + h() * etendue[3];
      const col = couleurs[Math.floor(h() * couleurs.length)];
      c[i * 3] = col.r; c[i * 3 + 1] = col.g; c[i * 3 + 2] = col.b;
      t[i] = taille * (0.4 + h()); a[i] = alphaMax * (0.3 + 0.7 * h()); ph[i] = h() * 6.283;
    }
    g.setAttribute("position", new THREE.BufferAttribute(p, 3));
    g.setAttribute("couleur", new THREE.BufferAttribute(c, 3));
    g.setAttribute("taille", new THREE.BufferAttribute(t, 1));
    g.setAttribute("alpha", new THREE.BufferAttribute(a, 1));
    g.setAttribute("phase", new THREE.BufferAttribute(ph, 1));
    const m = materiauParticules(echellePoints);
    const o = new THREE.Points(g, m);
    o.frustumCulled = false;
    scene.add(o);
    return o;
  }
  const poussiere = nuageDecor(2600, [34, 46, -26, 34], 0.03, 0.55, [lin("#fff1dc"), lin("#9cc2ff"), lin("#ffc890")], 7);
  const bokeh = nuageDecor(30, [22, 34, -16, 14], 0.55, 0.05, [lin("#5d8fe8"), lin("#fff1dc")], 11);

  // Particules principales
  const geo = new THREE.BufferGeometry();
  const POS = new Float32Array(N * 3), COUL = new Float32Array(N * 3), ALPHA = new Float32Array(N);
  geo.setAttribute("position", new THREE.BufferAttribute(POS, 3).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute("couleur", new THREE.BufferAttribute(COUL, 3).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute("alpha", new THREE.BufferAttribute(ALPHA, 1).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute("taille", new THREE.BufferAttribute(tailles, 1));
  geo.setAttribute("phase", new THREE.BufferAttribute(phases, 1));
  const matParticules = materiauParticules(echellePoints);
  const particules = new THREE.Points(geo, matParticules);
  particules.frustumCulled = false;
  scene.add(particules);

  // Étoile (étincelle, éclairs), reflet horizontal et ondes de choc : scène dessinée après les traînées
  const sceneLumieres = new THREE.Scene();
  const additif = { blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false, transparent: true };
  const etoile = new THREE.Sprite(new THREE.SpriteMaterial({ map: texturePoint("rgba(255,214,160,1)", "rgba(255,129,20,0.45)"), ...additif }));
  const reflet = new THREE.Sprite(new THREE.SpriteMaterial({ map: texturePoint("rgba(255,226,190,0.9)", "rgba(255,129,20,0.25)"), ...additif }));
  sceneLumieres.add(etoile, reflet);
  const texAnneau = (() => {
    const c = document.createElement("canvas"); c.width = c.height = 512;
    const x = c.getContext("2d");
    const g = x.createRadialGradient(256, 256, 0, 256, 256, 256);
    g.addColorStop(0, "rgba(255,129,20,0)"); g.addColorStop(0.72, "rgba(255,129,20,0)");
    g.addColorStop(0.93, "rgba(255,190,120,0.9)"); g.addColorStop(0.97, "rgba(255,129,20,0.5)"); g.addColorStop(1, "rgba(255,129,20,0)");
    x.fillStyle = g; x.fillRect(0, 0, 512, 512);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  function onde() {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshBasicMaterial({ map: texAnneau, side: THREE.DoubleSide, ...additif }));
    m.rotation.x = -1.1;
    sceneLumieres.add(m);
    return m;
  }
  const onde1 = onde(), onde2 = onde();

  // Post-traitement : traînées (mouvement), halo lumineux, sortie sRGB
  const composer = new EffectComposer(renderer);
  composer.setPixelRatio(1);
  composer.setSize(W, H);
  composer.addPass(new RenderPass(scene, camera));
  const trainees = new AfterimagePass(0.0);
  composer.addPass(trainees);
  const passeLumieres = new RenderPass(sceneLumieres, camera);
  passeLumieres.clear = false;
  composer.addPass(passeLumieres);
  const halo = new UnrealBloomPass(new THREE.Vector2(W, H), 0.8, 0.45, 0.82);
  composer.addPass(halo);
  composer.addPass(new OutputPass());

  // Image finale : WebGL + vignette + carte et textes (dessinés nets en 2D)
  const sortie = document.createElement("canvas");
  sortie.width = W; sortie.height = H;
  sortie.id = "animation";
  const ctx = sortie.getContext("2d");
  document.body.appendChild(sortie);
  const vignette = ctx.createRadialGradient(W / 2, H * 0.48, H * 0.25, W / 2, H * 0.48, H * 0.72);
  vignette.addColorStop(0, "rgba(2,8,20,0)");
  vignette.addColorStop(1, "rgba(2,8,20,0.6)");

  // ---------------------------------------------------------------- caméra
  const cles = [   // temps, position, point visé, roulis (degrés)
    [0.0, [0, 0, 15.5], [0, 0, 0], 0],
    [0.3, [0, 0, 15.0], [0, 0, 0], 0],
    [1.1, [0.6, 0.3, 11.0], [0, 0.1, 0], 5],
    [2.3, [-4.2, 0.9, 12.6], [0, 0.3, 0], -2],
    [3.15, [-2.6, 0.5, 13.4], [0, 0.3, 0], 0],
    [4.25, [4.4, -0.9, 12.3], [0, 0.3, 0], 3],
    [5.0, [3.0, -0.4, 13.2], [0, 0.3, 0], 1],
    [6.1, [-3.4, 2.0, 12.6], [0, 0.3, 0], -3],
    [6.85, [-2.0, 1.2, 13.4], [0, 0.3, 0], -1],
    [7.45, [0.3, 0.3, 11.2], [0, 0.3, 0], 2],
    [8.0, [0, 0, Z_CAMERA], [0, 0, 0], 0],
    [DUREE, [0, 0, Z_CAMERA], [0, 0, 0], 0],
  ];
  const courbePos = new THREE.CatmullRomCurve3(cles.map((k) => new THREE.Vector3(...k[1])), false, "centripetal");
  const courbeVise = new THREE.CatmullRomCurve3(cles.map((k) => new THREE.Vector3(...k[2])), false, "centripetal");
  function placerCamera(t) {
    let i = 0;
    while (i < cles.length - 2 && t >= cles[i + 1][0]) i++;
    const f = borne((t - cles[i][0]) / (cles[i + 1][0] - cles[i][0]));
    const u = (i + f) / (cles.length - 1);
    camera.position.copy(courbePos.getPoint(u));
    const vise = courbeVise.getPoint(u);
    const roulis = THREE.MathUtils.degToRad(cles[i][3] + (cles[i + 1][3] - cles[i][3]) * entreeSortieCubique(f));
    camera.up.set(Math.sin(roulis), Math.cos(roulis), 0);
    camera.lookAt(vise);
  }

  // ---------------------------------------------------------------- particules : chorégraphie
  const T_EXPLOSION = 0.3;
  const T_ECLAIR = 7.42;
  const CENTRE = [0, 0.3, 0];
  const ANNEAU_CENTRE = LOGO_F.cy;
  function bruit(x, y, z, t, o) {
    o[0] = Math.sin(1.7 * y + 1.3 * t + Math.sin(2.1 * z + 0.7 * t));
    o[1] = Math.sin(1.9 * z + 1.1 * t + Math.sin(1.6 * x - 0.9 * t));
    o[2] = Math.sin(1.5 * x - 1.2 * t + Math.sin(2.3 * y + 0.8 * t));
  }
  const nb = [0, 0, 0];

  function particulesA(t) {
    const tc = t;
    for (let i = 0; i < N; i++) {
      const j = i * 3;
      let x, y, z, a = 1;
      let cr = BASE[j], cg = BASE[j + 1], cb = BASE[j + 2];
      const r1 = R1[i], r2 = R2[i];

      // 1. explosion depuis l'étincelle
      const eExp = sortieExpo(borne((Math.min(t, 0.75 + 0.4 * r1) - T_EXPLOSION) / 0.7));
      const ex = NUAGE[j] * eExp, ey = NUAGE[j + 1] * eExp, ez = NUAGE[j + 2] * eExp;

      if (t < T_EXPLOSION) { x = DIR[j] * 0.05; y = DIR[j + 1] * 0.05; z = DIR[j + 2] * 0.05; a = 0; }
      else if (t < 3.15) {
        // 2. tourbillon jusqu'à « Bonjour »
        const p = borne((t - (0.75 + 0.4 * r1)) / 1.1);
        const e = entreeSortieCubique(p);
        const mx = ex + (F_BONJOUR[j] - ex) * e, my = ey + (F_BONJOUR[j + 1] - ey) * e, mz = ez + (F_BONJOUR[j + 2] - ez) * e;
        const ang = 4.2 * (1 - e) * (1 - e);   // tourbillon
        const ca = Math.cos(ang), sa = Math.sin(ang);
        x = mx * ca - my * sa; y = mx * sa + my * ca; z = mz;
        bruit(mx, my, mz, tc, nb);
        const s = Math.sin(Math.PI * p) * 0.35;
        x += nb[0] * s; y += nb[1] * s; z += nb[2] * s;
      } else if (t < 5.0) {
        // 3. coup de vent, de gauche à droite : « Bonjour » devient « Hello »
        const depart = 3.15 + 0.3 * borne((F_BONJOUR[j] + 2.0) / 4.0) + 0.08 * r1;
        const p = borne((t - depart) / 0.75);
        const e = entreeSortieCubique(p);
        const s = Math.sin(Math.PI * p);
        bruit(F_BONJOUR[j], F_BONJOUR[j + 1], F_BONJOUR[j + 2], tc, nb);
        x = F_BONJOUR[j] + (F_HELLO[j] - F_BONJOUR[j]) * e + s * (0.5 + nb[0] * 0.7);
        y = F_BONJOUR[j + 1] + (F_HELLO[j + 1] - F_BONJOUR[j + 1]) * e + s * (0.9 * (r2 - 0.3) + nb[1] * 0.6);
        z = F_BONJOUR[j + 2] + (F_HELLO[j + 2] - F_BONJOUR[j + 2]) * e + s * (2.4 * r1 + nb[2] * 0.6);
      } else if (t < 6.85) {
        // 4. tornade autour de l'axe vertical : « Hello » devient « 你好 »
        // départ décalé selon la hauteur : la tornade se tord
        const p = borne((t - (5.0 + 0.2 * borne((F_HELLO[j + 1] - CY_MOTS + 0.8) / 1.6) + 0.08 * r1)) / 0.8);
        const e = entreeSortieCubique(p);
        const mx = F_HELLO[j] + (F_NIHAO[j] - F_HELLO[j]) * e;
        const my = F_HELLO[j + 1] + (F_NIHAO[j + 1] - F_HELLO[j + 1]) * e;
        const mz = F_HELLO[j + 2] + (F_NIHAO[j + 2] - F_HELLO[j + 2]) * e;
        const s = Math.sin(Math.PI * p);
        const ang = 2 * Math.PI * e;   // un tour complet : nul au départ comme à l'arrivée
        const ca = Math.cos(ang), sa = Math.sin(ang), k = 1 + 0.55 * s;
        x = (mx * ca + mz * sa) * k; z = (-mx * sa + mz * ca) * k; y = my + s * 0.25 * (r2 - 0.5);
      } else if (t < 8.25) {
        // 5. effondrement en un point, éclair, puis le logo se dessine
        const p = borne((t - (6.85 + 0.12 * r1)) / 1.05);
        const cx = CENTRE[0] + DIR[j] * 0.22 * r2, cy = CENTRE[1] + DIR[j + 1] * 0.22 * r2, cz = CENTRE[2] + DIR[j + 2] * 0.22 * r2;
        if (p < 0.5) {
          const q = entreeCubique(p / 0.5);
          const mx = F_NIHAO[j] + (cx - F_NIHAO[j]) * q, my = F_NIHAO[j + 1] + (cy - F_NIHAO[j + 1]) * q, mz = F_NIHAO[j + 2] + (cz - F_NIHAO[j + 2]) * q;
          const ang = 3.2 * q * q;      // spirale autour du centre
          const ca = Math.cos(ang), sa = Math.sin(ang);
          x = (mx - CENTRE[0]) * ca - (my - CENTRE[1]) * sa + CENTRE[0]; y = (mx - CENTRE[0]) * sa + (my - CENTRE[1]) * ca + CENTRE[1]; z = mz;
        } else {
          const q = sortieCubique((p - 0.5) / 0.5);
          const mx = cx + (F_LOGO[j] - cx) * q, my = cy + (F_LOGO[j + 1] - cy) * q, mz = cz + (F_LOGO[j + 2] - cz) * q;
          const ang = 3.2 * (1 - q) * (1 - q);   // la spirale se déroule en dessinant le logo
          const ca = Math.cos(ang), sa = Math.sin(ang);
          x = (mx - CENTRE[0]) * ca - (my - CENTRE[1]) * sa + CENTRE[0]; y = (mx - CENTRE[0]) * sa + (my - CENTRE[1]) * ca + CENTRE[1];
          z = mz + Math.sin(Math.PI * q) * 1.2 * DIR[j + 2];
          cr += (LOGO_F.c[j] - cr) * q; cg += (LOGO_F.c[j + 1] - cg) * q; cb += (LOGO_F.c[j + 2] - cb) * q;
        }
      } else {
        // 6. le logo réel se pose : les particules partent en anneau en orbite, ou se dispersent
        const p = borne((t - (8.25 + 0.45 * r1)) / 0.95);
        const e = entreeSortieCubique(p);
        if (ANNEAU[i]) {
          const ang = r2 * 6.2832 + t * 0.55;
          const r = 2.32 + (r1 - 0.5) * 0.3;
          const ax = Math.cos(ang) * r, az = Math.sin(ang) * r;
          const inc = 0.32;           // inclinaison de l'anneau
          const bx = ax, by = ANNEAU_CENTRE - az * Math.sin(inc) + (DIR[j + 1]) * 0.05, bz = az * Math.cos(inc);
          x = F_LOGO[j] + (bx - F_LOGO[j]) * e; y = F_LOGO[j + 1] + (by - F_LOGO[j + 1]) * e; z = F_LOGO[j + 2] + (bz - F_LOGO[j + 2]) * e;
          a = 0.75;
          const m = e;               // l'anneau reprend les couleurs de la marque
          cr = LOGO_F.c[j] + (BASE[j] - LOGO_F.c[j]) * m; cg = LOGO_F.c[j + 1] + (BASE[j + 1] - LOGO_F.c[j + 1]) * m; cb = LOGO_F.c[j + 2] + (BASE[j + 2] - LOGO_F.c[j + 2]) * m;
        } else {
          const d = 1.0 + 2.2 * r2;
          x = F_LOGO[j] + DIR[j] * d * e; y = F_LOGO[j + 1] + DIR[j + 1] * d * e + 0.4 * e; z = F_LOGO[j + 2] + DIR[j + 2] * d * e;
          a = 1 - e;
          cr = LOGO_F.c[j]; cg = LOGO_F.c[j + 1]; cb = LOGO_F.c[j + 2];
        }
      }
      POS[j] = x; POS[j + 1] = y; POS[j + 2] = z;
      COUL[j] = cr; COUL[j + 1] = cg; COUL[j + 2] = cb;
      ALPHA[i] = a * 0.17;
    }
    geo.attributes.position.needsUpdate = true;
    geo.attributes.couleur.needsUpdate = true;
    geo.attributes.alpha.needsUpdate = true;
  }

  function effets(t) {
    // étincelle qui grossit, explose, puis l'éclair du logo
    let s = 0, o = 0;
    if (t < T_EXPLOSION) { s = 1.6 + 1.6 * (t / T_EXPLOSION) + 0.3 * Math.sin(t * 40); o = 0.85 + 0.15 * (t / T_EXPLOSION); }
    else if (t < 1.2) { const p = (t - T_EXPLOSION) / 0.9; s = 4.5 * (1 - p) + 0.3; o = Math.pow(1 - p, 2); }
    else if (t > 6.95 && t < 8.1) {
      const p = (t - 6.95) / (T_ECLAIR - 6.95);
      if (t < T_ECLAIR) { s = 0.3 + 1.6 * p * p; o = p; } else { const q = (t - T_ECLAIR) / (8.1 - T_ECLAIR); s = 4.2 * (1 - q) + 0.3; o = Math.pow(1 - q, 2); }
    }
    etoile.scale.setScalar(s);
    etoile.material.opacity = o;
    etoile.position.set(t < 3 ? 0 : CENTRE[0], t < 3 ? 0 : CENTRE[1], 0);
    etoile.visible = o > 0.001;
    reflet.position.copy(etoile.position);
    reflet.scale.set(s * 4.5, s * 0.09, 1);
    reflet.material.opacity = o * 0.9;
    reflet.material.rotation = 0;
    reflet.visible = etoile.visible;
    const ondes = [[onde1, T_EXPLOSION, 0.9, 9, [0, 0, 0]], [onde2, T_ECLAIR, 0.8, 6.5, CENTRE]];
    for (const [m, t0, d, r, c] of ondes) {
      const p = (t - t0) / d;
      m.visible = p > 0 && p < 1;
      if (m.visible) { m.scale.setScalar(0.15 + r * sortieCubique(p)); m.material.opacity = Math.pow(1 - p, 1.6); m.position.set(...c); }
    }
    // traînées : fortes pendant les mouvements rapides, faibles pendant la lecture des mots
    const mouvement = Math.max(
      lisse(0.28, 0.4, t) * (1 - lisse(1.6, 2.4, t)),
      lisse(3.1, 3.3, t) * (1 - lisse(4.0, 4.4, t)),
      lisse(4.95, 5.15, t) * (1 - lisse(5.8, 6.2, t)),
      lisse(6.9, 7.1, t) * (1 - lisse(7.8, 8.2, t)));
    trainees.uniforms.damp.value = 0.35 + 0.53 * mouvement;
    matParticules.uniforms.uTemps.value = t;
    poussiere.material.uniforms.uTemps.value = t;
    bokeh.material.uniforms.uTemps.value = t;
    poussiere.position.y = t * 0.08;
    bokeh.position.y = t * 0.05;
    poussiere.material.uniforms.uAlpha.value = 0.5 + 0.5 * lisse(0, 1.2, t);
  }

  // ---------------------------------------------------------------- carte et textes finaux
  function dessinerFinal(t) {
    const pc = borne((t - 8.12) / 0.5);
    if (pc <= 0) return;
    const e = sortieRetour(pc);
    const l = CARTE.l * (0.9 + 0.1 * e), h = CARTE.h * (0.9 + 0.1 * e);
    ctx.save();
    ctx.globalAlpha = borne(pc * 1.8);
    ctx.shadowColor = "rgba(255,129,20,0.42)";
    ctx.shadowBlur = 90;
    const g = ctx.createLinearGradient(0, CARTE.cy - h / 2, 0, CARTE.cy + h / 2);
    g.addColorStop(0, "#fbf7f0");
    g.addColorStop(1, "#efe6d6");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.roundRect(CARTE.cx - l / 2, CARTE.cy - h / 2, l, h, 46);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = "rgba(255,255,255,0.7)";
    ctx.lineWidth = 2;
    ctx.stroke();
    // le vrai logo, pixels d'origine
    const pl = borne((t - 8.25) / 0.4);
    ctx.globalAlpha = sortieCubique(pl);
    const ll = CARTE.logoL * (0.9 + 0.1 * e), lh = ll * logoImg.height / logoImg.width;
    ctx.drawImage(logoImg, CARTE.cx - ll / 2, CARTE.cy - lh / 2, ll, lh);
    ctx.restore();

    // surtitre puis phrase, qui montent doucement
    const t1 = sortieCubique(borne((t - 8.7) / 0.5)), t2 = sortieCubique(borne((t - 8.9) / 0.55));
    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    if (t1 > 0) {
      ctx.globalAlpha = t1;
      ctx.font = '700 44px "UB Surtitre"';
      ctx.letterSpacing = "8px";
      ctx.fillStyle = ORANGE;
      ctx.fillText(TEXTES.surtitre, W / 2, 1232 + 24 * (1 - t1));
    }
    if (t2 > 0) {
      ctx.globalAlpha = t2;
      ctx.letterSpacing = "0px";
      ctx.font = 'italic 500 68px "UB Phrase"';
      const y = 1338 + 24 * (1 - t2);
      const largeur = ctx.measureText(TEXTES.phrase).width, point = ctx.measureText(".").width;
      const x0 = W / 2 - (largeur + point) / 2;
      ctx.textAlign = "left";
      ctx.fillStyle = CREME;
      ctx.fillText(TEXTES.phrase, x0, y);
      ctx.fillStyle = ORANGE;               // le point orange du site
      ctx.fillText(".", x0 + largeur, y);
    }
    ctx.restore();
  }

  // ---------------------------------------------------------------- une image
  function rendre(t) {
    placerCamera(t);
    particulesA(t);
    effets(t);
    composer.render();
    ctx.globalAlpha = 1;
    ctx.drawImage(toile, 0, 0);
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, W, H);
    dessinerFinal(t);
  }

  if (CAPTURE) {
    let derniere = -1;
    window.ubRendre = (image) => {
      if (image !== derniere + 1) throw new Error("Les images doivent être rendues dans l'ordre (traînées)");
      derniere = image;
      rendre(image / IPS);
    };
    window.ubImage = () => sortie.toDataURL("image/png");
    window.ubInfos = { W, H, IPS, DUREE, images: DUREE * IPS, langue: LANGUE };
    window.ubPret = true;
  } else {
    const debut = performance.now();
    const boucle = () => {
      rendre(((performance.now() - debut) / 1000) % DUREE);
      requestAnimationFrame(boucle);
    };
    boucle();
  }
}

demarrer().catch((e) => {
  document.body.insertAdjacentHTML("beforeend", `<p style="color:#fff;font:16px sans-serif;padding:16px">Animation indisponible : ${e.message}</p>`);
  throw e;
});
