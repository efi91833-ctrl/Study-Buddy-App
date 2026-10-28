import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { Circulation, BEDS, VEINS, environment, envNeutral, SKIN_SHARE } from './sim.js';

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const el = (tag, attrs = {}, html = '') => { const e = document.createElement(tag); for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v); if (html) e.innerHTML = html; return e; };
const fmt = (x, d = 0) => (x == null || !isFinite(x)) ? '–' : x.toFixed(d);
const DT = 0.0004;

/* ---------------- simulation + baseline ---------------- */
const sim = new Circulation();
sim.p.baroreflex = false; sim.run(40);
sim.set = sim.stats.map; sim.setAutoRef(); sim.p.baroreflex = true; sim.run(4);
const BASE = structuredClone(sim.stats);
const BASE_LOOP = sim.loop.slice();
// cycle-mean volumes, used to scale the 3D chambers and veins
const refV = {}; { const acc = {}; let n = 0; const b0 = sim.beat; while (sim.beat === b0) { sim.step(DT); n++; for (const k in sim.V) acc[k] = (acc[k] || 0) + sim.V[k]; } for (const k in acc) refV[k] = acc[k] / n; }
const refPao = BASE.map, refPpa = BASE.pam;
const snapshot = () => structuredClone({ V: sim.V, p: sim.p, eff: sim.eff, modTarget: sim.modTarget, set: sim.set, mapF: sim.mapF, tc: sim.tc, T: sim.T, auto: sim.auto });
const START = snapshot();
let history = []; // [ {t, ao, lv, pa, cv} ]

/* ---------------- scenarios ---------------- */
const DRUGS = [
  { id: 'phe', name: 'Phenylephrine', cls: 'α1 agonist', m: { Rsys: 1.7, venV0: 0.94 }, hl: ['arterioles', 'veins'], note: 'Constricts arterioles and veins. MAP rises, then the baroreflex slows the heart.' },
  { id: 'ne', name: 'Noradrenaline', cls: 'α1 + β1', m: { Rsys: 1.6, contr: 1.3, hr: 1.05, venV0: 0.92 }, hl: ['arterioles', 'lv'], note: 'Pressor plus inotrope. The reflex bradycardia often cancels the β1 rate effect.' },
  { id: 'dob', name: 'Dobutamine', cls: 'β1 agonist', m: { contr: 1.6, hr: 1.15, Rsys: 0.92 }, hl: ['lv', 'rv'], note: 'Steeper ESPVR: stroke volume and EF rise at the same filling pressure.' },
  { id: 'ntg', name: 'Nitroglycerin', cls: 'NO donor', m: { venV0: 1.15, Rsys: 0.92, Rcor: 0.8 }, hl: ['veins'], note: 'Mostly a venodilator: preload, EDV and LVEDP fall, so myocardial O₂ demand drops.' },
  { id: 'hyd', name: 'Hydralazine', cls: 'arteriolar dilator', m: { Rsys: 0.6 }, hl: ['arterioles'], note: 'TPR falls, MAP drops, reflex tachycardia follows.' },
  { id: 'met', name: 'Metoprolol', cls: 'β1 blocker', m: { hr: 0.78, contr: 0.8, hrGain: 0.4 }, hl: ['lv', 'ra'], note: 'Slower rate, weaker contraction, and a blunted reflex heart-rate response.' },
  { id: 'atr', name: 'Atropine', cls: 'muscarinic blocker', m: { hr: 1.35 }, hl: ['ra'], note: 'Removes vagal tone at the SA node, so the resting rate rises.' },
];
const DISEASES = [
  { id: 'none', name: 'Healthy adult', note: 'Resting, supine, 70 kg.' },
  { id: 'hfref', name: 'Systolic heart failure', m: { contr: 0.4 }, vol: 600, hl: ['lv'], note: 'Contractility 40 %, salt and water retained (+600 ml).' },
  { id: 'hfpef', name: 'Diastolic heart failure', m: { lvA: 1.8, lvB: 1.1 }, vol: 400, hl: ['lv'], note: 'Stiff LV: the filling curve is steep, so LVEDP is high at a normal EDV and EF is preserved.' },
  { id: 'as', valve: 'v_mitral', name: 'Aortic stenosis', valve: { av: { K: 5e-4 } }, hl: ['v_aortic', 'lv'], note: 'Narrow aortic valve: LV systolic pressure far above aortic.' },
  { id: 'ar', name: 'Aortic regurgitation', valve: { av: { Rb: 0.35 } }, m: { lvA: 0.14 }, hl: ['v_aortic', 'aorta'], note: 'Leaky aortic valve in a dilated LV: wide pulse pressure, low diastolic.' },
  { id: 'ms', name: 'Mitral stenosis', valve: { mv: { K: 6e-4 } }, hl: ['v_mitral', 'la'], note: 'LA pressure rises, the lungs congest, LV underfills.' },
  { id: 'mr', name: 'Mitral regurgitation', valve: { mv: { Rb: 0.25 } }, m: { lvA: 0.28 }, hl: ['v_mitral', 'la'], note: 'Part of each stroke goes back into the LA (high EF, low forward SV); chronic volume load dilates the LV.' },
  { id: 'htn', name: 'Hypertension', m: { Rsys: 1.45, artC: 0.6 }, hl: ['arterioles', 'aorta'], note: 'High TPR and stiff arteries. The baroreflex resets to the new level.', reset: true },
  { id: 'sep', name: 'Septic shock', m: { Rsys: 0.45, venV0: 1.12, contr: 0.9 }, hl: ['arterioles', 'veins'], note: 'Arteriolar and venous dilation: high CO, low TPR, low MAP.' },
  { id: 'hyp', name: 'Haemorrhagic shock', vol: -1500, hl: ['veins'], note: '1.5 L lost (30 %). Watch the reflex fight it.' },
  { id: 'pah', name: 'Pulmonary hypertension', m: { Rpulm: 4, paC: 0.5 }, hl: ['pa', 'rv'], note: 'Pulmonary resistance ×4: RV and RA pressures rise, LV underfills.' },
];
const ui = { drugs: new Set(), disease: 'none', volOffset: 0 };
const ENV0 = { air: 24, core: 37, alt: 0, posture: 'supine' };
const envUI = { ...ENV0, info: environment(ENV0).info, fluidLost: 0 };
function applyEnv() { const { env, info } = environment(envUI); sim.p.envT = env; envUI.info = info; renderEnv(sim.stats); }
function renderEnv(s) {
  const box = $('#envBox'); if (!box || !s) return;
  const i = envUI.info, c = envUI, e = sim.p.env, b = s.beds;
  const skin = Object.entries(SKIN_SHARE).reduce((a, [id, sh]) => { const k = i.k; return a + b[id] * sh * k / (1 - sh + sh * k); }, 0) / 1000;
  const L = [];
  if (i.heat > 0.05) L.push(`<b>Skin vessels open wide</b> to carry heat to the surface: skin blood flow ≈ ${fmt(skin, 1)} L/min (normally 0.5). Warm skin veins also fill up, so less blood returns to the heart.`);
  if (i.heat > 0.25) L.push('Gut and kidney arterioles narrow to free blood for the skin; the heart beats faster to keep the pressure up.');
  if (i.sweat > 0.05) L.push(`Sweating ≈ ${fmt(i.sweat, 1)} L per hour. Press <b>Spend 1 hour here</b> to see what the lost plasma does.`);
  if (i.cold > 0.05) L.push(`<b>Skin vessels clamp shut</b> to keep heat in: skin flow ≈ ${fmt(skin, 2)} L/min. Blood shifts to the core and sympathetic tone rises, so blood pressure goes up a little (cold pressor response).`);
  if (i.shiver > 0.05) L.push(`<b>Shivering</b> raises heat production about ×${fmt(1 + 2 * i.shiver, 1)}; the working muscles need more blood, so cardiac output rises.`);
  if (c.core > 37.2) L.push(`<b>Fever</b> speeds the pacemaker (≈ +7 beats/min per °C) and raises metabolism ≈ 10 % per °C, so tissues dilate their arterioles.`);
  if (c.core < 36.5) L.push(`<b>A cold heart</b> beats slowly (pacemaker cells fire less often), squeezes and relaxes more slowly, and the blood gets thicker (viscosity ×${fmt(e.visc, 2)}).`);
  if (c.core <= 32) L.push('<span class="warn">Below 32 °C the real heart risks dangerous rhythms (not modelled here).</span>');
  if (c.core >= 40) L.push('<span class="warn">Above 40 °C heat stroke threatens the brain and the heart; skin flow and dehydration both strain the circulation.</span>');
  if (c.alt > 1200) L.push(`<b>Thin air:</b> oxygen saturation ≈ ${fmt(i.spo2)} %. The carotid bodies sense low O₂ and raise sympathetic drive (faster heart). Lung arteries constrict where O₂ is low, so mean lung-artery pressure rises (now ${fmt(s.pam)} mmHg, normally ~13).`);
  if (c.posture === 'stand') L.push(`<b>Standing:</b> gravity pulls ≈ 500 ml into the leg veins. Less comes back to the heart, so stroke volume falls (Frank–Starling, now ${fmt(s.sv)} ml) and the baroreflex speeds the heart and narrows arterioles.${sim.p.baroreflex ? ' Switch the baroreflex off to see the pressure fall that makes people faint.' : ' With the baroreflex off, pressure falls: this is how orthostatic fainting happens.'}`);
  if (c.posture === 'legs') L.push(`<b>Legs raised:</b> ≈ 300 ml drains from the leg veins back to the heart, so stroke volume rises (now ${fmt(s.sv)} ml). Doctors use this as a quick test of whether fluids would help.`);
  if (!L.length) L.push('Comfortable surroundings: the body is in its resting balance.');
  box.innerHTML = `<div class="meters"><div>Skin blood flow<b>${fmt(skin, skin < 1 ? 2 : 1)} L/min</b></div><div>Metabolism<b>×${fmt(i.metab, 2)}</b></div><div>O₂ saturation<b>${fmt(i.spo2)} %</b></div><div>Sweat<b>${fmt(i.sweat, 1)} L/h</b></div></div><ul>${L.map(x => `<li>${x}</li>`).join('')}</ul>`;
  $('#envFluid').textContent = envUI.fluidLost > 1 ? `${fmt(envUI.fluidLost)} ml of plasma lost so far` : '';
}
function applyMods() {
  const t = { hr: 1, contr: 1, Rsys: 1, Rcor: 1, venV0: 1, Rpulm: 1, lvA: 1, lvB: 1, artC: 1, paC: 1, hrGain: 1 };
  const d = DISEASES.find(x => x.id === ui.disease);
  const all = [d, ...DRUGS.filter(x => ui.drugs.has(x.id))];
  for (const s of all) if (s && s.m) for (const k in s.m) t[k] *= s.m[k];
  sim.modTarget = t;
  for (const k of ['mv', 'av', 'tv', 'pv']) { sim.p.valves[k].K = d.valve?.[k]?.K || 0; sim.p.valves[k].Rb = d.valve?.[k]?.Rb || 0; }
  const vol = d.vol || 0; if (vol !== ui.volOffset) { sim.infuse(vol - ui.volOffset, 20); ui.volOffset = vol; }
}

/* ---------------- highlight targets ---------------- */
const HL = {
  lv: ['lv'], rv: ['rv'], la: ['la'], ra: ['ra'], heart: ['lv', 'rv', 'la', 'ra'],
  aorta: ['aorta'], pa: ['pa'], pv: ['pv'], vc: ['vc'], v_aortic: ['v_aortic'], v_mitral: ['v_mitral'],
  arterioles: ['a_head', 'a_arm', 'a_spl', 'a_renal', 'a_leg', 'a_trunk', 'a_coronary'],
  veins: ['vn_head', 'vn_arm', 'vn_spl', 'vn_leg', 'vn_renal', 'vn_trunk', 'vc'],
  brain: ['a_head'], coronary: ['a_coronary'], spl: ['a_spl'], renal: ['a_renal'], arm: ['a_arm'], leg: ['a_leg'], trunk: ['a_trunk'],
  'vein-up': ['vn_head', 'vn_arm'], 'vein-spl': ['vn_spl'], 'vein-low': ['vn_leg', 'vn_renal', 'vn_trunk'],
};
const hlNow = new Set(); let hlHold = 0;
function hl(keys) { hlNow.clear(); for (const k of (keys || '').split(/[ ,]+/).filter(Boolean)) for (const s of (HL[k] || [k])) hlNow.add(s); hlHold = performance.now(); }
function bindHL(node, keys) {
  node.addEventListener('pointerenter', () => hl(keys)); node.addEventListener('focus', () => hl(keys));
  node.addEventListener('pointerleave', () => hlNow.clear()); node.addEventListener('blur', () => hlNow.clear());
  node.addEventListener('input', () => hl(keys));
}

/* ---------------- vitals strip ---------------- */
const VITALS = [
  { k: 'hr', lab: 'HR', unit: '/min', col: 'var(--hr)', v: s => fmt(s.hr), b: s => s.hr },
  { k: 'abp', lab: 'ABP', unit: '', col: 'var(--abp)', v: s => `${fmt(s.sbp)}/${fmt(s.dbp)}`, b: s => s.map, pre: s => `MAP ${fmt(s.map)} · ` },
  { k: 'co', lab: 'CO', unit: 'L/min', v: s => fmt(s.co, 1), b: s => s.co },
  { k: 'sv', lab: 'SV', unit: 'ml', v: s => fmt(s.fsv), b: s => s.fsv },
  { k: 'ef', lab: 'EF', unit: '%', v: s => fmt(s.ef * 100), b: s => s.ef },
  { k: 'cvp', lab: 'CVP', unit: 'mmHg', col: 'var(--cvp)', v: s => fmt(s.rap, 1), b: s => s.rap },
  { k: 'pap', lab: 'PAP', unit: '', col: 'var(--pap)', v: s => `${fmt(s.pas)}/${fmt(s.pad)}`, b: s => s.pam },
  { k: 'pcwp', lab: 'PCWP', unit: 'mmHg', v: s => fmt(s.pcwp, 0), b: s => s.pcwp },
  { k: 'tpr', lab: 'TPR', unit: 'Wood u.', v: s => fmt(s.tpr, 1), b: s => s.tpr },
];
const vitalsEl = $('#vitals');
for (const v of VITALS) vitalsEl.append(el('div', { class: 'vit', id: 'v-' + v.k }, `<div class="lab"><span>${v.lab}</span><span>${v.unit}</span></div><div class="val" style="color:${v.col || 'var(--mon-text)'}">–</div><div class="dl">baseline</div>`));
function renderVitals(s) {
  for (const v of VITALS) {
    const n = $('#v-' + v.k); n.querySelector('.val').innerHTML = v.v(s);
    const d = (v.b(s) / v.b(BASE) - 1) * 100, dl = n.querySelector('.dl');
    dl.textContent = v.pre ? v.pre(s).replace(' · ', '') + (Math.abs(d) < 2 ? '' : ` · ${d > 0 ? '+' : '−'}${fmt(Math.abs(d))} %`) : (Math.abs(d) < 2 ? 'at baseline' : `${d > 0 ? '+' : '−'}${fmt(Math.abs(d))} %`);
    dl.className = 'dl' + (Math.abs(d) < 2 ? '' : d > 0 ? ' up' : ' down');
  }
  $('#volNow').textContent = `${fmt(s.vol)} ml now`;
}

/* ---------------- controls ---------------- */
function slider({ host, id, label, min, max, step, value, out, onInput, hlKeys, sub, cls = '', zoom }) {
  const w = el('div', { class: 'ctl ' + cls });
  w.innerHTML = `<label for="${id}">${label}</label><output id="${id}-o"></output><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${value}">${sub ? `<div class="sub">${sub}</div>` : ''}`;
  host.append(w);
  const inp = w.querySelector('input'), o = w.querySelector('output');
  const upd = () => { const v = +inp.value; o.textContent = out(v); onInput(v); };
  inp.addEventListener('input', upd); upd();
  if (hlKeys) bindHL(inp, hlKeys);
  if (zoom) { const b = el('button', { class: 'zbtn', type: 'button' }, 'Magnify the arterioles'); b.addEventListener('click', () => openZoom(zoom)); w.querySelector('.sub')?.append(' ', b) || w.append(b); }
  return inp;
}
const controls = [];
function buildControls() {
  const dz = $('#diseases');
  for (const d of DISEASES) {
    const b = el('button', { class: 'chip', type: 'button', 'aria-pressed': d.id === ui.disease }, d.name);
    b.addEventListener('click', () => {
      ui.disease = d.id; $$('#diseases .chip').forEach(c => c.setAttribute('aria-pressed', c === b));
      sim.set = d.reset ? BASE.map * 1.25 : BASE.map;
      applyMods(); $('#scenNote').textContent = d.note; hl((d.hl || []).join(' '));
    });
    if (d.hl) bindHL(b, d.hl.join(' '));
    dz.append(b);
  }
  $('#scenNote').textContent = DISEASES[0].note;
  controls.push(slider({ host: $('#envCtl'), id: 'env-air', label: 'Air temperature', min: -10, max: 45, step: 1, value: 24,
    out: v => `${v} °C`, onInput: v => { envUI.air = v; applyEnv(); }, hlKeys: 'arm leg trunk veins', sub: 'Skin senses the air: heat opens skin vessels, cold closes them (comfortable ≈ 24 °C lightly dressed).' }));
  controls.push(slider({ host: $('#envCtl'), id: 'env-core', label: 'Body (core) temperature', min: 28, max: 41, step: 0.1, value: 37,
    out: v => `${v.toFixed(1)} °C${v >= 38 ? ' · fever' : v < 35 ? ' · hypothermia' : ''}`, onInput: v => { envUI.core = v; applyEnv(); }, hlKeys: 'heart arterioles', sub: 'Fever above 38 °C; hypothermia below 35 °C.' }));
  controls.push(slider({ host: $('#envCtl'), id: 'env-alt', label: 'Altitude', min: 0, max: 6000, step: 100, value: 0,
    out: v => `${v} m`, onInput: v => { envUI.alt = v; applyEnv(); }, hlKeys: 'pa rv', sub: 'First hours at altitude (no acclimatisation yet). Everest base camp ≈ 5300 m.' }));
  $$('#posture .chip').forEach(b => b.addEventListener('click', () => { envUI.posture = b.dataset.pos; $$('#posture .chip').forEach(x => x.setAttribute('aria-pressed', x === b)); applyEnv(); hl('vein-low'); }));
  $('#envHour').addEventListener('click', () => {
    const i = envUI.info, ml = Math.round(i.sweat * 1000 * 0.25 + i.cold * 250); // plasma's share of sweat; cold diuresis
    if (ml < 5) { $('#envFluid').textContent = 'No extra fluid loss in these surroundings.'; return; }
    envUI.fluidLost += ml; sim.infuse(-ml, 15); hl('veins'); renderEnv(sim.stats); });
  $('#envDrink').addEventListener('click', () => { if (envUI.fluidLost > 0) { sim.infuse(envUI.fluidLost, 20); envUI.fluidLost = 0; renderEnv(sim.stats); } });
  $('#baro').addEventListener('change', e => { sim.p.baroreflex = e.target.checked; });
  $('#autoreg').addEventListener('change', e => { sim.p.autoreg = e.target.checked; });
  controls.push(slider({ host: $('#autoCtl'), id: 'symp', label: 'Sympathetic drive (extra)', min: -100, max: 100, step: 5, value: 0,
    out: v => v === 0 ? 'none' : `${v > 0 ? '+' : ''}${v} %`, onInput: v => sim.p.symp = v / 100, hlKeys: 'heart arterioles veins',
    sub: 'Central command added on top of the reflex: raises HR, contractility, arteriolar and venous tone together.' }));
  controls.push(slider({ host: $('#heartCtl'), id: 'hr0', label: 'Intrinsic heart rate (SA node)', min: 40, max: 180, step: 1, value: 72,
    out: v => `${v} /min`, onInput: v => sim.p.hr = v, hlKeys: 'ra', sub: 'The reflex and drugs act on top of this rate.' }));
  controls.push(slider({ host: $('#heartCtl'), id: 'contr', label: 'Contractility (Ees)', min: 30, max: 200, step: 5, value: 100,
    out: v => `${v} %`, onInput: v => sim.p.contr = v / 100, hlKeys: 'lv rv', sub: 'Slope of the end-systolic pressure–volume line for both ventricles.' }));
  for (const b of BEDS) controls.push(slider({ host: $('#bedCtl'), id: 'bed-' + b.id, label: b.name, min: 60, max: 140, step: 1, value: 100,
    out: v => `r ${v} % · R ×${fmt(Math.pow(100 / v, 4), 2)}`, onInput: v => { sim.p.bedRadius[b.id] = v / 100; if (zoomBed === b.id) drawZoomText(); },
    hlKeys: b.id, sub: `${fmt(b.frac * 100)} % of resting cardiac output.`, zoom: b.id }));
  for (const v of VEINS) controls.push(slider({ host: $('#veinCtl'), id: 'vein-' + v.id, label: v.name, min: 80, max: 120, step: 1, value: 100, cls: 'ven',
    out: x => `r ${x} % · V₀ ×${fmt((x / 100) ** 2, 2)}`, onInput: x => sim.p.veinRadius[v.id] = x / 100, hlKeys: 'vein-' + v.id,
    sub: `Holds about ${fmt(v.V0 + v.C * 6.2)} ml at rest; compliance ${v.C} ml/mmHg.` }));
  controls.push(slider({ host: $('#artCtl'), id: 'artc', label: 'Aortic and arterial compliance', min: 30, max: 150, step: 5, value: 100,
    out: v => `${v} % · C ${fmt(1.45 * v / 100, 2)} ml/mmHg`, onInput: v => sim.p.artCompl = v / 100, hlKeys: 'aorta',
    sub: 'Lower it to model ageing or atherosclerosis: pulse pressure widens because PP ≈ SV / C.' }));
  $$('[data-inf]').forEach(b => { b.addEventListener('click', () => sim.infuse(+b.dataset.inf, 20)); bindHL(b, 'veins'); });
  const dh = $('#drugs');
  for (const d of DRUGS) {
    const r = el('div', { class: 'drug' });
    const b = el('button', { class: 'chip', type: 'button', 'aria-pressed': 'false' }, `${d.name}<small>${d.cls}</small>`);
    b.addEventListener('click', () => { ui.drugs.has(d.id) ? ui.drugs.delete(d.id) : ui.drugs.add(d.id); b.setAttribute('aria-pressed', ui.drugs.has(d.id)); applyMods(); });
    bindHL(b, d.hl.join(' '));
    r.append(b, el('p', {}, d.note)); dh.append(r);
  }
  $('#reset').addEventListener('click', resetAll);
}
function resetAll() {
  endScrub();
  const s = structuredClone(START);
  Object.assign(sim.V, s.V); sim.p = s.p; sim.eff = s.eff; sim.modTarget = s.modTarget; sim.set = s.set; sim.mapF = s.mapF; sim.tc = s.tc; sim.T = s.T; sim.auto = s.auto;
  sim.infusionLeft = 0; ui.drugs.clear(); ui.disease = 'none'; ui.volOffset = 0;
  $$('#diseases .chip').forEach((c, i) => c.setAttribute('aria-pressed', i === 0)); $$('#drugs .chip').forEach(c => c.setAttribute('aria-pressed', 'false'));
  for (const id of ['baro', 'm-baro', 'autoreg']) { const e = document.getElementById(id); if (e) e.checked = true; }
  $('#scenNote').textContent = DISEASES[0].note;
  envUI.posture = 'supine'; envUI.fluidLost = 0; $$('#posture .chip').forEach(x => x.setAttribute('aria-pressed', x.dataset.pos === 'supine'));
  for (const inp of controls) { inp.value = inp.defaultValue; inp.dispatchEvent(new Event('input')); }
  sim.p.env = envNeutral(); applyEnv();
  hlNow.clear();
}

/* ---------------- formulas ---------------- */
// what each factor in the formulas means (shown when you point at it)
const VAR_INFO = {
  CO: { n: 'Cardiac output', d: 'Blood each ventricle pumps per minute.', norm: '≈ 5–6 L/min at rest', now: s => `${fmt(s.co, 2)} L/min`, by: 'HR × SV. In the long run the heart pumps what returns to it (venous return).' },
  HR: { n: 'Heart rate', d: 'Beats per minute, paced by the SA node.', norm: '60–100 /min (≈ 72)', now: s => `${fmt(s.hr)} /min`, by: 'Intrinsic SA rate; sympathetic β1 raises it, vagal tone lowers it; baroreflex, atropine, β-blockers.' },
  SV: { n: 'Stroke volume (forward)', d: 'Blood ejected into the aorta per beat (EDV − ESV, minus any regurgitation).', norm: '≈ 70 ml', now: s => `${fmt(s.fsv)} ml`, by: 'Preload (EDV, Frank–Starling) ↑, contractility ↑, afterload ↓.' },
  MAP: { n: 'Mean arterial pressure', d: 'Average aortic pressure over a beat.', norm: '≈ 93 mmHg', now: s => `${fmt(s.map)} mmHg`, by: 'CO × TPR + RAP; the baroreflex holds it near its set point.' },
  RAP: { n: 'Right atrial pressure (CVP)', d: 'Pressure where the venae cavae meet the heart; the back-pressure for venous return.', norm: '0–5 mmHg', now: s => `${fmt(s.rap, 1)} mmHg`, by: 'Rises with blood volume or a weak right heart; falls when the heart pumps strongly.' },
  TPR: { n: 'Total peripheral resistance', d: 'Resistance of all systemic vessels in parallel, mostly the arterioles.', norm: '≈ 16–20 mmHg·min/L (1 PRU)', now: s => `${fmt(s.tpr, 1)} mmHg·min/L`, by: 'Arteriolar radius (r⁴): sympathetic α1, local metabolites, autoregulation; blood viscosity.' },
  R: { n: 'Resistance of one vessel', d: 'Pressure drop needed per unit flow (R = ΔP / Q).', norm: 'depends on the vessel', now: s => `bed ×${fmt(sim.p.bedRadius[fxBed] ** -4, 2)} vs rest`, by: 'Viscosity η and length L raise it; radius lowers it with the 4th power.' },
  'η': { n: 'Blood viscosity', d: 'How thick the blood is; about 3× water.', norm: '≈ 3–4 mPa·s (haematocrit 40–45 %)', now: () => 'fixed in this model', by: 'Rises with haematocrit (polycythaemia), falls in anaemia.' },
  L: { n: 'Vessel length', d: 'Longer tubes resist more, in direct proportion.', norm: 'anatomical, roughly constant', now: () => 'fixed in this model', by: 'Grows with body size; not regulated minute to minute.' },
  'r⁴': { n: 'Radius to the 4th power', d: 'Halving r cuts flow to 1/16 at the same pressure: the main way the body steers flow.', norm: 'baseline r = 100 %', now: () => `r ${fmt(sim.p.bedRadius[fxBed] * 100)} % (${BEDS.find(b => b.id === fxBed).name})`, by: 'Smooth-muscle tone: sympathetic α1, angiotensin II, NO, local metabolites, autoregulation.' },
  VR: { n: 'Venous return', d: 'Blood flowing back to the right atrium per minute; equals CO at steady state.', norm: '≈ 5 L/min', now: s => `${fmt(s.vr, 2)} L/min`, by: '(Pmsf − RAP) / RVR; plateaus when RAP falls below about −2 mmHg (veins collapse).' },
  Pmsf: { n: 'Mean systemic filling pressure', d: 'Pressure everywhere in the systemic circulation if the heart stopped; drives venous return.', norm: '≈ 7 mmHg', now: s => `${fmt(s.pmsf, 1)} mmHg`, by: 'Blood volume ↑, venous tone ↑ (less unstressed volume); falls with venodilation or bleeding.' },
  RVR: { n: 'Resistance to venous return', d: 'Resistance between the venous reservoirs and the right atrium.', norm: '≈ 1–1.5 mmHg·min/L', now: s => `${fmt(s.rvr, 2)} mmHg·min/L`, by: 'Mostly venous resistance; constricting veins raises it a little.' },
  C: { n: 'Arterial compliance', d: 'Volume the arteries take up per mmHg (C = ΔV / ΔP).', norm: '≈ 1.5–2 ml/mmHg', now: s => `${fmt(s.cart, 2)} ml/mmHg`, by: 'Falls with age and atherosclerosis (stiffer arteries).' },
  PP: { n: 'Pulse pressure', d: 'Systolic minus diastolic pressure.', norm: '≈ 40 mmHg', now: s => `${fmt(s.pp)} mmHg`, by: 'Stroke volume ↑ and arterial compliance ↓ widen it; aortic regurgitation widens it a lot.' },
  v: { n: 'Flow velocity', d: 'How fast blood moves (v = Q / A).', norm: 'aortic peak ≈ 100 cm/s, capillaries ≈ 0.03 cm/s', now: s => `${fmt(s.qaoPk / (Math.PI * 1.25 * 1.25))} cm/s peak`, by: 'Flow ↑, cross-sectional area ↓.' },
  Q: { n: 'Flow', d: 'Volume per time through a cross-section.', norm: 'aortic peak ≈ 500 ml/s', now: s => `${fmt(s.qaoPk)} ml/s peak`, by: 'Cardiac output and ejection speed.' },
  A: { n: 'Cross-sectional area', d: 'Area of the lumen (π r²).', norm: 'aortic root ≈ 5 cm²; all capillaries ≈ 2500 cm²', now: () => '4.9 cm² (aortic root)', by: 'Vessel radius; capillaries win on total area.' },
  'σ': { n: 'Wall stress', d: 'Force per wall area; drives myocardial O₂ demand and remodelling.', norm: 'rises with dilation and pressure', now: s => `${fmt(s.lvedp * Math.cbrt(3 * s.edv / (4 * Math.PI)) / 2, 1)} mmHg (end-diastole)`, by: 'Laplace: P · r / (2h). Hypertrophy (h ↑) lowers it; dilation (r ↑) raises it.' },
  P: { n: 'LV pressure', d: 'Pressure inside the left ventricle.', norm: 'end-diastole 5–12, peak ≈ 120 mmHg', now: s => `EDP ${fmt(s.lvedp, 1)}, peak ${fmt(s.lvsp)} mmHg`, by: 'Filling (preload), contractility, aortic pressure.' },
  r: { n: 'Chamber radius', d: 'Radius of the LV cavity (here a sphere of the EDV).', norm: '≈ 30 mm at end-diastole', now: s => `${fmt(Math.cbrt(3 * s.edv / (4 * Math.PI)) * 10)} mm`, by: 'EDV: dilated hearts have a bigger r.' },
  h: { n: 'Wall thickness', d: 'Thickness of the LV wall.', norm: '8–12 mm', now: () => '10 mm (fixed)', by: 'Hypertrophy in hypertension or aortic stenosis.' },
};

const V_ = (txt, keys) => `<button class="var" type="button" data-hl="${keys}" data-k="${txt}" aria-label="${txt}: what is it?">${txt}<sup>?</sup></button>`;
const FX = [
  { t: 'Cardiac output', keys: ['hr', 'sv', 'co'], src: 'Guyton ch. 20',
    play: { inputs: [['HR', '/min', 30, 200, 1, s => s.hr], ['SV', 'ml', 10, 160, 1, s => s.fsv]], out: ['CO', 'L/min', 2, ([hr, sv]) => hr * sv / 1000] },
    eq: () => `${V_('CO', 'aorta lv', 'cardiac output')}<span class="op">=</span>${V_('HR', 'ra', 'heart rate, set at the SA node')}<span class="op">×</span>${V_('SV', 'lv', 'stroke volume')}`,
    sub: s => `${fmt(s.co, 2)} L/min = ${fmt(s.hr)} /min × ${fmt(s.fsv)} ml`,
    more: s => `SV = EDV − ESV = ${fmt(s.edv)} − ${fmt(s.esv)} = ${fmt(s.sv)} ml · EF = SV/EDV = ${fmt(s.ef * 100)} %` + (Math.abs(s.sv - s.fsv) > 3 ? ` · forward SV only ${fmt(s.fsv)} ml (regurgitation)` : ''),
    p: 'As HR rises, diastole shortens and SV falls; up to about 150 /min CO still rises, above that it falls (Guyton ch. 9).', try: ['Pace at 150 /min', () => setCtl('hr0', 150)] },
  { t: 'Ohm’s law of the circulation', keys: ['map', 'co', 'tpr', 'rap'], src: 'Guyton ch. 14',
    play: { inputs: [['CO', 'L/min', 1, 12, 0.1, s => s.co], ['TPR', 'mmHg·min/L', 4, 40, 0.1, s => s.tpr], ['RAP', 'mmHg', 0, 20, 0.5, s => s.rap]], out: ['MAP', 'mmHg', 0, ([co, tpr, rap]) => co * tpr + rap] },
    eq: () => `${V_('MAP', 'aorta', 'mean arterial pressure')}<span class="op">−</span>${V_('RAP', 'ra vc', 'right atrial pressure')}<span class="op">=</span>${V_('CO', 'aorta lv')}<span class="op">×</span>${V_('TPR', 'arterioles', 'total peripheral resistance, mostly arterioles')}`,
    sub: s => `${fmt(s.map)} − ${fmt(s.rap, 1)} = ${fmt(s.co, 2)} L/min × ${fmt(s.tpr, 1)} mmHg·min/L`,
    more: s => `MAP ≈ DBP + ⅓·PP = ${fmt(s.dbp)} + ⅓·${fmt(s.pp)} = ${fmt(s.dbp + s.pp / 3)} mmHg (the integral gives ${fmt(s.map)})`,
    p: 'With the baroreflex off, MAP follows TPR directly. With it on, HR and CO move to hold MAP near the set point.', try: ['Constrict every bed to 85 %', () => BEDS.forEach(b => setCtl('bed-' + b.id, 85))] },
  { t: 'Poiseuille: radius and resistance', src: 'Guyton ch. 14', bed: true,
    play: { inputs: [['r⁴', '% radius', 40, 160, 1, () => sim.p.bedRadius[fxBed] * 100], ['L', '% length', 50, 200, 5, () => 100], ['η', '% viscosity', 50, 250, 5, () => 100], ['ΔP', 'mmHg', 10, 160, 1, s => s.map - s.rap]],
      out: ['Q', 'ml/min', 0, ([r, l, eta, dp]) => BASE.beds[fxBed] * (dp / (BASE.map - BASE.rap)) * (r / 100) ** 4 / (l / 100) / (eta / 100)], note: 'Flow to the bed you picked above: Q = ΔP / R with R = 8ηL / (πr⁴).' },
    eq: () => `${V_('R', 'arterioles')}<span class="op">=</span>8·${V_('η', 'arterioles', 'blood viscosity')}·${V_('L', 'arterioles', 'vessel length')}<span class="op">/</span>(π·${V_('r⁴', 'arterioles', 'radius to the 4th power')})`,
    sub: s => { const b = BEDS.find(x => x.id === fxBed), r = sim.p.bedRadius[fxBed]; return `${b.name}: r ${fmt(r * 100)} % → R ×${fmt(r ** -4, 2)} → flow ${fmt(s.beds[fxBed])} ml/min (baseline ${fmt(BASE.beds[fxBed])})`; },
    more: s => `Q = ΔP / R. Halve r and R rises 16 times; a 16 % cut in r already doubles R.`,
    p: 'Pick a bed. The kidneys and gut take the biggest share at rest, so constricting them moves MAP most.' },
  { t: 'Venous return (Guyton)', keys: ['pmsf', 'rap', 'vr', 'bv'], src: 'Guyton ch. 20',
    play: { inputs: [['Pmsf', 'mmHg', 0, 25, 0.1, s => s.pmsf], ['RAP', 'mmHg', -6, 20, 0.1, s => s.rap], ['RVR', 'mmHg·min/L', 0.3, 3, 0.01, s => s.rvr]], out: ['VR', 'L/min', 2, ([pm, rap, rvr]) => Math.max(0, (pm - Math.max(rap, -2)) / rvr)], note: 'Below RAP ≈ −2 mmHg the great veins collapse, so lowering RAP further gains nothing (the plateau).' },
    eq: () => `${V_('VR', 'vc', 'venous return')}<span class="op">=</span>(${V_('Pmsf', 'veins', 'mean systemic filling pressure')}<span class="op">−</span>${V_('RAP', 'ra')})<span class="op">/</span>${V_('RVR', 'veins', 'resistance to venous return')}`,
    sub: s => `${fmt(s.vr, 2)} L/min = (${fmt(s.pmsf, 1)} − ${fmt(s.rap, 1)}) / ${fmt(s.rvr, 2)} mmHg·min/L`,
    more: s => `Pmsf = stressed volume / systemic compliance. Blood volume ${fmt(s.vol)} ml.`,
    p: 'Bleeding or venodilation lowers Pmsf; transfusion or venoconstriction raises it. See the Guyton graph.', try: ['Constrict the splanchnic veins to 85 %', () => setCtl('vein-spl', 85)] },
  { t: 'Arterial compliance and pulse pressure', keys: ['sv', 'pp'], src: 'Guyton ch. 15',
    play: { inputs: [['SV', 'ml', 10, 160, 1, s => s.fsv], ['C', 'ml/mmHg', 0.4, 3, 0.05, s => s.cart]], out: ['PP', 'mmHg', 0, ([sv, c]) => sv / c] },
    eq: () => `${V_('C', 'aorta', 'arterial compliance')}<span class="op">=</span>ΔV/ΔP<span class="op">;</span> ${V_('PP', 'aorta', 'pulse pressure')}<span class="op">≈</span>${V_('SV', 'lv')}<span class="op">/</span>${V_('C', 'aorta')}`,
    sub: s => `PP ${fmt(s.pp)} mmHg (measured) · SV/C = ${fmt(s.fsv)} / ${fmt(s.cart, 2)} = ${fmt(s.fsv / s.cart)} mmHg`,
    more: s => `The estimate runs high because blood keeps leaving the arteries during ejection.`,
    p: 'Stiffen the arteries and pulse pressure widens even when MAP stays the same.', try: ['Arterial compliance to 40 %', () => setCtl('artc', 40)] },
  { t: 'Flow velocity', keys: ['co', 'sv'], src: 'continuity',
    play: { inputs: [['Q', 'ml/s', 0, 1000, 5, s => s.qaoPk], ['A', 'mm diameter', 5, 40, 0.5, () => 25]], out: ['v', 'cm/s', 0, ([q, d]) => q / (Math.PI * (d / 20) ** 2)], note: 'Narrow the diameter (a stenosis) and the same flow has to go much faster: v ∝ 1/d².' },
    eq: () => `${V_('v', 'aorta')}<span class="op">=</span>${V_('Q', 'aorta lv')}<span class="op">/</span>${V_('A', 'aorta', 'cross-sectional area')}`,
    sub: s => `aortic root: peak ${fmt(s.qaoPk)} ml/s / ${fmt(Math.PI * 1.25 * 1.25, 1)} cm² = ${fmt(s.qaoPk / (Math.PI * 1.25 * 1.25))} cm/s peak`,
    more: s => `Mean aortic velocity ≈ ${fmt(s.co * 1000 / 60 / (Math.PI * 1.25 * 1.25))} cm/s. Capillaries are slowest because their total area is largest.`,
    p: 'Switch on Flow in the 3D view: cells race through the aorta in systole and almost stop in diastole.' },
  { t: 'Laplace: wall stress of the LV', keys: ['edv', 'ef'], src: 'Guyton ch. 9',
    play: { inputs: [['P', 'mmHg', 0, 220, 1, s => s.lvsp], ['r', 'mm', 10, 50, 0.5, s => Math.cbrt(3 * s.edv / (4 * Math.PI)) * 10], ['h', 'mm', 3, 25, 0.5, () => 10]], out: ['σ', 'mmHg', 0, ([p, r, h]) => p * r / (2 * h)], note: 'Starts at peak systolic pressure. Thicken the wall (hypertrophy) and stress falls; dilate the chamber and it rises.' },
    eq: () => `${V_('σ', 'lv', 'wall stress')}<span class="op">=</span>${V_('P', 'lv')}·${V_('r', 'lv', 'chamber radius')}<span class="op">/</span>(2·${V_('h', 'lv', 'wall thickness')})`,
    sub: s => { const r = Math.cbrt(3 * s.edv / (4 * Math.PI)), h = 1.0; /* cm; sphere of the EDV, 10 mm wall */ return `end-diastole: ${fmt(s.lvedp, 1)} mmHg × ${fmt(r * 10)} mm / (2 × ${fmt(h * 10)} mm) = ${fmt(s.lvedp * r / (2 * h), 1)} mmHg`; },
    more: s => `A dilated, thin-walled ventricle (heart failure) works under more stress for the same pressure.`,
    p: 'Try systolic heart failure: EDV rises, so r and wall stress rise with it.' },
];
let fxBed = 'renal';
function buildFx() {
  const host = $('#fx');
  FX.forEach((f, i) => {
    const c = el('div', { class: 'fx' });
    c.innerHTML = `<h3>${f.t}<span>${f.src}</span></h3><div class="eqn">${f.eq()}</div>${f.bed ? `<div class="chips" style="margin:4px 0 6px">${BEDS.map(b => `<button class="chip" type="button" data-bed="${b.id}" aria-pressed="${b.id === fxBed}">${b.name}</button>`).join('')}</div>` : ''}<div class="subst" id="fx-s-${i}"></div><div class="subst" style="color:var(--muted)" id="fx-m-${i}"></div>${f.keys ? `<div class="dlist" id="fx-d-${i}"></div>` : ''}<p>${f.p}</p>`;
    if (f.try) { const b = el('button', { class: 'btn try', type: 'button' }, f.try[0]); b.addEventListener('click', f.try[1]); c.append(b); }
    if (f.bed) { const s = el('div', { style: 'margin-top:8px' }); c.append(s); f.sliderHost = s; }
    if (f.play) c.append(buildPlay(f, i));
    host.append(c);
  });
  host.querySelectorAll('.var').forEach(v => { bindHL(v, v.dataset.hl); bindInfo(v); });
  host.querySelectorAll('[data-bed]').forEach(b => {
    b.addEventListener('click', () => { fxBed = b.dataset.bed; host.querySelectorAll('[data-bed]').forEach(x => x.setAttribute('aria-pressed', x === b)); hl(fxBed); buildBedMirror(); renderFx(sim.stats); });
    bindHL(b, b.dataset.bed);
  });
  buildBedMirror();
}

// "Play with the factors": a what-if calculator on the formula itself, starting from the live values
function buildPlay(f, i) {
  const d = el('details', { class: 'play' }); d.innerHTML = `<summary>Play with the factors</summary>`;
  const body = el('div', { class: 'play-body' }); d.append(body);
  const out = el('div', { class: 'play-out' }); const rows = [];
  for (const [k, unit, min, max, step] of f.play.inputs) {
    const id = `pl-${i}-${rows.length}`, r = el('div', { class: 'ctl' });
    r.innerHTML = `<label for="${id}">${V_(k, '')}</label><output></output><input type="range" id="${id}" min="${min}" max="${max}" step="${step}">`;
    body.append(r); rows.push({ inp: r.querySelector('input'), o: r.querySelector('output'), unit, step });
    bindInfo(r.querySelector('.var'));
  }
  const dig = st => st >= 1 ? 0 : st >= 0.1 ? 1 : 2;
  const calc = () => {
    const vals = rows.map(r => +r.inp.value); rows.forEach((r, j) => r.o.textContent = `${fmt(vals[j], dig(r.step))} ${r.unit}`);
    const [ok, ou, od, fn] = f.play.out, v = fn(vals), live = fn(f.play.inputs.map(x => x[5](sim.stats)));
    const dd = (v / live - 1) * 100;
    out.innerHTML = `<span class="pk">${ok}</span> = <b>${fmt(v, od)}</b> ${ou} <span class="${Math.abs(dd) < 1 ? 'eq' : dd > 0 ? 'up' : 'down'}">${Math.abs(dd) < 1 ? 'same as now' : `${dd > 0 ? '▲ +' : '▼ −'}${fmt(Math.abs(dd))} % vs now (${fmt(live, od)})`}</span>`;
  };
  const toLive = () => { rows.forEach((r, j) => { r.inp.value = f.play.inputs[j][5](sim.stats); }); calc(); };
  rows.forEach(r => r.inp.addEventListener('input', calc));
  const row = el('div', { class: 'row' }); const b = el('button', { class: 'btn', type: 'button' }, 'Start from the live values'); b.addEventListener('click', toLive); row.append(b);
  body.append(out); if (f.play.note) body.append(el('p', { class: 'note' }, f.play.note)); body.append(row);
  d.addEventListener('toggle', () => { if (d.open) toLive(); });
  return d;
}
// factor explanations on hover / focus
const vtip = el('div', { class: 'vtip', role: 'tooltip', hidden: '' }); document.body.append(vtip);
function bindInfo(btn) {
  const show = () => {
    const k = btn.dataset.k, inf = VAR_INFO[k]; if (!inf) return; const s = sim.stats;
    vtip.innerHTML = `<b>${k} · ${inf.n}</b><p>${inf.d}</p><dl><dt>Normal</dt><dd>${inf.norm}</dd><dt>Now</dt><dd>${s ? inf.now(s) : '–'}</dd><dt>Set by</dt><dd>${inf.by}</dd></dl>`;
    vtip.hidden = false;
    const r = btn.getBoundingClientRect(), w = Math.min(300, innerWidth - 24);
    vtip.style.width = w + 'px'; vtip.style.left = Math.max(12, Math.min(innerWidth - w - 12, r.left + r.width / 2 - w / 2)) + 'px';
    const below = r.bottom + 8 + vtip.offsetHeight < innerHeight; vtip.style.top = (below ? r.bottom + 8 : r.top - vtip.offsetHeight - 8) + 'px';
  };
  const hide = () => { vtip.hidden = true; };
  btn.addEventListener('pointerenter', show); btn.addEventListener('focus', show); btn.addEventListener('click', show);
  btn.addEventListener('pointerleave', hide); btn.addEventListener('blur', hide);
}
function buildBedMirror() {
  const f = FX.find(x => x.bed); f.sliderHost.innerHTML = '';
  const src = $('#bed-' + fxBed);
  const m = slider({ host: f.sliderHost, id: 'fxbed', label: `Arteriolar radius, ${BEDS.find(b => b.id === fxBed).name}`, min: 60, max: 140, step: 1, value: src.value,
    out: v => `${v} %`, onInput: v => { if (+src.value !== v) { src.value = v; src.dispatchEvent(new Event('input')); } }, hlKeys: fxBed, zoom: fxBed });
}
function renderFx(s) {
  if (!s) return;
  FX.forEach((f, i) => {
    $('#fx-s-' + i).textContent = f.sub(s); $('#fx-m-' + i).textContent = f.more(s);
    if (f.keys) $('#fx-d-' + i).innerHTML = '<span class="eq">vs baseline:</span>' + f.keys.map(k => { const d = metricDelta(k, s); const c = Math.abs(d) < 2 ? 'eq' : d > 0 ? 'up' : 'down'; return `<span class="${c}">${METRIC[k].n} ${Math.abs(d) < 2 ? '=' : (d > 0 ? '▲ +' : '▼ −') + fmt(Math.abs(d)) + ' %'}</span>`; }).join('');
  });
  renderMap(s);
}
function setCtl(id, v) { const i = $('#' + id); i.value = v; i.dispatchEvent(new Event('input')); hl(i.id.replace('bed-', '').replace('vein-', 'vein-')); }


/* ---------------- cause-and-effect map ---------------- */
const pct = (v, b) => (v / b - 1) * 100;
const METRIC = {
  bv: { n: 'Blood volume', v: s => s.vol, f: v => `${fmt(v)} ml`, hl: 'veins' },
  vt: { n: 'Venous tone', v: s => VEINS.reduce((a, v) => a + 1 / sim.p.veinRadius[v.id], 0) / VEINS.length * (1 / (sim.p.mod.venV0 * sim.eff.venV0)) * 100, b: 100, f: v => `${fmt(v)} %`, hl: 'veins', ctl: 1 },
  symp: { n: 'Sympathetic drive', v: s => (sim.S || 0) * 100, abs: true, f: v => `${v >= 0 ? '+' : ''}${fmt(v)} %`, hl: 'heart arterioles veins', ctl: 1 },
  baro: { n: 'Baroreflex', v: s => sim.p.baroreflex ? ((sim.S || 0) - sim.p.symp) * 100 : 0, abs: true, f: v => sim.p.baroreflex ? `${v >= 0 ? '+' : ''}${fmt(v)} % drive` : 'off', hl: 'aorta', ctl: 1 },
  pmsf: { n: 'Pmsf', v: s => s.pmsf, f: v => `${fmt(v, 1)} mmHg`, hl: 'veins' },
  rap: { n: 'RAP (CVP)', v: s => s.rap, f: v => `${fmt(v, 1)} mmHg`, hl: 'ra' },
  vr: { n: 'Venous return', v: s => s.vr, f: v => `${fmt(v, 2)} L/min`, hl: 'vc' },
  edv: { n: 'Preload (EDV)', v: s => s.edv, f: v => `${fmt(v)} ml`, hl: 'lv' },
  contr: { n: 'Contractility', v: s => s.ees, f: v => `Ees ${fmt(v, 2)}`, hl: 'lv rv', ctl: 1 },
  hr: { n: 'Heart rate', v: s => s.hr, f: v => `${fmt(v)} /min`, hl: 'ra', ctl: 1 },
  sv: { n: 'Stroke volume', v: s => s.fsv, f: v => `${fmt(v)} ml`, hl: 'lv' },
  tpr: { n: 'TPR', v: s => s.tpr, f: v => `${fmt(v, 1)} WU`, hl: 'arterioles', ctl: 1 },
  co: { n: 'Cardiac output', v: s => s.co, f: v => `${fmt(v, 2)} L/min`, hl: 'aorta lv' },
  map: { n: 'MAP', v: s => s.map, f: v => `${fmt(v)} mmHg`, hl: 'aorta' },
  pp: { n: 'Pulse pressure', v: s => s.pp, f: v => `${fmt(v)} mmHg`, hl: 'aorta' },
  ef: { n: 'EF', v: s => s.ef * 100, f: v => `${fmt(v)} %`, hl: 'lv' },
};
const metricDelta = (k, s) => { const m = METRIC[k], v = m.v(s); if (m.abs) return v; const b = m.b ?? m.v(BASE); return pct(v, b); };
const NODE_POS = { bv: [70, 40], vt: [200, 40], symp: [330, 40], pmsf: [135, 135], baro: [330, 135], vr: [70, 230], rap: [200, 230],
  edv: [70, 325], contr: [200, 325], hr: [330, 325], sv: [135, 420], tpr: [330, 420], co: [135, 515], map: [330, 515] };
// [from, to, label, inhibitory, label x, label y, anchor]
const EDGES = [
  ['bv', 'pmsf', 'stressed V / C', 0, 40, 92, 'start'], ['vt', 'pmsf', '', 0], ['pmsf', 'vr', 'VR = (Pmsf − RAP) / RVR', 0, 22, 186, 'start'], ['rap', 'vr', '', 1], ['vr', 'edv', 'fills the LV', 0, 76, 282, 'start'],
  ['edv', 'sv', 'Frank–Starling', 0, 14, 378, 'start'], ['contr', 'sv', 'ESPVR', 0, 196, 378, 'start'], ['map', 'sv', 'afterload', 1, 238, 470, 'middle'], ['sv', 'co', '', 0], ['hr', 'co', 'CO = HR × SV', 0, 214, 452, 'end'],
  ['co', 'map', 'MAP = CO × TPR + RAP', 0, 232, 556, 'middle'], ['tpr', 'map', '', 0], ['map', 'baro', 'baroreceptors', 1, 432, 330, 'end'], ['baro', 'symp', '', 0],
  ['symp', 'vt', 'α1', 0, 265, 34, 'middle'], ['symp', 'hr', 'β1', 0, 404, 232, 'middle'], ['symp', 'contr', 'β1', 0, 262, 196, 'middle'], ['symp', 'tpr', 'α1', 0, 422, 270, 'middle'],
];
const NW = 112, NH = 50; let lastDelta = {};
function buildMap() {
  const svg = $('#cmap'), ns = 'http://www.w3.org/2000/svg';
  const mk = (t, a) => { const e = document.createElementNS(ns, t); for (const k in a) e.setAttribute(k, a[k]); return e; };
  const defs = mk('defs', {}); const mkr = mk('marker', { id: 'ah', viewBox: '0 0 10 10', refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: 'auto-start-reverse' });
  mkr.append(mk('path', { d: 'M0,0 L10,5 L0,10 z', class: 'arrowhead' })); defs.append(mkr); svg.append(defs);
  const port = (k, toward) => { const [x, y] = NODE_POS[k], [tx, ty] = toward; const dx = tx - x, dy = ty - y;
    const sx = Math.abs(dx) / (NW / 2), sy = Math.abs(dy) / (NH / 2), f = 1 / Math.max(sx, sy, 1e-6); return [x + dx * f, y + dy * f]; };
  for (const [a, b, lab, neg, lx, ly, anc] of EDGES) {
    let p0 = port(a, NODE_POS[b]), p1 = port(b, NODE_POS[a]), d;
    if (a === 'map' && b === 'baro') { p0 = [NODE_POS.map[0] + NW / 2, NODE_POS.map[1]]; p1 = [NODE_POS.baro[0] + NW / 2, NODE_POS.baro[1]]; d = `M${p0} C${p0[0] + 26},${p0[1]} ${p1[0] + 26},${p1[1]} ${p1}`; }
    else if (a === 'symp' && b === 'hr') { p0 = [NODE_POS.symp[0] + NW / 2 - 8, NODE_POS.symp[1] + NH / 2]; p1 = [NODE_POS.hr[0] + NW / 2 - 8, NODE_POS.hr[1] - NH / 2]; d = `M${p0} C${p0[0] + 26},${p0[1] + 90} ${p1[0] + 26},${p1[1] - 90} ${p1}`; }
    else if (a === 'symp' && b === 'tpr') { p0 = [NODE_POS.symp[0] + NW / 2, NODE_POS.symp[1]]; p1 = [NODE_POS.tpr[0] + NW / 2, NODE_POS.tpr[1]]; d = `M${p0} C${p0[0] + 28},${p0[1] + 60} ${p1[0] + 28},${p1[1] - 60} ${p1}`; }
    else if (a === 'map' && b === 'sv') { p0 = [NODE_POS.map[0] - 20, NODE_POS.map[1] - NH / 2]; p1 = [NODE_POS.sv[0] + NW / 2, NODE_POS.sv[1] + 6]; d = `M${p0} Q${p0[0] - 30},${p1[1] + 20} ${p1}`; }
    else d = `M${p0} L${p1}`;
    const path = mk('path', { d, class: 'edge' + (neg ? ' neg' : ''), 'marker-end': 'url(#ah)', 'data-from': a });
    svg.append(path);
    if (lab) { const t = mk('text', { x: lx, y: ly, class: 'elab', 'text-anchor': anc }); t.textContent = lab; svg.append(t); }
  }
  for (const [k, [x, y]] of Object.entries(NODE_POS)) {
    const m = METRIC[k], g = mk('g', { class: 'node' + (m.ctl ? ' ctl' : ''), id: 'n-' + k, tabindex: 0 });
    g.append(mk('rect', { x: x - NW / 2, y: y - NH / 2, width: NW, height: NH }));
    const t1 = mk('text', { x, y: y - 8, 'text-anchor': 'middle', class: 'nm' }); t1.textContent = m.n;
    const t2 = mk('text', { x, y: y + 7, 'text-anchor': 'middle', class: 'vl' });
    const t3 = mk('text', { x, y: y + 20, 'text-anchor': 'middle', class: 'dl' });
    g.append(t1, t2, t3); svg.append(g); bindHL(g, m.hl);
  }
  const host = $('#fxCtl');
  const mirror = (srcId, label, out, hlKeys) => {
    const src = $('#' + srcId);
    const m = slider({ host, id: 'm-' + srcId, label, min: src.min, max: src.max, step: src.step, value: src.value, out, hlKeys,
      onInput: v => { if (+src.value !== v) { src.value = v; src.dispatchEvent(new Event('input')); } } });
    src.addEventListener('input', () => { if (m.value !== src.value) { m.value = src.value; m.dispatchEvent(new Event('input')); } });
  };
  const sw = el('label', { class: 'switch', style: 'margin:4px 0 6px' }, '<input type="checkbox" id="m-baro" checked> Baroreflex');
  host.append(sw); $('#m-baro').addEventListener('change', e => { $('#baro').checked = e.target.checked; $('#baro').dispatchEvent(new Event('change')); });
  $('#baro').addEventListener('change', e => { $('#m-baro').checked = e.target.checked; });
  mirror('symp', 'Sympathetic drive (extra)', v => v == 0 ? 'none' : `${v > 0 ? '+' : ''}${v} %`, 'heart arterioles veins');
  mirror('hr0', 'Intrinsic heart rate', v => `${v} /min`, 'ra');
  mirror('contr', 'Contractility', v => `${v} %`, 'lv rv');
  const all = (label, ids, min, max, hlKeys, out) => slider({ host, id: 'm-all-' + label.replace(/\W/g, ''), label, min, max, step: 1, value: 100, out, hlKeys,
    onInput: v => ids.forEach(id => { const e = $('#' + id); if (+e.value !== v) { e.value = v; e.dispatchEvent(new Event('input')); } }) });
  controls.push(all('All arterioles (radius)', BEDS.map(b => 'bed-' + b.id), 60, 140, 'arterioles', v => `r ${v} % · R ×${fmt((100 / v) ** 4, 2)}`));
  controls.push(all('All veins (radius)', VEINS.map(v => 'vein-' + v.id), 80, 120, 'veins', v => `r ${v} % · V₀ ×${fmt((v / 100) ** 2, 2)}`));
  const row = el('div', { class: 'row', style: 'margin-top:6px' });
  for (const [ml, t] of [[-500, 'Bleed 500 ml'], [500, 'Transfuse 500 ml']]) { const b = el('button', { class: 'btn', type: 'button' }, t); b.addEventListener('click', () => sim.infuse(ml, 20)); bindHL(b, 'veins'); row.append(b); }
  const rs = el('button', { class: 'btn', type: 'button' }, 'Reset'); rs.addEventListener('click', resetAll); row.append(rs);
  host.append(row);
}
function renderMap(s) {
  if (!s || !$('#n-hr')) return;
  const now = performance.now();
  for (const k of Object.keys(NODE_POS)) {
    const m = METRIC[k], g = $('#n-' + k), v = m.v(s), d = metricDelta(k, s);
    g.querySelector('.vl').textContent = m.f(v);
    const thr = m.abs ? 2 : 2;
    g.querySelector('.dl').textContent = k === 'baro' && !sim.p.baroreflex ? 'switched off' : Math.abs(d) < thr ? 'at baseline' : `${d > 0 ? '▲ +' : '▼ −'}${fmt(Math.abs(d))} ${m.abs ? 'pts' : '%'}`;
    g.classList.toggle('up', d >= thr); g.classList.toggle('down', d <= -thr);
    const prev = lastDelta[k]; lastDelta[k] = d;
    if (prev !== undefined && Math.abs(d - prev) > 0.8) $$(`#cmap .edge[data-from="${k}"]`).forEach(e => { e.classList.add('live'); e.dataset.until = now + 2500; });
  }
  $$('#cmap .edge.live').forEach(e => { if (+e.dataset.until < now) e.classList.remove('live'); });
}

/* ---------------- tabs ---------------- */
function showTab(id) {
  $$('.tabs [role=tab]').forEach(t => { const on = t.id === id; t.setAttribute('aria-selected', on); $('#' + t.getAttribute('aria-controls')).hidden = !on; });
  try { localStorage.setItem('ps-tab', id); } catch (e) {}
  drawGraphs();
}
$$('.tabs [role=tab]').forEach(t => t.addEventListener('click', () => showTab(t.id)));

/* ---------------- Start here: guided tour of one beat ---------------- */
// Each step freezes the 3D heart at a representative instant of the last simulated beat (same machinery
// as scrubbing the graphs) and explains, in plain language, which pressure difference sets each valve.
const TOUR = [
  { id: 'intro', name: 'The heart', c: 'var(--muted)', title: 'Meet the heart',
    sub: 'Two pumps, four chambers, four one-way valves',
    p: 'The model on the left is a real human heart (Z-Anatomy). It has been cut open along its long axis so you can see inside the left side: the <b>left atrium</b> on top, the thick-walled <b>left ventricle</b> below, the <b>mitral valve</b> between them, and the <b>aortic valve</b> leading out to the aorta.',
    look: ['Red blood is oxygen-rich (left side), dark blue-red is oxygen-poor (right side).', 'Valves are coloured while you are inside the heart: <b class="t-r">blue = open</b>, <b style="color:var(--up)">orange = closed</b>.', 'Drag to turn the heart; scroll or pinch to zoom.'],
    at: ev => ev.mvOpen + 0.09 * ev.T },
  { id: 'as', name: 'Atrial kick', c: 'var(--venous)', title: '1 · The atria squeeze (atrial systole)',
    sub: 'Just before the main beat · about 0.1 s',
    p: 'The ventricles are already almost full: blood flowed in passively while they were relaxed. Now the atria contract and push in the last bit, about a fifth of the filling. This is the “a” wave and the P wave on an ECG.',
    look: ['The mitral valve is still open.', 'The atria get a little smaller.'],
    at: ev => ev.asMid },
  { id: 'ivc', valve: 'v_mitral', name: 'Squeeze, all shut', c: 'var(--warn)', title: '2 · The ventricle starts to squeeze, every valve shut',
    sub: 'Isovolumetric contraction · about 0.05 s',
    p: 'The ventricle muscle contracts. Its pressure shoots up past the atrium, so the mitral valve is pushed shut (the first heart sound, “lub”). But the pressure is still lower than in the aorta, so the aortic valve stays shut too. With both doors closed, the blood has nowhere to go: the volume stays the same while pressure rises fast.',
    look: ['Both valves are orange.', 'The mitral leaflets bulge toward the atrium but the cords stop them flipping over.'],
    at: ev => (ev.mvClose + ev.avOpen) / 2 },
  { id: 'ej', valve: 'v_aortic', name: 'Ejection', c: 'var(--accent)', title: '3 · Blood is pushed out (ejection)',
    sub: 'Ventricular ejection · about 0.27 s',
    p: 'As soon as ventricular pressure passes aortic pressure, the aortic valve is pushed open and about 70 ml shoots into the aorta. That top pressure, about 120 mmHg, is the first number of “120/80”. Because the right ventricle does the same at the same time, an equal amount goes to the lungs.',
    look: ['The aortic valve is blue, its three cusps pressed back against the wall.', 'The ventricle shrinks and its base moves down toward the apex.'],
    at: ev => ev.ejPeak },
  { id: 'ivr', valve: 'v_aortic', name: 'Relax, all shut', c: 'var(--good)', title: '4 · The ventricle relaxes, every valve shut again',
    sub: 'Isovolumetric relaxation · about 0.08 s',
    p: 'The muscle lets go and ventricular pressure falls below the aorta. Blood in the aorta starts to fall back, fills the three cusps and snaps the aortic valve shut (the second sound, “dub”, and the small notch on the pressure trace). The ventricle is still at a higher pressure than the atrium, so the mitral valve stays shut: volume constant, pressure falling.',
    look: ['Both valves are orange again.', 'The aortic cusps meet in a three-pointed star.'],
    at: ev => (ev.avClose + ev.mvOpen) / 2 },
  { id: 'rf', valve: 'v_mitral', name: 'Fast filling', c: 'var(--venous)', title: '5 · The ventricle fills fast',
    sub: 'Rapid filling · about 0.1 s',
    p: 'Once ventricular pressure drops below the atrium, the mitral valve swings open and the blood that collected in the atrium rushes in. Most filling happens now, without the atrium doing any work: the relaxing ventricle almost sucks it in.',
    look: ['The mitral valve is blue: the big front leaflet and the small back leaflet part like a funnel.', 'Arrows (Flow view) show the jet running toward the apex.'],
    at: ev => ev.rfPeak },
  { id: 'ds', valve: 'v_mitral', name: 'Slow filling', c: 'var(--venous)', title: '6 · Slow filling, then repeat',
    sub: 'Diastasis · its length depends on heart rate',
    p: 'Atrium and ventricle pressures are now almost equal, so only a trickle flows in. When the heart beats faster, this is the part that gets cut short. Then the atria squeeze again and the whole cycle repeats, about 70 times a minute.',
    look: ['The mitral valve drifts partly closed as the flow slows.', 'Press “Watch it beat in slow motion” to see all six steps run together.'],
    at: ev => ev.dsMid },
];
let tourI = 0;
function tourEvents() {
  const fr = sim.framesLast, ev = sim.eventsLast; if (!fr || !fr.length || ev.avOpen == null) return null;
  const T = fr.at(-1).tc, asF = fr.filter(f => f.ea > 0.15 && !f.open.av);
  let rf = null, ej = null; for (const f of fr) { if (f.tc > ev.mvOpen && (!rf || f.Q.mv > rf.Q.mv)) rf = f; if (f.open.av && f.P.lv > f.P.ao && (!ej || f.Q.av > ej.Q.av)) ej = f; }
  const asStart = asF.length ? asF[0].tc : T * 0.85, rfPeak = rf ? rf.tc : ev.mvOpen + 0.08;
  return { ...ev, T, rfPeak, ejPeak: ej ? ej.tc : ev.avOpen + 0.08, asMid: asF.length ? asF[asF.length >> 1].tc : T * 0.9, dsMid: rfPeak + 0.6 * (asStart - rfPeak) };
}
function framePhaseWhy(f) { // the pressure comparisons that decide each valve, live from the frame
  const cmp = (a, an, b, bn, valve, k) => `<span>${an} ${fmt(a, a < 20 ? 1 : 0)} ${a > b ? '>' : '<'} ${bn} ${fmt(b, b < 20 ? 1 : 0)} mmHg → ${valve} valve <b class="${f.open[k] ? 'vo">open' : 'vc">shut'}</b></span>`;
  return cmp(f.P.la, 'Atrium', f.P.lv, 'ventricle', 'mitral', 'mv') + cmp(f.P.lv, 'Ventricle', f.P.ao, 'aorta', 'aortic', 'av');
}
function buildTour() {
  const strip = $('#tourStrip'); strip.innerHTML = '';
  TOUR.forEach((s, i) => { const b = document.createElement('button'); b.textContent = s.name; b.title = s.title; b.style.setProperty('--c', s.c); b.addEventListener('click', () => tourGo(i)); strip.append(b); });
  $('#tourPrev').addEventListener('click', () => tourGo(Math.max(0, tourI - 1)));
  $('#tourNext').addEventListener('click', () => tourGo(Math.min(TOUR.length - 1, tourI + 1)));
  $('#tourSlow').addEventListener('click', () => { endScrub(); hlNow.clear(); if (meta && !(SECTION.on && SECTION.mode === 'long')) setSection('long'); setSpeed(0.1); playing = true; setPlayBtn(); });
  $('#tourClose').addEventListener('click', () => { const s = TOUR[tourI]; if (!s.valve || !meta) return;
    setSection(SECTION.on && SECTION.mode === s.valve ? 'long' : s.valve); renderTour(SCRUB.on ? SCRUB.frame : null); });
  $('#tourLive').addEventListener('click', () => { endScrub(); hlNow.clear(); setSpeed(1); playing = true; setPlayBtn(); });
  buildSchema(); renderTour(null);
}
/* textbook-style frontal section of the heart, live from the simulation (or the frozen instant):
   muscle walls (thick LV, thin RV), great vessels, valves with chordae and papillary muscles, moving blood */
const SCH = {};
function buildSchema() {
  const svg = $('#schema'), NS = 'http://www.w3.org/2000/svg'; svg.innerHTML = '';
  svg.setAttribute('viewBox', '0 0 340 312');
  const mk = (tag, at, parent = svg) => { const e = document.createElementNS(NS, tag); for (const k in at) e.setAttribute(k, at[k]); parent.append(e); return e; };
  const txt = (x, y, s, cls, parent = svg) => { const t = mk('text', { x, y, class: cls }, parent); t.textContent = s; return t; };
  const tube = (d, w, side, parent = svg) => { mk('path', { d, class: 'sw-' + side, 'stroke-width': w + 4 }, parent); return mk('path', { d, class: 'sb-' + side, 'stroke-width': w }, parent); };
  const defs = mk('defs', {});
  defs.innerHTML = `<radialGradient id="schMus" cx="45%" cy="40%" r="75%"><stop offset="0" stop-color="#d06b70"/><stop offset="1" stop-color="#8e3540"/></radialGradient>`;
  // vessels behind the heart: right pulmonary artery, descending aorta, inferior vena cava
  SCH.rpa = tube('M164,74 C130,72 96,70 40,72', 11, 'r');
  tube('M268,60 L268,100', 22, 'l');
  SCH.dotsBack = mk('g', {}); // blood seen through: the inferior vena cava runs up behind the right ventricle
  tube('M112,308 L112,200 C112,160 106,138 100,122', 20, 'r');
  tube('M326,92 L282,96', 9, 'l'); tube('M326,113 L284,110', 9, 'l');
  // ventricles: muscle mass with the two cavities
  SCH.vgroup = mk('g', {});
  const massD = 'M92,128 C78,176 98,232 156,264 C190,283 228,292 247,278 C270,258 288,206 282,160 C280,140 274,128 268,122 Z';
  SCH.mass = mk('path', { d: massD, fill: 'url(#schMus)', class: 'sch-mus' }, SCH.vgroup);
  defs.innerHTML += `<clipPath id="schClip"><path d="${massD}"/></clipPath>`;
  const fib = mk('g', { 'clip-path': 'url(#schClip)', class: 'sch-fib' }, SCH.vgroup); // muscle fibres spiral around the ventricles
  for (let k = 0; k < 9; k++) mk('path', { d: `M${70 + k * 6},${120 + k * 4} C${100 + k * 4},${230 - k * 6} ${200 - k * 3},${300 - k * 8} ${296 - k * 4},${150 + k * 3}` }, fib);
  SCH.rvG = mk('g', {}, SCH.vgroup); SCH.lvG = mk('g', {}, SCH.vgroup);
  mk('path', { d: 'M104,134 L134,132 C134,122 134,114 134,108 L160,108 C162,120 164,132 167,142 C172,182 177,220 190,250 C158,244 120,216 108,178 C103,162 102,148 104,134 Z', class: 'cav-r' }, SCH.rvG);
  mk('path', { d: 'M176,110 L204,110 C206,118 210,124 214,127 L252,125 C259,152 261,192 251,230 C245,250 237,259 229,262 C216,258 206,240 199,216 C191,186 183,152 179,132 C177,122 176,116 176,110 Z', class: 'cav-l' }, SCH.lvG);
  // papillary muscles (move with the walls)
  SCH.papR = [[122, 206], [152, 214]]; SCH.papL = [[222, 220], [246, 214]];
  const pap = (x, y, w, h, g) => mk('path', { d: `M${x - w},${y + h} C${x - w},${y + h * 0.4} ${x - w * 0.6},${y} ${x},${y} C${x + w * 0.6},${y} ${x + w},${y + h * 0.4} ${x + w},${y + h} Z`, class: 'sch-pap' }, g);
  for (const [x, y] of SCH.papR) pap(x, y, 4.5, 20, SCH.rvG);
  for (const [x, y] of SCH.papL) pap(x, y, 6, 24, SCH.lvG);
  // atria
  SCH.ra = mk('path', { d: 'M92,130 C66,116 62,74 92,60 C114,50 140,62 144,86 C146,102 144,118 140,129 Z', class: 'atr-r' });
  SCH.la = mk('path', { d: 'M212,126 C204,104 214,80 240,76 C264,72 284,88 284,106 C284,116 278,124 266,124 Z', class: 'atr-l' });
  // superior vena cava, aorta (arch + 3 branches), pulmonary trunk (in front)
  tube('M104,2 L104,70', 18, 'r');
  for (const [x0, y0, x1] of [[204, 38, 200], [226, 30, 226], [248, 34, 254]]) tube(`M${x0},${y0} L${x1},4`, 7, 'l');
  tube('M190,114 L190,60 C190,36 212,28 234,28 C256,28 268,42 268,62', 24, 'l');
  tube('M147,110 C148,92 158,78 176,72 C200,66 224,66 250,68 L318,66', 20, 'r');
  // valve leaflets, chordae, blood particles, labels
  SCH.chord = mk('g', { class: 'sch-ch' }); SCH.leaf = mk('g', {}); SCH.dots = mk('g', {});
  const V = (seg, hinges, len, closedA, openA, kind) => ({ seg, hinges, len, closedA, openA, kind, els: hinges.map(() => [mk('path', { class: 'lf-u' }, SCH.leaf), mk('path', { class: 'lf' }, SCH.leaf)]) });
  const d2r = Math.PI / 180;
  SCH.valves = [
    V('v_tricuspid', [[104, 131], [140, 129]], [19, 18], [12 * d2r, 168 * d2r], [80 * d2r, 98 * d2r], 'av'),
    V('v_mitral', [[214, 127], [252, 125]], [25, 15], [8 * d2r, 172 * d2r], [72 * d2r, 104 * d2r], 'av'),
    V('v_pulmonary', [[134, 110], [160, 110]], [13, 13], [-8 * d2r, 188 * d2r], [-84 * d2r, -96 * d2r], 'sl'),
    V('v_aortic', [[177, 112], [203, 112]], [13, 13], [-8 * d2r, 188 * d2r], [-84 * d2r, -96 * d2r], 'sl'),
  ];
  for (const v of SCH.valves) if (v.kind === 'av') v.ch = v.hinges.map(() => [mk('path', {}, SCH.chord), mk('path', {}, SCH.chord)]);
  // blood: dots carried along each route at the speed of the flow that drives it (they stop when its valve is shut)
  SCH.routes = [
    ['M104,4 L104,70 C104,86 108,100 112,112', 'cv', 'r', 7], ['M112,306 L112,200 C112,160 106,138 100,122', 'cv', 'r', 7, true],
    ['M118,112 C120,136 118,168 120,196', 'tv', 'r', 7], ['M128,205 C142,190 148,150 147,112 C148,92 158,78 176,72 C200,66 224,66 250,68 L318,66', 'pvv', 'r', 12],
    ['M326,92 L282,96 C262,98 248,102 240,110', 'pvla', 'l', 7], ['M326,113 L284,110 C266,108 252,108 244,114', 'pvla', 'l', 5],
    ['M234,118 C234,150 234,180 232,214', 'mv', 'l', 7], ['M226,236 C210,206 196,160 190,114 L190,60 C190,36 212,28 234,28 C256,28 268,42 268,62 L268,100', 'av', 'l', 13],
  ].map(([d, q, side, n, back]) => { const p = mk('path', { d, fill: 'none', stroke: 'none' }), L = p.getTotalLength();
    return { p, L, q, n, dots: Array.from({ length: n }, (_, i) => ({ s: (i + Math.random() * 0.6) / n, e: mk('circle', { r: 1.7, class: 'dot-' + side }, back ? SCH.dotsBack : SCH.dots) })) }; });
  const lab = (x, y, s, cls = 'sl-n') => txt(x, y, s, cls + ' m');
  lab(104, 98, 'Right atrium'); lab(246, 100, 'Left atrium'); SCH.tRV = lab(138, 170, 'Right ventricle'); SCH.tLV = lab(226, 176, 'Left ventricle');
  SCH.pra = txt(104, 110, '', 'sl-p m'); SCH.pla = txt(246, 112, '', 'sl-p m'); SCH.prv = txt(138, 182, '', 'sl-p m'); SCH.plv = txt(226, 188, '', 'sl-p m');
  txt(110, 12, 'superior vena cava', 'sl-s'); txt(120, 304, 'inferior vena cava', 'sl-s'); txt(34, 64, 'to right lung', 'sl-s');
  txt(330, 52, 'to left lung', 'sl-s e'); txt(336, 124, 'from lungs', 'sl-s e'); txt(262, 12, 'aorta: to the body', 'sl-s');
  // valve names where each valve sits; their state is in the row under the picture
  txt(86, 150, 'tricuspid', 'sl-vn e'); txt(287, 150, 'mitral', 'sl-vn'); txt(147, 127, 'pulmonary', 'sl-vi m'); txt(190, 127, 'aortic', 'sl-vi m');
  const row = $('#schValves'); row.innerHTML = '';
  SCH.vlab = Object.fromEntries([['v_tricuspid', 'Tricuspid'], ['v_pulmonary', 'Pulmonary'], ['v_mitral', 'Mitral'], ['v_aortic', 'Aortic']].map(([k, n]) => { const e = el('span', { class: 'sv' }, `${n} <b>shut</b>`); row.append(e); return [k, e]; }));
  SCH.last = performance.now();
}
function drawSchema() {
  if (!SCH.mass || $('#p-learn').hidden) return;
  const V = sim.V, P = sim.P, Q = sim.Q, now = performance.now(), wall = Math.min(0.05, (now - SCH.last) / 1000); SCH.last = now;
  const simDt = SCRUB.on ? 0 : (playing ? wall * speed : 0);
  // chambers follow their volumes: cavities shrink toward the apex as the walls thicken; atria swell and empty
  const fL = V.lv / (BASE.edv || 130), fR = V.rv / (BASE.rvEdv || 140);
  const sc = (g, ax, ay, f, k) => { const sx = 1 - k * 0.45 * (1 - f), sy = 1 - k * (1 - f); g.setAttribute('transform', `translate(${ax} ${ay}) scale(${sx} ${sy}) translate(${-ax} ${-ay})`); return [sx, sy]; };
  const [lsx, lsy] = sc(SCH.lvG, 232, 126, fL, 0.55), [rsx, rsy] = sc(SCH.rvG, 130, 130, fR, 0.45);
  const fm = 0.5 * (fL + fR); SCH.mass.setAttribute('transform', `translate(186 126) scale(${1 - 0.04 * (1 - fm)} ${1 - 0.1 * (1 - fm)}) translate(-186 -126)`);
  SCH.mass.style.filter = `brightness(${1 - 0.18 * sim.e})`; // the muscle darkens a little as it contracts
  const at = (el, ax, ay, v, ref) => { const s = Math.max(0.8, Math.min(1.15, 0.75 + 0.25 * v / ref)); el.setAttribute('transform', `translate(${ax} ${ay}) scale(${s}) translate(${-ax} ${-ay})`); };
  at(SCH.ra, 104, 128, V.ra, refV.ra || 50); at(SCH.la, 246, 125, V.la, refV.la || 55);
  const f1 = v => fmt(v, v < 20 ? 1 : 0);
  SCH.pra.textContent = `${f1(P.ra)} mmHg`; SCH.pla.textContent = `${f1(P.la)} mmHg`;
  SCH.prv.textContent = `${f1(P.rv)} mmHg · ${fmt(V.rv)} ml`; SCH.plv.textContent = `${f1(P.lv)} mmHg · ${fmt(V.lv)} ml`;
  const T = (x, y, ax, ay, sx, sy) => [ax + (x - ax) * sx, ay + (y - ay) * sy]; // a point carried by a chamber's scaling
  for (const v of SCH.valves) {
    const o = Math.min(1, Math.max(0, valveInfo[v.seg]?.open ?? 0)), open = o > 0.2;
    v.hinges.forEach(([hx, hy], i) => {
      const a = v.closedA[i] + (v.openA[i] - v.closedA[i]) * o, L = v.len[i];
      const tx = hx + L * Math.cos(a), ty = hy + L * Math.sin(a);
      // belly: shut AV leaflets billow back toward the atrium under ventricular pressure; shut cusps sag toward the ventricle
      const nx = -Math.sin(a), ny = Math.cos(a), sgn = i ? -1 : 1;
      const bul = v.kind === 'av' ? -(1 - o) * (2 + Math.min(4, Math.max(0, (v.seg === 'v_mitral' ? P.lv - P.la : P.rv - P.ra) / 25))) : (1 - o) * 4 + o * 1.2;
      const cx = (hx + tx) / 2 + nx * bul * sgn * (v.kind === 'av' ? 1 : -1), cy = (hy + ty) / 2 + ny * bul * sgn * (v.kind === 'av' ? 1 : -1);
      const d = `M${hx},${hy} Q${cx.toFixed(1)},${cy.toFixed(1)} ${tx.toFixed(1)},${ty.toFixed(1)}`;
      for (const e of v.els[i]) e.setAttribute('d', d);
      v.els[i][1].classList.toggle('open', open);
      if (v.ch) { const [px, py] = v.seg === 'v_mitral' ? T(...SCH.papL[i], 232, 126, lsx, lsy) : T(...SCH.papR[i], 130, 130, rsx, rsy);
        const mx = hx + 0.6 * (tx - hx), my = hy + 0.6 * (ty - hy);
        v.ch[i][0].setAttribute('d', `M${tx.toFixed(1)},${ty.toFixed(1)} L${px.toFixed(1)},${py.toFixed(1)}`);
        v.ch[i][1].setAttribute('d', `M${mx.toFixed(1)},${my.toFixed(1)} L${px.toFixed(1)},${py.toFixed(1)}`); }
    });
    const l = SCH.vlab[v.seg], b = l.querySelector('b'), st = open ? 'open' : 'shut'; if (b.textContent !== st) { b.textContent = st; l.classList.toggle('open', open); }
  }
  // blood dots: speed along each route ∝ the flow driving it; reverse flow (a leak) carries them backwards
  for (const r of SCH.routes) {
    const q = Q[r.q] || 0, ds = simDt * q / 900 * 2.2;
    for (const d of r.dots) { d.s = ((d.s + ds * 100 / r.L * 1.6) % 1 + 1) % 1; const pt = r.p.getPointAtLength(d.s * r.L); d.e.setAttribute('cx', pt.x.toFixed(1)); d.e.setAttribute('cy', pt.y.toFixed(1)); }
  }
}
function setSpeed(v) { speed = v; $$('[data-speed]').forEach(x => x.setAttribute('aria-pressed', +x.dataset.speed === v)); }
function tourGo(i) {
  tourI = i; const s = TOUR[i], ev = tourEvents(); let f = null;
  if (ev) { scrubTo(s.at(ev)); f = SCRUB.frame; }
  hlNow.clear(); // the open/closed valve colours carry the message; no extra glow
  renderTour(f);
}
function renderTour(f) {
  const s = TOUR[tourI];
  $$('#tourStrip button').forEach((b, i) => { if (i === tourI) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current'); });
  $('#tourCard').innerHTML = `<h3>${s.title}</h3><p class="sub">${s.sub}</p><p>${s.p}</p><ul class="look">${s.look.map(x => `<li>${x}</li>`).join('')}</ul>` +
    (f ? `<div class="why"><span style="font-family:var(--f-body);color:var(--muted)">Why each valve is open or shut right now:</span>${framePhaseWhy(f)}<span>Ventricle volume ${fmt(f.V.lv)} ml</span></div>` : `<p class="note" style="margin:0">Press <b>Next</b> to freeze the heart at each moment of one beat.</p>`);
  $('#tourPos').textContent = `${tourI + 1} of ${TOUR.length}`;
  const cb = $('#tourClose'), close = SECTION.on && SECTION.mode === s.valve; cb.hidden = !s.valve;
  if (s.valve) cb.textContent = close ? 'Back to the side cut' : `Look straight down onto the ${VALVE_NAME[s.valve].toLowerCase()} valve`;
  $('#tourPrev').disabled = tourI === 0; $('#tourNext').disabled = tourI === TOUR.length - 1;
}

/* ---------------- graphs ---------------- */
const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
function axes(ctx, W, H, pad, xr, yr, xt, yt, xl, yl) {
  const X = x => pad.l + (x - xr[0]) / (xr[1] - xr[0]) * (W - pad.l - pad.r);
  const Y = y => H - pad.b - (y - yr[0]) / (yr[1] - yr[0]) * (H - pad.t - pad.b);
  ctx.strokeStyle = css('--line'); ctx.lineWidth = 1; ctx.fillStyle = css('--muted'); ctx.font = `22px ${css('--f-data')}`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  for (const x of xt) { ctx.beginPath(); ctx.moveTo(X(x), pad.t); ctx.lineTo(X(x), H - pad.b); ctx.stroke(); ctx.fillText(x, X(x), H - pad.b + 8); }
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  for (const y of yt) { ctx.beginPath(); ctx.moveTo(pad.l, Y(y)); ctx.lineTo(W - pad.r, Y(y)); ctx.stroke(); ctx.fillText(y, pad.l - 8, Y(y)); }
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic'; ctx.font = `600 22px ${css('--f-body')}`;
  ctx.fillText(xl, (pad.l + W - pad.r) / 2, H - 6);
  ctx.save(); ctx.translate(24, (pad.t + H - pad.b) / 2); ctx.rotate(-Math.PI / 2); ctx.fillText(yl, 0, 0); ctx.restore();
  return [X, Y];
}
function drawPV() {
  const c = $('#pv'), ctx = c.getContext('2d'), W = c.width, H = c.height; ctx.clearRect(0, 0, W, H);
  const s = sim.stats; if (!s) return;
  const maxV = Math.max(200, Math.ceil((s.edv + 20) / 50) * 50), maxP = Math.max(160, Math.ceil((Math.max(...sim.loop.filter((_, i) => i % 2)) + 10) / 40) * 40);
  const pad = { l: 78, r: 20, t: 16, b: 66 };
  const [X, Y] = axes(ctx, W, H, pad, [0, maxV], [0, maxP], range(0, maxV, 50), range(0, maxP, 40), 'LV volume, ml', 'LV pressure, mmHg');
  PVM = { X, Y };
  ctx.save(); ctx.beginPath(); ctx.rect(pad.l, pad.t, W - pad.l - pad.r, H - pad.t - pad.b); ctx.clip();
  const line = (pts, col, w, dash = []) => { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.setLineDash(dash); ctx.beginPath(); for (let i = 0; i < pts.length; i += 2) { const x = X(pts[i]), y = Y(pts[i + 1]); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke(); ctx.setLineDash([]); };
  // ESPVR and EDPVR
  line([10, 0, maxV, s.ees * (maxV - 10)], css('--muted'), 2, [8, 8]);
  const ed = []; for (let v = 10; v <= maxV; v += 4) ed.push(v, s.lvA * (Math.exp(s.lvB * (v - 10)) - 1)); line(ed, css('--muted'), 2, [8, 8]);
  ctx.globalAlpha = 0.35; line(BASE_LOOP, css('--ink'), 3); ctx.globalAlpha = 1;
  // the loop coloured by phase, from the valve states recorded in the last beat
  { const fr = sim.framesLast, rws = beatRows(); const PH = phaseColors();
    const phOf = f => f.open.mv ? 0 : f.open.av ? 2 : (f.tc < (sim.eventsLast.avOpen ?? 0.1) ? 1 : 3);
    ctx.lineWidth = 6; ctx.lineCap = 'round';
    for (let i = 1; i < Math.min(fr.length, rws.length); i++) { ctx.strokeStyle = PH[phOf(fr[i])]; ctx.beginPath(); ctx.moveTo(X(rws[i - 1].v), Y(rws[i - 1].lv)); ctx.lineTo(X(rws[i].v), Y(rws[i].lv)); ctx.stroke(); }
    if (!fr.length) line(sim.loop, css('--accent'), 4.5); }
  const rows = beatRows(), ev = sim.eventsLast;
  ctx.font = `600 19px ${css('--f-body')}`;
  ctx.restore();
  for (const [k, n, dx, dy] of [['mvClose', 'MV closes · end-diastole', 12, -12], ['avOpen', 'AV opens', 12, 8], ['avClose', 'AV closes · end-systole', 14, 26], ['mvOpen', 'MV opens', 14, -12]]) {
    if (ev[k] === undefined || !rows.length) continue; const r = atTime(rows, ev[k]);
    ctx.fillStyle = css('--ink'); ctx.beginPath(); ctx.arc(X(r.v), Y(r.lv), 6, 0, 7); ctx.fill();
    ctx.textAlign = 'left'; ctx.fillText(n, Math.min(X(r.v) + dx, W - 250), Y(r.lv) + dy);
  }
  ctx.fillStyle = css('--ink'); ctx.font = `600 22px ${css('--f-body')}`; ctx.textAlign = 'left';
  ctx.fillText(`SV ${fmt(s.sv)} ml · EF ${fmt(s.ef * 100)} % · stroke work ${fmt(s.sv * s.map * 1.333e-4, 2)} J`, pad.l + 10, pad.t + 26);
  if (SCRUB.on) { const f = SCRUB.frame; ctx.strokeStyle = css('--accent'); ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(X(f.V.lv), Y(f.P.lv), 12, 0, 7); ctx.stroke(); ctx.fillStyle = css('--accent'); ctx.beginPath(); ctx.arc(X(f.V.lv), Y(f.P.lv), 5, 0, 7); ctx.fill(); }
}
const range = (a, b, st) => { const r = []; for (let x = a; x <= b + 1e-9; x += st) r.push(x); return r; };
function drawGuyton() {
  const c = $('#gy'), ctx = c.getContext('2d'), W = c.width, H = c.height; ctx.clearRect(0, 0, W, H);
  const s = sim.stats; if (!s) return;
  const xmax = Math.max(16, Math.ceil((s.pmsf + 2) / 4) * 4), ymax = Math.max(12, Math.ceil(s.co * 1.6 / 2) * 2);
  const pad = { l: 78, r: 24, t: 16, b: 66 };
  const [X, Y] = axes(ctx, W, H, pad, [-4, xmax], [0, ymax], range(-4, xmax, 4), range(0, ymax, 2), 'Right atrial pressure, mmHg', 'Flow, L/min');
  ctx.save(); ctx.beginPath(); ctx.rect(pad.l, pad.t, W - pad.l - pad.r, H - pad.t - pad.b); ctx.clip();
  const rvr = (s.pmsf - s.rap) / s.vr;
  const vr = p => Math.max(0, (s.pmsf - Math.max(p, -2)) / rvr); // plateau: great veins collapse below about −2 mmHg
  const draw = (f, col, w) => { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); for (let p = -4; p <= xmax; p += 0.1) { const y = Y(f(p)); p === -4 ? ctx.moveTo(X(p), y) : ctx.lineTo(X(p), y); } ctx.stroke(); };
  // baseline curves (faint)
  const bvr = p => Math.max(0, (BASE.pmsf - Math.max(p, -2)) / ((BASE.pmsf - BASE.rap) / BASE.vr));
  // cardiac function curve from the RV filling curve, scaled through the operating point
  const p = sim.p, rv = p.rv;
  const edv = P => rv.V0 + Math.log(Math.max(P, 0.05) / rv.A + 1) / rv.B;
  const esv = s.rvEdv - s.sv;
  const cf0 = P => Math.max(0, edv(P) - esv);
  const k = s.co / Math.max(1e-3, cf0(s.rap)); const cf = P => k * cf0(P);
  const kb = BASE.co / Math.max(1e-3, Math.max(0, edv(BASE.rap) - (BASE.rvEdv - BASE.sv))); const cfb = P => kb * Math.max(0, edv(P) - (BASE.rvEdv - BASE.sv));
  ctx.globalAlpha = 0.3; draw(bvr, css('--venous'), 3); draw(cfb, css('--accent'), 3); ctx.globalAlpha = 1;
  draw(vr, css('--venous'), 4.5); draw(cf, css('--accent'), 4.5);
  ctx.fillStyle = css('--ink'); ctx.beginPath(); ctx.arc(X(s.rap), Y(s.co), 9, 0, 7); ctx.fill();
  ctx.restore();
  ctx.font = `600 22px ${css('--f-body')}`; ctx.textAlign = 'left';
  ctx.fillStyle = css('--venous'); ctx.textAlign = 'right'; ctx.fillText(`Venous return · Pmsf ${fmt(s.pmsf, 1)}`, W - pad.r - 8, Y(ymax) + 56); ctx.textAlign = 'left';
  ctx.fillStyle = css('--accent'); ctx.fillText('Cardiac function', X(-3.6), Y(ymax) + 26);
  ctx.fillStyle = css('--ink'); ctx.fillText(`${fmt(s.co, 1)} L/min at ${fmt(s.rap, 1)} mmHg`, Math.min(X(s.rap) + 16, W - 280), Y(s.co) - 16);
}
function drawBars() {
  const s = sim.stats; if (!s) return; const host = $('#bars');
  if (!host.childElementCount) for (const b of BEDS) host.append(el('div', { class: 'b', id: 'bar-' + b.id }, `<span>${b.name}</span><div class="track"><div class="fill"></div><div class="base"></div></div><span class="n"></span>`));
  const mx = Math.max(1800, ...Object.values(s.beds));
  for (const b of BEDS) { const r = $('#bar-' + b.id); r.querySelector('.fill').style.width = `${Math.max(0, s.beds[b.id]) / mx * 100}%`; r.querySelector('.base').style.left = `${BASE.beds[b.id] / mx * 100}%`; r.querySelector('.n').textContent = fmt(s.beds[b.id]); }
}

function beatRows() { const w = sim.wigLast, r = []; for (let i = 0; i < w.length; i += 8) r.push({ t: w[i], lv: w[i + 1], ao: w[i + 2], la: w[i + 3], v: w[i + 4], ra: w[i + 5], rv: w[i + 6], pa: w[i + 7] }); return r; }
function atTime(rows, t) { let best = rows[0]; for (const r of rows) if (Math.abs(r.t - t) < Math.abs(best.t - t)) best = r; return best; }
let WG = null, PVM = null;
function drawWiggers() {
  const c = $('#wg'), ctx = c.getContext('2d'), W = c.width, H = c.height; ctx.clearRect(0, 0, W, H);
  const rows = beatRows(), ev = sim.eventsLast; if (rows.length < 10 || ev.avOpen === undefined) return;
  const T = ev.T, pad = { l: 78, r: 18 };
  // panels: ECG, pressures, volume, sounds
  const P1 = { t: 28, b: 108 }, P2 = { t: 150, b: 560 }, P3 = { t: 600, b: 790 }, P4 = { t: 812, b: 860 };
  const X = t => pad.l + t / T * (W - pad.l - pad.r);
  WG = { T, l: pad.l, r: W - pad.r, W };
  const ink = css('--ink'), mut = css('--muted'), line = css('--line');
  ctx.font = `20px ${css('--f-data')}`;
  const panel = (P, lo, hi, ticks, label) => {
    const Y = v => P.b - (v - lo) / (hi - lo) * (P.b - P.t);
    ctx.strokeStyle = line; ctx.lineWidth = 1; ctx.fillStyle = mut; ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
    for (const y of ticks) { ctx.beginPath(); ctx.moveTo(pad.l, Y(y)); ctx.lineTo(W - pad.r, Y(y)); ctx.stroke(); ctx.fillText(y, pad.l - 8, Y(y)); }
    ctx.save(); ctx.translate(22, (P.t + P.b) / 2); ctx.rotate(-Math.PI / 2); ctx.textAlign = 'center'; ctx.font = `600 20px ${css('--f-body')}`; ctx.fillText(label, 0, 0); ctx.restore(); ctx.font = `20px ${css('--f-data')}`;
    return Y;
  };
  const maxP = Math.max(140, Math.ceil(Math.max(...rows.map(r => Math.max(r.lv, r.ao))) / 20) * 20 + 10);
  const Yp = panel(P2, 0, maxP, range(0, maxP, 20), 'Pressure, mmHg');
  const vmin = Math.floor(Math.min(...rows.map(r => r.v)) / 20) * 20 - 10, vmax = Math.ceil(Math.max(...rows.map(r => r.v)) / 20) * 20 + 10;
  const Yv = panel(P3, vmin, vmax, range(vmin + 10, vmax, 20), 'LV vol, ml');
  // event lines and phase bands
  const evs = [['mvClose', 'MV closes'], ['avOpen', 'AV opens'], ['avClose', 'AV closes'], ['mvOpen', 'MV opens']].filter(([k]) => ev[k] !== undefined);
  ctx.setLineDash([6, 6]); ctx.strokeStyle = mut;
  for (const [k] of evs) { ctx.beginPath(); ctx.moveTo(X(ev[k]), P1.t); ctx.lineTo(X(ev[k]), P4.b); ctx.stroke(); }
  ctx.setLineDash([]);
  const bands = [[0, ev.mvClose ?? 0, ''], [ev.mvClose ?? 0, ev.avOpen, 'IVC'], [ev.avOpen, ev.avClose, 'Ejection'], [ev.avClose, ev.mvOpen ?? ev.avClose, 'IVR'], [ev.mvOpen ?? T, T, 'Filling']];
  ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.font = `700 19px ${css('--f-display')}`; ctx.fillStyle = mut;
  for (const [a, b, n] of bands) if (n && b - a > 0.02) ctx.fillText(n, X((a + b) / 2), P2.t + 4);
  ctx.font = `18px ${css('--f-body')}`; ctx.fillStyle = ink; ctx.textBaseline = 'bottom';
  ctx.textAlign = 'left'; evs.forEach(([k, n], i) => ctx.fillText(n, Math.min(W - 120, X(ev[k]) + 4), i % 2 ? P2.t - 2 : P1.t - 2));
  // ECG (schematic): P before atrial systole, QRS at activation onset, T during relaxation
  const g = (t, c, w, a) => a * Math.exp(-((t - c) ** 2) / (2 * w * w));
  const k = Math.sqrt(T / 0.833);
  // QRS precedes mechanical systole by the ~30 ms electromechanical delay; T wave ends near AV closure
  const qrs = (t, c) => -g(t, c - 0.012, 0.005, 0.1) + g(t, c, 0.008, 1) - g(t, c + 0.016, 0.007, 0.25);
  const ecg = t => g(t, T - 0.19, 0.022, 0.15) + qrs(t, -0.03) + qrs(t, T - 0.03) + g(t, 0.22 * k, 0.04 * k, 0.3);
  const Ye = v => P1.b - 18 - v * (P1.b - P1.t - 30);
  ctx.strokeStyle = css('--good'); ctx.lineWidth = 3; ctx.beginPath(); for (let t = 0; t <= T; t += 0.003) { const y = Ye(ecg(t)); t ? ctx.lineTo(X(t), y) : ctx.moveTo(X(t), y); } ctx.stroke();
  ctx.fillStyle = mut; ctx.font = `600 18px ${css('--f-body')}`; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.fillText('ECG', 6, (P1.t + P1.b) / 2);
  ctx.fillText('P', X(T - 0.19) - 6, Ye(0.42)); ctx.fillText('QRS', X(T - 0.03) - 44, Ye(0.95)); ctx.fillText('T', X(0.22 * k) - 6, Ye(0.55));
  // pressure traces
  const tr = (key, col, w, Y) => { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); rows.forEach((r, i) => { const x = X(r.t), y = Y(r[key]); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }); ctx.stroke(); };
  tr('la', css('--venous'), 3, Yp); tr('ao', css('--accent'), 4, Yp); tr('lv', ink, 3.5, Yp); tr('v', ink, 3.5, Yv);
  ctx.font = `600 19px ${css('--f-body')}`; ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  const peak = rows.reduce((a, r) => r.ao > a.ao ? r : a);
  ctx.fillStyle = css('--accent'); ctx.fillText('Aortic', X(peak.t) + 10, Yp(peak.ao) - 10);
  const lvpk = rows.reduce((a, r) => r.lv > a.lv ? r : a); ctx.fillStyle = ink; ctx.fillText('LV', X(lvpk.t) - 34, Yp(lvpk.lv) - 6);
  // dicrotic notch: minimum of aortic pressure just before AV closure, then the rebound
  const near = rows.filter(r => r.t > ev.avClose - 0.03 && r.t < ev.avClose + 0.01); const notch = near.reduce((a, r) => r.ao < a.ao ? r : a, near[0]);
  if (notch) { ctx.fillStyle = css('--accent'); ctx.beginPath(); ctx.arc(X(notch.t), Yp(notch.ao), 6, 0, 7); ctx.fill(); ctx.fillText('dicrotic notch', X(notch.t) + 12, Yp(notch.ao) + 28); }
  // LA waves: a (atrial systole, end of beat), c (bulge at MV closure), v (peak before MV opens)
  const la = (a, b) => rows.filter(r => r.t >= a && r.t <= b);
  const mx = arr => arr.reduce((a, r) => r.la > a.la ? r : a, arr[0]);
  const aW = mx(la(T - 0.17, T)), cW = mx(la(ev.mvClose ?? 0, (ev.avOpen ?? 0.06) + 0.03)), vW = mx(la((ev.mvOpen ?? T) - 0.12, (ev.mvOpen ?? T) + 0.02));
  ctx.fillStyle = css('--venous'); ctx.textAlign = 'center';
  const isPeak = (r, w) => r && w.length > 2 && r.la > w[0].la + 0.3 && r.la > w[w.length - 1].la + 0.3;
  const wc = la(ev.mvClose ?? 0, (ev.avOpen ?? 0.06) + 0.03);
  for (const [r, n, ok] of [[aW, 'a', true], [cW, 'c', isPeak(cW, wc)], [vW, 'v', true]]) if (r && ok) ctx.fillText(n, X(r.t), Yp(r.la) - 12);
  // descents: x between c and v (atrial relaxation + AV-ring descent), y after the mitral valve opens
  const mn = arr => arr.reduce((a, r) => r.la < a.la ? r : a, arr[0]);
  const xD = cW && vW ? mn(la(cW.t, vW.t)) : null, yD = mn(la(ev.mvOpen ?? T, Math.min(T, (ev.mvOpen ?? T) + 0.25)));
  for (const [r, n] of [[xD, 'x'], [yD, 'y']]) if (r) ctx.fillText(n, X(r.t), Yp(r.la) + 24);
  ctx.textAlign = 'left'; ctx.fillText('LA', X(T * 0.62), Yp(atTime(rows, T * 0.62).la) + 26);
  // volume labels
  ctx.fillStyle = ink; ctx.fillText(`EDV ${fmt(sim.stats.edv)}`, X(0) + 6, Yv(sim.stats.edv) - 10);
  ctx.fillText(`ESV ${fmt(sim.stats.esv)}`, X(ev.avClose) + 8, Yv(sim.stats.esv) + 26);
  // heart sounds
  ctx.fillStyle = mut; ctx.font = `600 18px ${css('--f-body')}`; ctx.fillText('Sounds', 6, (P4.t + P4.b) / 2);
  ctx.fillStyle = ink; ctx.textAlign = 'center';
  const snd = (t, n) => { ctx.fillRect(X(t) - 2, P4.t + 4, 4, 26); ctx.fillText(n, X(t), P4.b + 2); };
  if (ev.mvClose !== undefined) snd(ev.mvClose, 'S1'); snd(ev.avClose, 'S2');
  // time axis
  ctx.fillStyle = mut; ctx.font = `18px ${css('--f-data')}`; ctx.textBaseline = 'top';
  for (let t = 0; t <= T + 1e-6; t += 0.2) ctx.fillText(`${fmt(t * 1000)} ms`, X(t), P3.b + 6);
  if (SCRUB.on) { // cursor at the moment shown on the heart
    const x = X(SCRUB.t), f = SCRUB.frame;
    ctx.fillStyle = css('--accent'); ctx.globalAlpha = 0.12; ctx.fillRect(x - 10, P1.t, 20, P3.b - P1.t); ctx.globalAlpha = 1;
    ctx.strokeStyle = css('--accent'); ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x, P1.t); ctx.lineTo(x, P4.b); ctx.stroke();
    for (const [v, Y, col] of [[f.P.lv, Yp, ink], [f.P.ao, Yp, css('--accent')], [f.P.la, Yp, css('--venous')], [f.V.lv, Yv, ink]]) { ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, Y(v), 7, 0, 7); ctx.fill(); }
  }
}
function drawGraphs() { if ($('#p-gr').hidden) return; drawWiggers(); drawPV(); drawGuyton(); drawBars(); }


/* ---------------- scrubbing through the beat ---------------- */
// Drag on the Wiggers diagram or the PV loop: the simulation pauses and the 3D heart shows that instant
// of the last beat (volumes, pressures, valve positions, flows).
const SCRUB = { on: false, t: 0, frame: null, saved: null, wasPlaying: false };
function scrubTo(t) {
  const fr = SCRUB.on ? SCRUB.frames : sim.framesLast; if (!fr || !fr.length) return;
  if (!SCRUB.on) {
    SCRUB.on = true; SCRUB.frames = fr; SCRUB.wasPlaying = playing; playing = false; setPlayBtn();
    SCRUB.saved = { V: sim.V, P: sim.P, Q: sim.Q, open: sim.open, e: sim.e, ea: sim.ea, tc: sim.tc };
    // show the PV loop's chamber: a long-axis cut through LV, LA, mitral and aortic valves, close up
    SCRUB.prev = { sec: SECTION.on ? SECTION.mode : 'off', flow: display.flow, view: currentView, cam: camera.position.clone(), tgt: controls3.target.clone() };
    const keep = SECTION.on && (SECTION.mode === 'long' || SECTION.mode.startsWith('v_'));
    if (meta && !keep) { setSection('long'); }
    if (meta && SECTION.origin && !SECTION.mode.startsWith('v_')) { const t = SECTION.origin.clone(); camAnim = { p0: camera.position.clone(), t0: controls3.target.clone(), p1: t.clone().add(SECTION.nCam.clone().multiplyScalar(0.27)).add(new THREE.Vector3(0, 0.001, 0)), t1: t, k: 0 }; }
  }
  let lo = 0, hi = fr.length - 1; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (fr[m].tc < t) lo = m; else hi = m; }
  const f = Math.abs(fr[lo].tc - t) < Math.abs(fr[hi].tc - t) ? fr[lo] : fr[hi];
  sim.V = f.V; sim.P = f.P; sim.Q = f.Q; sim.open = f.open; sim.e = f.e; sim.ea = f.ea; sim.tc = f.tc;
  SCRUB.t = f.tc; SCRUB.frame = f;
  const [ph, sub] = phaseName(); phaseTxt = ph; $('#phase span').textContent = ph; $('#phase').title = sub;
  $('#scrubInfo').innerHTML = `<b>${fmt(f.tc * 1000)} ms</b> · ${ph} · LV ${fmt(f.P.lv)} / aorta ${fmt(f.P.ao)} / LA ${fmt(f.P.la, 1)} mmHg · LV volume ${fmt(f.V.lv)} ml`;
  $('#scrubBar').hidden = false; $('#scrubBar2').hidden = false; $('#scrubInfo2').innerHTML = $('#scrubInfo').innerHTML;
  drawWiggers(); drawPV();
}
function endScrub() {
  if (!SCRUB.on) return;
  Object.assign(sim, SCRUB.saved); SCRUB.on = false; $('#scrubBar').hidden = true; $('#scrubBar2').hidden = true;
  const pv = SCRUB.prev; if (pv && meta) {
    if ((SECTION.on ? SECTION.mode : 'off') !== pv.sec) setSection(pv.sec);
    if (display.flow !== pv.flow) { display.flow = pv.flow; $('#tFlow').setAttribute('aria-pressed', pv.flow); applyFlowLook(); }
    if (pv.view !== currentView) setView(pv.view); else camAnim = { p0: camera.position.clone(), t0: controls3.target.clone(), p1: pv.cam, t1: pv.tgt, k: 0 };
  }
  playing = SCRUB.wasPlaying; setPlayBtn(); drawGraphs(); updateValveHud();
}
function canvasXY(c, e) { const r = c.getBoundingClientRect(); return [(e.clientX - r.left) * c.width / r.width, (e.clientY - r.top) * c.height / r.height]; }
function bindScrub(c, toT) {
  let down = false;
  c.addEventListener('pointerdown', e => { down = true; c.setPointerCapture(e.pointerId); const t = toT(...canvasXY(c, e)); if (t != null) scrubTo(t); });
  c.addEventListener('pointermove', e => { if (!down) return; const t = toT(...canvasXY(c, e)); if (t != null) scrubTo(t); });
  c.addEventListener('pointerup', () => { down = false; });
  c.addEventListener('keydown', e => { if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return; e.preventDefault(); const T = (SCRUB.frames || sim.framesLast).at(-1)?.tc || 0.8; scrubTo(Math.min(T, Math.max(0, (SCRUB.on ? SCRUB.t : 0) + (e.key === 'ArrowRight' ? 0.01 : -0.01)))); });
}
bindScrub($('#wg'), x => WG ? Math.min(WG.T, Math.max(0, (x - WG.l) / (WG.r - WG.l) * WG.T)) : null);
bindScrub($('#pv'), (x, y) => { // nearest point of the last loop
  if (!PVM) return null; const rows = beatRows(); let best = null, bd = 1e9;
  for (const r of rows) { const d = (PVM.X(r.v) - x) ** 2 + (PVM.Y(r.lv) - y) ** 2; if (d < bd) { bd = d; best = r; } }
  return best ? best.t : null; });
$('#scrubResume').addEventListener('click', endScrub);
$('#scrubResume2').addEventListener('click', endScrub);

/* ---------------- sweep (monitor traces) ---------------- */
const sw = $('#sw'), swc = sw.getContext('2d');
let swX = 0, swLast = null, swAcc = 0;
function sizeSweep() { SWC = { bg: css('--mon-panel'), lv: css('--lvp'), ao: css('--abp'), pa: css('--pap'), cv: css('--cvp'), font: css('--f-data') }; const r = sw.getBoundingClientRect(), d = Math.min(2, devicePixelRatio || 1); sw.width = Math.max(10, r.width * d); sw.height = Math.max(10, r.height * d); swX = 0; swLast = null; swc.fillStyle = css('--mon-panel'); swc.fillRect(0, 0, sw.width, sw.height); gridSweep(0, sw.width); }
function gridSweep(x0, x1) {
  const H = sw.height, d = sw.height / 128;
  swc.fillStyle = SWC.bg; swc.fillRect(x0, 0, x1 - x0, H);
  swc.strokeStyle = '#1d2a33'; swc.lineWidth = 1;
  for (const p of [0, 40, 80, 120, 160]) { const y = swY(p); swc.beginPath(); swc.moveTo(x0, y); swc.lineTo(x1, y); swc.stroke(); }
  if (x0 === 0) { swc.fillStyle = '#5d717d'; swc.font = `${10 * d}px ${SWC.font}`; swc.textBaseline = 'middle'; for (const p of [40, 80, 120]) swc.fillText(p, 4 * d, swY(p) - 6 * d); }
}
let SWC = {};
const swY = p => sw.height - 8 * (sw.height / 128) - p / 165 * (sw.height - 16 * (sw.height / 128));
function sweepSample(dtSim) {
  swAcc += dtSim; const pxPerS = sw.width / 6; const dx = swAcc * pxPerS; if (dx < 1) return; swAcc = 0;
  const P = sim.P, cur = { ao: P.ao, lv: P.lv, pa: P.pa, cv: P.cv };
  const x0 = swX, x1 = swX + dx;
  gridSweep(Math.floor(x0) + 1, Math.min(sw.width, Math.ceil(x1) + 14 * (sw.height / 128)));
  if (swLast) {
    const d = sw.height / 128;
    for (const [k, col, w] of [['lv', SWC.lv, 1.4], ['ao', SWC.ao, 2], ['pa', SWC.pa, 1.6], ['cv', SWC.cv, 1.6]]) {
      swc.strokeStyle = col; swc.lineWidth = w * d; swc.beginPath(); swc.moveTo(x0, swY(swLast[k])); swc.lineTo(x1, swY(cur[k])); swc.stroke();
    }
  }
  swLast = cur; swX = x1; if (swX >= sw.width) { swX = 0; swLast = null; }
}

/* ---------------- magnified arteriole ---------------- */
let zoomBed = null; const zc = $('#zc'), zctx = zc.getContext('2d');
const cells = Array.from({ length: 26 }, () => ({ x: Math.random(), y: Math.random() * 2 - 1, s: 0.8 + Math.random() * 0.4 }));
function openZoom(bed) { zoomBed = bed; $('#zoomWrap').hidden = false; drawZoomText(); hl(bed); }
$('#zClose').addEventListener('click', () => { zoomBed = null; $('#zoomWrap').hidden = true; });
function drawZoomText() {
  if (!zoomBed) return; const b = BEDS.find(x => x.id === zoomBed), r = sim.p.bedRadius[zoomBed], s = sim.stats;
  $('#zTitle').textContent = `Arterioles · ${b.name}`;
  $('#zEq').textContent = `r ${fmt(r * 100)} % → R ×${fmt(r ** -4, 2)} → Q ${s ? fmt(s.beds[zoomBed]) : '–'} ml/min`;
  $('#zNote').textContent = b.auto ? `This bed autoregulates: between about ${b.auto[0]} and ${b.auto[1]} mmHg its arterioles adjust so flow stays nearly constant${b.id === 'coronary' ? ', and flow follows the heart\'s O₂ demand' : ''}. A radius you impose here still changes its flow.` : 'Smooth muscle in the wall sets r. Sympathetic α1 tone narrows it; the baroreflex adjusts it automatically.';
}
function drawZoom(dt) {
  if (!zoomBed) return;
  const W = zc.width, H = zc.height, r = sim.p.bedRadius[zoomBed] * sim.eff.R ** (-0.25 * BEDS.find(x => x.id === zoomBed).reflex);
  const lumen = 44 * r, wallArea = 44 * 22 + 22 * 22, outer = Math.sqrt(lumen * lumen + wallArea), cy = H / 2;
  zctx.fillStyle = '#1a0e10'; zctx.fillRect(0, 0, W, H);
  // smooth-muscle wall bands
  for (const sgn of [-1, 1]) {
    const g = zctx.createLinearGradient(0, cy + sgn * lumen, 0, cy + sgn * outer);
    g.addColorStop(0, '#f2b8b0'); g.addColorStop(0.15, '#c45b5d'); g.addColorStop(1, '#7a2a33');
    zctx.fillStyle = g; zctx.fillRect(0, sgn < 0 ? cy - outer : cy + lumen, W, outer - lumen);
    zctx.strokeStyle = 'rgba(255,220,210,.25)'; zctx.lineWidth = 2;
    for (let x = -20; x < W + 20; x += 18) { zctx.beginPath(); zctx.ellipse(x, cy + sgn * (lumen + outer) / 2, 7, (outer - lumen) / 2 * 0.8, 0.5 * sgn, 0, 7); zctx.stroke(); }
  }
  zctx.fillStyle = '#3b0c12'; zctx.fillRect(0, cy - lumen, W, lumen * 2);
  const q = (sim.stats ? sim.stats.beds[zoomBed] : 1) / BASE.beds[zoomBed];
  const v = 0.12 * q / (r * r); // relative mean velocity: Q / area
  for (const c of cells) {
    c.x += v * dt * (1.2 - Math.abs(c.y) * 0.8); if (c.x > 1.05) { c.x -= 1.1; c.y = Math.random() * 2 - 1; }
    const R = 11 * c.s * Math.min(1, r * 1.1), y = cy + c.y * Math.max(0, lumen - R);
    zctx.fillStyle = '#d3202e'; zctx.beginPath(); zctx.ellipse(c.x * W, y, R * 0.45, R, 0, 0, 7); zctx.fill();
    zctx.fillStyle = '#8f111c'; zctx.beginPath(); zctx.ellipse(c.x * W, y, R * 0.2, R * 0.5, 0, 0, 7); zctx.fill();
  }
}

/* ---------------- 3D ---------------- */
const canvas = $('#gl'), field = $('#field');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
const DPR_MAX = Math.min(1.75, devicePixelRatio || 1); let dpr = DPR_MAX; renderer.setPixelRatio(dpr);
renderer.localClippingEnabled = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene();
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;
const camera = new THREE.PerspectiveCamera(30, 1, 0.01, 30);
const key = new THREE.DirectionalLight(0xfff1e6, 1.6); key.position.set(0.6, 1.2, 1.4); scene.add(key);
const rim = new THREE.DirectionalLight(0x9fc4ff, 1.1); rim.position.set(-1, 0.4, -1.2); scene.add(rim);
scene.add(new THREE.HemisphereLight(0xdfe8f0, 0x2a1a18, 0.35));
const controls3 = new OrbitControls(camera, canvas); controls3.enableDamping = true; controls3.dampingFactor = 0.08;
const uTime = { value: 0 };
// one smooth deformation field for every mesh: each chamber pulls nearby tissue toward its centre
// as its volume falls (Gaussian falloff), and the AV plane slides toward the apex in systole,
// so the roots of the great vessels move with the heart instead of separating from it.
const DEF = {
  uHC: { value: [0, 1, 2, 3].map(() => new THREE.Vector3()) }, uHS: { value: [0, 0, 0, 0] }, uHSig: { value: [0.03, 0.03, 0.025, 0.025] },
  uAV: { value: new THREE.Vector3() }, uAX: { value: new THREE.Vector3(0, 1, 0) }, uAVd: { value: 0 }, uAVs: { value: new THREE.Vector2(0.025, 0.05) },
};
function deformCPU(p) { // same field as the shader, for tracers
  let dx = 0, dy = 0, dz = 0;
  for (let k = 0; k < 4; k++) { const c = DEF.uHC.value[k], rx = p.x - c.x, ry = p.y - c.y, rz = p.z - c.z, sg = DEF.uHSig.value[k];
    const w = Math.exp(-(rx * rx + ry * ry + rz * rz) / (2 * sg * sg)) * DEF.uHS.value[k]; dx += w * rx; dy += w * ry; dz += w * rz; }
  const a = DEF.uAX.value, c = DEF.uAV.value, ox = p.x - c.x, oy = p.y - c.y, oz = p.z - c.z, ax = ox * a.x + oy * a.y + oz * a.z;
  const qx = ox - ax * a.x, qy = oy - ax * a.y, qz = oz - ax * a.z, sv = DEF.uAVs.value;
  const w = DEF.uAVd.value * Math.exp(-ax * ax / (2 * sv.x * sv.x)) * Math.exp(-(qx * qx + qy * qy + qz * qz) / (2 * sv.y * sv.y));
  p.x += dx + a.x * w; p.y += dy + a.y * w; p.z += dz + a.z * w; return p;
}
const segMeshes = {}; let meta = null; let heartC = new THREE.Vector3();
const labelEls = [];
const SEG_LABEL = {
  pm_al: 'Papillary muscle', la: 'Left atrium', lv: 'Left ventricle', ra: 'Right atrium', rv: 'Right ventricle', v_mitral: 'Mitral valve', v_tricuspid: 'Tricuspid valve', v_aortic: 'Aortic valve', v_pulmonary: 'Pulmonary valve',
  a_coronary: 'Coronary arteries', v_cardiac: 'Cardiac veins', aorta: 'Aorta', pa: 'Pulmonary arteries', pv: 'Pulmonary veins', vc: 'Venae cavae',
  a_head: 'Head & neck arteries', a_arm: 'Arm arteries', a_spl: 'Gut & liver arteries', a_renal: 'Renal arteries', a_leg: 'Pelvis & leg arteries', a_trunk: 'Trunk wall arteries',
  vn_head: 'Head & neck veins', vn_arm: 'Arm veins', vn_spl: 'Portal & splanchnic veins', vn_renal: 'Renal veins', vn_leg: 'Pelvis & leg veins', vn_trunk: 'Trunk wall veins',
};
const SEG_BED = { a_head: 'brain', a_arm: 'arm', a_spl: 'spl', a_renal: 'renal', a_leg: 'leg', a_trunk: 'trunk', a_coronary: 'coronary' };
const SEG_VEIN = { vn_head: 'up', vn_arm: 'up', vn_spl: 'spl', vn_leg: 'low', vn_renal: 'low', vn_trunk: 'low' };
const COL = {
  muscle: 0x74201f, art: 0xb5262c, vein: 0x34508f, valve: 0xe3d2bf, cor: 0xc8382f,
};
function segColor(seg) {
  if (['la', 'lv', 'ra', 'rv'].includes(seg)) return COL.muscle;
  if (seg.startsWith('v_') && seg !== 'v_cardiac') return COL.valve;
  if (seg === 'a_coronary') return COL.cor;
  if (seg === 'pa') return 0x4d5aa6; // deoxygenated
  if (seg === 'pv') return 0xc0303a;
  if (seg.startsWith('a_') || seg === 'aorta') return COL.art;
  return COL.vein;
}
const SECTION = { on: false, plane: new THREE.Plane(), mode: 'four', offset: 0 };
const CHB = { uSwirl: { value: [0, 0, 0, 0] }, uBloodSec: { value: 0 } }; // blood filling the cut-open chambers
// intracardiac flow: per chamber (LV, RV, LA, RA) an inlet and an outlet point, and the distance (mm)
// the blood has travelled from the inlet and toward the outlet, integrated from the simulated flows
const CHF = { uIn: { value: [0, 1, 2, 3].map(() => new THREE.Vector3()) }, uOut: { value: [0, 1, 2, 3].map(() => new THREE.Vector3()) },
  uSin: { value: [0, 0, 0, 0] }, uSout: { value: [0, 0, 0, 0] }, uVin: { value: [0, 0, 0, 0] }, uVout: { value: [0, 0, 0, 0] }, uN: { value: new THREE.Vector3(0, 0, 1) } };
const VALVES = ['v_mitral', 'v_tricuspid', 'v_aortic', 'v_pulmonary'];
// voxel map shared with the AV-valve shader, which draws leaflets only inside the blood cavity
const VOXU = { uVox: { value: null }, uVoxOrigin: { value: new THREE.Vector3() }, uVoxSize: { value: new THREE.Vector3(1, 1, 1) }, uVoxOn: { value: 0 } };
function makeMat(seg) {
  const heart = ['la', 'lv', 'ra', 'rv'].includes(seg);
  const m = new THREE.MeshPhysicalMaterial({ color: segColor(seg), roughness: heart ? 0.62 : 0.38, metalness: 0, clearcoat: heart ? 0.22 : 0.8, clearcoatRoughness: 0.4, side: THREE.FrontSide, envMapIntensity: heart ? 0.65 : 1 });
  const u = m.userData.u = { uDil: { value: 1 }, uDilP: { value: 1 }, uInvScale: { value: 1 }, uTint: { value: new THREE.Color() }, uTintAmt: { value: 0 }, uHL: { value: 0 }, uTime, uOpen: { value: 0 }, uOpenLag: { value: 0 }, uSection: { value: 0 }, ...DEF, ...CHB };
  if (VALVES.includes(seg)) { m.defines = seg === 'v_mitral' || seg === 'v_tricuspid' ? { VALVE: 1, AVCLIP: 1 } : { VALVE: 1 }; m.side = THREE.DoubleSide; m.roughness = 0.6; m.clearcoat = 0.15; m.envMapIntensity = 0.45; m.sheen = 0.4; m.sheenColor.setHex(0xfff4e6); Object.assign(u, VOXU); }
  if (heart) m.defines = { CHAMBER: ['lv', 'rv', 'la', 'ra'].indexOf(seg) };
  m.onBeforeCompile = sh => {
    Object.assign(sh.uniforms, u);
    sh.vertexShader = sh.vertexShader.replace('#include <common>', `#include <common>
attribute float _rad; attribute float _blend; uniform float uDil; uniform float uDilP; uniform float uInvScale;
uniform vec3 uHC[4]; uniform float uHS[4]; uniform float uHSig[4]; uniform vec3 uAV; uniform vec3 uAX; uniform float uAVd; uniform vec2 uAVs;
varying vec3 vWP;
#ifdef VALVE
attribute vec3 _vopen; attribute vec3 _nopen; attribute vec3 _vmid; attribute float _vt; uniform float uOpen; uniform float uOpenLag; varying vec3 vW0;
#endif`)
      .replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>
#ifdef VALVE
float _oo = mix(uOpen, uOpenLag, 0.7 * _vt); // the free edge trails the base, so the leaflet unfurls
objectNormal = normalize(mix(objectNormal, _nopen, _oo));
#endif`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
vec3 wp = (modelMatrix * vec4(transformed, 1.0)).xyz; vec3 dsp = vec3(0.0);
for (int k = 0; k < 4; k++) { vec3 r = wp - uHC[k]; dsp += exp(-dot(r, r) / (2.0 * uHSig[k] * uHSig[k])) * uHS[k] * r; }
vec3 o = wp - uAV; float ax = dot(o, uAX); vec3 q = o - ax * uAX;
dsp += uAX * uAVd * exp(-ax * ax / (2.0 * uAVs.x * uAVs.x)) * exp(-dot(q, q) / (2.0 * uAVs.y * uAVs.y));
float dl = mix(uDilP, uDil, _blend);
transformed += normalize(objectNormal) * _rad * uInvScale * (dl - 1.0) + dsp * uInvScale;
vWP = wp + dsp;
#ifdef VALVE
transformed += 2.0 * _oo * (1.0 - _oo) * _vmid + _oo * _oo * _vopen;
vW0 = (modelMatrix * vec4(transformed, 1.0)).xyz - dsp; // position in the undeformed heart
#endif`);
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\n#ifdef VALVE\nprecision highp sampler3D; uniform sampler3D uVox; uniform vec3 uVoxOrigin; uniform vec3 uVoxSize; uniform float uVoxOn; varying vec3 vW0;\n#endif\nuniform vec3 uTint; uniform float uTintAmt; uniform float uHL; uniform float uTime; uniform float uSection;\nvarying vec3 vWP; uniform vec3 uHC[4]; uniform vec3 uAX; uniform float uSwirl[4]; uniform float uBloodSec;' + NOISE_GLSL)
      .replace('#include <color_fragment>', `#include <color_fragment>
if (uSection > 0.5 && !gl_FrontFacing) diffuseColor.rgb = vec3(0.2, 0.055, 0.048);
#ifdef AVCLIP
// leaflets and chordae exist only inside the cavity: anything outside is not drawn, so nothing pokes through the wall
if (uVoxOn > 0.5) {
  // eroded test: the point and six neighbours 1.5 mm away must all be blood, so nothing shows at a wall gap
  float m = 1.0;
  for (int k = 0; k < 7; k++) {
    vec3 off = k == 0 ? vec3(0.0) : (k < 3 ? vec3(k == 1 ? 1.0 : -1.0, 0.0, 0.0) : (k < 5 ? vec3(0.0, k == 3 ? 1.0 : -1.0, 0.0) : vec3(0.0, 0.0, k == 5 ? 1.0 : -1.0))) * 0.0015;
    vec4 vv = texture(uVox, clamp((vW0 + off - uVoxOrigin) / uVoxSize, 0.0, 1.0)); m = min(m, max(vv.r, vv.g));
  }
  if (m < 0.5) discard;
}
#endif`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
#ifdef CHAMBER
// (the cut face itself is drawn by the voxel cap; the inside of a chamber solid is myocardium)
#endif`)
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ndiffuseColor.rgb = mix(diffuseColor.rgb, uTint, uTintAmt);\ntotalEmissiveRadiance += uTint * uTintAmt * 0.25 + uHL * vec3(1.0, 0.78, 0.45) * (0.45 + 0.3 * sin(uTime * 5.0));');
  };
  return m;
}
const loader = new GLTFLoader();
const loadGlb = () => fetch('zanatomy-heart-vessels.glb.gz.txt').then(r => { if (!r.ok) throw new Error('model file ' + r.status); return r.text(); }).then(async b64 => {
  const bin = atob(b64.trim()), u8 = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
  const buf = await new Response(new Blob([u8]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();
  return loader.parseAsync(buf, '');
});
Promise.all([loadGlb(), fetch('zanatomy-meta.json').then(r => r.json())]).then(([gltf, m]) => {
  meta = m;
  heartC.fromArray(m.heartCentre).multiplyScalar(0.001);
  scene.add(gltf.scene); gltf.scene.updateMatrixWorld(true);
  const meshes = []; gltf.scene.traverse(o => { if (o.isMesh) meshes.push(o); });
  for (const o of meshes) {
    const key = SEG_LABEL[o.name] ? o.name : o.parent.name;
    o.material = makeMat(key); o.userData.seg = key;
    const ws = new THREE.Vector3(); o.getWorldScale(ws); o.material.userData.u.uInvScale.value = 1 / ws.x;
    segMeshes[key] = o; o.frustumCulled = false;
  }
  // pivots: chambers scale with their volumes about shared ventricular / atrial centres
  const centre = keys => { const b = new THREE.Box3(); keys.forEach(k => segMeshes[k] && b.expandByObject(segMeshes[k])); return b.getCenter(new THREE.Vector3()); };
  const vC = centre(['lv', 'rv']), aC = centre(['la', 'ra']);
  ['lv', 'rv', 'la', 'ra'].forEach((k, i) => { const b = new THREE.Box3().setFromObject(segMeshes[k]); b.getCenter(DEF.uHC.value[i]); const sz = b.getSize(new THREE.Vector3()); DEF.uHSig.value[i] = 0.42 * Math.max(sz.x, sz.y, sz.z); });
  { // apex = LV point farthest from the atria; long axis runs apex → base
    const o = segMeshes.lv, pa = o.geometry.attributes.position, v = new THREE.Vector3(); let best = 0; const apex = new THREE.Vector3();
    for (let i = 0; i < pa.count; i += 3) { v.fromBufferAttribute(pa, i).applyMatrix4(o.matrixWorld); const d = v.distanceToSquared(aC); if (d > best) { best = d; apex.copy(v); } }
    DEF.uAX.value.copy(aC).sub(apex).normalize(); DEF.uAV.value.copy(vC).lerp(aC, 0.55);
    DEF.uAVs.value.set(0.022, 0.045);
  }
  buildBVH();
  setupValves(vC, aC);
  buildAnatomicValves();
  { // inlets and outlets: valves where they exist; for the atria a point opposite the AV valve (venous inflow)
    const C = DEF.uHC.value, vi = valveInfo, far = (c, v) => c.clone().add(c.clone().sub(v)), set = (k, a, b) => { CHF.uIn.value[k].copy(a); CHF.uOut.value[k].copy(b); };
    set(0, vi.v_mitral.c, vi.v_aortic.c); set(1, vi.v_tricuspid.c, vi.v_pulmonary.c);
    set(2, far(C[2], vi.v_mitral.c), vi.v_mitral.c); set(3, far(C[3], vi.v_tricuspid.c), vi.v_tricuspid.c);
  }
  for (const [k, txt] of [['lv', 'LV'], ['rv', 'RV'], ['la', 'LA'], ['ra', 'RA'], ['aorta', 'Aorta'], ['pa', 'Pulmonary trunk'], ['vc', 'Venae cavae']]) {
    const o = segMeshes[k]; if (!o) continue;
    let p = new THREE.Box3().setFromObject(o).getCenter(new THREE.Vector3());
    if (k === 'aorta') p = new THREE.Vector3(heartC.x - 0.005, heartC.y + 0.085, heartC.z + 0.0);
    if (k === 'vc') p = new THREE.Vector3(heartC.x - 0.055, heartC.y + 0.07, heartC.z - 0.01);
    if (k === 'pa') p = new THREE.Vector3(heartC.x + 0.02, heartC.y + 0.055, heartC.z + 0.03);
    const e = el('div', { class: 'lbl' }, txt); $('#labels').append(e); labelEls.push({ e, p, vessel: ['aorta', 'pa', 'vc'].includes(k) });
  }
  buildBlood();
  buildCap().catch(e => console.warn('cut-face map unavailable', e));
  buildSectionLabels();
  setView('heart', true);
  $('#loading').hidden = true;
}).catch(err => { $('#loading').textContent = 'The 3D model could not load (' + err.message + '). The simulation, formulas and graphs still work.'; console.error(err); });


/* ---------------- valves ---------------- */
// Each leaflet gets a per-vertex "fully open" displacement: the free edge (near the orifice axis)
// swings out toward the annulus and downstream; the hinge at the annulus stays put.
const valveInfo = {}; const VALVE_SIM = { v_mitral: 'mv', v_tricuspid: 'tv', v_aortic: 'av', v_pulmonary: 'pv' };
const VALVE_VIEW = {
  v_mitral: '<b>Mitral valve, seen from the left atrium</b> (the surgeon’s view). Two leaflets: the large anterior one (toward the aorta) and the smaller, scalloped posterior one. Shut, they meet in a curved “smile”; open, they part into a funnel down to the ventricle.',
  v_aortic: '<b>Aortic valve, seen from the aorta.</b> Three half-moon cusps. Shut, they meet in a three-pointed star; open, they fold back against the wall and leave a round opening.',
  v_tricuspid: '<b>Tricuspid valve, seen from the right atrium.</b> Three leaflets (septal, anterior, posterior). Shut, they meet in a Y.',
  v_pulmonary: '<b>Pulmonary valve, seen from the pulmonary trunk.</b> Three cusps like the aortic valve, a little thinner. Shut, they make a star.',
};
const VALVE_NAME = { v_mitral: 'Mitral', v_tricuspid: 'Tricuspid', v_aortic: 'Aortic', v_pulmonary: 'Pulmonary' };
function subGeometry(g, keep) {
  const sid = g.attributes._sid, idx = g.index.array, map = new Map(), tri = [];
  for (let i = 0; i < idx.length; i += 3) if (keep(sid.getX(idx[i]))) tri.push(idx[i], idx[i + 1], idx[i + 2]);
  for (const v of tri) if (!map.has(v)) map.set(v, map.size);
  const out = new THREE.BufferGeometry();
  for (const [name, a] of Object.entries(g.attributes)) {
    // attributes may be interleaved and quantized, so read through the accessors
    const arr = new Float32Array(map.size * a.itemSize), get = ['getX', 'getY', 'getZ', 'getW'];
    for (const [o, n] of map) for (let k = 0; k < a.itemSize; k++) arr[n * a.itemSize + k] = a[get[k]](o);
    out.setAttribute(name, new THREE.BufferAttribute(arr, a.itemSize, false));
  }
  out.setIndex(tri.map(v => map.get(v))); return out;
}
function setupValves(vC, aC) {
  const C = k => DEF.uHC.value[['lv', 'rv', 'la', 'ra'].indexOf(k)];
  const leafCentroid = o => new THREE.Box3().setFromObject(o).getCenter(new THREE.Vector3());
  const spec = {
    v_mitral: [C('la'), C('lv'), 0.55], v_tricuspid: [C('ra'), C('rv'), 0.55],
    v_aortic: [C('lv'), null, 0.12], v_pulmonary: [C('rv'), null, 0.12],
  };
  for (const [seg, [up, down, along]] of Object.entries(spec)) {
    const o = segMeshes[seg]; if (!o) continue;
    const g = o.geometry, pa = g.attributes.position, M = o.matrixWorld, inv = o.material.userData.u.uInvScale.value;
    const lc = leafCentroid(o);
    const n = (down ? down.clone().sub(up) : lc.clone().sub(up)).normalize();
    // orifice centre: for AV valves the point of the atrium→ventricle line nearest the leaflets
    const c = down ? up.clone().add(n.clone().multiplyScalar(lc.clone().sub(up).dot(n))) : lc.clone();
    const w = new THREE.Vector3(), rs = [];
    for (let i = 0; i < pa.count; i++) { w.fromBufferAttribute(pa, i).applyMatrix4(M).sub(c); rs.push(w.clone().sub(n.clone().multiplyScalar(w.dot(n))).length()); }
    const Rmax = [...rs].sort((a, b) => a - b)[Math.floor(rs.length * 0.97)];
    const vo = new Float32Array(pa.count * 3), q = new THREE.Vector3();
    for (let i = 0; i < pa.count; i++) {
      w.fromBufferAttribute(pa, i).applyMatrix4(M).sub(c); q.copy(w).sub(n.clone().multiplyScalar(w.dot(n)));
      const h = w.dot(n), r = q.length(), f = Math.max(0, Math.min(1, 1 - r / Rmax));
      // chordae and the tissue far downstream stay tethered to the papillary muscles
      const teth = h > 0.25 * Rmax ? Math.exp(-(((h - 0.25 * Rmax) / (0.3 * Rmax)) ** 2)) : 1;
      const wt = Math.pow(f, 0.7) * teth;
      if (r > 1e-6) q.multiplyScalar(1 / r); else q.set(0, 0, 0);
      // open position stays inside the annulus (semilunar cusps fold back against the sinus wall, not through it)
      const reach = down ? 0.85 : 0.72;
      const d = q.multiplyScalar(Math.max(0, reach * Rmax - r) * wt).add(n.clone().multiplyScalar(along * Rmax * wt));
      vo[i * 3] = d.x * inv; vo[i * 3 + 1] = d.y * inv; vo[i * 3 + 2] = d.z * inv;
    }
    g.setAttribute('_vopen', new THREE.BufferAttribute(vo, 3));
    valveInfo[seg] = { c, n, Rmax, open: 0, meshes: [o] };
  }
  // Z-Anatomy models only the posterior mitral leaflet and two of three tricuspid leaflets.
  // Rebuild each missing leaflet by rotating an existing one into the empty part of the annulus.
  const rebuild = (seg, pickSid, label, grow = 1) => {
    const o = segMeshes[seg], vi = valveInfo[seg]; if (!o || !vi) return;
    const g = o.geometry, sids = [...new Set(Array.from({ length: g.attributes._sid.count }, (_, i) => g.attributes._sid.getX(i)))];
    const basis1 = new THREE.Vector3(1, 0, 0).cross(vi.n).normalize(), basis2 = vi.n.clone().cross(basis1);
    const angle = sid => { const sub = subGeometry(g, x => x === sid); const p = new THREE.Vector3(), m = new THREE.Vector3(); const a = sub.attributes.position;
      for (let i = 0; i < a.count; i++) m.add(p.fromBufferAttribute(a, i).applyMatrix4(o.matrixWorld)); m.multiplyScalar(1 / a.count).sub(vi.c); return Math.atan2(m.dot(basis2), m.dot(basis1)); };
    const angs = sids.map(angle).sort((a, b) => a - b);
    let gapMid = angs[0] + Math.PI, best = 0;
    for (let i = 0; i < angs.length; i++) { const a = angs[i], b = i + 1 < angs.length ? angs[i + 1] : angs[0] + 2 * Math.PI; if (b - a > best) { best = b - a; gapMid = (a + b) / 2; } }
    const src = pickSid(sids, g), theta = gapMid - angle(src);
    const sub = subGeometry(g, x => x === src);
    const clone = new THREE.Mesh(sub, o.material); clone.matrixAutoUpdate = false; clone.frustumCulled = false;
    const R4 = new THREE.Matrix4().makeTranslation(vi.c.x, vi.c.y, vi.c.z).multiply(new THREE.Matrix4().makeRotationAxis(vi.n, theta)).multiply(new THREE.Matrix4().makeTranslation(-vi.c.x, -vi.c.y, -vi.c.z));
    const G = new THREE.Matrix4().makeTranslation(vi.c.x, vi.c.y, vi.c.z).multiply(new THREE.Matrix4().makeScale(grow, grow, grow)).multiply(new THREE.Matrix4().makeTranslation(-vi.c.x, -vi.c.y, -vi.c.z));
    clone.matrix.copy(G).multiply(R4).multiply(o.matrixWorld); clone.userData = { seg, rebuilt: label };
    scene.add(clone); vi.meshes.push(clone); rebuilt.push(clone);
  };
  rebuild('v_mitral', s => s[0], 'Anterior leaflet of mitral valve', 1.2);
  rebuild('v_tricuspid', (s, g) => s.reduce((a, b) => (subGeometry(g, x => x === b).attributes.position.count > subGeometry(g, x => x === a).attributes.position.count ? b : a)), 'Anterior leaflet of tricuspid valve');
}
const rebuilt = [];
// Valve motion: the opening each valve is pushed toward follows the flow through it (a leaflet opens as
// wide as the jet needs: the mitral opens fully in early filling (E), drifts half-shut in diastasis and
// reopens with the atrial kick (A), the M-shape of an echo M-mode trace). The leaflets reach it through a
// spring–damper in simulated time, so they move with momentum: ~30 ms to open with a slight overshoot,
// a quicker, well-damped closure, and a soft landing when the edges meet.
const VREF = { mv: 560, tv: 400, av: 330, pv: 300 }; // ml/s at which each valve is fully open
function valveTarget(k, v) {
  const q = Math.max(0, sim.Q[k === 'pv' ? 'pvv' : k]), atrio = k === 'mv' || k === 'tv';
  let t = sim.open[k] ? Math.min(1, (atrio ? 0.3 : 0.35) + (atrio ? 0.7 : 0.65) * Math.sqrt(q / VREF[k])) : 0;
  if (v.K > 0) t *= 0.35;                    // stenotic: stiff, small orifice
  if (!sim.open[k] && v.Rb > 0) t = 0.12;    // regurgitant: leaflets fail to meet
  return t;
}
function updateValves(dt) {
  for (const [seg, vi] of Object.entries(valveInfo)) {
    const k = VALVE_SIM[seg], tgt = valveTarget(k, sim.p.valves[k]), u = segMeshes[seg].material.userData.u;
    vi.vel ??= 0; vi.lag ??= vi.open;
    if (dt >= 0.5) { vi.open = vi.lag = tgt; vi.vel = 0; } // scrubbing: jump to that instant
    else {
      for (let t = 0; t < dt; t += 0.001) {
        const h = Math.min(0.001, dt - t), opening = tgt > vi.open;
        const w = opening ? 75 : 95, z = opening ? 0.62 : 0.9; // rad/s, damping ratio
        vi.vel += (w * w * (tgt - vi.open) - 2 * z * w * vi.vel) * h; vi.open += vi.vel * h;
        if (vi.open < 0) { vi.open = 0; vi.vel *= -0.15; } // edges meet: a small soft rebound
        if (vi.open > 1.04) { vi.open = 1.04; vi.vel = 0; }
        vi.lag += (vi.open - vi.lag) * Math.min(1, h / 0.018);
      }
    }
    u.uOpen.value = vi.open; u.uOpenLag.value = vi.lag;
  }
}


/* ---------------- blood ---------------- */
// A blood column inside every vessel (80 % of the lumen). Its texture of red cells moves along the
// vessel at that vessel's own velocity, v = Q / (π r²), computed every frame from the simulation.
const PHASE_N = 1024, phaseArr = new Float32Array(PHASE_N * 4);
const phaseTex = new THREE.DataTexture(phaseArr, PHASE_N, 1, THREE.RGBAFormat, THREE.FloatType); phaseTex.needsUpdate = true;
const bloodMeshes = {}; let structShare = null; const SPEED_SHOWN = 0.35;
const NOISE_GLSL = `
float h3(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vn(vec3 x) { vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z); }`;
function makeBloodMat(seg, vesselMat) {
  const venous = /^(vn_|vc|pa|v_cardiac)/.test(seg);
  const m = new THREE.MeshPhysicalMaterial({ color: venous ? 0x4a0a10 : 0xa3101c, roughness: 0.22, metalness: 0, clearcoat: 0.6, clearcoatRoughness: 0.15, emissive: venous ? 0x120203 : 0x220204, side: THREE.DoubleSide });
  const u = { ...vesselMat.userData.u, uPhase: { value: phaseTex }, uVen: { value: venous ? 1 : 0 } };
  m.userData.u = u;
  m.onBeforeCompile = sh => {
    Object.assign(sh.uniforms, u);
    sh.vertexShader = sh.vertexShader.replace('#include <common>', `#include <common>
attribute float _rad; attribute float _blend; attribute float _s; attribute float _sid; uniform float uDil; uniform float uDilP; uniform float uInvScale;
uniform vec3 uHC[4]; uniform float uHS[4]; uniform float uHSig[4]; uniform vec3 uAV; uniform vec3 uAX; uniform float uAVd; uniform vec2 uAVs;
varying float vS; varying float vSid; varying vec3 vWp;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
vec3 wp = (modelMatrix * vec4(transformed, 1.0)).xyz; vec3 dsp = vec3(0.0);
for (int k = 0; k < 4; k++) { vec3 r = wp - uHC[k]; dsp += exp(-dot(r, r) / (2.0 * uHSig[k] * uHSig[k])) * uHS[k] * r; }
vec3 o = wp - uAV; float ax = dot(o, uAX); vec3 q = o - ax * uAX;
dsp += uAX * uAVd * exp(-ax * ax / (2.0 * uAVs.x * uAVs.x)) * exp(-dot(q, q) / (2.0 * uAVs.y * uAVs.y));
float dl = mix(uDilP, uDil, _blend);
transformed += normalize(objectNormal) * _rad * uInvScale * (0.8 * dl - 1.0) + dsp * uInvScale;
vS = _s; vSid = _sid; vWp = wp;`);
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
uniform sampler2D uPhase; uniform float uVen; uniform float uTime; varying float vS; varying float vSid; varying vec3 vWp;` + NOISE_GLSL)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
// Fluid look. P = distance the blood in this vessel has travelled (mm), vel = its current speed.
vec4 PT = texture2D(uPhase, vec2((vSid + 0.5) / ${PHASE_N}.0, 0.5));
float P = PT.r, vel = abs(PT.g);
// laminar (Poiseuille) profile: the layer seen face-on is the fast core, the silhouette the slow wall layer
float f = abs(dot(normal, normalize(vViewPosition))), rr2 = 1.0 - f * f;
float prof = max(0.12, 2.0 * (1.0 - 0.92 * rr2));
float stretch = 2.2 + min(3.0, vel / 120.0);  // streaks along the flow; faster blood smears longer
// two advected layers, each re-seeded every D mm and cross-faded, so the shear never tears the pattern
const float D = 7.0; float acc = 0.0, wsum = 0.0;
for (int i = 0; i < 2; i++) {
  float q = P / D + float(i) * 0.5, ph = fract(q), id = floor(q);
  vec3 cp = vec3((vS - ph * D * prof) / (1.3 * stretch), vWp.x * 650.0 + vWp.z * 300.0 + id * 17.3, vWp.y * 650.0 + id * 5.1 + float(i) * 31.0);
  cp.yz += 0.45 * vec2(vn(cp * 0.55 + vec3(0.0, uTime * 0.5, 0.0)), vn(cp * 0.55 + vec3(3.1, 0.0, uTime * 0.45))); // small eddies
  float c = 0.65 * vn(cp) + 0.35 * vn(cp * 2.1 + 7.0);
  float w = 1.0 - abs(2.0 * ph - 1.0); acc += c * w; wsum += w;
}
float cells = smoothstep(0.2, 0.8, acc / max(1e-3, wsum));
vec3 base = mix(vec3(0.62, 0.035, 0.05), vec3(0.24, 0.015, 0.03), uVen);  // arterial / venous blood
diffuseColor.rgb = base * mix(0.78, 1.22, cells);
totalEmissiveRadiance += pow(1.0 - f, 3.0) * mix(vec3(0.22, 0.03, 0.03), vec3(0.10, 0.01, 0.02), uVen); // wet rim`);
  };
  return m;
}
function buildBlood() {
  for (const [seg, o] of Object.entries(segMeshes)) {
    if (['la', 'lv', 'ra', 'rv', ...VALVES].includes(seg)) continue;
    const b = new THREE.Mesh(o.geometry, makeBloodMat(seg, o.material));
    b.matrixAutoUpdate = false; b.matrix.copy(o.matrixWorld); b.frustumCulled = false; b.visible = false; b.renderOrder = -1;
    scene.add(b); bloodMeshes[seg] = b;
  }
  // flow share within each region by r³ (Murray's law)
  const sum = {}; for (const n of meta.names) sum[n.s] = (sum[n.s] || 0) + Math.max(0.5, n.r) ** 3;
  structShare = meta.names.map(n => Math.max(0.5, n.r) ** 3 / sum[n.s]);
}
function structFlow(i) { // ml/s through one structure
  const n = meta.names[i], Q = sim.Q, nm = n.n, seg = n.s, sh = structShare[i];
  if (seg === 'aorta') return Q.av * (nm.includes('Brachiocephalic') ? 0.15 : nm.includes('Thoracic') ? 0.75 : nm.includes('Abdominal') ? 0.6 : 1);
  if (seg === 'pa') return Q.pvv * Math.min(1, sh * 2.5);
  if (seg === 'pv') return Q.pvla * Math.min(1, sh * 2.5);
  if (seg === 'vc') return nm.includes('Superior') ? Q.veins.up : nm.includes('brachiocephalic') ? Q.veins.up / 2 : Q.veins.spl + Q.veins.low;
  if (SEG_BED[seg]) return Q.beds[SEG_BED[seg]] * Math.min(1, sh * 3);
  if (SEG_VEIN[seg]) return Q.veins[SEG_VEIN[seg]] * Math.min(1, sh * 3);
  if (seg === 'a_coronary' || seg === 'v_cardiac') return Q.cor * Math.min(1, sh * 2);
  return 0;
}
function updateBlood(dt) {
  if (!display.flow || !structShare) return;
  for (let i = 0; i < meta.names.length && i < PHASE_N; i++) {
    const r = Math.max(0.5, meta.names[i].r);           // mm
    const v = structFlow(i) * 1000 / (Math.PI * r * r);  // mm/s
    let p = phaseArr[i * 4] + v * dt * SPEED_SHOWN; if (Math.abs(p) > 5e5) p = 0;
    phaseArr[i * 4] = p; phaseArr[i * 4 + 1] = v * SPEED_SHOWN;
  }
  phaseTex.needsUpdate = true;
}


/* ---------------- cut face: blood and myocardium ---------------- */
// A 1.1 mm voxel map of the heart built from the Z-Anatomy chambers, which are the myocardium itself:
// wall = inside a chamber solid, cavity = space the wall encloses. Where the section plane crosses it,
// a cap shows the cut muscle and the blood filling each cavity, flowing with the simulated flow.
let capMesh = null;
async function buildCap() {
  const [info, b64] = await Promise.all([fetch('heart-voxels.json').then(r => r.json()), fetch('heart-voxels.bin.gz.txt').then(r => r.text())]);
  const bin = atob(b64.trim()), u8 = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
  const raw = new Uint8Array(await new Response(new Blob([u8]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer());
  const [nx, ny, nz] = info.n;
  const tex = new THREE.Data3DTexture(raw, nx, ny, nz); tex.format = THREE.RGBAFormat; tex.type = THREE.UnsignedByteType;
  tex.minFilter = tex.magFilter = THREE.LinearFilter; tex.unpackAlignment = 1; tex.needsUpdate = true;
  const size = new THREE.Vector3(nx, ny, nz).multiplyScalar(info.vox);
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
    uniforms: { uVox: { value: tex }, uOrigin: { value: new THREE.Vector3().fromArray(info.origin) }, uSize: { value: size }, uFlow: { value: 1 }, uTime, ...DEF, ...CHB, ...CHF },
    vertexShader: `varying vec3 vW; void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: `precision highp sampler3D;
uniform sampler3D uVox; uniform vec3 uOrigin; uniform vec3 uSize; uniform float uFlow; uniform float uTime;
uniform vec3 uHC[4]; uniform float uHS[4]; uniform float uHSig[4]; uniform vec3 uAV; uniform vec3 uAX; uniform float uAVd; uniform vec2 uAVs; uniform float uSwirl[4];
uniform vec3 uIn[4]; uniform vec3 uOut[4]; uniform float uSin[4]; uniform float uSout[4]; uniform float uVin[4]; uniform float uVout[4]; uniform vec3 uN;
varying vec3 vW;` + NOISE_GLSL + `
void main() {
  // undo the beating deformation (first order) so the cut follows the moving heart
  vec3 dsp = vec3(0.0);
  for (int k = 0; k < 4; k++) { vec3 r = vW - uHC[k]; dsp += exp(-dot(r, r) / (2.0 * uHSig[k] * uHSig[k])) * uHS[k] * r; }
  vec3 o = vW - uAV; float ax = dot(o, uAX); vec3 q = o - ax * uAX;
  dsp += uAX * uAVd * exp(-ax * ax / (2.0 * uAVs.x * uAVs.x)) * exp(-dot(q, q) / (2.0 * uAVs.y * uAVs.y));
  vec3 uvw = (vW - dsp - uOrigin) / uSize;
  if (any(lessThan(uvw, vec3(0.0))) || any(greaterThan(uvw, vec3(1.0)))) discard;
  vec4 t = texture(uVox, uvw);
  // the map stores smoothed masks; cut each at 0.5 with a one-pixel anti-aliased edge
  #define EDGE(v) smoothstep(0.5 - max(fwidth(v), 0.015), 0.5 + max(fwidth(v), 0.015), v)
  float oxy = EDGE(t.r), ven = EDGE(t.g), myo = EDGE(t.b);
  if (oxy + ven + myo < 0.02) discard;
  // myocardium: dark muscle with fibre texture, LV a touch deeper
  vec3 fib = vW * 900.0; float f = 0.6 * vn(fib) + 0.4 * vn(fib * 3.1 + 2.0);
  vec3 muscle = mix(vec3(0.16, 0.045, 0.04), vec3(0.27, 0.08, 0.065), f) * mix(1.0, 0.88, t.a);
  // blood: pick the nearest chamber of that circulation and swirl about the long axis
  int ci = 0; float dbest = 1e9;
  for (int k = 0; k < 4; k++) { bool left = (k == 0 || k == 2); if ((oxy > ven) != left) continue; float dd = distance(vW, uHC[k]); if (dd < dbest) { dbest = dd; ci = k; } }
  // advect the blood texture through the cut plane: an inflow jet spreading from the inlet, flow
  // converging on the outlet, and an in-plane vortex. Each part re-seeds every D mm with a cross-fade
  // so the pattern never tears (flow-map technique).
  vec3 p = vW - dsp, nP = normalize(uN);
  vec3 dIn = p - uIn[ci]; dIn -= nP * dot(dIn, nP); float lIn = length(dIn); dIn /= max(1e-4, lIn);
  vec3 dOut = uOut[ci] - p; dOut -= nP * dot(dOut, nP); float lOut = length(dOut); dOut /= max(1e-4, lOut);
  float gIn = exp(-lIn * lIn / (2.0 * 0.028 * 0.028)), gOut = exp(-lOut * lOut / (2.0 * 0.03 * 0.03)); // jets are fastest near their valve
  vec3 c0 = uHC[ci] - nP * dot(uHC[ci] - p, nP);
  // local velocity (mm/s) decides how much the texture is drawn out into streaks along the flow
  vec3 vel = dIn * gIn * uVin[ci] + dOut * gOut * uVout[ci]; float sp = length(vel); vec3 vd = vel / max(1e-4, sp);
  float stretch = 1.0 + min(1.8, sp / 35.0);
  const float D = 0.012; float acc = 0.0, wsum = 0.0;
  for (int i = 0; i < 2; i++) for (int j = 0; j < 2; j++) {
    float qi = uSin[ci] / (D * 1000.0) + float(i) * 0.5, qj = uSout[ci] / (D * 1000.0) + float(j) * 0.5;
    float fi = fract(qi), fj = fract(qj);
    vec3 q = p - dIn * fi * D * gIn - dOut * fj * D * gOut;
    vec3 r = q - c0; float a = -uSwirl[ci] * (1.0 - 0.5 * gOut);
    r = r * cos(a) + cross(nP, r) * sin(a) + nP * dot(nP, r) * (1.0 - cos(a));
    vec3 pr = c0 + r; pr -= vd * dot(pr - p, vd) * 0.0 + vd * dot(pr, vd) * (1.0 - 1.0 / stretch);
    vec3 cp = pr * 190.0 + vec3(floor(qi) * 7.3, floor(qj) * 3.1, float(i * 2 + j) * 11.0);
    cp += 0.35 * vec3(vn(cp * 0.5 + uTime * 0.3), vn(cp * 0.5 + 4.0 - uTime * 0.25), 0.0);
    float w = (1.0 - abs(2.0 * fi - 1.0)) * (1.0 - abs(2.0 * fj - 1.0));
    acc += (0.75 * vn(cp) + 0.25 * vn(cp * 1.9 + 5.0)) * w; wsum += w;
  }
  float n1 = smoothstep(0.25, 0.75, acc / max(1e-4, wsum));
  // one colour per circulation (arterial left, venous right); the moving texture only shades it
  vec3 blood = (oxy >= ven ? vec3(0.70, 0.016, 0.024) : vec3(0.24, 0.008, 0.02)) * mix(0.84, 1.14, n1);
  float bloodA = uFlow * max(oxy, ven);
  vec3 col = mix(blood, muscle, myo); float alpha = max(myo, bloodA);
  if (alpha < 0.01) discard;
  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,
  });
  fitValves(raw, info);
  VOXU.uVox.value = tex; VOXU.uVoxOrigin.value.fromArray(info.origin); VOXU.uVoxSize.value.copy(size); VOXU.uVoxOn.value = valveFocus() ? 0 : 1;
  capMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.3), mat); capMesh.visible = false; capMesh.renderOrder = 5; capMesh.frustumCulled = false;
  scene.add(capMesh); placeCap();
}

// Keep the AV valves inside the heart, using the voxel map: rebuilt leaflets lose any triangle that
// lies outside the heart, and each vertex's opening swing is shortened if its open position would
// leave the heart (tethered chordae would otherwise poke through the ventricular wall).
function fitValves(raw, info) {
  const [nx, ny, nz] = info.n, o = new THREE.Vector3().fromArray(info.origin), vx = info.vox;
  const tissue = p => { const x = Math.floor((p.x - o.x) / vx), y = Math.floor((p.y - o.y) / vx), z = Math.floor((p.z - o.z) / vx);
    if (x < 0 || y < 0 || z < 0 || x >= nx || y >= ny || z >= nz) return 0; const i = (x + nx * (y + ny * z)) * 4; return Math.max(raw[i], raw[i + 1], raw[i + 2]); };
  const inside = p => tissue(p) > 40;
  const p0 = new THREE.Vector3(), p1 = new THREE.Vector3();
  const meshes = [segMeshes.v_mitral, segMeshes.v_tricuspid, ...rebuilt].filter(Boolean);
  let trimmed = 0, damped = 0;
  for (const m of meshes) {
    const g = m.geometry, pa = g.attributes.position, vo = g.attributes._vopen, vmd = g.attributes._vmid; m.updateMatrixWorld(); const M = m.matrixWorld;
    if (m.userData.rebuilt) { // drop triangles that stick out of the heart
      const idx = g.index.array, keep = [];
      const ok = new Uint8Array(pa.count); for (let i = 0; i < pa.count; i++) ok[i] = inside(p0.fromBufferAttribute(pa, i).applyMatrix4(M)) ? 1 : 0;
      for (let t = 0; t < idx.length; t += 3) if (ok[idx[t]] && ok[idx[t + 1]] && ok[idx[t + 2]]) keep.push(idx[t], idx[t + 1], idx[t + 2]); else trimmed++;
      g.setIndex(keep);
    }
    if (!vo) continue;
    for (let i = 0; i < pa.count; i++) {
      p0.fromBufferAttribute(pa, i); const d = [vo.getX(i), vo.getY(i), vo.getZ(i)];
      for (const f of [1, 0.6, 0.3, 0]) { p1.set(p0.x + d[0] * f, p0.y + d[1] * f, p0.z + d[2] * f).applyMatrix4(M); if (f === 0 || inside(p1)) { if (f < 1) { vo.setXYZ(i, d[0] * f, d[1] * f, d[2] * f); if (vmd) vmd.setXYZ(i, vmd.getX(i) * f, vmd.getY(i) * f, vmd.getZ(i) * f); damped++; } break; } }
    }
    vo.needsUpdate = true; if (vmd) vmd.needsUpdate = true;
  }
  console.info(`valves fitted: ${trimmed} triangles trimmed, ${damped} vertices with a shorter swing`);
}
function placeCap() {
  if (!capMesh) return;
  capMesh.visible = SECTION.on && !SECTION.mode.startsWith('v_'); // valve close-up: look into the real 3D chamber instead
  if (!SECTION.on) return;
  const n = SECTION.nCam, pt = SECTION.origin.clone().add(n.clone().multiplyScalar(SECTION.offset));
  capMesh.position.copy(pt).addScaledVector(n, 0.0002); capMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), n);
  capMesh.material.uniforms.uFlow.value = display.flow ? 1 : 0;
}
// valves are drawn after the opaque blood so they stay visible working inside it
function valvesOverBlood(on) {
  for (const o of [...VALVES.map(k => segMeshes[k]).filter(Boolean), ...rebuilt]) { o.renderOrder = on ? 10 : 0; if (o.material.transparent !== on) { o.material.transparent = on; o.material.needsUpdate = true; } }
}


/* ---------------- flow arrows on the cut ---------------- */
// Per chamber an inflow and an outflow arrow, curved through the chamber, lying on the cut plane.
// Width ∝ flow through that valve (thicker = stronger), opacity fades with flow, chevrons travel along.
const ARROWS = []; const QREF = 350;
const arrowMat = () => new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, depthTest: false, side: THREE.DoubleSide,
  uniforms: { uW: { value: 0 }, uA: { value: 0 }, uTime, uPhase: { value: 0 }, uCol: { value: new THREE.Color(1, 1, 1) } },
  vertexShader: `attribute float aSide; attribute float aT; attribute vec3 aLat; uniform float uW; varying float vT; varying float vS;
void main() {
  float head = 0.74, w = aT < head ? uW : uW * 2.3 * (1.0 - (aT - head) / (1.0 - head));
  w *= smoothstep(0.0, 0.08, aT);                      // rounded tail
  vec3 p = position + aLat * aSide * w * 0.5; vT = aT; vS = aSide;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,
  fragmentShader: `uniform float uA; uniform float uPhase; uniform vec3 uCol; varying float vT; varying float vS;
void main() {
  float edge = 1.0 - smoothstep(0.75, 1.0, abs(vS));   // soft edges
  float chev = 0.78 + 0.22 * smoothstep(0.35, 0.65, fract(vT * 6.0 - uPhase - abs(vS) * 0.35));
  float a = uA * edge * (vT > 0.74 ? 1.0 : chev);
  if (a < 0.01) discard;
  gl_FragColor = vec4(uCol, a);
}`,
});
function phaseColors() { return [css('--venous'), css('--warn'), css('--accent'), css('--good')]; }
function bezier(a, b, c, t) { const u = 1 - t; return a.clone().multiplyScalar(u * u).add(b.clone().multiplyScalar(2 * u * t)).add(c.clone().multiplyScalar(t * t)); }
function buildArrows() {
  for (const a of ARROWS) { scene.remove(a.mesh); a.mesh.geometry.dispose(); } ARROWS.length = 0;
  if (!SECTION.on || SECTION.mode.startsWith('v_') || !CHF.uIn.value[0].lengthSq()) return;
  const n = SECTION.nCam.clone().normalize(), pt = SECTION.origin.clone().add(n.clone().multiplyScalar(SECTION.offset));
  const proj = p => p.clone().sub(n.clone().multiplyScalar(p.clone().sub(pt).dot(n))).add(n.clone().multiplyScalar(0.0008));
  for (let k = 0; k < 4; k++) {
    const c = proj(DEF.uHC.value[k]), inl = proj(CHF.uIn.value[k]), out = proj(CHF.uOut.value[k]);
    const span = Math.max(0.012, Math.min(0.035, c.distanceTo(inl) * 0.9));
    // inflow: from just inside the inlet, curving through the centre toward the far wall
    const inDir = c.clone().sub(inl).normalize();
    const i0 = inl.clone().add(inDir.clone().multiplyScalar(0.006)), i2 = c.clone().add(inDir.clone().multiplyScalar(span * 0.7));
    const i1 = c.clone().lerp(i0, 0.35).add(new THREE.Vector3().crossVectors(n, inDir).multiplyScalar(span * 0.25));
    // outflow: from the far side of the chamber, sweeping up to the outlet
    const outDir = out.clone().sub(c).normalize();
    const o0 = c.clone().sub(outDir.clone().multiplyScalar(span * 0.6)), o2 = out.clone().sub(outDir.clone().multiplyScalar(0.005));
    const o1 = c.clone().add(new THREE.Vector3().crossVectors(outDir, n).multiplyScalar(span * 0.3));
    for (const [p0, p1, p2, kind] of [[i0, i1, i2, 'in'], [o0, o1, o2, 'out']]) {
      const NS = 48, pos = [], side = [], tt = [], lat = [], idx = [];
      for (let i = 0; i <= NS; i++) {
        const t = i / NS, p = bezier(p0, p1, p2, t), tan = bezier(p0, p1, p2, Math.min(1, t + 0.01)).sub(bezier(p0, p1, p2, Math.max(0, t - 0.01))).normalize();
        const l = new THREE.Vector3().crossVectors(n, tan).normalize();
        for (const sd of [-1, 1]) { pos.push(p.x, p.y, p.z); side.push(sd); tt.push(t); lat.push(l.x, l.y, l.z); }
        if (i < NS) { const b = i * 2; idx.push(b, b + 1, b + 2, b + 1, b + 3, b + 2); }
      }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setAttribute('aSide', new THREE.Float32BufferAttribute(side, 1)); g.setAttribute('aT', new THREE.Float32BufferAttribute(tt, 1)); g.setAttribute('aLat', new THREE.Float32BufferAttribute(lat, 3)); g.setIndex(idx);
      const mesh = new THREE.Mesh(g, arrowMat()); mesh.renderOrder = 20; mesh.frustumCulled = false; scene.add(mesh);
      mesh.material.uniforms.uCol.value.set(k === 0 || k === 2 ? 0xfff1e6 : 0xd7e6ff);
      ARROWS.push({ mesh, k, kind, w: 0, a: 0, ph: 0 });
    }
  }
}
let rdt = 0; // real frame time, so hiding the arrows fades them out even when paused or in slow motion
function updateArrows(dt) {
  if (!ARROWS.length) return;
  const Q = sim.Q, fl = [[Q.mv, Q.av], [Q.tv, Q.pvv], [Q.pvla, Q.mv], [Q.cv + Q.cor, Q.tv]];
  for (const a of ARROWS) {
    const q = Math.max(0, fl[a.k][a.kind === 'in' ? 0 : 1]), f = Math.min(1, q / QREF);
    const wT = 0.0012 + 0.0055 * Math.sqrt(f), aT = display.flow && display.arrows ? (f > 0.03 ? 0.35 + 0.55 * Math.sqrt(f) : 0) : 0;
    const k = Math.min(1, Math.max(dt, rdt) / 0.08); a.w += (wT - a.w) * k; a.a += (aT - a.a) * k; a.ph += dt * (0.5 + 3 * f);
    const u = a.mesh.material.uniforms; u.uW.value = a.w; u.uA.value = a.a; u.uPhase.value = a.ph;
  }
}


/* ---------------- anatomical valves ---------------- */
// Z-Anatomy's valve meshes are incomplete (one mitral leaflet, two tricuspid leaflets). The valves are
// rebuilt here from textbook proportions and placed at Z-Anatomy's valve positions:
//  mitral    D-shaped saddle annulus ≈ 36 mm (commissures) × 30 mm (AP); anterior leaflet ≈ 23 mm long over
//            1/3 of the annulus, posterior ≈ 12 mm over 2/3 with P1–P3 scallops; C-shaped coaptation line;
//            chordae to the anterolateral and posteromedial papillary muscles
//  tricuspid largest valve, annulus ≈ 35 mm; anterior (largest), posterior (scalloped), septal (smallest)
//            leaflets meeting in a Y; chordae to the anterior, posterior and septal papillary muscles
//  aortic    annulus ≈ 23 mm; three pocket cusps on a crown-shaped attachment (commissures ≈ 17 mm above
//            the nadir), meeting ≈ 9 mm above the annulus when closed (effective height); pulmonary alike
// Each valve stores its closed shape (position) and its open shape (_vopen offset); the shader blends.
const mm = 0.001;
// Leaflets swing about their hinge: the path from closed to open is a curve (quadratic Bézier) through
// the half-way position the leaflet would have if rotated rigidly about its attachment, not a straight line.
function surfaceGeo(nu, nv, closed, open) {
  const P0 = [], P1 = [], PM = [], VT = [], idx = [];
  for (let j = 0; j <= nv; j++) for (let i = 0; i <= nu; i++) { const u = i / nu, v = j / nv, C = closed(u, v), O = open(u, v), A = closed(u, 0);
    const dc = C.clone().sub(A), dO = O.clone().sub(A), lc = dc.length(), lo = dO.length();
    let mid = C.clone().lerp(O, 0.5);
    if (lc > 1e-5 && lo > 1e-5) { const dir = dc.clone().divideScalar(lc).add(dO.clone().divideScalar(lo)); if (dir.lengthSq() > 1e-6) mid = A.clone().addScaledVector(dir.normalize(), (lc + lo) / 2); }
    const ctl = mid.multiplyScalar(2).sub(C.clone().add(O).multiplyScalar(0.5)); // control point so the curve passes through `mid`
    P0.push(...C.toArray()); P1.push(...O.toArray()); PM.push(...ctl.toArray()); VT.push(v); }
  for (let j = 0; j < nv; j++) for (let i = 0; i < nu; i++) { const a = j * (nu + 1) + i, b = a + 1, c = a + nu + 1, d = c + 1; idx.push(a, c, b, b, c, d); }
  return { P0, P1, PM, VT, idx };
}
function tubeGeo(a0, a1, b, r0, r1 = r0, ns = 6, nl = 6) { // from a (moves closed→open) to b (fixed)
  const P0 = [], P1 = [], idx = [];
  const ring = (axis) => { const t = Math.abs(axis.y) < 0.9 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0); const u = new THREE.Vector3().crossVectors(axis, t).normalize(), w = new THREE.Vector3().crossVectors(axis, u); return [u, w]; };
  for (const [A, out] of [[a0, P0], [a1, P1]]) {
    const ax = b.clone().sub(A).normalize(), [u, w] = ring(ax);
    for (let l = 0; l <= nl; l++) { const t = l / nl, c = A.clone().lerp(b, t), r = r0 + (r1 - r0) * t;
      for (let k = 0; k < ns; k++) { const ang = k / ns * Math.PI * 2; out.push(...c.clone().addScaledVector(u, Math.cos(ang) * r).addScaledVector(w, Math.sin(ang) * r).toArray()); } }
  }
  for (let l = 0; l < nl; l++) for (let k = 0; k < ns; k++) { const a = l * ns + k, b2 = l * ns + (k + 1) % ns, c = a + ns, d = b2 + ns; idx.push(a, c, b2, b2, c, d); }
  return { P0, P1, idx };
}
function assemble(parts) { // parts: [{P0,P1,PM?,VT?,idx,sid}]
  const P0 = [], P1 = [], PM = [], VT = [], idx = [], sid = []; let base = 0;
  for (const p of parts) { for (const i of p.idx) idx.push(i + base); P0.push(...p.P0); P1.push(...p.P1); const n = p.P0.length / 3;
    // tubes (chordae) move straight: control point half-way; they follow the leaflet edge they hang from
    for (let i = 0; i < n * 3; i++) PM.push(p.PM ? p.PM[i] : (p.P0[i] + p.P1[i]) / 2);
    for (let i = 0; i < n; i++) { VT.push(p.VT ? p.VT[i] : 0.85); sid.push(p.sid); } base += n; }
  const g0 = new THREE.BufferGeometry(); g0.setAttribute('position', new THREE.Float32BufferAttribute(P0, 3)); g0.setIndex(idx); g0.computeVertexNormals();
  const g1 = new THREE.BufferGeometry(); g1.setAttribute('position', new THREE.Float32BufferAttribute(P1, 3)); g1.setIndex(idx); g1.computeVertexNormals();
  const vo = new Float32Array(P0.length); for (let i = 0; i < P0.length; i++) vo[i] = P1[i] - P0[i];
  const n = P0.length / 3;
  const vm = new Float32Array(P0.length); for (let i = 0; i < P0.length; i++) vm[i] = PM[i] - P0[i];
  g0.setAttribute('_vopen', new THREE.BufferAttribute(vo, 3)); g0.setAttribute('_nopen', g1.getAttribute('normal'));
  g0.setAttribute('_vmid', new THREE.BufferAttribute(vm, 3)); g0.setAttribute('_vt', new THREE.BufferAttribute(new Float32Array(VT), 1));
  g0.setAttribute('_rad', new THREE.BufferAttribute(new Float32Array(n), 1)); g0.setAttribute('_blend', new THREE.BufferAttribute(new Float32Array(n).fill(1), 1));
  g0.setAttribute('_sid', new THREE.BufferAttribute(new Float32Array(sid), 1));
  return g0;
}
function papTip(seg, sid, near) { // tip of a Z-Anatomy papillary muscle: its vertex closest to the valve
  const o = segMeshes[seg], g = o.geometry, pa = g.attributes.position, sa = g.attributes._sid, v = new THREE.Vector3(); let best = null, bd = 1e9;
  for (let i = 0; i < pa.count; i++) { if (sa.getX(i) !== sid) continue; v.fromBufferAttribute(pa, i).applyMatrix4(o.matrixWorld); const d = v.distanceToSquared(near); if (d < bd) { bd = d; best = v.clone(); } }
  return best;
}
function nameId(n, seg) { meta.names.push({ n, s: seg, r: 0.5 }); return meta.names.length - 1; }
function leafHinge(seg, vi) { // annulus level along the valve axis, from the Z-Anatomy leaflets
  const o = segMeshes[seg], pa = o.geometry.attributes.position, v = new THREE.Vector3(), h = [];
  for (let i = 0; i < pa.count; i += 2) h.push(v.fromBufferAttribute(pa, i).applyMatrix4(o.matrixWorld).sub(vi.c).dot(vi.n)); h.sort((a, b) => a - b); return h[Math.floor(h.length * 0.06)];
}
function buildAnatomicValves() {
  const V3 = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z), plane = (v, n) => v.clone().sub(n.clone().multiplyScalar(v.dot(n))).normalize();
  const parts = {};
  // ---------- mitral
  { const vi = valveInfo.v_mitral, n = vi.n, c = vi.c.clone().addScaledVector(n, leafHinge('v_mitral', vi));
    const a = plane(valveInfo.v_aortic.c.clone().sub(c), n); let e = V3().crossVectors(n, a); if (e.x + e.z < 0) e.negate();
    const A = phi => { const x = 18 * Math.sin(phi), y = (Math.cos(phi) > 0 ? 12 : 18) * Math.cos(phi), h = 2.5 * Math.cos(2 * phi);
      return c.clone().addScaledVector(e, x * mm).addScaledVector(a, y * mm).addScaledVector(n, -h * mm); };
    const rhat = phi => plane(A(phi).sub(c), n);
    const Co = x => c.clone().addScaledVector(e, x * mm).addScaledVector(a, (-4 + 5 * (x / 18) ** 2) * mm).addScaledVector(n, 6 * mm);
    const leaf = (p0, p1, Hf, tilt, side, label) => {
      const sid = nameId(label, 'v_mitral');
      const phiOf = u => p0 + (p1 - p0) * u;
      const closed = (u, v) => { const phi = phiOf(u), An = A(phi), x = 17 * Math.sin(phi), co = Co(x).addScaledVector(a, side * 0.5 * mm);
        if (v < 0.78) { const t = v / 0.78; return An.lerp(co, t).addScaledVector(n, -2 * Math.sin(Math.PI * t) * mm); }
        return co.addScaledVector(n, (v - 0.78) / 0.22 * 5 * mm); };
      const open = (u, v) => { const phi = phiOf(u), H = Hf(u), r = rhat(phi), d = n.clone().multiplyScalar(Math.cos(tilt)).addScaledVector(r, -Math.sin(tilt));
        return A(phi).addScaledVector(d, v * H * mm).addScaledVector(r, 1.2 * Math.sin(Math.PI * v) * mm); };
      return { ...surfaceGeo(40, 14, closed, open), sid, closed, open };
    };
    const ant = leaf(-1.08, 1.08, u => 23 * (0.25 + 0.75 * Math.sin(Math.PI * u)), 14 * Math.PI / 180, 1, 'Anterior leaflet of mitral valve (A1–A3)');
    const scal = u => 1 - 0.35 * Math.exp(-(((u - 1 / 3) / 0.04) ** 2)) - 0.35 * Math.exp(-(((u - 2 / 3) / 0.04) ** 2));
    const post = leaf(1.08, 2 * Math.PI - 1.08, u => 12 * (0.3 + 0.7 * Math.sin(Math.PI * u)) * scal(u), 8 * Math.PI / 180, -1, 'Posterior leaflet of mitral valve (P1–P3 scallops)');
    // papillary muscles: posteromedial from Z-Anatomy, anterolateral (absent in Z-Anatomy) built as a cone
    const pm = papTip('lv', 8, c) || c.clone().addScaledVector(n, 26 * mm).addScaledVector(e, -10 * mm);
    const al = c.clone().addScaledVector(n, 26 * mm).addScaledVector(e, 10 * mm).addScaledVector(a, -3 * mm);
    const chords = [], sidC = nameId('Chordae tendineae (mitral)', 'v_mitral');
    for (const lf of [ant, post]) for (let k = 1; k < 10; k++) { const u = k / 10, t0 = lf.closed(u, 0.85), t1 = lf.open(u, 0.85);
      const tip = t1.distanceTo(al) < t1.distanceTo(pm) ? al : pm; chords.push({ ...tubeGeo(t0, t1, tip, 0.35 * mm), sid: sidC }); }
    parts.v_mitral = [ant, post, ...chords];
    const alSid = nameId('Anterolateral papillary muscle (added: missing in Z-Anatomy)', 'pm_al');
    parts.pm_al = [{ ...tubeGeo(al, al, al.clone().addScaledVector(n, 14 * mm).addScaledVector(e, 5 * mm), 2.2 * mm, 5 * mm, 12, 4), sid: alSid }];
    vi.cA = c; }
  // ---------- tricuspid
  { const vi = valveInfo.v_tricuspid, n = vi.n, c = vi.c.clone().addScaledVector(n, leafHinge('v_tricuspid', vi));
    const sdir = plane(DEF.uHC.value[0].clone().sub(c), n); let b = V3().crossVectors(n, sdir); if (b.z < 0) b.negate();
    const rad = phi => 17.5 * (1 - 0.12 * Math.max(0, Math.cos(phi)));
    const dir = phi => sdir.clone().multiplyScalar(Math.cos(phi)).addScaledVector(b, Math.sin(phi));
    const A = phi => c.clone().addScaledVector(dir(phi), rad(phi) * mm).addScaledVector(n, -1.5 * Math.cos(3 * phi) * mm);
    const O = c.clone().addScaledVector(n, 5 * mm);
    const d2r = Math.PI / 180, comm = [-55 * d2r, 55 * d2r, 190 * d2r];
    const leaf = (p0, p1, Hf, label, scal = () => 1) => {
      const sid = nameId(label, 'v_tricuspid'); const phiOf = u => p0 + (p1 - p0) * u;
      const fe = u => { const pc = u < 0.5 ? p0 : p1, f = u < 0.5 ? 1 - 2 * u : 2 * u - 1; return O.clone().addScaledVector(dir(pc), rad(pc) * 0.82 * f * mm); };
      const closed = (u, v) => { const An = A(phiOf(u)), F = fe(u); if (v < 0.8) { const t = v / 0.8; return An.lerp(F, t).addScaledVector(n, -1.5 * Math.sin(Math.PI * t) * mm); } return F.addScaledVector(n, (v - 0.8) / 0.2 * 4 * mm); };
      const open = (u, v) => { const phi = phiOf(u), r = dir(phi), d = n.clone().multiplyScalar(Math.cos(0.17)).addScaledVector(r, -Math.sin(0.17));
        return A(phi).addScaledVector(d, v * Hf(u) * scal(u) * mm).addScaledVector(r, 1 * Math.sin(Math.PI * v) * mm); };
      return { ...surfaceGeo(36, 14, closed, open), sid, closed, open };
    };
    const bell = (h) => u => h * (0.3 + 0.7 * Math.sin(Math.PI * u));
    const sept = leaf(comm[0], comm[1], bell(15), 'Septal leaflet of tricuspid valve');
    const antL = leaf(comm[1], comm[2], bell(22), 'Anterior leaflet of tricuspid valve (largest)');
    const postL = leaf(comm[2], comm[0] + 2 * Math.PI, bell(17), 'Posterior leaflet of tricuspid valve', u => 1 - 0.3 * Math.exp(-(((u - 0.5) / 0.05) ** 2)));
    const tips = [[11, 'ant'], [12, 'post'], [13, 'sept']].map(([sid]) => papTip('rv', sid, c)).filter(Boolean);
    const chords = [], sidC = nameId('Chordae tendineae (tricuspid)', 'v_tricuspid');
    for (const lf of [sept, antL, postL]) for (let k = 1; k < 8; k++) { const u = k / 8, t0 = lf.closed(u, 0.85), t1 = lf.open(u, 0.85);
      let tip = tips[0]; for (const t of tips) if (t.distanceTo(t1) < tip.distanceTo(t1)) tip = t; if (tip) chords.push({ ...tubeGeo(t0, t1, tip, 0.3 * mm), sid: sidC }); }
    parts.v_tricuspid = [sept, antL, postL, ...chords]; vi.cA = c; }
  // ---------- aortic and pulmonary
  for (const [seg, R, names, leftIdx] of [['v_aortic', 11.5, ['Right coronary cusp', 'Left coronary cusp', 'Non-coronary cusp'], 1], ['v_pulmonary', 12.5, ['Anterior cusp', 'Left cusp', 'Right cusp'], 1]]) {
    const vi = valveInfo[seg], n = vi.n, c0 = vi.c.clone().addScaledVector(n, leafHinge(seg, vi));
    const f0 = plane(V3(0, 0, 1), n); let f1 = V3().crossVectors(n, f0); if (f1.x < 0) f1.negate(); // f1 toward the patient's left
    const dir = phi => f0.clone().multiplyScalar(Math.cos(phi)).addScaledVector(f1, Math.sin(phi));
    const Hc = 17, He = 9, list = [];
    names.forEach((nm, k) => {
      const psi = (k === 0 ? 0 : k === leftIdx ? 120 : -120) * Math.PI / 180, sid = nameId(`${nm} (${seg === 'v_aortic' ? 'aortic' : 'pulmonary'} valve)`, seg);
      const att = s => c0.clone().addScaledVector(dir(psi + s * Math.PI / 3), R * mm).addScaledVector(n, Hc * s * s * mm);
      const closed = (u, v) => { const s = u * 2 - 1, A = att(s), F = c0.clone().addScaledVector(dir(psi + Math.sign(s || 1) * Math.PI / 3), R * Math.abs(s) * 0.96 * mm).addScaledVector(n, (He + (Hc - He) * s * s) * mm);
        return A.lerp(F, v).addScaledVector(n, -4 * Math.sin(Math.PI * v) * (1 - s * s) * mm); };
      const open = (u, v) => { const s = u * 2 - 1, A = att(s), F = c0.clone().addScaledVector(dir(psi + s * Math.PI / 3), R * 0.84 * mm).addScaledVector(n, (Hc * 0.82 + (Hc - Hc * 0.82) * s * s) * mm);
        return A.lerp(F, v).addScaledVector(dir(psi + s * Math.PI / 3), -0.8 * Math.sin(Math.PI * v) * mm); };
      list.push({ ...surfaceGeo(30, 12, closed, open), sid });
    });
    parts[seg] = list; vi.cA = c0.clone().addScaledVector(n, He * mm);
  }
  // swap the meshes in
  for (const o of rebuilt) o.removeFromParent(); rebuilt.length = 0;
  for (const [seg, ps] of Object.entries(parts)) {
    const old = segMeshes[seg]; if (old) { old.removeFromParent(); old.geometry.dispose(); }
    const mat = seg === 'pm_al' ? makeMat('a_coronary') : makeMat(seg);
    if (seg === 'pm_al') { mat.color.setHex(COL.muscle); mat.roughness = 0.6; mat.clearcoat = 0.2; }
    const m = new THREE.Mesh(assemble(ps), mat); m.userData.seg = seg; m.frustumCulled = false;
    scene.add(m); segMeshes[seg] = m;
    if (valveInfo[seg]) { valveInfo[seg].meshes = [m]; valveInfo[seg].c = valveInfo[seg].cA || valveInfo[seg].c; }
  }
}

/* ---------------- cross-section ---------------- */
const sectionLabels = [];
function buildSectionLabels() {
  for (const [seg, vi] of Object.entries(valveInfo)) { const e = el('div', { class: 'lbl vlbl' }, VALVE_NAME[seg]); e.hidden = true; $('#labels').append(e); sectionLabels.push({ e, p: vi.c.clone(), seg }); }
}
function sectionFrame(mode) {
  if (mode.startsWith('v_')) { // valve close-up: cut just upstream of the valve and look straight down onto it
    const vi = valveInfo[mode], av = mode === 'v_mitral' || mode === 'v_tricuspid';
    const nCam = vi.n.clone().multiplyScalar(av ? -1 : 1).normalize(); // AV: from the atrium; semilunar: from the artery
    return { nCam, origin: vi.c.clone().addScaledVector(nCam, (av ? 7 : 11) * mm), target: vi.c.clone(), dist: 0.11 };
  }
  const lv = DEF.uHC.value[0], rv = DEF.uHC.value[1], u = DEF.uAX.value.clone();
  const mid = lv.clone().lerp(rv, 0.5).lerp(DEF.uAV.value, 0.3);
  let nCam;
  if (mode === 'four') nCam = u.clone().cross(rv.clone().sub(lv)).normalize();
  else if (mode === 'long') nCam = u.clone().cross(valveInfo.v_aortic.c.clone().sub(valveInfo.v_mitral.c)).normalize(); // plane holds apex, mitral and aortic valves
  else nCam = u.clone().negate();
  if (mode === 'four' && nCam.z < 0) nCam.negate();
  if (mode === 'long' && nCam.x + nCam.z < 0) nCam.negate(); // look from the patient's left, like a parasternal view
  const origin = mode === 'short' ? lv.clone().lerp(DEF.uAV.value, 0.2) : (mode === 'long' ? lv.clone().lerp(valveInfo.v_aortic.c.clone().lerp(valveInfo.v_mitral.c, 0.5), 0.5) : mid);
  return { nCam, origin };
}
function applySection() {
  const clipped = ['la', 'lv', 'ra', 'rv', 'pm_al', 'a_coronary', 'v_cardiac', 'aorta', 'pa', 'pv', 'vc', ...VALVES];
  if (SECTION.on) {
    const { nCam, origin, target, dist } = sectionFrame(SECTION.mode); SECTION.target = target || null; SECTION.dist = dist || 0.34;
    const pt = origin.clone().add(nCam.clone().multiplyScalar(SECTION.offset));
    SECTION.plane.setFromNormalAndCoplanarPoint(nCam.clone().negate(), pt); // keep the half away from the camera
    SECTION.nCam = nCam; SECTION.origin = origin;
  }
  for (const [k, o] of Object.entries(segMeshes)) {
    const on = SECTION.on && clipped.includes(k) && !valveFocus(), m = o.material;
    const want = on ? [SECTION.plane] : [];
    if ((m.clippingPlanes || []).length !== want.length) { m.clippingPlanes = want; m.side = on || VALVES.includes(k) ? THREE.DoubleSide : THREE.FrontSide; m.needsUpdate = true; }
    m.userData.u.uSection.value = on ? 1 : 0;
    const b = bloodMeshes[k]; if (b && (b.material.clippingPlanes || []).length !== want.length) { b.material.clippingPlanes = want; b.material.needsUpdate = true; }
  }
  $('#secBar').hidden = !SECTION.on || !!valveFocus();
  sectionLabels.forEach(l => l.e.hidden = !SECTION.on);
  // the wall test that keeps leaflets from poking through the heart surface is not needed when looking from inside
  if (VOXU.uVox.value) VOXU.uVoxOn.value = SECTION.on && SECTION.mode.startsWith('v_') ? 0 : 1;
  placeCap(); buildArrows(); valvesOverBlood(SECTION.on);
}
function setSection(mode) {
  const was = SECTION.on; SECTION.on = mode !== 'off'; if (SECTION.on) SECTION.mode = mode;
  if (SECTION.on && !was && !display.flow) { display.flow = true; $('#tFlow').setAttribute('aria-pressed', 'true'); }
  $$('[data-sec]').forEach(b => b.setAttribute('aria-pressed', b.dataset.sec === mode));
  if (SECTION.on && currentView !== 'heart') { currentView = 'heart'; $$('[data-view]').forEach(b => b.setAttribute('aria-pressed', b.dataset.view === 'heart')); applyVisibility(); }
  applySection(); applyFlowLook();
  if (SECTION.on) { const t = (SECTION.target || SECTION.origin).clone(); camAnim = { p0: camera.position.clone(), t0: controls3.target.clone(), p1: t.clone().add(SECTION.nCam.clone().multiplyScalar(SECTION.dist)).add(new THREE.Vector3(0.001, 0.001, 0)), t1: t, k: 0 }; }
  const vb = $('#valveHint'), vm = SECTION.on && SECTION.mode.startsWith('v_'); vb.hidden = !vm;
  if (vm) vb.innerHTML = VALVE_VIEW[SECTION.mode];
}
$$('[data-sec]').forEach(b => b.addEventListener('click', () => setSection(b.dataset.sec)));
$('#secOff').addEventListener('input', e => { SECTION.offset = +e.target.value / 1000; $('#secOffO').textContent = `${e.target.value > 0 ? '+' : ''}${e.target.value} mm`; applySection(); });

/* views */
const VIEWS = {
  heart: () => ({ t: heartC.clone().add(new THREE.Vector3(-0.005, 0.02, 0)), d: new THREE.Vector3(0.12, 0.06, 0.5) }),
  chest: () => ({ t: heartC.clone().add(new THREE.Vector3(0, -0.02, 0)), d: new THREE.Vector3(0.25, 0.1, 1.15) }),
  body: () => ({ t: new THREE.Vector3(0.0, 0.92, 0.02), d: new THREE.Vector3(0.6, 0.15, 2.9) }),
};
let camAnim = null, currentView = 'heart';
const HEART_ONLY = new Set(['la', 'lv', 'ra', 'rv', 'v_mitral', 'v_tricuspid', 'v_aortic', 'v_pulmonary', 'pm_al', 'a_coronary', 'v_cardiac', 'aorta', 'pa', 'pv', 'vc']);
function applyVisibility() { for (const [k, o] of Object.entries(segMeshes)) o.visible = currentView !== 'heart' || HEART_ONLY.has(k); }
function setView(v, instant) {
  const { t, d } = VIEWS[v](); const to = t.clone().add(d);
  $$('[data-view]').forEach(b => b.setAttribute('aria-pressed', b.dataset.view === v));
  currentView = v; applyVisibility();
  if (instant) { camera.position.copy(to); controls3.target.copy(t); controls3.update(); return; }
  camAnim = { p0: camera.position.clone(), t0: controls3.target.clone(), p1: to, t1: t, k: 0 };
}
$$('[data-view]').forEach(b => b.addEventListener('click', () => { if (b.dataset.view !== 'heart' && SECTION.on) setSection('off'); setView(b.dataset.view); }));
const display = { color: false, flow: false, labels: true, arrows: true };
const tog = (id, k, after) => $(id).addEventListener('click', e => { display[k] = !display[k]; e.currentTarget.setAttribute('aria-pressed', display[k]); after && after(); });
tog('#tColor', 'color', () => { $('#legend').hidden = !display.color; });
tog('#tFlow', 'flow', () => applyFlowLook());
tog('#tLab', 'labels', () => { $('#labels').hidden = !display.labels; });
tog('#tArr', 'arrows');
const valveFocus = () => SECTION.on && SECTION.mode.startsWith('v_') ? SECTION.mode : null;
function applyFlowLook() {
  for (const [k, o] of Object.entries(segMeshes)) {
    if (VALVES.includes(k)) continue; // valve draw order is managed by valvesOverBlood()
    const vessel = !['la', 'lv', 'ra', 'rv', ...VALVES].includes(k);
    const t = display.flow && vessel;
    o.material.transparent = t; o.material.opacity = t ? 0.16 : 1; o.material.depthWrite = !t; o.material.needsUpdate = true;
    if (vessel) {
      o.userData.baseColor ??= o.material.color.getHex();
      o.material.clearcoat = t ? 0 : 0.8; o.material.roughness = t ? 0.7 : 0.38;
      o.material.color.setHex(t ? 0xdcbcb8 : o.userData.baseColor); // pale wall, so the blood shows its own colour
    }
    const see = false; // the heart stays solid (see-through walls made the valves look as if they sat on the surface); use a cross-section to look inside
    if (['la', 'lv', 'ra', 'rv'].includes(k)) { o.material.transparent = see; o.material.opacity = see ? 0.5 : 1; o.material.depthWrite = !see; }
  }
  // valve close-up: the chosen valve stays solid, everything else becomes a faint ghost for orientation
  const vm = valveFocus();
  for (const [k, o] of Object.entries(segMeshes)) {
    const keep = k === vm || (vm === 'v_mitral' && k === 'pm_al');
    if (VALVES.includes(k)) { if (vm && !keep) { o.visible = false; o.userData.vHidden = true; } else if (o.userData.vHidden) { o.visible = true; o.userData.vHidden = false; } continue; }
    if (vm && !keep) { o.material.transparent = true; o.material.opacity = 0.07; o.material.depthWrite = false; o.material.needsUpdate = true; }
  }
  CHB.uBloodSec.value = SECTION.on && display.flow ? 1 : 0; placeCap();
  $('#credit3d').innerHTML = `Anatomy: <a href="https://www.z-anatomy.com" target="_blank" rel="noopener">Z-Anatomy</a> (CC BY-SA 4.0) · radii ×2 for visibility${display.flow ? ' · blood shown at ⅓ speed' : ''}`;
}
// pressure colour ramp (log scale 0–130 mmHg)
const RAMP = [[0, 0x2b4fd6], [0.35, 0x19a7b8], [0.6, 0xe9d34a], [0.8, 0xf08a2c], [1, 0xd7263d]].map(([t, c]) => [t, new THREE.Color(c)]);
const pT = P => Math.min(1, Math.max(0, Math.log1p(Math.max(0, P)) / Math.log1p(130)));
function pColor(P, out) { const t = pT(P); for (let i = 1; i < RAMP.length; i++) if (t <= RAMP[i][0]) { const [a, ca] = RAMP[i - 1], [b, cb] = RAMP[i]; return out.copy(ca).lerp(cb, (t - a) / (b - a)); } return out.copy(RAMP[RAMP.length - 1][1]); }
$('#ticks').innerHTML = [0, 5, 15, 40, 120].map(p => `<span style="left:${pT(p) * 100}%">${p}</span>`).join('');

/* flow tracers: red cells moving along vessel centrelines */
let tracers = null; const tr = [];
function buildTracers() {
  const lines = meta.lines.map(l => {
    const pts = l.p.map(p => new THREE.Vector3(p[0], p[1], p[2]).multiplyScalar(0.001));
    const cum = [0]; for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + pts[i].distanceTo(pts[i - 1]));
    return { ...l, pts, cum, L: cum[cum.length - 1], r: Math.min(l.r, 14) / 1000, name: meta.names[l.sid].n };
  }).filter(l => l.L > 0.01);
  // flow share inside each region by r³ (Murray)
  const sum = {}; for (const l of lines) sum[l.seg] = (sum[l.seg] || 0) + l.r ** 3;
  for (const l of lines) l.share = l.r ** 3 / sum[l.seg];
  const N = []; let total = 0;
  for (const l of lines) { const n = Math.max(2, Math.min(36, Math.round(l.L / (l.r * 3.5)))); N.push(n); total += n; }
  const scale = Math.min(1, 4200 / total);
  const g = new THREE.SphereGeometry(1, 12, 8); g.scale(1, 0.36, 1);
  const mat = new THREE.MeshStandardMaterial({ color: 0xc3121d, roughness: 0.35, emissive: 0x3a0005 });
  let count = 0; lines.forEach((l, i) => count += Math.max(1, Math.round(N[i] * scale)));
  tracers = new THREE.InstancedMesh(g, mat, count); tracers.visible = false; tracers.frustumCulled = false;
  const col = new THREE.Color(); let idx = 0;
  lines.forEach((l, i) => {
    const n = Math.max(1, Math.round(N[i] * scale));
    const venous = /^(vn_|vc|pa|v_cardiac)/.test(l.seg);
    for (let k = 0; k < n; k++) {
      const a = Math.random() * Math.PI * 2, rr = Math.sqrt(Math.random()) * 0.55;
      tr.push({ l, u: (k + Math.random()) / n, ox: Math.cos(a) * rr, oy: Math.sin(a) * rr, q: new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.random() * 6, Math.random() * 6, Math.random() * 6)), s: Math.min(0.0016, Math.max(0.0006, l.r * 0.22)) });
      tracers.setColorAt(idx++, col.set(venous ? 0x7a1020 : 0xd01826));
    }
  });
  scene.add(tracers);
}
function lineFlow(l) {
  const Q = sim.Q, n = l.name;
  if (l.seg === 'aorta') return Q.av * (n.includes('Brachiocephalic') ? 0.15 : n.includes('Thoracic') ? 0.75 : n.includes('Abdominal') ? 0.6 : 1);
  if (l.seg === 'pa') return Q.pvv * l.share * 1.0;
  if (l.seg === 'pv') return Q.pvla * l.share;
  if (l.seg === 'vc') return n.includes('Superior') ? Q.veins.up : n.includes('brachiocephalic') ? Q.veins.up / 2 : Q.veins.spl + Q.veins.low;
  if (SEG_BED[l.seg]) return Q.beds[SEG_BED[l.seg]] * l.share * 3; // ×3: branches in the list overlap their parents
  if (SEG_VEIN[l.seg]) return Q.veins[SEG_VEIN[l.seg]] * l.share * 3;
  if (l.seg === 'v_cardiac') return Q.cor * l.share;
  return 0;
}
const _m = new THREE.Matrix4(), _p = new THREE.Vector3(), _t = new THREE.Vector3(), _n1 = new THREE.Vector3(), _n2 = new THREE.Vector3(), _s = new THREE.Vector3();
function updateTracers(dt) {
  if (!tracers || !tracers.visible) return;
  const cache = new Map();
  tr.forEach((c, i) => {
    if (currentView === 'heart' && !HEART_ONLY.has(c.l.seg)) { _m.makeScale(0, 0, 0); tracers.setMatrixAt(i, _m); return; }
    let v = cache.get(c.l); if (v === undefined) { v = lineFlow(c.l) * 1e-6 / (Math.PI * c.l.r * c.l.r) * 0.5; cache.set(c.l, v); } // m/s, shown at ½ speed
    c.u += v * dt / c.l.L; c.u -= Math.floor(c.u);
    const l = c.l, d = c.u * l.L; let j = 1; while (j < l.cum.length - 1 && l.cum[j] < d) j++;
    const a = l.pts[j - 1], b = l.pts[j], f = (d - l.cum[j - 1]) / Math.max(1e-6, l.cum[j] - l.cum[j - 1]);
    _p.copy(a).lerp(b, f); _t.copy(b).sub(a).normalize();
    _n1.set(0, 1, 0).cross(_t); if (_n1.lengthSq() < 1e-4) _n1.set(1, 0, 0).cross(_t); _n1.normalize(); _n2.copy(_t).cross(_n1);
    _p.addScaledVector(_n1, c.ox * l.r).addScaledVector(_n2, c.oy * l.r);
    if (HEART_ONLY.has(l.seg)) deformCPU(_p);
    _m.compose(_p, c.q, _s.setScalar(c.s)); tracers.setMatrixAt(i, _m);
  });
  tracers.instanceMatrix.needsUpdate = true;
}

/* per-frame mapping from the simulation to the anatomy */
const tmpC = new THREE.Color();
function segPressure(seg) {
  const P = sim.P;
  switch (seg) {
    case 'la': case 'v_mitral': return P.la; case 'lv': case 'v_aortic': return P.lv; case 'ra': case 'v_tricuspid': case 'v_cardiac': return P.ra; case 'rv': case 'v_pulmonary': return P.rv;
    case 'aorta': return P.ao; case 'pa': return P.pa; case 'pv': return P.pv; case 'vc': return P.cv;
  }
  if (SEG_BED[seg]) return P.sa; if (SEG_VEIN[seg]) return P[SEG_VEIN[seg]]; return 0;
}
const EX = 2; // radius exaggeration
function segDil(seg) {
  const P = sim.P, V = sim.V;
  const art = p => 1 + EX * (Math.sqrt(Math.max(0.2, 1 + 0.3 * (p - refPao) / refPao)) - 1);
  if (seg === 'aorta') return clamp(art(P.ao), 0.8, 1.25);
  if (SEG_BED[seg]) { const b = SEG_BED[seg], bed = BEDS.find(x => x.id === b); const tone = sim.p.bedRadius[b] * (sim.eff.R ** (-0.25 * bed.reflex)) * (sim.p.env.bed[b] ** -0.25); return clamp(art(P.sa) * (1 + 0.5 * (tone - 1)), 0.75, 1.25); }
  if (seg === 'pa') return 1 + EX * (Math.sqrt(Math.max(0.2, 1 + 0.35 * (P.pa - refPpa) / refPpa)) - 1);
  // veins: radius follows the pool volume (r ∝ √V); limited so the wall never folds through itself
  const ven = (v, r) => clamp(1 + 0.75 * EX * (Math.sqrt(v / r) - 1), 0.74, 1.3);
  if (seg === 'pv') return ven(V.pv, refV.pv);
  if (seg === 'vc') return ven(V.cv, refV.cv);
  if (SEG_VEIN[seg]) { const k = SEG_VEIN[seg]; return ven(V[k], refV[k]); }
  return 1;
}
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
function update3D(dt) {
  if (!meta) return;
  const V = sim.V, cs = (v, r, ex) => ex * (Math.cbrt(Math.max(0.05, v / r)) - 1);
  DEF.uHS.value[0] = cs(V.lv, refV.lv, 0.75); DEF.uHS.value[1] = cs(V.rv, refV.rv, 0.75);
  DEF.uHS.value[2] = cs(V.la, refV.la, 0.8); DEF.uHS.value[3] = cs(V.ra, refV.ra, 0.8);
  DEF.uAVd.value = -0.006 * (refV.lv - V.lv) / BASE.sv * 2; // base descends ~6 mm per stroke
  const dils = {}; for (const seg of Object.keys(segMeshes)) dils[seg] = segDil(seg);
  const now = performance.now();
  for (const [seg, o] of Object.entries(segMeshes)) {
    const u = o.material.userData.u;
    u.uDil.value = dils[seg]; u.uDilP.value = seg.startsWith('a_') ? (dils.aorta ?? 1) : seg.startsWith('vn_') ? (dils.vc ?? 1) : 1;
    if (VALVES.includes(seg) && SECTION.on && valveInfo[seg]) {
      // in a cut, valves glow by state so they read at a glance: blue open, orange closed (colour-blind safe)
      const op = valveInfo[seg].open > 0.2; u.uTint.value.set(op ? 0x3d8bff : 0xff8a1f); u.uTintAmt.value += (0.88 - u.uTintAmt.value) * Math.min(1, rdt * 8);
    } else {
      const want = display.color ? 0.85 : 0; u.uTintAmt.value += (want - u.uTintAmt.value) * Math.min(1, Math.max(dt, rdt) * 8);
      if (u.uTintAmt.value > 0.01) pColor(segPressure(seg), u.uTint.value);
    }
    const h = hlNow.has(seg) ? 1 : 0; u.uHL.value += (h - u.uHL.value) * Math.min(1, dt * 10);
  }
  updateValves(dt);
  updateBlood(dt);
  updateArrows(dt);
  updateValveHud();
  { const Q = sim.Q, V = sim.V, f = [[Q.mv, Q.av, V.lv], [Q.tv, Q.pvv, V.rv], [Q.pvla, Q.mv, V.la], [Q.cv + Q.cor, Q.tv, V.ra]];
    // mean speed over the chamber cross-section (~15 cm²), mm/s; vortex mostly during filling
    f.forEach(([qi, qo, v], i) => {
      CHF.uSin.value[i] += Math.max(0, qi) * 1000 / 1500 * dt * SPEED_SHOWN;
      CHF.uSout.value[i] += Math.max(0, qo) * 1000 / 1500 * dt * SPEED_SHOWN;
      CHF.uVin.value[i] = Math.max(0, qi) * 1000 / 1500 * SPEED_SHOWN; CHF.uVout.value[i] = Math.max(0, qo) * 1000 / 1500 * SPEED_SHOWN;
      CHB.uSwirl.value[i] += (i % 2 ? -1 : 1) * 1.6 * Math.max(0, qi) / Math.max(20, v) * dt * SPEED_SHOWN;
    });
    if (SECTION.nCam) CHF.uN.value.copy(SECTION.nCam); }
  for (const [k, b] of Object.entries(bloodMeshes)) b.visible = display.flow && segMeshes[k].visible && !valveFocus();
}

/* valve status panel on the 3D view (cross-sections and scrubbing) */
const HUD_V = [['v_mitral', 'Mitral', 'mv'], ['v_aortic', 'Aortic', 'av'], ['v_tricuspid', 'Tricuspid', 'tv'], ['v_pulmonary', 'Pulmonary', 'pvv']];
let hudLast = '';
function updateValveHud() {
  const box = $('#valveHud'); const show = SECTION.on || SCRUB.on; box.hidden = !show; if (!show) return;
  const html = `<div class="vh-ph">${phaseTxt}</div>` + HUD_V.map(([seg, n, q]) => {
    const vi = valveInfo[seg], op = vi ? vi.open > 0.2 : false, f = Math.abs(sim.Q[q] || 0);
    return `<div class="vh-row"><span>${n}</span><b class="${op ? 'op' : 'cl'}">${op ? 'open' : 'closed'}</b><em>${op ? fmt(f) + ' ml/s' : ''}</em></div>`;
  }).join('') + `<div class="vh-lv">LV ${fmt(sim.P.lv)} mmHg · ${fmt(sim.V.lv)} ml</div>`;
  if (html !== hudLast) { box.innerHTML = html; hudLast = html; }
}
function updateLabels() {
  if (!display.labels || !meta) return;
  const r = field.getBoundingClientRect();
  if (SECTION.on) for (const l of sectionLabels) { const vi = valveInfo[l.seg]; const st = vi.open > 0.2 ? 'open' : 'closed'; if (l.st !== st) { l.st = st; l.e.textContent = `${VALVE_NAME[l.seg]} · ${st}`; l.e.classList.toggle('open', st === 'open'); } }
  for (const l of [...labelEls, ...(SECTION.on ? sectionLabels : [])]) {
    const { e, p } = l, v = p.clone().project(camera);
    const vis = v.z < 1 && Math.abs(v.x) < 1.05 && Math.abs(v.y) < 1.05 && !(SECTION.on && (l.vessel || (l.seg && SECTION.plane.distanceToPoint(p) < -0.004)));
    const vm = valveFocus(); e.hidden = !vis || (vm && !(sectionLabels.includes(l) && l.seg === vm)); if (vis) e.style.left = `${(v.x + 1) / 2 * r.width}px`, e.style.top = `${(1 - v.y) / 2 * r.height}px`;
  }
}

/* hover + click picking */
const ray = new THREE.Raycaster(), ptr = new THREE.Vector2(); ray.firstHitOnly = true; let lastPick = 0, pickEvt = null, lastMove = 0, bvhReady = false;
canvas.addEventListener('pointermove', e => { pickEvt = e; lastMove = performance.now(); if (e.buttons) $('#tip').hidden = true; });
function buildBVH() {
  import('three-mesh-bvh').then(({ computeBoundsTree, acceleratedRaycast }) => {
    THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree; THREE.Mesh.prototype.raycast = acceleratedRaycast;
    const list = [...Object.values(segMeshes), ...rebuilt]; let i = 0;
    const next = () => { if (i >= list.length) { bvhReady = true; return; } list[i++].geometry.computeBoundsTree(); setTimeout(next, 0); };
    next();
  }).catch(() => { bvhReady = true; });
}
canvas.addEventListener('pointerleave', () => { pickEvt = null; $('#tip').hidden = true; });
function pick(e) {
  const r = canvas.getBoundingClientRect(); ptr.set((e.clientX - r.left) / r.width * 2 - 1, -(e.clientY - r.top) / r.height * 2 + 1);
  ray.setFromCamera(ptr, camera);
  const hit = ray.intersectObjects([...Object.values(segMeshes).filter(o => o.visible), ...rebuilt], false)[0]; if (!hit) return null;
  const sid = hit.object.geometry.attributes._sid.getX(hit.face.a);
  return { seg: hit.object.userData.seg, name: hit.object.userData.rebuilt ? hit.object.userData.rebuilt + ' (rebuilt: missing in Z-Anatomy)' : meta.names[sid]?.n || '', x: e.clientX - r.left, y: e.clientY - r.top };
}
function hoverTip() {
  const tip = $('#tip');
  const t = performance.now();
  if (!pickEvt || !meta || !bvhReady || pickEvt.buttons || t - lastMove < 60 || t - lastPick < 120 || lastPick > lastMove) return; lastPick = t;
  const h = pick(pickEvt); if (!h) { tip.hidden = true; return; }
  const P = segPressure(h.seg);
  let extra = `P ${fmt(P, P < 20 ? 1 : 0)} mmHg`;
  if (SEG_BED[h.seg]) extra += ` · bed flow ${fmt(sim.stats.beds[SEG_BED[h.seg]])} ml/min · click to magnify`;
  else if (SEG_VEIN[h.seg]) extra += ` · pool ${fmt(sim.V[SEG_VEIN[h.seg]])} ml`;
  else if (['lv', 'rv', 'la', 'ra'].includes(h.seg)) extra += ` · V ${fmt(sim.V[h.seg])} ml`;
  else if (VALVE_SIM[h.seg]) extra = `${sim.open[VALVE_SIM[h.seg]] ? 'open' : 'closed'} · flow ${fmt(sim.Q[VALVE_SIM[h.seg] === 'pv' ? 'pvv' : VALVE_SIM[h.seg]])} ml/s`;
  tip.innerHTML = `<b>${h.name}</b><div class="r">${SEG_LABEL[h.seg] || ''}</div><div class="n">${extra}</div>`;
  tip.hidden = false;
  const fw = field.clientWidth; tip.style.left = `${Math.min(h.x + 14, fw - 270)}px`; tip.style.top = `${h.y + 14}px`;
}
let downAt = null;
canvas.addEventListener('pointerdown', e => { downAt = [e.clientX, e.clientY]; });
canvas.addEventListener('pointerup', e => {
  if (!downAt || Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) > 5 || !meta) return;
  const h = pick(e); if (h && SEG_BED[h.seg]) openZoom(SEG_BED[h.seg]);
});

/* ---------------- phase ---------------- */
function phaseName() {
  const o = sim.open;
  if (o.av) return ['Ejection', 'Aortic valve open'];
  if (o.mv) return sim.ea > 0.15 ? ['Atrial systole', 'Atrial kick tops up the LV'] : sim.e > 0.02 && sim.tc < 0.2 ? ['Isovolumetric contraction', 'Mitral closing'] : ['Ventricular filling', 'Mitral valve open'];
  return sim.e > 0.02 && sim.P.lv < sim.P.ao && sim.tc < 0.2 ? ['Isovolumetric contraction', 'All valves closed'] : ['Isovolumetric relaxation', 'All valves closed'];
}

/* ---------------- loop ---------------- */
let playing = !matchMedia('(prefers-reduced-motion: reduce)').matches, speed = 1;
function setPlayBtn() { const b = $('#bPlay'); b.textContent = playing ? 'Pause' : 'Play'; b.setAttribute('aria-pressed', playing); }
$('#bPlay').addEventListener('click', () => { if (SCRUB.on) { SCRUB.wasPlaying = true; endScrub(); return; } playing = !playing; setPlayBtn(); });
$$('[data-speed]').forEach(b => b.addEventListener('click', () => setSpeed(+b.dataset.speed)));
$('#bSkip').addEventListener('click', () => { sim.run(15, DT); swLast = null; });
if (!playing) { $('#bPlay').textContent = 'Play'; $('#bPlay').setAttribute('aria-pressed', 'false'); }
sim.onBeat = s => { renderVitals(s); renderFx(s); drawGraphs(); drawZoomText(); renderEnv(s); };

function resize() {
  const r = field.getBoundingClientRect(); renderer.setSize(r.width, r.height, false); camera.aspect = r.width / Math.max(1, r.height); camera.updateProjectionMatrix(); sizeSweep();
}
new ResizeObserver(resize).observe(field);
let last = performance.now(), phaseTxt = '', simAcc = 0, ftAvg = 16, ftN = 0;
function adaptResolution(ms) {
  ftAvg += (ms - ftAvg) * 0.05; if (++ftN < 90) return; ftN = 0;
  const want = ftAvg > 24 ? dpr - 0.25 : ftAvg < 13 ? dpr + 0.25 : dpr;
  const nd = Math.min(DPR_MAX, Math.max(0.75, want)); if (nd !== dpr) { dpr = nd; renderer.setPixelRatio(dpr); resize(); }
}
function frame(now) {
  const raw = now - last, dt = Math.min(0.05, raw / 1000); last = now; rdt = dt; adaptResolution(raw);
  if (playing) {
    const simDt = dt * speed; simAcc += simDt; let n = Math.floor(simAcc / DT); simAcc -= n * DT;
    for (let i = 0; i < n; i++) sim.step(DT);
    sweepSample(simDt); uTime.value += dt;
    const [ph, sub] = phaseName(); if (ph !== phaseTxt) { phaseTxt = ph; $('#phase span').textContent = ph; $('#phase').title = sub; }
  }
  if (hlNow.size && performance.now() - hlHold > 4000 && !document.querySelector('.ctl input:active')) hlNow.clear();
  if (camAnim) { camAnim.k = Math.min(1, camAnim.k + dt * 1.6); const e = camAnim.k * camAnim.k * (3 - 2 * camAnim.k); camera.position.lerpVectors(camAnim.p0, camAnim.p1, e); controls3.target.lerpVectors(camAnim.t0, camAnim.t1, e); if (camAnim.k >= 1) camAnim = null; }
  controls3.update();
  update3D(playing ? dt * speed : 0);
  if (SCRUB.on) updateValves(1); // valves jump straight to their position at the scrubbed instant
  drawZoom(playing ? dt * speed : 0);
  renderer.render(scene, camera);
  updateLabels(); hoverTip(); drawSchema();
  requestAnimationFrame(frame);
}

buildControls(); buildFx(); buildMap(); buildTour();
renderVitals(sim.stats); renderFx(sim.stats);
try { const t = localStorage.getItem('ps-tab'); if (t && $('#' + t)) showTab(t); } catch (e) {}
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { drawGraphs(); sizeSweep(); });
new MutationObserver(() => { drawGraphs(); sizeSweep(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
resize();
requestAnimationFrame(frame);
