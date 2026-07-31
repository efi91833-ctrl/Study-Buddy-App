/* Headless smoke test for Study Buddy.
 *
 * The app's own <script type="text/babel"> block is far too slow to transpile
 * inside jsdom, so this pre-compiles it with @babel/core and runs the result in
 * a jsdom window that already has React, the question banks, and progress.js.
 * A test hook at the end exports the internals we want to assert on.
 */
const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const { JSDOM, VirtualConsole } = require('jsdom');

const ROOT = path.resolve(__dirname, '..');
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');

// ── extract + compile the app ───────────────────────────────────────────────
const html = read('index.html');
const OPEN = '<script type="text/babel">';
const i = html.indexOf(OPEN);
const j = html.indexOf('</scr' + 'ipt>', i);
const jsx = html.slice(i + OPEN.length, j);

console.log('compiling app (' + Math.round(jsx.length / 1024) + ' KB of JSX)...');
const t0 = Date.now();
let code;
try {
  code = babel.transformSync(jsx, {
    presets: [[require('@babel/preset-react'), { runtime: 'classic' }]],
    configFile: false, babelrc: false, sourceType: 'script', compact: false,
  }).code;
} catch (e) {
  console.error('COMPILE FAILED:', e.message);
  process.exit(1);
}
console.log('compiled in ' + ((Date.now() - t0) / 1000).toFixed(1) + 's\n');

// ── build a window ──────────────────────────────────────────────────────────
const errors = [];
const vc = new VirtualConsole();
vc.on('jsdomError', e => errors.push('jsdomError: ' + (e.message || e)));
vc.on('error', (...a) => errors.push('console.error: ' + a.join(' ').slice(0, 200)));

const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
  url: 'http://localhost/', runScripts: 'outside-only', pretendToBeVisual: true, virtualConsole: vc,
});
const w = dom.window;
w.fetch = () => Promise.reject(new Error('offline in test'));
// jsdom ships no IndexedDB; the book shelf and photo store use it. Stub it so
// those effects fail quietly instead of taking down the test process.
w.indexedDB = { open: () => ({ onupgradeneeded: null, onsuccess: null, onerror: null }) };
w.addEventListener('unhandledrejection', () => {});
process.on('unhandledRejection', () => {});

function run(src, label) {
  try { w.eval(src); } catch (e) { console.error('EVAL FAILED in ' + label + ': ' + e.message); process.exit(1); }
}

run(read('vendor/react.min.js'), 'react');
run(read('vendor/react-dom.min.js'), 'react-dom');
run(read('progress.js'), 'progress.js');
[
  'histology-questions.js', 'anatomy-questions.js', 'embryo-questions.js',
  'czech-questions.js', 'medinfo-questions.js', 'czechQuestionBanks.js',
  'muscle-bank.js', 'artery-game.js', 'artery-assembly-data.js', 'timeline-data.js',
  'dissection-questions.js', 'brain-atlas-data.js', 'brain-labels.js',
  'brain-mri-quiz-data.js', 'vein-formation-data.js', 'histology-slides-data.js',
  'histology-slide-ids.js', 'hematopoiesis-map-data.js',
].forEach(f => run(read(f), f));

// Expose the internals the test needs, then evaluate the app.
run(
  code + '\n;window.__test = { buildExam, poolFor, shuffleOptions, isCorrect, hasAnswer, ' +
  'QUESTION_BANK, dedupeByStem, sessionBreakdown, WEAK_FOCUS_SIZE, ' +
  'ExamScreen, ResultsBanner, WeakAreaCard, QuestionCard };',
  'app'
);

// ── assertions ──────────────────────────────────────────────────────────────
let pass = 0, fail = 0;
const check = (name, cond, extra) => {
  if (cond) { pass++; console.log('  PASS  ' + name); }
  else { fail++; console.log('  FAIL  ' + name + (extra ? '  -> ' + extra : '')); }
};

const T = w.__test;
const P = w.Progress;
const SUBJ = 'Histology';

console.log('=== boot ===');
check('app code evaluated', !!T);
check('progress module present', !!P);
check('question banks loaded', (w.histoExtraExams || []).length > 0,
      'exams=' + (w.histoExtraExams || []).length);

console.log('\n=== progress module ===');
P.reset();
const qA = { id: 'x-1', question: 'What is the mode of 1,1,2?', topic: 'Stats', subtopic: 'Mode' };
const qB = { id: 'x-2', question: 'Define sensitivity.', topic: 'Stats', subtopic: 'Sensitivity' };

check('starts empty', P.summary('T').attempts === 0);
P.record('T', qA, true);
check('records a correct answer', P.summary('T').correct === 1);
check('one correct answer masters the question', P.isMastered('T', qA));
[false, false, false].forEach(() => P.record('T', qB, false));
check('repeated wrong answers do not master', !P.isMastered('T', qB));
check('weak subtopic detected', P.weakAreas('T').some(g => g.name === 'Sensitivity'));
check('strong subtopic not flagged weak', !P.weakAreas('T').some(g => g.name === 'Mode'));
check('weak question outweighs mastered', P.weightFor('T', qB) > P.weightFor('T', qA),
      P.weightFor('T', qB).toFixed(2) + ' vs ' + P.weightFor('T', qA).toFixed(2));
check('progress survives an id change', P.isMastered('T', Object.assign({}, qA, { id: 'zzz' })));
check('a different stem is a different question',
      !P.isMastered('T', Object.assign({}, qA, { question: 'Something else?' })));
P.flush();
check('persisted to localStorage', !!JSON.parse(w.localStorage.getItem('sb_progress_v2') || '{}').subjects.T);

console.log('\n=== exam building ===');
P.reset();
const full = T.buildExam(SUBJ, 0);
check('curated exam returns questions', full.questions.length > 0, 'n=' + full.questions.length);
check('nothing hidden on a fresh subject', full.hidden === 0);
check('exam is not flagged exhausted', !full.exhausted);

// master half the exam, rebuild, and confirm those drop out
const half = full.questions.slice(0, Math.floor(full.questions.length / 2));
half.forEach(q => P.record(SUBJ, q, true));
const after = T.buildExam(SUBJ, 0);
check('mastered questions are excluded',
      after.questions.length === full.questions.length - half.length,
      `${after.questions.length} left of ${full.questions.length}, mastered ${half.length}`);
check('hidden count reported', after.hidden === half.length, 'hidden=' + after.hidden);
const stillThere = after.questions.filter(q => half.some(h => h.id === q.id));
check('no mastered question reappears', stillThere.length === 0, stillThere.length + ' leaked');

// master everything -> falls back to the full set rather than an empty screen
full.questions.forEach(q => P.record(SUBJ, q, true));
const exhausted = T.buildExam(SUBJ, 0);
check('all-mastered falls back to full set', exhausted.exhausted && exhausted.questions.length === full.questions.length);

console.log('\n=== weak-area targeting ===');
P.reset();
const pool = T.poolFor(SUBJ, 'weak');
check('subject pool is deduped', pool.length === T.dedupeByStem(pool).length);
/* Mark a decent slice of the pool as consistently wrong and the rest as
 * consistently right, then confirm the draw leans toward the wrong ones.
 * Averaged over several builds because the draw is deliberately random. */
const wrongSet = new Set(pool.filter((_, i) => i % 10 === 0).map(q => q.id));   // 10% of the pool
pool.forEach(q => {
  const bad = wrongSet.has(q.id);
  P.record(SUBJ, q, !bad);
  if (bad) P.record(SUBJ, q, false);
});
const weakExam = T.buildExam(SUBJ, 'weak');
check('weak exam is capped at WEAK_FOCUS_SIZE', weakExam.questions.length <= T.WEAK_FOCUS_SIZE,
      'n=' + weakExam.questions.length);
check('weak exam is flagged focused', weakExam.focused === true);

let drawn = 0, total = 0;
for (let k = 0; k < 20; k++) {
  const e = T.buildExam(SUBJ, 'weak');
  drawn += e.questions.filter(q => wrongSet.has(q.id)).length;
  total += e.questions.length;
}
const share = drawn / total;                       // observed
const chance = wrongSet.size / pool.length;        // ~0.10 if selection were uniform
check('weak questions dominate the draw', share > chance * 3,
      `${(share * 100).toFixed(0)}% of drawn questions were weak vs ${(chance * 100).toFixed(0)}% by chance`);
check('correctly-answered questions are largely excluded', share > 0.5,
      `${(share * 100).toFixed(0)}% weak`);

console.log('\n=== option shuffling ===');
const sample = { A: 'alpha', B: 'beta', C: 'gamma', D: 'delta' };
const orders = new Set();
for (let k = 0; k < 200; k++) orders.add(T.shuffleOptions(sample).map(o => o.letter).join(''));
check('order actually varies', orders.size > 1, orders.size + ' distinct orders seen');
const one = T.shuffleOptions(sample);
check('all options survive the shuffle', one.length === 4);
check('display labels are positional A-D', one.map(o => o.label).join('') === 'ABCD');
check('original letters preserved for scoring',
      one.map(o => o.letter).sort().join('') === 'ABCD');
check('text stays attached to its original letter',
      one.every(o => o.text === sample[o.letter]));

console.log('\n=== scoring ===');
const q = { id: 'z', question: 'q', correct: 'C', options: sample };
check('correct answer scores', T.isCorrect(q, 'C'));
check('wrong answer does not', !T.isCorrect(q, 'A'));
check('unanswered is not an answer', !T.hasAnswer(undefined) && !T.hasAnswer([]));
check('multi-select needs the exact set',
      T.isCorrect({ correct: ['A', 'B'] }, ['B', 'A']) && !T.isCorrect({ correct: ['A', 'B'] }, ['A']));

console.log('\n=== skipped questions are neutral ===');
P.reset();
const qs = T.buildExam(SUBJ, 0).questions.slice(0, 4);
const answers = {};
answers[qs[0].id] = qs[0].correct;                                  // right
answers[qs[1].id] = qs[1].correct === 'A' ? 'B' : 'A';              // wrong
// qs[2], qs[3] left unanswered
const res = P.recordExam(SUBJ, 'unit test', qs, answers, { isCorrect: T.isCorrect, hasAnswer: T.hasAnswer });
check('only answered questions counted', res.answered === 2, JSON.stringify(res));
check('skipped questions reported', res.skipped === 2);
check('skipped question has no record', !P.recordFor(SUBJ, qs[2]));
check('skipped question is not marked wrong', P.summary(SUBJ).attempts === 2);
check('exam history written', P.history(SUBJ).length === 1);

console.log('\n=== results breakdown ===');
const bd = T.sessionBreakdown(qs, answers);
check('breakdown covers answered questions only',
      bd.reduce((s, g) => s + g.n, 0) === 2, JSON.stringify(bd.map(g => [g.name, g.n])));
check('breakdown sorted worst first', bd.length < 2 || bd[0].accuracy <= bd[bd.length - 1].accuracy);

console.log('\n=== render ===');
/* Mount the real components so a JSX/prop mistake in the new UI shows up as a
 * failure here rather than a blank screen on the iPad. */
P.reset();
const R = w.React, RD = w.ReactDOM;
const mount = (el) => {
  const host = w.document.createElement('div');
  w.document.body.appendChild(host);
  const root = RD.createRoot(host);
  w.ReactDOM.flushSync ? w.ReactDOM.flushSync(() => root.render(el)) : root.render(el);
  return host;
};

let renderErr = null;
let examHost, bannerHost, weakHost;
try {
  examHost = mount(R.createElement(w.__test.ExamScreen, { subject: SUBJ, examIndex: 0, onBack() {} }));
} catch (e) { renderErr = e; }
// createRoot renders asynchronously; give React a tick before asserting.
setTimeout(() => {
  check('ExamScreen renders without throwing', !renderErr, renderErr && renderErr.message);
  const txt = examHost ? examHost.textContent : '';
  check('exam shows questions', /Question 1/.test(txt), txt.slice(0, 120));
  check('option letters render A-D', /A[\s\S]{0,400}B/.test(txt));

  let bErr = null;
  try {
    const qs = T.buildExam(SUBJ, 0).questions.slice(0, 3);
    const ans = {}; ans[qs[0].id] = qs[0].correct;
    P.recordExam(SUBJ, 'render test', qs, ans, { isCorrect: T.isCorrect, hasAnswer: T.hasAnswer });
    bannerHost = mount(R.createElement(w.__test.ResultsBanner, {
      questions: qs, answers: ans, subject: SUBJ,
      onNext() {}, onFocusWeak() {}, onHome() {},
    }));
    weakHost = mount(R.createElement(w.__test.WeakAreaCard, {
      subject: SUBJ, onSelectExam() {}, cardStyle: {},
    }));
  } catch (e) { bErr = e; }

  setTimeout(() => {
    check('ResultsBanner renders without throwing', !bErr, bErr && bErr.message);
    const bt = bannerHost ? bannerHost.textContent : '';
    check('results show a score', /%/.test(bt) && /answered correctly/.test(bt), bt.slice(0, 140));
    check('results offer weak-area practice', /Practise Weak Areas/.test(bt));
    check('skipped questions reported in results', /skipped/.test(bt), bt.slice(0, 200));
    const wt = weakHost ? weakHost.textContent : '';
    check('progress card shows stats', /overall/.test(wt) && /mastered/.test(wt), wt.slice(0, 160));
    finish();
  }, 100);
}, 100);

function finish() {
console.log('\n=== console errors ===');
if (!errors.length) console.log('  none');
else errors.slice(0, 8).forEach(e => console.log('  ' + e.slice(0, 240)));

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
}
