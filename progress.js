/* progress.js — attempt history, mastery, and weak-area tracking for Study Buddy
 *
 * Loaded before index.html's app code. Exposes window.Progress.
 * Pure vanilla JS (no JSX) so it does not go through the in-browser Babel pass.
 *
 * Storage model (localStorage key STORAGE_KEY):
 *   { v: 2,
 *     subjects: {
 *       "Histology": {
 *         q: { "<key>": { a, c, s, t, tp, st } },   // per-question record
 *         h: [ { d, ex, n, c } ]                     // exam history (last HISTORY_LIMIT)
 *       }
 *     }
 *   }
 *   a  = attempts            c  = times correct
 *   s  = current streak      t  = last attempt timestamp (ms)
 *   tp = topic               st = subtopic
 *
 * Question keys are a hash of the question stem, NOT the question's id.
 * Ids in the banks are positional (tag('git1', arr) numbers by array index),
 * so inserting a question in the middle would silently reassign every id after
 * it and corrupt the history. Hashing the stem survives reordering.
 */
(function () {
  'use strict';

  // ── Tunables ────────────────────────────────────────────────────────────
  // How many consecutive correct answers retire a question from new exams.
  // 1 matches the "do not repeat questions I answered correctly" rule.
  var MASTERY_STREAK = 1;

  // Days after which a mastered question becomes eligible again, so nothing is
  // lost forever to a lucky guess. Set to 0 to disable resurfacing entirely.
  var RESURFACE_AFTER_DAYS = 30;

  // A subtopic needs at least this many attempts before its accuracy is
  // trusted enough to call it a weak area.
  var MIN_ATTEMPTS_FOR_WEAKNESS = 3;

  // Accuracy at or below this counts as weak.
  var WEAK_THRESHOLD = 0.7;

  var HISTORY_LIMIT = 200;
  var STORAGE_KEY = 'sb_progress_v2';
  var SCHEMA_VERSION = 2;

  // ── Storage ─────────────────────────────────────────────────────────────
  var cache = null;
  var listeners = [];

  function blank() {
    return { v: SCHEMA_VERSION, subjects: {} };
  }

  function load() {
    if (cache) return cache;
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        cache = migrateFromV1() || blank();
        return cache;
      }
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object' || !parsed.subjects) {
        cache = blank();
      } else {
        parsed.v = SCHEMA_VERSION;
        cache = parsed;
      }
    } catch (e) {
      console.warn('[progress] could not read storage, starting fresh:', e);
      cache = blank();
    }
    return cache;
  }

  // v1 never shipped; this is here so a future bump has an obvious home.
  function migrateFromV1() {
    try {
      var old = localStorage.getItem('sb_progress_v1');
      if (!old) return null;
      var parsed = JSON.parse(old);
      if (!parsed || !parsed.subjects) return null;
      parsed.v = SCHEMA_VERSION;
      return parsed;
    } catch (e) {
      return null;
    }
  }

  var saveTimer = null;
  function save() {
    if (saveTimer) return;
    saveTimer = setTimeout(function () {
      saveTimer = null;
      flush();
    }, 250);
  }

  function flush() {
    if (!cache) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cache));
    } catch (e) {
      // Quota exceeded is the realistic failure here. Drop exam history first,
      // which is the only unbounded part, then retry once.
      console.warn('[progress] save failed, trimming history and retrying:', e);
      try {
        Object.keys(cache.subjects).forEach(function (s) {
          cache.subjects[s].h = (cache.subjects[s].h || []).slice(-20);
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cache));
      } catch (e2) {
        console.error('[progress] progress could NOT be saved:', e2);
        notify('error');
      }
    }
  }

  // Write immediately when the tab goes away, so a submit right before closing
  // is not lost inside the debounce window.
  window.addEventListener('pagehide', flush);
  window.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') flush();
  });

  function subjectStore(subject) {
    var db = load();
    if (!db.subjects[subject]) db.subjects[subject] = { q: {}, h: [] };
    if (!db.subjects[subject].q) db.subjects[subject].q = {};
    if (!db.subjects[subject].h) db.subjects[subject].h = [];
    return db.subjects[subject];
  }

  function notify(kind) {
    listeners.forEach(function (fn) {
      try { fn(kind); } catch (e) { /* a bad listener must not break recording */ }
    });
  }

  // ── Keys ────────────────────────────────────────────────────────────────
  // djb2, base36. Collisions across a few thousand stems are vanishingly rare
  // and the only cost of one would be two questions sharing a history row.
  function hash(str) {
    var h = 5381;
    for (var i = 0; i < str.length; i++) {
      h = ((h << 5) + h + str.charCodeAt(i)) | 0;
    }
    return (h >>> 0).toString(36);
  }

  function normalize(text) {
    return String(text || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  function keyFor(q) {
    if (!q) return null;
    var stem = normalize(q.question || q.prompt || q.text || '');
    if (stem) return 'h' + hash(stem);
    // Nothing to hash (image-only or malformed) — fall back to the id.
    return q.id ? 'i' + q.id : null;
  }

  // ── Recording ───────────────────────────────────────────────────────────
  function record(subject, q, wasCorrect) {
    var key = keyFor(q);
    if (!key) return;
    var store = subjectStore(subject);
    var rec = store.q[key];
    if (!rec) {
      rec = { a: 0, c: 0, s: 0, t: 0, tp: q.topic || '', st: q.subtopic || '' };
      store.q[key] = rec;
    }
    // Refresh labels in case the bank was re-tagged since the last attempt.
    if (q.topic) rec.tp = q.topic;
    if (q.subtopic) rec.st = q.subtopic;

    rec.a += 1;
    rec.t = Date.now();
    if (wasCorrect) {
      rec.c += 1;
      rec.s += 1;
    } else {
      rec.s = 0;
    }
    save();
  }

  /* Records a whole exam in one pass.
   * questions  — the array shown to the user
   * answers    — map of question id -> chosen letter(s)
   * opts.isCorrect(q, ans) -> bool
   * opts.hasAnswer(ans)    -> bool   (unanswered is NOT recorded as wrong)
   */
  function recordExam(subject, examName, questions, answers, opts) {
    var isCorrect = opts.isCorrect;
    var hasAnswer = opts.hasAnswer;
    var answered = 0, correct = 0;

    questions.forEach(function (q) {
      var ans = answers[q.id];
      if (!hasAnswer(ans)) return;      // skipped stays neutral, never penalized
      var ok = !!isCorrect(q, ans);
      answered += 1;
      if (ok) correct += 1;
      record(subject, q, ok);
    });

    var store = subjectStore(subject);
    store.h.push({ d: Date.now(), ex: examName || '', n: answered, c: correct });
    if (store.h.length > HISTORY_LIMIT) {
      store.h = store.h.slice(-HISTORY_LIMIT);
    }
    flush();
    notify('exam');
    return { answered: answered, correct: correct, skipped: questions.length - answered };
  }

  // ── Mastery ─────────────────────────────────────────────────────────────
  function isMastered(subject, q) {
    var rec = subjectStore(subject).q[keyFor(q)];
    if (!rec) return false;
    if (rec.s < MASTERY_STREAK) return false;
    if (RESURFACE_AFTER_DAYS > 0) {
      var ageDays = (Date.now() - rec.t) / 86400000;
      if (ageDays >= RESURFACE_AFTER_DAYS) return false;   // due for review again
    }
    return true;
  }

  function recordFor(subject, q) {
    return subjectStore(subject).q[keyFor(q)] || null;
  }

  // ── Aggregation ─────────────────────────────────────────────────────────
  /* Returns [{ name, topic, attempts, correct, accuracy }] sorted worst first. */
  function breakdown(subject, field) {
    var store = subjectStore(subject);
    var byGroup = {};
    Object.keys(store.q).forEach(function (k) {
      var rec = store.q[k];
      var name = (field === 'topic' ? rec.tp : rec.st) || 'Untagged';
      if (!byGroup[name]) {
        byGroup[name] = { name: name, topic: rec.tp || '', attempts: 0, correct: 0 };
      }
      byGroup[name].attempts += rec.a;
      byGroup[name].correct += rec.c;
    });
    return Object.keys(byGroup).map(function (n) {
      var g = byGroup[n];
      g.accuracy = g.attempts ? g.correct / g.attempts : 0;
      return g;
    }).sort(function (a, b) {
      if (a.accuracy !== b.accuracy) return a.accuracy - b.accuracy;
      return b.attempts - a.attempts;
    });
  }

  function weakAreas(subject, limit) {
    var weak = breakdown(subject, 'subtopic').filter(function (g) {
      return g.attempts >= MIN_ATTEMPTS_FOR_WEAKNESS && g.accuracy <= WEAK_THRESHOLD;
    });
    return limit ? weak.slice(0, limit) : weak;
  }

  /* Weight used by buildExam. Higher = more deserving of a slot.
   * Never-seen questions sit just above a solid subtopic so fresh material
   * still appears once the weak areas have been served.
   */
  function weightFor(subject, q) {
    var rec = recordFor(subject, q);
    if (!rec) return 1.0;                      // unseen
    if (rec.a === 0) return 1.0;
    var acc = rec.c / rec.a;
    var w = 1 + (1 - acc) * 3;                 // 1.0 (always right) .. 4.0 (always wrong)
    if (rec.s === 0 && rec.a > 0) w += 0.5;    // got it wrong last time
    var ageDays = (Date.now() - rec.t) / 86400000;
    if (ageDays > 14) w += 0.5;                // stale, worth a refresh
    return w;
  }

  function summary(subject) {
    var store = subjectStore(subject);
    var keys = Object.keys(store.q);
    var attempts = 0, correct = 0, mastered = 0;
    keys.forEach(function (k) {
      var rec = store.q[k];
      attempts += rec.a;
      correct += rec.c;
      if (rec.s >= MASTERY_STREAK) mastered += 1;
    });
    return {
      seen: keys.length,
      attempts: attempts,
      correct: correct,
      accuracy: attempts ? correct / attempts : 0,
      mastered: mastered,
      exams: store.h.length,
      lastExam: store.h.length ? store.h[store.h.length - 1] : null
    };
  }

  function history(subject, limit) {
    var h = subjectStore(subject).h.slice().reverse();
    return limit ? h.slice(0, limit) : h;
  }

  // ── Maintenance ─────────────────────────────────────────────────────────
  function reset(subject) {
    var db = load();
    if (subject) delete db.subjects[subject];
    else db.subjects = {};
    flush();
    notify('reset');
  }

  function exportData() {
    return JSON.stringify(load(), null, 2);
  }

  function importData(json) {
    var parsed = typeof json === 'string' ? JSON.parse(json) : json;
    if (!parsed || !parsed.subjects) throw new Error('Not a Study Buddy progress file');
    cache = { v: SCHEMA_VERSION, subjects: parsed.subjects };
    flush();
    notify('import');
  }

  function subscribe(fn) {
    listeners.push(fn);
    return function () {
      listeners = listeners.filter(function (l) { return l !== fn; });
    };
  }

  window.Progress = {
    keyFor: keyFor,
    record: record,
    recordExam: recordExam,
    isMastered: isMastered,
    recordFor: recordFor,
    weightFor: weightFor,
    weakAreas: weakAreas,
    breakdown: breakdown,
    summary: summary,
    history: history,
    reset: reset,
    exportData: exportData,
    importData: importData,
    subscribe: subscribe,
    flush: flush,
    config: {
      MASTERY_STREAK: MASTERY_STREAK,
      RESURFACE_AFTER_DAYS: RESURFACE_AFTER_DAYS,
      MIN_ATTEMPTS_FOR_WEAKNESS: MIN_ATTEMPTS_FOR_WEAKNESS,
      WEAK_THRESHOLD: WEAK_THRESHOLD
    }
  };
})();
