/* Standalone jsdom check for the AtlasRecall component:
 * extracts it from index.html, compiles with babel, mounts it in jsdom
 * with a stubbed fetch, and exercises reveal/next/scope-switch/again. */
const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const { JSDOM, VirtualConsole } = require('jsdom');

const ROOT = process.argv[2];
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');

const html = read('index.html');
const OPEN = '<script type="text/babel">';
const i = html.indexOf(OPEN);
const j = html.indexOf('</scr' + 'ipt>', i);
const jsx = html.slice(i + OPEN.length, j);

const code = babel.transformSync(jsx, {
  presets: [[require('@babel/preset-react'), { runtime: 'classic' }]],
  configFile: false, babelrc: false, sourceType: 'script', compact: false,
}).code;

const errors = [];
const vc = new VirtualConsole();
vc.on('jsdomError', e => errors.push('jsdomError: ' + (e.message || e)));
vc.on('error', (...a) => errors.push('console.error: ' + a.join(' ').slice(0, 300)));

const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
  url: 'http://localhost/', runScripts: 'outside-only', pretendToBeVisual: true, virtualConsole: vc,
});
const w = dom.window;

const appData = JSON.parse(read('atlas-recall/app_data.json'));
w.fetch = (url) => {
  if (String(url).includes('app_data.json')) {
    return Promise.resolve({ json: () => Promise.resolve(appData) });
  }
  return Promise.reject(new Error('offline in test: ' + url));
};
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

run(code + '\n;window.__AtlasRecall = AtlasRecall;', 'app');

w.eval(`
  window.__test_root = ReactDOM.createRoot(document.getElementById('root'));
  window.__test_root.render(React.createElement(window.__AtlasRecall, { onBack: () => { window.__backCalled = true; } }));
`);

function flush(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

(async () => {
  await flush(80); // let the fetch + effects settle
  const root = w.document.getElementById('root');
  let ok = true;
  function check(cond, label) {
    if (!cond) { ok = false; console.log('FAIL:', label); }
    else console.log('PASS:', label);
  }

  check(root.querySelector('.ar-shell') != null, 'AtlasRecall shell rendered');
  check(root.querySelector('.ar-find-num') != null, 'quiz prompt rendered after data load');
  check(root.querySelectorAll('.ar-chip').length === 4, 'scope chips rendered (All/Trunk/Upper/Lower)');

  const revealBtn = [...root.querySelectorAll('button')].find(b => b.textContent === 'Reveal answer');
  check(!!revealBtn, 'reveal button present');
  revealBtn.dispatchEvent(new w.Event('click', { bubbles: true }));
  await flush(20);
  check(root.querySelector('.ar-answer-term') != null, 'answer term shown after reveal');

  const nextBtn = [...root.querySelectorAll('button')].find(b => b.textContent === 'Next');
  check(!!nextBtn, 'next button present');
  nextBtn.dispatchEvent(new w.Event('click', { bubbles: true }));
  await flush(20);
  check(root.querySelector('.ar-answer-term') == null, 'answer hidden again after Next');

  const lowerChip = [...root.querySelectorAll('.ar-chip')].find(c => c.textContent === 'Lower Limb');
  check(!!lowerChip, 'Lower Limb chip present');
  lowerChip.dispatchEvent(new w.Event('click', { bubbles: true }));
  await flush(20);
  check(root.querySelector('.ar-shell') != null, 'still rendered after scope switch');
  check(root.querySelector('.ar-find-num') != null, 'quiz prompt still rendered after scope switch');

  // exercise "show again later" once
  const revealBtn2 = [...root.querySelectorAll('button')].find(b => b.textContent === 'Reveal answer');
  if (revealBtn2) {
    revealBtn2.dispatchEvent(new w.Event('click', { bubbles: true }));
    await flush(20);
    const againBtn = [...root.querySelectorAll('button')].find(b => b.textContent === 'Show again later');
    check(!!againBtn, 'show again later button present');
    againBtn.dispatchEvent(new w.Event('click', { bubbles: true }));
    await flush(20);
    check(root.querySelector('.ar-shell') != null, 'still rendered after Show again later');
  }

  // ── category bar ──
  const upperChip = [...root.querySelectorAll('.ar-chip')].find(c => c.textContent === 'Upper Limb');
  upperChip.dispatchEvent(new w.Event('click', { bubbles: true }));
  await flush(20);
  const catEls = () => [...root.querySelectorAll('.ar-cat')];
  check(catEls().length >= 6, 'category bar rendered under region chips (' + catEls().length + ')');
  const musclesCat = catEls().find(c => c.textContent.startsWith('Muscles'));
  check(!!musclesCat, 'Muscles category present');
  musclesCat.dispatchEvent(new w.Event('click', { bubbles: true }));
  await flush(20);
  const crumbText = () => (root.querySelector('.ar-crumb') || {}).textContent || '';
  check(/Upper Limb/.test(crumbText()) && /Muscles/.test(crumbText()), 'Muscles filter shows an Upper Limb muscle plate (' + crumbText() + ')');
  const optCount = root.querySelectorAll('.ar-jump option').length - 1;
  check(optCount === 14, 'page menu narrowed to 14 Upper Limb muscle plates (got ' + optCount + ')');

  // ── page focus + shuffle ──
  const before = crumbText();
  const focusBtn = [...root.querySelectorAll('button')].find(b => b.textContent === 'Focus this page');
  check(!!focusBtn, 'Focus this page button present');
  focusBtn.dispatchEvent(new w.Event('click', { bubbles: true }));
  await flush(20);
  check(root.querySelector('.ar-focusbar') != null, 'focus bar shown in page focus');
  const pageNum = (before.match(/p\. (\d+)/) || [])[1];
  let samePage = true;
  for (let k = 0; k < 12; k++) {
    if (!new RegExp('p\\. ' + pageNum + '\\b').test(crumbText())) samePage = false;
    const nb = [...root.querySelectorAll('button')].find(b => b.textContent === 'Reveal answer');
    nb.dispatchEvent(new w.Event('click', { bubbles: true })); await flush(5);
    const nx = [...root.querySelectorAll('button')].find(b => b.textContent === 'Next');
    nx.dispatchEvent(new w.Event('click', { bubbles: true })); await flush(5);
  }
  check(samePage, 'page focus stays on p. ' + pageNum + ' across 12 cards');
  const inOrder = [...root.querySelectorAll('.ar-seg-btn')].find(b => b.textContent === 'In order');
  inOrder.dispatchEvent(new w.Event('click', { bubbles: true }));
  await flush(20);
  check(/No\. 1$/.test(root.querySelector('.ar-find-num').textContent), 'In order starts at No. 1 (' + root.querySelector('.ar-find-num').textContent + ')');
  const mixed = [...root.querySelectorAll('.ar-seg-btn')].find(b => b.textContent === 'Mixed');
  mixed.dispatchEvent(new w.Event('click', { bubbles: true }));
  await flush(20);
  const reshuffle = [...root.querySelectorAll('button')].find(b => b.textContent === 'Reshuffle');
  check(!!reshuffle, 'Reshuffle button present in Mixed mode');
  reshuffle.dispatchEvent(new w.Event('click', { bubbles: true }));
  await flush(20);
  const exitBtn = [...root.querySelectorAll('button')].find(b => b.textContent === 'Exit page focus');
  exitBtn.dispatchEvent(new w.Event('click', { bubbles: true }));
  await flush(20);
  check(root.querySelector('.ar-focusbar') == null, 'focus bar gone after exit');
  check(crumbText() === before, 'exit returns to the same card as before focus');

  const backBtn = root.querySelector('.ar-back');
  backBtn.dispatchEvent(new w.Event('click', { bubbles: true }));
  await flush(20);
  check(w.__backCalled === true, 'onBack fired');

  check(errors.length === 0, 'no console/jsdom errors (' + errors.join(' | ') + ')');

  console.log(ok ? '\nALL CHECKS PASSED' : '\nSOME CHECKS FAILED');
  process.exit(ok ? 0 : 1);
})();
