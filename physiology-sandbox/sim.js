// Closed-loop lumped circulation: 4 time-varying-elastance chambers, aortic root,
// systemic arteries, 7 parallel arteriolar beds, 3 venous pools, central veins,
// pulmonary arteries and veins. Units: ml, mmHg, s. Values tuned to Guyton & Hall
// resting adult (MAP ~93, CO ~5.5 L/min, CVP ~3, PCWP ~8).

export const BEDS = [
  // auto: [lower, upper] limit of the autoregulatory plateau (mmHg), time constant (s) — Guyton ch. 17, 27, 62
  { id: 'brain', name: 'Brain', frac: 0.14, drain: 'up', seg: 'a_head', reflex: 0.15, auto: [60, 140, 8] },
  { id: 'coronary', name: 'Heart muscle', frac: 0.045, drain: 'ra', seg: 'a_coronary', reflex: 0.1, auto: [60, 140, 5] },
  { id: 'spl', name: 'Gut & liver', frac: 0.25, drain: 'spl', seg: 'a_spl', reflex: 1 },
  { id: 'renal', name: 'Kidneys', frac: 0.22, drain: 'low', seg: 'a_renal', reflex: 1, auto: [80, 170, 6] },
  { id: 'arm', name: 'Arms', frac: 0.08, drain: 'up', seg: 'a_arm', reflex: 1 },
  { id: 'leg', name: 'Legs', frac: 0.15, drain: 'low', seg: 'a_leg', reflex: 1 },
  { id: 'trunk', name: 'Trunk & skin', frac: 0.115, drain: 'low', seg: 'a_trunk', reflex: 1 },
];
export const VEINS = [
  { id: 'up', name: 'Head & arm veins', C: 18, V0: 360, R: 0.15, segs: ['vn_head', 'vn_arm'] },
  { id: 'spl', name: 'Splanchnic veins', C: 80, V0: 1150, R: 0.17, segs: ['vn_spl'] },
  { id: 'low', name: 'Leg & trunk veins', C: 50, V0: 680, R: 0.067, segs: ['vn_leg', 'vn_renal', 'vn_trunk'] },
];

const TPR0 = 0.94; // mmHg·s/ml

export function defaultParams() {
  return {
    hr: 72,
    contr: 1, // scales LV and RV end-systolic elastance
    lv: { Ees: 2.4, V0: 10, A: 0.36, B: 0.026 },
    rv: { Ees: 0.55, V0: 15, A: 0.3, B: 0.024 },
    la: { Emax: 0.55, Emin: 0.1, V0: 15 }, // atrial kick ≈ 20 % of filling, E/A ≈ 1.6
    ra: { Emax: 0.47, Emin: 0.08, V0: 15 },
    // valves: viscous R, inertance L (mmHg·s²/ml), Bernoulli loss K (stenosis), backflow R when leaky,
    // and the reverse flow (ml/s) at which the cusps snap shut, which gives the dicrotic notch
    valves: {
      mv: { R: 0.003, L: 0.00025, K: 0, Rb: 0, snap: 25, atrio: true },
      av: { R: 0.003, L: 0.0004, K: 0, Rb: 0, snap: 160 },
      tv: { R: 0.0025, L: 0.0002, K: 0, Rb: 0, snap: 20, atrio: true },
      pv: { R: 0.002, L: 0.0005, K: 0, Rb: 0, snap: 90 },
    },
    Zc: 0.045, Zp: 0.015, // characteristic impedance of aortic / pulmonary root
    sa: { C: 1.9, V0: 650 }, artCompl: 1,
    bedR: Object.fromEntries(BEDS.map(b => [b.id, TPR0 / b.frac])),
    bedRadius: Object.fromEntries(BEDS.map(b => [b.id, 1])), // arteriolar radius, 1 = baseline
    veinRadius: Object.fromEntries(VEINS.map(v => [v.id, 1])),
    cv: { C: 6, V0: 90 }, Rcv: 0.008,
    pa: { C: 3.5, V0: 120 }, Rpulm: 0.07,
    pv: { C: 9, V0: 280 }, Rpvla: 0.006,
    baroreflex: true, symp: 0, autoreg: true,
    // multipliers from drugs / disease, relaxed toward target
    mod: { hr: 1, contr: 1, Rsys: 1, Rcor: 1, venV0: 1, Rpulm: 1, lvA: 1, lvB: 1, artC: 1, paC: 1, hrGain: 1 },
    // surroundings (temperature, altitude, posture): per-bed resistance and per-pool unstressed-volume
    // multipliers, blood viscosity, direct rate / contractility / activation-time effects, extra sympathetic
    // drive. `env` relaxes toward `envT` (thermal and postural responses take seconds to minutes).
    env: envNeutral(), envT: envNeutral(),
  };
}

export function envNeutral() {
  return { bed: Object.fromEntries(BEDS.map(b => [b.id, 1])), ven: Object.fromEntries(VEINS.map(v => [v.id, 1])), visc: 1, hr: 1, contr: 1, tAct: 1, Rpulm: 1, symp: 0 };
}

export class Circulation {
  constructor() {
    this.p = defaultParams();
    this.modTarget = { ...this.p.mod };
    this.t = 0; this.tc = 0; this.T = 60 / this.p.hr; this.beat = 0;
    this.eff = { hr: 1, contr: 1, R: 1, venV0: 1 }; // reflex effector state
    this.auto = Object.fromEntries(BEDS.map(b => [b.id, 1])); this.autoRef = null; // local autoregulation (resistance multipliers)
    this.mapF = 93; this.set = 93;
    this.infusion = 0; this.infusionLeft = 0; this.bloodLost = 0;
    const V = this.V = {};
    V.lv = 120; V.rv = 125; V.la = 55; V.ra = 50;
    V.sa = 650 + 1.9 * 93;
    for (const v of VEINS) V[v.id] = v.V0 + v.C * 5.3;
    V.cv = 90 + 6 * 4; V.pa = 120 + 3.5 * 15; V.pv = 280 + 9 * 8;
    this.P = {}; this.Q = { mv: 0, av: 0, tv: 0, pvv: 0 }; this.e = 0; this.ea = 0;
    this.open = { mv: true, av: false, tv: true, pv: false }; this.qpk = { mv: 0, av: 0, tv: 0, pv: 0 };
    this.wig = []; this.wigLast = []; this.frames = []; this.framesLast = []; this.events = {}; this.eventsLast = {}; this.wigAcc = 0;
    this.hist = []; this.loop = []; this.curLoop = [];
    this.acc = this.newAcc(); this.stats = null;
    this.onBeat = null;
  }
  newAcc() { return { n: 0, sa: 0, ra: 0, la: 0, pa: 0, cv: 0, qav: 0, qcv: 0, qpulm: 0, beds: Object.fromEntries(BEDS.map(b => [b.id, 0])), veins: Object.fromEntries(VEINS.map(v => [v.id, 0])), sbp: -1e9, dbp: 1e9, edv: this.V ? this.V.lv : 0, esv: 1e9, lvedp: this.P ? this.P.lv || 0 : 0, pas: -1e9, pad: 1e9, qaoPk: 0, vol: {} }; }

  total() { return Object.values(this.V).reduce((a, b) => a + b, 0); }

  // effective parameters including reflex and modifiers
  activation(tc, T) {
    // double-Hill activation (after Stergiopulos et al. 1996): fast isovolumetric rise, plateau,
    // then relaxation (exponent 18 gives an IVR of ~80 ms). Time constants shorten with rate as √T, as electrical systole (QT) does.
    const k = Math.sqrt(T / 0.833) * this.p.env.tAct, t1 = 0.224 * k, t2 = 0.35 * k, m1 = 1.32, m2 = 18;
    const raw = t => { const a = (t / t1) ** m1, b = (t / t2) ** m2; return a / (1 + a) / (1 + b); };
    if (this._ek !== k) { let mx = 0; for (let t = 0; t < 1.2 * k; t += 0.002) mx = Math.max(mx, raw(t)); this._ek = k; this._emax = mx; }
    const e = Math.min(1, raw(tc) / this._emax), Ts = t2 * 1.12;
    const Ta = 0.11; let u = tc - (T - 0.16); if (u < 0) u += T;
    const ea = u < Ta ? 0.5 * (1 - Math.cos(2 * Math.PI * u / Ta)) : 0;
    return [e, ea, Ts];
  }

  step(dt) {
    const p = this.p, m = p.mod, V = this.V, P = this.P, Q = this.Q, eff = this.eff;
    const [e, ea] = this.activation(this.tc, this.T); this.e = e; this.ea = ea;
    const env = p.env, contr = p.contr * m.contr * eff.contr * env.contr;
    const lvA = p.lv.A * m.lvA, lvB = p.lv.B * m.lvB;
    P.lv = e * p.lv.Ees * contr * (V.lv - p.lv.V0) + (1 - e) * lvA * (Math.exp(lvB * (V.lv - p.lv.V0)) - 1);
    P.rv = e * p.rv.Ees * contr * (V.rv - p.rv.V0) + (1 - e) * p.rv.A * (Math.exp(p.rv.B * (V.rv - p.rv.V0)) - 1);
    // atrial waves: c = closed AV leaflets bulge back into the atrium as the ventricle pressurises;
    // x = the AV ring descends during ejection and lengthens the atrium. Both act on atrial pressure
    // through an effective volume (ml) rather than moving blood.
    // leaflet bulge builds during isovolumetric contraction and fades once ejection begins
    const bulge = (key, avOpen, avOk, pv, pa) => {
      const tgt = !this.open[avOpen] && !avOk ? Math.min(12, 0.2 * Math.max(0, pv - pa)) : 0;
      const cur = this[key] || 0; this[key] = cur + (tgt - cur) * Math.min(1, dt / (tgt > cur ? 0.008 : 0.06)); return this[key];
    };
    const kx = 0.4;
    const fxL = bulge('_bL', 'mv', this.events.avOpen !== undefined, P.lv, P.la || 0) - kx * Math.max(0, this.acc.edv - V.lv);
    const fxR = bulge('_bR', 'tv', this.events.pvOpen !== undefined, P.rv, P.ra || 0) - kx * Math.max(0, (this.rvEdv || V.rv) - V.rv);
    P.la = (p.la.Emin + ea * (p.la.Emax - p.la.Emin)) * (V.la + fxL - p.la.V0);
    P.ra = (p.ra.Emin + ea * (p.ra.Emax - p.ra.Emin)) * (V.ra + fxR - p.ra.V0);
    const artC = p.artCompl * m.artC;
    P.sa = (V.sa - p.sa.V0) / (p.sa.C * artC);
    const venV0 = m.venV0 * eff.venV0;
    // below their unstressed volume veins collapse: transmural pressure stays near zero instead of going strongly negative
    const tm = (x, C) => x >= 0 ? x / C : x / (C * 10);
    for (const v of VEINS) { const r = p.veinRadius[v.id]; P[v.id] = tm(V[v.id] - v.V0 * r * r * venV0 * env.ven[v.id], v.C * r * r); }
    P.cv = tm(V.cv - p.cv.V0, p.cv.C);
    const paC = p.pa.C * m.paC;
    P.pa = (V.pa - p.pa.V0) / paC; P.pv = (V.pv - p.pv.V0) / p.pv.C;

    // inertial valves: open when the upstream pressure exceeds downstream, flow carries on by
    // momentum after the gradient reverses, and the valve shuts once reverse flow reaches `snap`
    const valve = (k, qk, pu, pd, Zd) => {
      const v = p.valves[k]; let q = Q[qk];
      if (this.open[k]) {
        const drive = pu - pd - v.K * q * Math.abs(q);
        q = (q + dt / v.L * drive) / (1 + dt * (v.R + Zd) / v.L);
        if (q > this.qpk[k]) this.qpk[k] = q;
        // closing backflow scales with the beat's forward flow (a weak beat cannot push a big reflux)
        const snap = v.snap * Math.min(1, Math.max(0.1, this.qpk[k] / 400));
        if (v.atrio && this.e < 0.02 && q < 0) q = 0; // AV leaflets float open in diastasis; they shut when the ventricle contracts
        else if (q < -snap) { this.open[k] = false; q = 0; this.mark(k + 'Close'); this.qpk[k] = 0; }
      } else if (pu > pd) { this.open[k] = true; this.mark(k + 'Open'); q = Math.max(q, 0); }
      else q = v.Rb > 0 ? (pu - pd) / (v.Rb + Zd) : 0; // regurgitant leak through a closed valve
      Q[qk] = q;
    };
    valve('mv', 'mv', P.la, P.lv, 0);
    valve('av', 'av', P.lv, P.sa, p.Zc);
    valve('tv', 'tv', P.ra, P.rv, 0);
    valve('pv', 'pvv', P.rv, P.pa, p.Zp);
    P.ao = P.sa + p.Zc * Q.av;       // aortic root pressure: windkessel + characteristic impedance
    P.par = P.pa + p.Zp * Q.pvv;     // pulmonary trunk pressure
    Q.c = Q.av;
    let qUp = 0, qSpl = 0, qLow = 0, qRA = 0; Q.beds = Q.beds || {};
    for (const b of BEDS) {
      const refl = 1 + (eff.R - 1) * b.reflex;
      const mR = b.id === 'coronary' ? m.Rcor : (b.id === 'brain' ? 1 + (m.Rsys - 1) * 0.15 : m.Rsys);
      const R = p.bedR[b.id] * refl * mR * this.auto[b.id] * env.bed[b.id] * env.visc / Math.pow(p.bedRadius[b.id], 4);
      const pd = b.drain === 'ra' ? P.ra : P[b.drain];
      const q = (P.sa - pd) / R; Q.beds[b.id] = q;
      if (b.drain === 'up') qUp += q; else if (b.drain === 'spl') qSpl += q; else if (b.drain === 'low') qLow += q; else qRA += q;
    }
    Q.veins = Q.veins || {};
    for (const v of VEINS) Q.veins[v.id] = (P[v.id] - P.cv) / v.R;
    Q.cv = (P.cv - P.ra) / p.Rcv;
    Q.pulm = (P.pa - P.pv) / (p.Rpulm * m.Rpulm * env.Rpulm * env.visc);
    Q.pvla = (P.pv - P.la) / p.Rpvla;
    Q.cor = qRA;

    // infusion / haemorrhage spread over venous pools by volume
    let inf = 0;
    if (this.infusionLeft !== 0) {
      inf = Math.sign(this.infusionLeft) * Math.min(Math.abs(this.infusion) * dt, Math.abs(this.infusionLeft));
      this.infusionLeft -= inf; if (Math.abs(this.infusionLeft) < 1e-6) this.infusionLeft = 0;
    }
    const vsum = V.up + V.spl + V.low;

    V.lv += dt * (Q.mv - Q.av);
    V.sa += dt * (Q.av - qUp - qSpl - qLow - qRA);
    V.up += dt * (qUp - Q.veins.up) + inf * V.up / vsum;
    V.spl += dt * (qSpl - Q.veins.spl) + inf * V.spl / vsum;
    V.low += dt * (qLow - Q.veins.low) + inf * V.low / vsum;
    V.cv += dt * (Q.veins.up + Q.veins.spl + Q.veins.low - Q.cv);
    V.ra += dt * (Q.cv + qRA - Q.tv);
    V.rv += dt * (Q.tv - Q.pvv);
    V.pa += dt * (Q.pvv - Q.pulm);
    V.pv += dt * (Q.pulm - Q.pvla);
    V.la += dt * (Q.pvla - Q.mv);
    for (const k in V) if (V[k] < 1) V[k] = 1;

    // modifiers relax toward target (drug onset ~6 s)
    const km = dt / 6;
    for (const k in m) m[k] += (this.modTarget[k] - m[k]) * km;
    const ke = dt / 12, eT = p.envT;
    for (const k of ['visc', 'hr', 'contr', 'tAct', 'Rpulm', 'symp']) env[k] += (eT[k] - env[k]) * ke;
    for (const k in env.bed) env.bed[k] += (eT.bed[k] - env.bed[k]) * ke;
    for (const k in env.ven) env.ven[k] += (eT.ven[k] - env.ven[k]) * ke;

    // baroreflex
    this.mapF += (P.sa - this.mapF) * dt / 1.5;
    const sBR = p.baroreflex ? Math.tanh((this.set - this.mapF) / 12) : 0;
    const S = Math.max(-1, Math.min(1.2, sBR + p.symp + env.symp));
    this.S = S;
    eff.hr += (1 + 0.5 * S * (S < 0 ? 1 : m.hrGain) - eff.hr) * dt / 2;
    eff.contr += (1 + 0.35 * S - eff.contr) * dt / 4;
    eff.R += (1 + 0.6 * S - eff.R) * dt / 5;
    eff.venV0 += (1 - 0.15 * S - eff.venV0) * dt / 10;
    // local autoregulation: within its plateau a bed's resistance follows perfusion pressure, so its flow
    // stays nearly constant; outside the plateau flow follows pressure. Coronary flow also tracks
    // myocardial O2 demand (rate–pressure product).
    if (this.autoRef) for (const b of BEDS) { if (!b.auto) continue;
      const [lo, hi, tau] = b.auto; let tgt = p.autoreg ? Math.min(hi, Math.max(lo, this.mapF)) / this.autoRef.map : 1;
      if (b.id === 'coronary' && p.autoreg) tgt /= Math.pow(Math.max(0.3, (60 / this.T) * this.mapF / this.autoRef.rpp), 0.8);
      this.auto[b.id] += (tgt - this.auto[b.id]) * dt / tau; }

    // beat accumulation
    const a = this.acc;
    a.n++; a.sa += P.sa; a.ra += P.ra; a.la += P.la; a.pa += P.pa; a.cv += P.cv;
    a.qav += Q.av; a.qcv += Q.cv + qRA; a.qpulm += Q.pulm;
    for (const b of BEDS) a.beds[b.id] += Q.beds[b.id];
    for (const v of VEINS) a.veins[v.id] += Q.veins[v.id];
    if (P.ao > a.sbp) a.sbp = P.ao; if (P.ao < a.dbp) a.dbp = P.ao;
    if (P.par > a.pas) a.pas = P.par; if (P.par < a.pad) a.pad = P.par;
    if (P.lv > (a.lvsp || 0)) a.lvsp = P.lv;
    if (V.lv < a.esv) a.esv = V.lv;
    if (Q.c > a.qaoPk) a.qaoPk = Q.c;
    this.curLoop.push(V.lv, P.lv);
    this.wigAcc += dt; if (this.wigAcc >= 0.002) { this.wigAcc = 0; this.wig.push(this.tc, P.lv, P.ao, P.la, V.lv, P.ra, P.rv, P.par);
      // full state for scrubbing through the beat in the 3D view
      this.frames.push({ tc: this.tc, e: this.e, ea: this.ea, V: { ...V }, P: { ...P }, Q: { ...Q, beds: { ...Q.beds }, veins: { ...Q.veins } }, open: { ...this.open } }); }

    this.t += dt; this.tc += dt;
    if (this.tc >= this.T) this.endBeat();
  }

  endBeat() {
    const a = this.acc, n = a.n, p = this.p;
    const hr = 60 / this.T;
    const sv = a.edv - a.esv, fwd = a.qav / n * this.T;
    const s = {
      hr, edv: a.edv, esv: a.esv, sv, fsv: fwd, ef: sv / a.edv, lvedp: a.lvedp,
      sbp: a.sbp, dbp: a.dbp, map: a.sa / n, rap: a.ra / n, pcwp: a.la / n, cvp: a.cv / n,
      pam: a.pa / n, pas: a.pas, pad: a.pad,
      co: a.qav / n * 60 / 1000, vr: a.qcv / n * 60 / 1000, qpulm: a.qpulm / n * 60 / 1000,
      beds: Object.fromEntries(BEDS.map(b => [b.id, a.beds[b.id] / n * 60])),
      veins: Object.fromEntries(VEINS.map(v => [v.id, a.veins[v.id] / n * 60])),
      vol: this.total(), S: this.S, qaoPk: a.qaoPk, lvsp: a.lvsp,
    };
    s.pp = s.sbp - s.dbp;
    s.tpr = (s.map - s.rap) / s.co; // mmHg·min/L
    s.pmsf = this.pmsf();
    s.rvr = (s.pmsf - s.rap) / s.vr;
    s.cart = this.p.sa.C * this.p.artCompl * this.p.mod.artC;
    s.ees = p.lv.Ees * p.contr * p.mod.contr * this.eff.contr * p.env.contr;
    s.lvA = p.lv.A * p.mod.lvA; s.lvB = p.lv.B * p.mod.lvB;
    s.rvEdv = this.rvEdv || 0;
    this.stats = s;
    this.loop = this.curLoop; this.curLoop = [];
    this.wigLast = this.wig; this.wig = []; this.framesLast = this.frames; this.frames = []; this.eventsLast = { ...this.events, T: this.T }; this.events = {};
    this.beat++;
    this.tc = 0;
    const hrNow = Math.max(20, Math.min(200, p.hr * p.mod.hr * this.eff.hr * p.env.hr));
    this.T = 60 / hrNow;
    this.acc = this.newAcc();
    this.acc.edv = this.V.lv; this.acc.lvedp = this.P.lv;
    this.rvEdv = this.V.rv;
    if (this.onBeat) this.onBeat(s);
  }

  // mean systemic filling pressure: stressed volume of systemic vessels / their compliance
  pmsf() {
    const p = this.p, m = p.mod, V = this.V, artC = p.artCompl * m.artC;
    let sv = (V.sa - p.sa.V0) + (V.cv - p.cv.V0);
    let C = p.sa.C * artC + p.cv.C;
    const venV0 = m.venV0 * this.eff.venV0;
    for (const v of VEINS) { const r = p.veinRadius[v.id]; sv += V[v.id] - v.V0 * r * r * venV0 * p.env.ven[v.id]; C += v.C * r * r; }
    return sv / C;
  }

  mark(name) { if (this.events[name] === undefined) this.events[name] = this.tc; }

  // call once at rest: the pressure and demand at which autoregulated beds hold their resting flow
  setAutoRef() { this.autoRef = { map: this.mapF, rpp: (60 / this.T) * this.mapF }; for (const k in this.auto) this.auto[k] = 1; }

  run(seconds, dt = 0.0004) { const n = Math.round(seconds / dt); for (let i = 0; i < n; i++) this.step(dt); }

  infuse(ml, overSeconds) { this.infusionLeft += ml; this.infusion = Math.abs(this.infusionLeft) / overSeconds; if (ml < 0) this.bloodLost -= ml; }
}

// ---- surroundings → body responses (Guyton & Hall ch. 74 body temperature, ch. 44 altitude, ch. 18–20 posture) ----
// Skin carries ~0.5 L/min at rest: part of the arm, leg and trunk beds. Its flow factor k multiplies that share.
export const SKIN_SHARE = { arm: 0.3, leg: 0.2, trunk: 0.35 };
const SPO2 = [[0, 98], [1500, 96], [3000, 90], [4500, 82], [6000, 71], [7000, 62]];
const lerpTab = (tab, x) => { if (x <= tab[0][0]) return tab[0][1]; for (let i = 1; i < tab.length; i++) if (x <= tab[i][0]) { const [x0, y0] = tab[i - 1], [x1, y1] = tab[i]; return y0 + (y1 - y0) * (x - x0) / (x1 - x0); } return tab.at(-1)[1]; };
export function environment({ air = 24, core = 37, alt = 0, posture = 'supine' } = {}) {
  const e = envNeutral(), cl = (x, a, b) => Math.min(b, Math.max(a, x));
  // thermal load: > 0 the body must lose heat, < 0 it must keep it (skin and core temperature both feed the hypothalamus)
  const D = 0.07 * (air - 24) + 1.2 * (core - 37);
  const heat = Math.max(0, Math.tanh(D / 1.5)), cold = Math.max(0, Math.tanh(-D / 1.5));
  // skin arterioles: wide open in heat (sympathetic withdrawal + active vasodilation), nearly shut in cold
  const k = D >= 0 ? 1 + 5 * Math.tanh(D / 1.5) : Math.max(0.08, Math.exp(1.5 * D));
  // shivering starts once heat must be kept hard (cold air, or core below ~36.3 °C), and needs muscle flow
  const shiver = cl((-D - 0.8) / 1.5, 0, 1) * (core > 31 ? 1 : 0.3);
  // whole-body metabolism: Q10 ≈ 2.5 (≈ 10 %/°C core), plus shivering (up to ×3)
  const metab = (1 + 0.1 * (core - 37)) * (1 + 2 * shiver);
  for (const b of BEDS) {
    const s = SKIN_SHARE[b.id] || 0;
    let R = 1 / (1 - s + s * k); // skin part changes, the rest of the bed stays
    if (['arm', 'leg', 'trunk'].includes(b.id)) R *= 1 / (1 + 1.6 * shiver * (1 - s)); // shivering muscle dilates
    if (b.id === 'spl' || b.id === 'renal') R *= 1 + 0.4 * heat; // heat: gut and kidney flow is given up to feed the skin
    R /= Math.pow(Math.max(0.4, 1 + 0.1 * (core - 37)), 0.8); // metabolic vasodilation follows tissue O₂ use
    e.bed[b.id] = R;
  }
  // skin veins (venous plexus) fill in heat and empty in cold
  e.ven.up = 1 + 0.25 * heat - 0.12 * cold; e.ven.low = 1 + 0.25 * heat - 0.1 * cold;
  // core temperature acts on the SA node directly (~+7 beats/min per °C of fever, before the reflexes add theirs; slows ~6 %/°C when cold)
  e.hr = core >= 37 ? 1 + 0.09 * (core - 37) : Math.max(0.3, 1 + 0.065 * (core - 37));
  e.contr = core >= 37 ? 1 + 0.03 * (core - 37) : Math.max(0.5, 1 + 0.045 * (core - 37));
  e.tAct = core >= 37 ? 1 : 1 + 0.035 * (37 - core); // cold myocardium contracts and relaxes slowly (long QT)
  e.visc = Math.exp(-0.022 * (core - 37)); // blood thickens ~2 %/°C as it cools
  e.symp = 0.25 * cold + 0.15 * shiver; // cold pressor response
  e.hr *= 1 + 0.08 * shiver;
  // altitude: low inspired O₂ → carotid-body chemoreflex (sympathetic), hypoxic pulmonary vasoconstriction,
  // local hypoxic vasodilation in the body (acute, first hours; no acclimatisation)
  const spo2 = lerpTab(SPO2, alt), hyp = cl((96 - spo2) / 26, 0, 1.4);
  e.symp += 0.4 * hyp; e.hr *= 1 + 0.3 * hyp; e.contr *= 1 + 0.1 * hyp; e.Rpulm *= 1 + 2 * hyp; for (const b of BEDS) e.bed[b.id] *= 1 - 0.12 * hyp;
  // posture: standing lets ~500 ml pool in the leg veins; raising the legs pushes ~300 ml back to the chest
  if (posture === 'stand') e.ven.low *= 1 + 520 / 680;
  if (posture === 'legs') e.ven.low *= 1 - 300 / 680;
  const sweat = D > 0.3 ? Math.min(1.8, 0.75 * (D - 0.3)) : 0; // L/h
  return { env: e, info: { D, k, shiver, metab, spo2, sweat, heat, cold } };
}
