/* ============================================================
   Study Buddy — Service Worker  v4
   - Caches all assets on install (best-effort, won't fail if one image is missing)
   - All scripts are vendored locally — no internet required
   - Cache-first strategy for all GET requests
   ============================================================ */

const CACHE_NAME = 'study-buddy-v57';

/* All local files to pre-cache on install */
const LOCAL_ASSETS = [
  '/index.html',
  '/manifest.json',
  '/labels.json',
  '/histology-questions.js',
  '/anatomy-questions.js',
  '/czech-questions.js',
  '/czechQuestionBanks.js',
  '/muscle-bank.js',
  '/artery-game.js',
  '/artery-assembly-data.js',
  /* Vendored scripts — fully offline, no CDN needed */
  '/vendor/react.min.js',
  '/vendor/react-dom.min.js',
  '/vendor/babel.min.js',
  '/vendor/pdf.min.js',
  '/vendor/pdf.worker.min.js',
  '/images/muscles/obliquus-capitis-inferior-gilroy-crop.png',
  '/images/muscles/pelvic-floor.jpg',
  '/images/muscles/gluteal-region.jpg',
  '/images/muscles/medial-thigh-deep.jpg',
  '/images/muscles/medial-thigh-superficial.jpg',
  '/images/muscles/anterior-thigh.jpg',
  '/images/muscles/posterior-thigh.jpg',
  '/images/muscles/anterior-leg.jpg',
  '/images/muscles/lateral-leg.jpg',
  '/images/muscles/posterior-leg-superficial.jpg',
  '/images/muscles/posterior-leg-deep.jpg',
  '/images/muscles/dorsal-foot.jpg',
  '/images/muscles/sole-layer1.jpg',
  '/images/muscles/sole-deep-layers.jpg',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/peritoneum/DAF36D83-A190-4AB5-9951-CA9DA4957481.png',
  '/Peritoneum/Vertebra.png',
  '/Peritoneum/Gemini_Generated_Image_lt3305lt3305lt33.png',
  '/Peritoneum/Gemini_Generated_Image_owcvupowcvupowcv.png',
  '/Peritoneum/vertebra-cropped.png',
  '/Peritoneum/rib-cropped.png',
  '/Wound-man,_16th_Century_Wellcome_L0010200.webp',
  /* Blood vessels */
  '/Blood%20vessels/Abdomenal%20Aorta.jpg',
  '/Blood%20vessels/Abdominal%20Aorta.jpg',
  '/Blood%20vessels/Aortic%20Arch.jpg',
  '/Blood%20vessels/Brain.jpg',
  '/Blood%20vessels/Femail%20Repoductive.jpg',
  '/Blood%20vessels/Head%20.jpg',
  '/Blood%20vessels/Head%20Blood%20Supply.jpg',
  '/Blood%20vessels/Head%20Drainage.jpg',
  '/Blood%20vessels/Maxillary%20Artery.jpg',
  '/Blood%20vessels/Portal%20Vein.jpg',
  '/Blood%20vessels/Thoracic%20Aorta.jpg',
  '/Blood%20vessels/Veneus%20Drainage.jpg',
  /* Cardiac Vessels */
  '/CardiacVessels/cardiac-vessels.jpg',
  /* Cross section */
  '/Cross%20section/Cross-section1.jpg',
  '/Cross%20section/Cross-section2.jpg',
  '/Cross%20section/Cross-section3.jpg',
  '/Cross%20section/Cross-section4.jpg',
  '/Cross%20section/Cross-section5.jpg',
  /* General */
  '/General/11.jpg',
  '/General/12.jpg',
  '/General/13.jpg',
  '/General/14.jpg',
  '/General/15.jpg',
  '/General/16.jpg',
  '/General/17.jpg',
  '/General/18.jpg',
  /* Lymph drainage */
  '/Lymph%20drainage/Lower%20part.jpg',
  '/Lymph%20drainage/Upper%20part.jpg',
  /* Nerve */
  '/Nerve/11.jpg',
  '/Nerve/12.jpg',
  '/Nerve/13.jpg',
  '/Nerve/14.jpg',
  '/Nerve/15.jpg',
  /* Organs Syntopy */
  '/Oragns%20Sytopy/Lung%20Impression.jpg',
  /* Radiography */
  '/Radiography/Radiography1.jpg',
  '/Radiography/Radiography2.jpg',
  '/Radiography/Radiography3.jpg',
  '/Radiography/Radiography4.jpg',
  '/Radiography/Radiography5.jpg',
  '/Radiography/Radiography6.jpg',
  '/Radiography/Radiography7.jpg',
  '/Radiography/Radiography8.jpg',
  '/Radiography/Radiography9.jpg',
  '/Radiography/Radiography10.jpg',
  '/Radiography/Radiography11.jpg',
  '/Radiography/Radiography12.jpg',
  '/Radiography/Radiography13.jpg',
  '/Radiography/Radiography14.jpg',
  '/Radiography/Radiography15.jpg',
  /* Skull Openings */
  '/Skull%20Openings/External.jpg',
  '/Skull%20Openings/Internal.jpg',
  /* Topography */
  '/Topography/Abdominal%20Projections.jpg',
  '/Topography/Carotid%20triangle.jpeg',
  '/Topography/Heart%20Asscultation.png',
  '/Topography/Infra-temporal%20fossa.JPG',
  '/Topography/Liver%20segments.jpg',
  '/Topography/Lung%20recesses.jpg',
  '/Topography/Mediastinum.jpg',
  '/Topography/Orbit.jpg',
  '/Topography/Uterus%20Angles.jpg',
  /* Upper limb muscles */
  '/images/muscles/trapezius-levator-rhomboids.jpg',
  '/images/muscles/latissimus-teres-major.jpg',
  '/images/muscles/subclavius-pec-minor-serratus.jpg',
  '/images/muscles/pec-major-coracobrachialis.jpg',
  '/images/muscles/deltoid.jpg',
  '/images/muscles/rotator-cuff.jpg',
  '/images/muscles/biceps-brachialis.jpg',
  '/images/muscles/triceps-anconeus.jpg',
  '/images/muscles/anterior-forearm.jpg',
  '/images/muscles/posterior-forearm-radialis.jpg',
  '/images/muscles/posterior-forearm-extensors.jpg',
  '/images/muscles/thenar-hypothenar.jpg',
  '/images/muscles/deep-hand.jpg',
  /* Back muscles */
  '/images/muscles/short-nuchal-muscles.jpg',
  '/images/muscles/splenius-muscles.jpg',
  '/images/muscles/serratus-posterior.jpg',
  '/images/muscles/erector-spinae.jpg',
  '/images/muscles/transversospinalis.jpg',
  '/images/muscles/deep-segmental-back.jpg',
  /* Thorax and abdomen muscles */
  '/images/muscles/thoracic-wall.jpg',
  '/images/muscles/diaphragm.jpg',
  '/images/muscles/abdominal-wall.jpg',
  '/images/muscles/posterior-abdominal-wall.jpg',
  /* Facial expression muscles */
  '/images/muscles/facial-expression.jpg',
  /* Head, neck, and tongue muscles */
  '/images/muscles/mastication-muscles.jpg',
  '/images/muscles/suprahyoid-infrahyoid.jpg',
  '/images/muscles/superficial-neck.jpg',
  '/images/muscles/deep-neck-prevertebral.jpg',
  '/images/muscles/tongue-oral-floor.jpg',
  '/images/muscles/soft-palate.jpg',
  '/images/muscles/pharyngeal-muscles.jpg',
  '/images/muscles/laryngeal-muscles.jpg',
  /* Extraocular muscles */
  '/images/muscles/extraocular-muscles.jpg',
  /* Middle ear muscles */
  '/images/muscles/middle-ear-muscles.jpg',
];

/* Cache one URL, silently ignoring failures */
function tryCacheOne(cache, url) {
  return fetch(url)
    .then(res => { if (res && res.ok) cache.put(url, res); })
    .catch(() => {});
}

/* ── Install: pre-cache everything (best-effort — never fails install) ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      /* Cache each asset individually so one 404 doesn't abort the whole install */
      await Promise.allSettled(
        LOCAL_ASSETS.map(url => tryCacheOne(cache, url))
      );
    })
  );
  self.skipWaiting();
});

/* ── Activate: remove old caches ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

/* ── Fetch: cache-first, fall back to network, then cache the result ── */
self.addEventListener('fetch', event => {
  /* Only handle GET — let POST /save-labels go straight to network */
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      /* Not in cache — try network */
      return fetch(event.request).then(response => {
        if (response && response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        /* Fully offline and not cached */
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
