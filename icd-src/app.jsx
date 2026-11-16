const { useState, useEffect, useMemo, useRef } = React;

// --- Native SVG Icons (Bedside UI style) ---
const ZapIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>);
const AlertTriangleIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>);
const SyringeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m18 2 4 4" />
    <path d="m17 7 3-3" />
    <path d="M19 9 8.7 19.3c-.4.4-1 .6-1.6.6H3v-4.1c0-.6.2-1.2.6-1.6L14 3.9" />
    <path d="m9 11 4 4" />
    <path d="m5 19-3 3" />
    <path d="m14 4 6 6" />
  </svg>
);
const SearchIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>);
const CheckIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12" /></svg>);
const XIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>);
const SunIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>);
const MoonIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>);
const AlertTriangle = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>);
const InfoIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>);
const ActivityIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>);
const CompareIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="8" height="14" x="3" y="5" rx="2" /><rect width="8" height="14" x="13" y="5" rx="2" /><line x1="11" x2="13" y1="12" y2="12" /></svg>);
const StethoscopeIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" /><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" /><circle cx="20" cy="10" r="2" /></svg>);
const WrenchIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>);
const CalcIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01M16 14v4" /></svg>);
const ShieldCheckIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>);
const BookOpenIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>);
const PlayIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="6 3 20 12 6 21 6 3" /></svg>);
const PauseIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" /></svg>);
const RotateCcwIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>);
const LayoutGridIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>);
const ListIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>);
const Volume2Icon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /></svg>);
const VolumeXIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><line x1="22" x2="16" y1="9" y2="15" /><line x1="16" x2="22" y1="9" y2="15" /></svg>);

// --- Bedside UI Dark Theme Layer (matches bronchodilator-src/app.jsx) ---
(() => {
  const tints = {
    amber: ['252,211,77', '251,191,36', '245,158,11'], blue: ['147,197,253', '96,165,250', '59,130,246'],
    cyan: ['103,232,249', '34,211,238', '6,182,212'], emerald: ['110,231,183', '52,211,153', '16,185,129'],
    fuchsia: ['240,171,252', '232,121,249', '217,70,239'], green: ['134,239,172', '74,222,128', '34,197,94'],
    indigo: ['165,180,252', '129,140,248', '99,102,241'], lime: ['190,242,100', '163,230,53', '132,204,22'],
    orange: ['253,186,116', '251,146,60', '249,115,22'], pink: ['249,168,212', '244,114,182', '236,72,153'],
    purple: ['216,180,254', '192,132,252', '168,85,247'], red: ['252,165,165', '248,113,113', '239,68,68'],
    rose: ['253,164,175', '251,113,133', '244,63,94'], sky: ['125,211,252', '56,189,248', '14,165,233'],
    stone: ['214,211,209', '168,162,158', '120,113,108'], teal: ['94,234,212', '45,212,191', '20,184,166'],
    violet: ['196,181,253', '167,139,250', '139,92,246'], yellow: ['253,224,71', '250,204,21', '234,179,8'],
  };
  const neutrals = {
    'bg-white': 'background-color:#151f32', 'bg-slate-50': 'background-color:#101a2b',
    'bg-slate-100': 'background-color:#0b1220', 'bg-slate-200': 'background-color:#24324a',
    'text-slate-900': 'color:#f1f5f9', 'text-slate-800': 'color:#e2e8f0', 'text-slate-700': 'color:#cbd5e1',
    'text-slate-600': 'color:#a8b4c6', 'text-slate-500': 'color:#94a3b8', 'text-slate-400': 'color:#7d8ba1',
    'text-slate-300': 'color:#4a5a73', 'text-slate-200': 'color:#33425a',
    'border-slate-100': 'border-color:#1d2940', 'border-slate-200': 'border-color:#263449',
    'border-slate-300': 'border-color:#33435c',
  };
  const hoverNeutrals = {
    'hover:bg-white': 'background-color:#1b2740', 'hover:bg-slate-50': 'background-color:#1b2740',
    'hover:bg-slate-100': 'background-color:#1f2c45', 'hover:bg-slate-300': 'background-color:#2f3e58',
    'hover:text-slate-600': 'color:#cbd5e1', 'hover:text-slate-700': 'color:#e2e8f0',
  };
  const esc = (c) => c.replace(/[:/]/g, (m) => '\\' + m);
  const rules = [];
  const add = (cls, decl, hover) => rules.push(`html.dark .${esc(cls)}${hover ? ':hover' : ''}:not(.light-lock *){${decl}}`);
  Object.entries(neutrals).forEach(([c, d]) => add(c, d));
  Object.entries(hoverNeutrals).forEach(([c, d]) => add(c, d, true));
  Object.entries(tints).forEach(([f, [c300, c400, c500]]) => {
    [['50', 0.12], ['100', 0.2]].forEach(([shade, a]) => {
      add(`bg-${f}-${shade}`, `background-color:rgba(${c500},${a})`);
      add(`hover:bg-${f}-${shade}`, `background-color:rgba(${c500},${a + 0.06})`, true);
      // Support Tailwind slash opacities in dark mode (prevents milky washed-out boxes)
      ['95', '90', '85', '80', '75', '70', '60', '50', '40', '30', '20'].forEach((op) => {
        add(`bg-${f}-${shade}\/${op}`, `background-color:rgba(${c500},${(a * (parseInt(op) / 100)).toFixed(3)})`);
      });
    });
    ['500', '600'].forEach((s) => add(`text-${f}-${s}`, `color:rgb(${c400})`));
    ['700', '800', '900', '950'].forEach((s) => add(`text-${f}-${s}`, `color:rgb(${c300})`));
    ['500', '600'].forEach((s) => add(`hover:text-${f}-${s}`, `color:rgb(${c300})`, true));
    [['100', 0.28], ['200', 0.35], ['300', 0.45]].forEach(([s, a]) => {
      add(`border-${f}-${s}`, `border-color:rgba(${c500},${a})`);
      add(`hover:border-${f}-${s}`, `border-color:rgba(${c500},.6)`, true);
      ['95', '90', '85', '80', '75', '70', '60', '50'].forEach((op) => {
        add(`border-${f}-${s}\/${op}`, `border-color:rgba(${c500},${(a * (parseInt(op) / 100)).toFixed(3)})`);
      });
    });
  });
  const style = document.createElement('style');
  style.id = 'dark-theme-layer';
  style.textContent = rules.join('\n');
  document.head.appendChild(style);
})();

// --- Physics Engine for 1-, 2-, and 3-Bottle ICD ---
function computeIcdPhysics({
  system,
  hSeal,
  hFluid,
  pPleural,
  hSuction,
  wallSuctionMode,
  bottleHeightCm,
  fault,
  clampPos,
}) {
  const hSealEffective = system === '1b' ? +(hSeal + hFluid).toFixed(1) : +hSeal.toFixed(1);
  const sealIntact = hSealEffective >= 0.5;
  const sealLow = hSealEffective > 0 && hSealEffective < 2.0;
  const sealHigh = hSealEffective > 3.0;

  const pWallMap = { off_open: 0, off_closed: 0, low: 10, standard: 109, high: 204 };
  const pWallAbs = pWallMap[wallSuctionMode] ?? 109;
  const ventBlocked = system === '3b' && wallSuctionMode === 'off_closed';

  let pOverhead = 0;
  if (system === 'dry') {
    // Modern Dry Suction regulator: internal spring-loaded diaphragm or micropump maintains precise constant suction
    pOverhead = -hSuction;
  } else if (system === '3b') {
    if (wallSuctionMode === 'off_open') pOverhead = 0;
    else if (wallSuctionMode === 'off_closed') pOverhead = 5; // trapped pressure when plugged to dead wall port
    else pOverhead = -Math.min(pWallAbs, hSuction);
  }

  const hydroBackPressure = (bottleHeightCm > 0 ? bottleHeightCm : 0) + (fault === 'dep_loop' ? 8 : 0);
  const obstructed = fault === 'kink_clot' || ventBlocked;

  const pCrack = obstructed ? null : +(pOverhead + hSealEffective + hydroBackPressure).toFixed(1);
  const netDrive = pCrack === null ? 0 : +(pPleural - pCrack).toFixed(1);

  // Water seal bubbling state
  let waterSealBubbling = 'none'; // 'none' | 'intermittent' | 'continuous'
  if (sealIntact && !obstructed) {
    if (fault === 'tube_leak') {
      waterSealBubbling = clampPos === 'distal' ? 'none' : 'continuous';
    } else if (fault === 'air_leak_bpf') {
      waterSealBubbling = clampPos === 'none' ? 'continuous' : 'none';
    } else if (clampPos === 'none' && netDrive > 0) {
      waterSealBubbling = 'intermittent';
    }
  }

  // Tidaling meniscus inside water-seal tube (cm above bottle water surface)
  const tidalingActive = clampPos === 'none' && fault !== 'kink_clot' && sealIntact && !ventBlocked;
  let meniscusCm = 0;
  if (tidalingActive) {
    meniscusCm = Math.max(-hSealEffective, Math.min(26, +(pOverhead - pPleural).toFixed(1)));
  }

  // Bottle 3 suction bubbling (Dry suction systems are silent with zero water bubbling in suction chamber)
  let suctionBubbling = 'none'; // 'none' | 'gentle' | 'vigorous'
  if (system === '3b') {
    if (wallSuctionMode === 'high') suctionBubbling = 'vigorous';
    else if (wallSuctionMode === 'standard') suctionBubbling = 'gentle';
  }

  // Net effective suction pressure in 3-bottle or digital dry system
  const netEffectiveSuction = (system === '3b' || system === 'dry') && !ventBlocked && wallSuctionMode !== 'off_open'
    ? +(pOverhead + hSealEffective).toFixed(1)
    : null;

  // Digital Air Leak Flow (mL/min) modeled on Medela Thopaz & ESTS consensus standards
  let airLeakFlow = 0;
  if (!obstructed) {
    if (fault === 'tube_leak') {
      airLeakFlow = clampPos === 'distal' ? 0 : 520;
    } else if (fault === 'air_leak_bpf') {
      airLeakFlow = clampPos === 'none' ? 360 : 0;
    } else if (clampPos === 'none' && netDrive > 0) {
      airLeakFlow = Math.round(netDrive * 36);
    }
  }
  // ESTS Chest Tube Removal Criteria: Air leak < 30 mL/min for 6-12 hours
  const estsRemovalReady = airLeakFlow < 30 && !obstructed && clampPos === 'none'; // a clamped tube reads 0 flow, not 'no leak'

  // Air entry into chest risk if seal tip unsubmerged during negative pleural pressure
  const airSuckBackRisk = !sealIntact && clampPos === 'none' && pPleural < pOverhead;
  // Fluid siphon back into chest risk if bottle raised above chest
  const siphonBackRisk = bottleHeightCm > 0 && clampPos === 'none' && bottleHeightCm + Math.max(0, -pPleural) > 2;

  return {
    hSealEffective,
    sealIntact,
    sealLow,
    sealHigh,
    pWallAbs,
    ventBlocked,
    pOverhead,
    hydroBackPressure,
    obstructed,
    pCrack,
    netDrive,
    waterSealBubbling,
    tidalingActive,
    meniscusCm,
    suctionBubbling,
    netEffectiveSuction,
    airSuckBackRisk,
    siphonBackRisk,
    airLeakFlow,
    estsRemovalReady,
  };
}

// --- SourceLine & References / Disclaimer (Bedside UI pattern) ---
const refUrl = (key) => (REFERENCES.find((r) => r.key === key) || {}).url;

const SourceLine = ({ items, t, k }) => (
  <p className="text-[10px] font-medium text-slate-400 leading-snug pt-1.5 break-words text-left" data-src={k}>
    <span className="font-bold">{t.srcLabel}:</span>{' '}
    {items == null ? (
      <span data-src-unknown>{t.srcUnknown}</span>
    ) : items.length === 0 ? (
      <span data-src-none>{t.srcNone}</span>
    ) : (
      items.map((it, i) => {
        const u = it.url || (it.key ? refUrl(it.key) : null);
        return (
          <span key={i}>
            {i > 0 && ' · '}
            {u ? (
              <a href={u} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline decoration-dotted hover:decoration-solid">
                {it.label}
              </a>
            ) : (
              <span>{it.label}</span>
            )}
          </span>
        );
      })
    )}
  </p>
);

const DisclaimerSection = ({ t }) => (
  <section className="mt-10 md:mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-4 md:p-5 print:hidden" aria-labelledby="disclaimer-heading">
    <h2 id="disclaimer-heading" className="text-sm font-extrabold text-amber-800 uppercase tracking-wider mb-2 flex items-center gap-2">
      <AlertTriangle className="w-4 h-4 shrink-0" /> {t.discTitle}
    </h2>
    <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm text-amber-900 leading-relaxed">
      {t.discPoints.map((p, i) => <li key={i}>{p}</li>)}
    </ul>
    <p className="mt-2 text-[11px] font-bold text-amber-700">{t.discReviewed}</p>
  </section>
);

const ReferencesSection = ({ t, lang }) => {
  const [open, setOpen] = useState(false);
  return (
    <section className="mt-8 pt-6 border-t border-slate-200 print:hidden" aria-labelledby="refs-heading">
      <h2 id="refs-heading" className="text-sm font-extrabold text-slate-700 uppercase tracking-wider">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="refs-list"
          className="w-full flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 hover:bg-slate-50 transition-colors"
        >
          <span className="uppercase tracking-wider text-left">
            {t.refTitle} <span className="text-slate-400 font-bold normal-case tracking-normal">({REFERENCES.length})</span>
          </span>
          <span className={`text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true">▾</span>
        </button>
      </h2>
      {open && (
        <div id="refs-list" className="mt-3 flex flex-col gap-5 bg-white rounded-xl border border-slate-200 p-4">
          {(() => {
            let n = 0;
            return REF_GROUPS.map((g) => (
              <div key={g.id}>
                <h3 className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider mb-2 pb-1 border-b border-slate-200">
                  {lang === 'th' ? g.th : g.en} <span className="text-slate-400 font-bold">({g.keys.length})</span>
                </h3>
                <ol className="flex flex-col gap-2.5">
                  {g.keys.map((k) => {
                    const r = REFERENCES.find((x) => x.key === k);
                    n += 1;
                    return (
                      <li key={r.key} className="flex gap-3 text-xs text-slate-600 leading-relaxed">
                        <span className="shrink-0 font-bold text-slate-400 tabular-nums w-5 text-right">{n}.</span>
                        <span className="min-w-0">
                          {r.cite}{' '}
                          {r.url && (
                            <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline break-all">
                              {r.url}
                            </a>
                          )}
                          <span className="block text-[11px] text-slate-500 mt-0.5">
                            <span className="font-bold">{t.refUsedFor}:</span> {t.refUsed[r.key]}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </div>
            ));
          })()}
        </div>
      )}
    </section>
  );
};

// --- Hoisted Bubble Components (kept outside IcdBottleSvg so 80ms breathing ticks never reset SVG animations) ---
// Air bubbles emerge from the submerged tube tip, curve to the sides, and rise up along the side of the tube to the water surface
const BottleBubbles = ({ cx, tipY, surfaceY, fast, tint = 'cyan', id = 'b2' }) => {
  const rise = Math.max(8, tipY - surfaceY);
  const count = fast ? 8 : 4;
  const dur = fast ? 0.75 : 1.35;
  const fill = tint === 'violet' ? '#ede9fe' : '#e0f2fe';
  const stroke = tint === 'violet' ? '#7c3aed' : '#0284c7';

  // Paths: Come out of the tip of the tube (cx, tipY), curve around to the left and right sides of the tube,
  // then rise up along the side through the water and terminate at the surface (surfaceY).
  const leftPath = `M ${cx} ${tipY} Q ${cx - 2} ${tipY + 6} ${cx - 9} ${tipY + 2} Q ${cx - 13} ${tipY - rise * 0.5} ${cx - 8} ${surfaceY}`;
  const rightPath = `M ${cx} ${tipY} Q ${cx + 2} ${tipY + 6} ${cx + 9} ${tipY + 2} Q ${cx + 13} ${tipY - rise * 0.5} ${cx + 8} ${surfaceY}`;
  const pathIdLeft = `icd-b-left-${id}-${cx}-${tint}`;
  const pathIdRight = `icd-b-right-${id}-${cx}-${tint}`;

  return (
    <g pointerEvents="none">
      <defs>
        <path id={pathIdLeft} d={leftPath} />
        <path id={pathIdRight} d={rightPath} />
      </defs>

      {/* Left side rising bubble stream */}
      {Array.from({ length: Math.ceil(count / 2) }).map((_, i) => (
        <circle key={`l-${i}`} r={fast ? 2.8 : 2.5} fill={fill} stroke={stroke} strokeWidth="1">
          <animateMotion
            dur={`${dur}s`}
            begin={`${((i * dur) / Math.ceil(count / 2)).toFixed(2)}s`}
            repeatCount="indefinite"
          >
            <mpath href={`#${pathIdLeft}`} />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;0.95;0.95;0"
            keyTimes="0;0.12;0.90;1"
            dur={`${dur}s`}
            begin={`${((i * dur) / Math.ceil(count / 2)).toFixed(2)}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="2;2.8;3.4"
            keyTimes="0;0.6;1"
            dur={`${dur}s`}
            begin={`${((i * dur) / Math.ceil(count / 2)).toFixed(2)}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* Right side rising bubble stream */}
      {Array.from({ length: Math.floor(count / 2) }).map((_, i) => (
        <circle key={`r-${i}`} r={fast ? 3.0 : 2.6} fill={fill} stroke={stroke} strokeWidth="1">
          <animateMotion
            dur={`${(dur * 1.08).toFixed(2)}s`}
            begin={`${(((i + 0.5) * dur) / Math.max(1, Math.floor(count / 2))).toFixed(2)}s`}
            repeatCount="indefinite"
          >
            <mpath href={`#${pathIdRight}`} />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;0.95;0.95;0"
            keyTimes="0;0.12;0.90;1"
            dur={`${(dur * 1.08).toFixed(2)}s`}
            begin={`${(((i + 0.5) * dur) / Math.max(1, Math.floor(count / 2))).toFixed(2)}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="2.2;3.0;3.6"
            keyTimes="0;0.6;1"
            dur={`${(dur * 1.08).toFixed(2)}s`}
            begin={`${(((i + 0.5) * dur) / Math.max(1, Math.floor(count / 2))).toFixed(2)}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* Surface popping ripples at surfaceY */}
      <ellipse
        cx={cx - 7}
        cy={surfaceY + 1}
        rx={fast ? 10 : 7}
        ry="2.2"
        fill="none"
        stroke={stroke}
        strokeWidth="1.1"
        className="icd-ripple"
        style={{ animationDuration: fast ? '0.55s' : '1.05s' }}
      />
      <ellipse
        cx={cx + 7}
        cy={surfaceY + 1}
        rx={fast ? 9 : 6}
        ry="2.0"
        fill="none"
        stroke={stroke}
        strokeWidth="1.0"
        className="icd-ripple"
        style={{ animationDuration: fast ? '0.62s' : '1.18s', animationDelay: '0.2s' }}
      />
    </g>
  );
};

// Animated air droplets moving through tubing paths using native SVG animateMotion
const TubeAirStream = ({ pathId, count = 4, dur = 1.4, color = '#0ea5e9', radius = 2.6 }) => (
  <g pointerEvents="none">
    {Array.from({ length: count }).map((_, i) => (
      <circle key={i} r={radius} fill="#ffffff" stroke={color} strokeWidth="1.2">
        <animateMotion
          dur={`${dur}s`}
          begin={`${((i * dur) / count).toFixed(2)}s`}
          repeatCount="indefinite"
        >
          <mpath href={`#${pathId}`} />
        </animateMotion>
        <animate
          attributeName="opacity"
          values="0.95;0.95;0.95;0"
          keyTimes="0;0.88;0.96;1"
          dur={`${dur}s`}
          begin={`${((i * dur) / count).toFixed(2)}s`}
          repeatCount="indefinite"
        />
      </circle>
    ))}
  </g>
);

// --- Live Pressure-vs-Time Waveform Strip ---
const PressureWaveformStrip = ({ history, pCrack, pPleural, meniscusCm, tidalingActive, ventMode, isFrozen, onToggleFreeze, t, dark }) => {
  const W = 460;
  const H = 86;
  const padL = 28;
  const padR = 8;
  const plotW = W - padL - padR;
  const toY = (val) => {
    const clamped = Math.max(-28, Math.min(28, val));
    return 43 - (clamped / 28) * 34; // +28 -> 9, 0 -> 43, -28 -> 77
  };
  const zeroY = toY(0);
  const crackY = pCrack === null ? null : toY(pCrack);

  const pVals = history.map((pt) => pt.pPleural);
  const minP = pVals.length ? Math.min(...pVals) : 0;
  const maxP = pVals.length ? Math.max(...pVals) : 0;
  const deltaP = +(maxP - minP).toFixed(1);

  const buildPath = (key) => {
    if (!history.length) return '';
    return history
      .map((pt, idx) => {
        const x = padL + (idx / Math.max(1, history.length - 1)) * plotW;
        const y = toY(pt[key]);
        return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(' ');
  };

  const pPath = buildPath('pPleural');
  const mPath = buildPath('meniscusCm');
  const gridCol = dark ? '#263449' : '#cbd5e1';
  const lblCol = dark ? '#94a3b8' : '#64748b';
  const aboveCrack = pCrack !== null && pPleural > pCrack;

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/95 p-2.5">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-300">{t.waveTitle}</span>
          {ventMode === 'mechanical' && (
            <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/80 text-indigo-800 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-700">
              {t.ppvWaveBadge}
            </span>
          )}
          {onToggleFreeze && (
            <button
              type="button"
              onClick={onToggleFreeze}
              aria-label={isFrozen ? t.resumeTrace : t.freezeTrace}
              className={`px-2 py-0.5 rounded text-[9px] font-extrabold border transition-all inline-flex items-center gap-1 cursor-pointer ${
                isFrozen
                  ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-700 animate-pulse'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {isFrozen ? <PlayIcon className="w-2.5 h-2.5 text-amber-700 dark:text-amber-400" /> : <PauseIcon className="w-2.5 h-2.5 text-slate-500 dark:text-slate-400" />}
              <span>{isFrozen ? (t.resumeTrace || 'Live') : (t.freezeTrace || 'Freeze')}</span>
            </button>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold">
          <span className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400 bg-slate-200/50 dark:bg-slate-800 px-1.5 py-0.5 rounded tabular-nums" title={t.caliperDelta}>
            ΔP: {deltaP} cmH₂O
          </span>
          <span className={`inline-flex items-center gap-1 ${aboveCrack ? 'text-rose-600' : 'text-indigo-600'}`}>
            <span className={`w-2 h-0.5 inline-block ${aboveCrack ? 'bg-rose-600' : 'bg-indigo-600'}`} />
            {t.wavePleural}: {pPleural > 0 ? `+${pPleural}` : pPleural}
          </span>
          <span className="inline-flex items-center gap-1 text-amber-700">
            <span className="w-2.5 h-0 border-t border-dashed border-amber-600 inline-block" />
            {t.waveCrack}: {pCrack === null ? '∞' : (pCrack > 0 ? `+${pCrack}` : pCrack)}
          </span>
          <span className="inline-flex items-center gap-1 text-cyan-700">
            <span className="w-2 h-0.5 bg-cyan-600 inline-block" />
            {t.waveTidaling}: {tidalingActive ? `${meniscusCm}` : '0'}
          </span>
        </div>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto select-none" role="img" aria-label={t.waveTitle}>
        <line x1={padL} y1={toY(20)} x2={W - padR} y2={toY(20)} stroke={gridCol} strokeWidth="0.7" />
        <line x1={padL} y1={zeroY} x2={W - padR} y2={zeroY} stroke={gridCol} strokeWidth="1" />
        <line x1={padL} y1={toY(-20)} x2={W - padR} y2={toY(-20)} stroke={gridCol} strokeWidth="0.7" />
        <text x={padL - 4} y={toY(20) + 3} textAnchor="end" fontSize="8" fill={lblCol}>+20</text>
        <text x={padL - 4} y={zeroY + 3} textAnchor="end" fontSize="8" fontWeight="700" fill={lblCol}>0</text>
        <text x={padL - 4} y={toY(-20) + 3} textAnchor="end" fontSize="8" fill={lblCol}>-20</text>
        {crackY !== null && (
          <line x1={padL} y1={crackY} x2={W - padR} y2={crackY} stroke="#d97706" strokeWidth="1.2" strokeDasharray="4 3" />
        )}
        {mPath && <path d={mPath} fill="none" stroke="#0891b2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />}
        {pPath && <path d={pPath} fill="none" stroke={aboveCrack ? '#e11d48' : '#4f46e5'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
        {/* Phase markers */}
        <text x={padL + 20} y={H - 4} fontSize="7" fontWeight="700" fill={lblCol}>I ({t.phaseInsp || 'Insp'})</text>
        <text x={padL + plotW * 0.5} y={H - 4} fontSize="7" fontWeight="700" fill={lblCol}>E ({t.phaseExp || 'Exp'})</text>
        <text x={W - padR - 35} y={H - 4} fontSize="7" fontWeight="700" fill={lblCol}>I ({t.phaseInsp || 'Insp'})</text>
        {isFrozen && (
          <g>
            <rect x={W / 2 - 45} y={H / 2 - 12} width="90" height="24" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.2" opacity="0.95" />
            <text x={W / 2} y={H / 2 + 4} textAnchor="middle" fontSize="9" fontWeight="800" fill="#92400e">
              PAUSED / FROZEN
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

// --- ICU Bedside Patient Monitor Vitals Strip (Bedside Telemetry) ---
const IcuBedsideMonitor = ({ phys, currentPleuralPressure, breathingOn, tidalingAmplitude, ventMode, system, isTh, t }) => {
  const pPlPos = currentPleuralPressure > 0;
  const pPlCrit = currentPleuralPressure > 5;
  const sealTrap = phys.hSealEffective > 4;

  const hasTensionAlarm = currentPleuralPressure > 5 && (phys.ventBlocked || phys.airSuckBackRisk || !phys.tidalingActive);
  const hasRpeAlarm = currentPleuralPressure < -20;
  const hasLeakAlarm = phys.waterSealBubbling === 'continuous';

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-100 p-2.5 sm:p-3 shadow-sm">
      {/* Header bar */}
      <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-800 text-[10px] uppercase tracking-wider font-extrabold text-slate-400">
        <div className="flex items-center gap-1.5 text-emerald-400">
          <ActivityIcon className="w-3.5 h-3.5 animate-pulse" />
          <span>{t.monitorTitle || 'ICU BEDSIDE MONITOR'}</span>
        </div>
        <div className="flex items-center gap-2">
          {ventMode === 'mechanical' && (
            <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-indigo-900/80 text-indigo-300 border border-indigo-700/50">
              {isTh ? 'สลับทิศ' : 'PPV Inv'}
            </span>
          )}
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
            {ventMode === 'mechanical' ? 'PPV VENT' : 'SPONT'}
          </span>
        </div>
      </div>

      {/* 4 Vitals Cells */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {/* Cell 1: Pleural Pressure */}
        <div className="rounded-lg bg-slate-800/80 border border-slate-700/60 p-2 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
            <span>{isTh ? 'ความดันช่องอก (P_pl)' : 'Pleural Press (P_pl)'}</span>
            <span className={pPlPos ? (pPlCrit ? 'text-rose-400 font-extrabold' : 'text-amber-400') : 'text-cyan-400'}>
              {currentPleuralPressure > -6 ? 'Exp ↑' : 'Insp ↓'}
            </span>
          </div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className={`text-base sm:text-lg font-extrabold tabular-nums ${pPlCrit ? 'text-rose-400' : pPlPos ? 'text-amber-400' : 'text-cyan-300'}`}>
              {currentPleuralPressure > 0 ? `+${currentPleuralPressure}` : currentPleuralPressure}
            </span>
            <span className="text-[10px] text-slate-400 font-medium">cmH₂O</span>
          </div>
        </div>

        {/* Cell 2: Effective Seal */}
        <div className="rounded-lg bg-slate-800/80 border border-slate-700/60 p-2 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
            <span>{isTh ? 'Water Seal จริง' : 'Effective Seal'}</span>
            <span className={`text-[8.5px] font-extrabold px-1 rounded ${sealTrap ? 'bg-amber-900/60 text-amber-300' : 'bg-cyan-900/60 text-cyan-300'}`}>
              {sealTrap ? 'Trap!' : '1-Way'}
            </span>
          </div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-base sm:text-lg font-extrabold tabular-nums text-cyan-300">
              {phys.hSealEffective} cm
            </span>
          </div>
        </div>

        {/* Cell 3: Tidaling Swing */}
        <div className="rounded-lg bg-slate-800/80 border border-slate-700/60 p-2 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
            <span>{isTh ? 'Tidaling (กระเพื่อม)' : 'Tidaling'}</span>
            {ventMode === 'mechanical' && (
              <span className="text-[8px] font-extrabold px-1 rounded bg-indigo-900/80 text-indigo-300">
                {isTh ? 'สลับทิศ' : 'PPV Inv'}
              </span>
            )}
          </div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className={`text-base sm:text-lg font-extrabold tabular-nums ${phys.tidalingActive ? (ventMode === 'mechanical' ? 'text-indigo-300' : 'text-emerald-400') : 'text-amber-400'}`}>
              {phys.tidalingActive ? (breathingOn ? `${phys.meniscusCm > 0 ? `+${phys.meniscusCm}` : phys.meniscusCm} cm` : `${phys.meniscusCm} cm`) : (isTh ? 'นิ่ง (0 cm)' : 'Absent')}
            </span>
            {phys.tidalingActive && breathingOn && (
              <span className="text-[10px] text-slate-400 font-semibold tabular-nums">
                (Δ {tidalingAmplitude})
              </span>
            )}
          </div>
        </div>

        {/* Cell 4: Seal Bubbling / Digital Air Leak */}
        <div className="rounded-lg bg-slate-800/80 border border-slate-700/60 p-2 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
            <span>{system === 'dry' ? (isTh ? 'วัดลมรั่วดิจิทัล' : 'Digital Air Leak') : (isTh ? 'ฟอง Water Seal' : 'Seal Bubbling')}</span>
            {system === 'dry' && (
              <span className={`text-[8px] font-extrabold px-1 rounded ${phys.estsRemovalReady ? 'bg-emerald-900/80 text-emerald-300' : 'bg-amber-900/80 text-amber-300'}`}>
                {phys.estsRemovalReady ? '<30 Safe' : 'Active Leak'}
              </span>
            )}
          </div>
          <div className="mt-1 flex items-baseline gap-1">
            {system === 'dry' ? (
              <>
                <span className="text-base sm:text-lg font-extrabold tabular-nums text-teal-300">
                  {phys.airLeakFlow}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">mL/min</span>
              </>
            ) : (
              <span className={`text-xs sm:text-sm font-extrabold ${phys.waterSealBubbling === 'continuous' ? 'text-rose-400 animate-pulse' : phys.waterSealBubbling === 'intermittent' ? 'text-sky-300' : 'text-slate-400'}`}>
                {phys.waterSealBubbling === 'continuous' ? (isTh ? 'ผุดต่อเนื่อง!' : 'Continuous!') : phys.waterSealBubbling === 'intermittent' ? (isTh ? 'เป็นพักๆ (ลมออก)' : 'Intermittent') : (isTh ? 'ไม่มี' : 'None')}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Critical Visual Alarm Banners */}
      {(hasTensionAlarm || hasRpeAlarm || hasLeakAlarm) && (
        <div className="mt-2.5 space-y-1.5">
          {hasTensionAlarm && (
            <div className="rounded-lg bg-rose-950/90 border border-rose-500/80 px-2.5 py-1.5 text-[11px] font-extrabold text-rose-200 flex items-center justify-between animate-pulse">
              <span className="flex items-center gap-1.5">
                <AlertTriangleIcon className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{t.alarmTension || 'CRITICAL TENSION RISK: P_pl > +5 cmH₂O (Blocked/Clamped)'}</span>
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-rose-600 text-white font-mono uppercase">STAT</span>
            </div>
          )}
          {hasRpeAlarm && (
            <div className="rounded-lg bg-amber-950/90 border border-amber-500/80 px-2.5 py-1.5 text-[11px] font-extrabold text-amber-200 flex items-center justify-between animate-pulse">
              <span className="flex items-center gap-1.5">
                <AlertTriangleIcon className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.alarmRpe || 'RPE WARNING: P_pl < −20 cmH₂O (Trapped Lung / Re-expansion Edema)'}</span>
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-600 text-white font-mono uppercase">ALERT</span>
            </div>
          )}
          {hasLeakAlarm && (
            <div className="rounded-lg bg-sky-950/90 border border-sky-500/80 px-2.5 py-1.5 text-[11px] font-extrabold text-sky-200 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <ActivityIcon className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{t.alarmAirLeak || 'ACTIVE PATIENT AIR LEAK (Continuous Alveolar Bubbling)'}</span>
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-sky-600 text-white font-mono uppercase">LEAK</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// --- Touch-Friendly Slider + Stepper Row ---
const SliderRow = ({ id, label, valueText, valueColor = 'text-slate-700', min, max, step, value, onChange }) => {
  const clamp = (v) => Math.max(min, Math.min(max, +(Math.round(v / step) * step).toFixed(2)));
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between gap-2 text-xs">
        <label htmlFor={id} className="font-bold text-slate-700 leading-tight">{label}</label>
        <span className={`font-extrabold tabular-nums whitespace-nowrap ${valueColor}`}>{valueText}</span>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onChange(clamp(value - step))}
          aria-label={`Decrease ${label}`}
          className="w-7 h-7 shrink-0 rounded-md border border-slate-200 bg-white text-slate-700 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-colors flex items-center justify-center"
        >
          −
        </button>
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="flex-1 min-w-0 h-2 bg-slate-200 rounded-lg cursor-pointer accent-indigo-600"
        />
        <button
          type="button"
          onClick={() => onChange(clamp(value + step))}
          aria-label={`Increase ${label}`}
          className="w-7 h-7 shrink-0 rounded-md border border-slate-200 bg-white text-slate-700 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-colors flex items-center justify-center"
        >
          +
        </button>
      </div>
    </div>
  );
};

// --- Before vs. After Delta Pill ---
const DeltaPill = ({ now, base, unit = '', pressureUnit = 'cmh2o' }) => {
  if (now === null || base === null || now === undefined || base === undefined) return null;
  const factor = pressureUnit === 'mmhg' ? 0.73556 : pressureUnit === 'kpa' ? 0.098067 : 1;
  const unitLabel = unit || (pressureUnit === 'mmhg' ? ' mmHg' : pressureUnit === 'kpa' ? ' kPa' : ' cmH₂O');
  const diff = +((now - base) * factor).toFixed(pressureUnit === 'kpa' ? 2 : 1);
  if (diff === 0) return null;
  const tone = diff > 0
    ? 'bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-950/80 dark:border-amber-700/60 dark:text-amber-300'
    : 'bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/80 dark:border-emerald-700/60 dark:text-emerald-300';
  return (
    <span className={`ml-1.5 inline-block text-[10px] font-bold rounded border px-1 py-px tabular-nums ${tone}`}>
      Δ {diff > 0 ? `+${diff}` : diff}{unitLabel}
    </span>
  );
};

// --- Animated Interactive Bottle Schematic SVG ---
const IcdBottleSvg = ({
  system,
  hSeal,
  hFluid,
  hSuction,
  pPleural,
  bottleHeightCm,
  fault,
  clampPos,
  phys,
  lang,
  dark,
  t,
  onToggleClamp,
  onDragWater,
  chamberSkin = 'classic',
  activeHotspot = null,
  onSelectHotspot = () => {},
}) => {
  const svgRef = useRef(null);
  const [dragTarget, setDragTarget] = useState(null); // null | 'seal' | 'fluid' | 'suction'
  const isTh = lang === 'th';
  const glassStroke = dark ? '#64748b' : '#475569';
  const glassFill = dark ? '#0f172a' : '#f8fafc';
  const tubeStroke = dark ? '#94a3b8' : '#334155';
  const labelText = dark ? '#cbd5e1' : '#334155';
  const dimText = dark ? '#94a3b8' : '#64748b';
  const waterColor = dark ? '#0284c7' : '#38bdf8';
  const waterDeep = dark ? '#0369a1' : '#0ea5e9';
  const fluidColor = dark ? '#b45309' : '#f59e0b';
  const suctionWater = dark ? '#6d28d9' : '#8b5cf6';

  // Lung expansion factor (0.55 collapsed -> 0.96 fully expanded)
  const lungScale = phys.airSuckBackRisk || phys.ventBlocked || pPleural > 5
    ? 0.58
    : Math.max(0.62, Math.min(0.96, 0.80 - pPleural * 0.012));

  const bottleTop = 98;
  const bottleBot = 248;
  const bottleH = bottleBot - bottleTop; // 150px
  const pxPerCmSeal = 12;
  const pxPerCmSuc = 3.1;

  const tipY = 232;
  const b1SurfaceY = system === '1b'
    ? tipY - (hSeal + hFluid) * pxPerCmSeal
    : bottleBot - hFluid * pxPerCmSeal;

  const b2SurfaceY = tipY - hSeal * pxPerCmSeal;
  const b3SurfaceY = tipY - hSuction * pxPerCmSuc;

  const activeSealSurfaceY = system === '1b' ? b1SurfaceY : b2SurfaceY;
  const meniscusPx = phys.meniscusCm * pxPerCmSeal;
  const meniscusY = Math.max(bottleTop - 6, Math.min(tipY, activeSealSurfaceY - meniscusPx));

  const tubeDipY = fault === 'dep_loop' ? 112 : 48;
  const bottleOffsetY = bottleHeightCm > 0 ? -18 : 0;

  // Dynamic viewBox scales crisply to active bottle count — zero horizontal scrolling on phones!
  const vbWidth = chamberSkin === 'pleurevac'
    ? 535
    : (system === '1b' ? 355 : system === '2b' ? 515 : system === 'dry' ? 530 : 740);

  // Convert pointer clientY into SVG local Y coordinate
  const clientYToSvgY = (clientY) => {
    const svg = svgRef.current;
    if (!svg) return tipY;
    const rect = svg.getBoundingClientRect();
    return ((clientY - rect.top) / Math.max(1, rect.height)) * 290;
  };

  const handleWaterDrag = (target, clientY) => {
    if (!onDragWater) return;
    const svgY = clientYToSvgY(clientY) - bottleOffsetY;
    if (target === 'seal') {
      const rawCm = (tipY - svgY) / pxPerCmSeal - (system === '1b' ? hFluid : 0);
      const snapped = Math.max(0, Math.min(8, Math.round(rawCm * 2) / 2));
      onDragWater('seal', snapped);
    } else if (target === 'fluid') {
      const rawCm = (bottleBot - svgY) / pxPerCmSeal;
      const snapped = Math.max(0, Math.min(8, Math.round(rawCm * 2) / 2));
      onDragWater('fluid', snapped);
    } else if (target === 'suction') {
      const rawCm = (tipY - svgY) / pxPerCmSuc;
      const snapped = Math.max(5, Math.min(40, Math.round(rawCm)));
      onDragWater('suction', snapped);
    }
  };

  const startWaterDrag = (target, e) => {
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragTarget(target);
    handleWaterDrag(target, e.clientY);
  };

  const mainTubePath = chamberSkin === 'pleurevac'
    ? `M 110 76 L 148 76 Q 175 ${tubeDipY} 195 34 L 427 34 L 427 ${bottleOffsetY + 68}`
    : system === 'dry'
    ? `M 110 76 L 148 76 Q 175 ${tubeDipY} 210 48 L 280 48 L 280 106`
    : `M 110 76 L 148 76 Q 175 ${tubeDipY} 210 48 L 255 48 L 255 ${tipY + bottleOffsetY}`;

  const leakToB1Path = chamberSkin === 'pleurevac'
    ? `M 168 52 L 195 34 L 427 34 L 427 ${bottleOffsetY + 68}`
    : system === 'dry'
    ? `M 182 49 L 280 48 L 280 106`
    : `M 182 49 L 255 48 L 255 ${tipY + bottleOffsetY}`;

  const b1ToB2Path = `M 293 ${bottleTop - 10 + bottleOffsetY} L 293 ${60 + bottleOffsetY} L 420 ${60 + bottleOffsetY} L 420 ${tipY + bottleOffsetY}`;
  const b2ToB3Path = `M 458 ${bottleTop - 10 + bottleOffsetY} L 458 ${60 + bottleOffsetY} L 575 ${60 + bottleOffsetY} L 575 ${bottleTop + 18 + bottleOffsetY}`;
  const b3VentPath = `M 605 ${bottleTop - 26 + bottleOffsetY} L 605 ${tipY + bottleOffsetY}`;
  const b3OutPath = `M 635 ${bottleTop - 10 + bottleOffsetY} L 635 ${bottleTop - 22 + bottleOffsetY} L 690 ${bottleTop - 22 + bottleOffsetY}`;

  // Tubing motion paths: Air flows through the tubing into the chamber down to the tube tip
  const mainTubeMotionPath = mainTubePath;
  const leakToB1MotionPath = leakToB1Path;
  const b1ToB2MotionPath = b1ToB2Path;
  const b3VentMotionPath = b3VentPath;

  const airDrainingFromChest = phys.waterSealBubbling !== 'none' && fault !== 'tube_leak' && clampPos === 'none';
  const airEnteringAtLeak = fault === 'tube_leak' && clampPos !== 'distal';
  const airMovingB1ToB2 = (system === '2b' || system === '3b') && phys.waterSealBubbling !== 'none';
  const airMovingB2ToB3 = system === '3b' && (phys.waterSealBubbling !== 'none' || phys.suctionBubbling !== 'none') && !phys.ventBlocked;

  return (
    <div className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2 sm:p-3">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${vbWidth} 290`}
        className="w-full h-auto select-none touch-none"
        role="img"
        aria-label="Intercostal Drainage Bottle Simulator Diagram"
        onPointerMove={(e) => { if (dragTarget) handleWaterDrag(dragTarget, e.clientY); }}
        onPointerUp={() => setDragTarget(null)}
        onPointerCancel={() => setDragTarget(null)}
      >
        <defs>
          <path id="icd-path-main" d={mainTubeMotionPath} />
          <path id="icd-path-leak" d={leakToB1MotionPath} />
          <path id="icd-path-b1b2" d={b1ToB2MotionPath} />
          <path id="icd-path-b2b3" d={b2ToB3Path} />
          <path id="icd-path-b3vent" d={b3VentMotionPath} />
          <path id="icd-path-b3out" d={b3OutPath} />
          <linearGradient id="icd-fluid-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={fluidColor} stopOpacity="0.65" />
            <stop offset="100%" stopColor="#991b1b" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="icd-water-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={waterColor} stopOpacity="0.45" />
            <stop offset="100%" stopColor={waterDeep} stopOpacity="0.72" />
          </linearGradient>
          <linearGradient id="icd-suc-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={suctionWater} stopOpacity="0.40" />
            <stop offset="100%" stopColor="#5b21b6" stopOpacity="0.68" />
          </linearGradient>
          <linearGradient id="icd-glass-cylinder" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity={dark ? "0.04" : "0.35"} />
            <stop offset="18%" stopColor="#ffffff" stopOpacity={dark ? "0.15" : "0.70"} />
            <stop offset="35%" stopColor="#ffffff" stopOpacity={dark ? "0.02" : "0.10"} />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="92%" stopColor="#ffffff" stopOpacity={dark ? "0.08" : "0.40"} />
            <stop offset="100%" stopColor="#ffffff" stopOpacity={dark ? "0.02" : "0.15"} />
          </linearGradient>
        </defs>

        {/* Patient Thorax Panel */}
        <g transform="translate(14, 24)">
          <rect x="0" y="0" width="116" height="144" rx="14" fill={glassFill} stroke={glassStroke} strokeWidth="1.8" />
          <text x="58" y="16" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={labelText}>
            {isTh ? 'ช่องเยื่อหุ้มปอด' : 'PLEURAL SPACE'}
          </text>
          {/* Ribcage / Pleural Cavity */}
          <path d="M 22 28 Q 58 20 94 28 L 100 106 Q 58 114 16 106 Z" fill={dark ? '#1e293b' : '#e2e8f0'} stroke={glassStroke} strokeWidth="1.2" />
          
          {/* Living Diaphragmatic Muscle Dome (moves in sync with pleural pressure) */}
          {(() => {
            const diaphragmY = 106 + Math.max(-6, Math.min(8, -pPleural * 0.6));
            return (
              <g>
                <path d={`M 18 106 Q 58 ${diaphragmY} 98 106 L 98 114 Q 58 116 18 114 Z`} fill="#f43f5e" fillOpacity="0.45" stroke="#e11d48" strokeWidth="1" />
                <text x="58" y={diaphragmY + 6.5} textAnchor="middle" fontSize="5.5" fontWeight="800" fill="#fda4af">
                  {isTh ? 'กะบังลม' : 'DIAPHRAGM'}
                </text>
              </g>
            );
          })()}

          {/* Effusion Fluid Pooling Layer inside hemithorax (when fluid accumulates) */}
          {hFluid > 0 && (
            <path d={`M 22 ${106 - Math.min(24, hFluid * 2.5)} Q 58 ${106 + Math.max(-6, Math.min(8, -pPleural * 0.6))} 98 ${106 - Math.min(24, hFluid * 2.5)} L 98 106 Q 58 ${106 + Math.max(-6, Math.min(8, -pPleural * 0.6))} 22 106 Z`} fill="#b45309" fillOpacity="0.45" />
          )}

          {/* Triangle of Safety Interactive Hotspot */}
          <g
            className="cursor-pointer"
            onClick={() => onSelectHotspot(activeHotspot === 'safety' ? null : 'safety')}
            role="button"
            tabIndex={0}
            aria-label="Inspect Triangle of Safety"
          >
            <path d="M 52 32 L 96 36 L 96 82 Z" fill="#06b6d4" fillOpacity={activeHotspot === 'safety' ? "0.28" : "0.10"} stroke="#0891b2" strokeWidth={activeHotspot === 'safety' ? "1.5" : "0.8"} strokeDasharray="2 2" />
            <circle cx="74" cy="50" r="10" fill="#06b6d4" fillOpacity="0.18" stroke="#0891b2" strokeWidth="1" className="animate-pulse" />
            <circle cx="74" cy="50" r="3.5" fill="#0891b2" />
            <text x="74" y="60" textAnchor="middle" fontSize="5.5" fontWeight="800" fill="#0891b2">Safe Zone</text>
          </g>

          {/* Animated Living Lung */}
          <g transform={`translate(52, 70) scale(${lungScale})`}>
            <path d="M -2 -32 C -20 -30 -28 -6 -26 24 C -24 30 -6 30 -2 24 Z" fill="#fda4af" stroke="#e11d48" strokeWidth="1.2" />
            <path d="M 2 -32 C 20 -30 28 -6 26 24 C 24 30 6 30 2 24 Z" fill="#fda4af" stroke="#e11d48" strokeWidth="1.2" />
            {/* Bronchial Tree Branches */}
            <path d="M 0 -18 L -8 -4 M 0 -18 L 8 -4 M -8 -4 L -14 10 M 8 -4 L 14 10" stroke="#e11d48" strokeWidth="0.8" opacity="0.6" strokeLinecap="round" />
          </g>

          {/* Rib 4 Cross-Section + Neurovascular Bundle (VAN) Interactive Hotspot */}
          <g
            className="cursor-pointer"
            onClick={() => onSelectHotspot(activeHotspot === 'van' ? null : 'van')}
            role="button"
            tabIndex={0}
            aria-label="Inspect Subcostal VAN Bundle"
            transform="translate(86, 36)"
          >
            <rect x="0" y="0" width="18" height="8" rx="2.5" fill={activeHotspot === 'van' ? '#f43f5e' : (dark ? '#334155' : '#cbd5e1')} stroke={activeHotspot === 'van' ? '#be123c' : (dark ? '#475569' : '#94a3b8')} strokeWidth="0.8" />
            <text x="9" y="6.5" textAnchor="middle" fontSize="5.5" fontWeight="800" fill={activeHotspot === 'van' ? '#ffffff' : (dark ? '#94a3b8' : '#475569')}>R4</text>
            {/* Subcostal Groove: Vein (blue), Artery (red), Nerve (yellow) */}
            <circle cx="4" cy="9.5" r="1.2" fill="#2563eb" />
            <circle cx="8" cy="9.5" r="1.2" fill="#dc2626" />
            <circle cx="12" cy="9.5" r="1.2" fill="#eab308" />
          </g>

          {/* 5th Intercostal Space Guide Label */}
          <text x="95" y="58" textAnchor="middle" fontSize="6.5" fontWeight="800" fill="#0891b2">5th ICS</text>

          {/* Rib 5 Cross-Section (Safe insertion over superior margin!) */}
          <g transform="translate(86, 62)">
            <rect x="0" y="0" width="18" height="8" rx="2.5" fill={dark ? '#334155' : '#cbd5e1'} stroke={dark ? '#475569' : '#94a3b8'} strokeWidth="0.8" />
            <text x="9" y="6.5" textAnchor="middle" fontSize="5.5" fontWeight="800" fill={dark ? '#94a3b8' : '#475569'}>R5</text>
          </g>

          {/* Sentinel Eye Interactive Hotspot */}
          <g
            className="cursor-pointer"
            onClick={() => onSelectHotspot(activeHotspot === 'sentinel' ? null : 'sentinel')}
            role="button"
            tabIndex={0}
            aria-label="Inspect Sentinel Eye"
          >
            <circle cx="78" cy="52" r={activeHotspot === 'sentinel' ? "5" : "3"} fill="#ffffff" stroke={activeHotspot === 'sentinel' ? "#7c3aed" : tubeStroke} strokeWidth={activeHotspot === 'sentinel' ? "2" : "1.2"} className="animate-pulse" />
            <text x="78" y="45" textAnchor="middle" fontSize="5.5" fontWeight="800" fill={activeHotspot === 'sentinel' ? "#7c3aed" : dimText}>Eye</text>
          </g>

          {/* Pleural Pressure Readout Badge */}
          <rect x="12" y="116" width="92" height="21" rx="6" fill={pPleural > 2 ? '#ffe4e6' : '#ecfeff'} stroke={pPleural > 2 ? '#f43f5e' : '#06b6d4'} strokeWidth="1" />
          <text x="58" y="130" textAnchor="middle" fontSize="10" fontWeight="800" fill={pPleural > 2 ? '#be123c' : '#0e7490'}>
            P: {pPleural > 0 ? `+${pPleural}` : pPleural} cmH₂O
          </text>
        </g>

        {/* Chest Tube Exit & Connecting Tubing to Bottle 1 */}
        <path
          d={mainTubePath}
          fill="none"
          stroke={tubeStroke}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={mainTubePath}
          fill="none"
          stroke={dark ? '#1e293b' : '#e2e8f0'}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {airDrainingFromChest && (
          <TubeAirStream
            pathId="icd-path-main"
            count={phys.waterSealBubbling === 'continuous' ? 6 : 4}
            dur={phys.waterSealBubbling === 'continuous' ? 0.95 : 1.5}
            color="#0284c7"
          />
        )}
        {airEnteringAtLeak && (
          <TubeAirStream
            pathId="icd-path-leak"
            count={5}
            dur={0.85}
            color="#e11d48"
          />
        )}

        {/* Dependent Fluid Loop visual */}
        {fault === 'dep_loop' && (
          <g>
            <path d="M 152 84 Q 175 114 202 82" fill="none" stroke="#f59e0b" strokeWidth="4.5" strokeLinecap="round" />
            <rect x="142" y="116" width="84" height="16" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="1" />
            <text x="184" y="127" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#92400e">
              {isTh ? 'น้ำขัง +8 cmH₂O' : 'Loop +8 cmH₂O'}
            </text>
          </g>
        )}

        {/* Tube Leak (Loose Connector) visual */}
        {fault === 'tube_leak' && (
          <g transform={chamberSkin === 'pleurevac' ? "translate(168, 52)" : "translate(182, 49)"}>
            <circle cx="0" cy="0" r="8" fill="#ffe4e6" stroke="#e11d48" strokeWidth="1.8" />
            <path d="M 0 -18 L 0 -10 M -4 -14 L 0 -10 L 4 -14" stroke="#e11d48" strokeWidth="1.8" fill="none" strokeLinecap="round" />
            <text x="0" y="-22" textAnchor="middle" fontSize="9" fontWeight="800" fill="#e11d48">
              {isTh ? 'จุดท่อรั่ว (อากาศเข้า!)' : 'TUBE LEAK (AIR IN)'}
            </text>
          </g>
        )}

        {/* Kink / Clot Obstruction visual */}
        {fault === 'kink_clot' && (
          <g transform={chamberSkin === 'pleurevac' ? "translate(168, 52)" : "translate(178, 56)"}>
            <rect x="-10" y="-7" width="20" height="14" rx="4" fill="#991b1b" stroke="#fecaca" strokeWidth="1.2" />
            <text x="0" y="-14" textAnchor="middle" fontSize="9" fontWeight="800" fill="#e11d48">
              {isTh ? 'ลิ่มเลือด/สายพับตัน!' : 'CLOT / KINK!'}
            </text>
          </g>
        )}

        {/* Interactive Click-to-Clamp Hotspots on Tubing */}
        <g
          transform="translate(142, 76)"
          className="cursor-pointer outline-none focus:outline-none"
          style={{ outline: 'none' }}
          onClick={() => onToggleClamp && onToggleClamp('chest')}
          onMouseDown={(e) => e.preventDefault()}
          role="button"
          tabIndex={0}
          aria-label={t.clampChest}
        >
          <circle cx="0" cy="0" r="13" fill="transparent" stroke={clampPos === 'chest' ? '#4f46e5' : '#6366f1'} strokeWidth="1.2" strokeDasharray="3 2" opacity={clampPos === 'chest' ? 1 : 0.55} />
          {clampPos === 'chest' ? (
            <>
              <rect x="-5" y="-13" width="10" height="26" rx="2" fill="#4f46e5" stroke="#ffffff" strokeWidth="1.5" />
              <text x="0" y="-18" textAnchor="middle" fontSize="9" fontWeight="800" fill="#4f46e5">
                {isTh ? 'หนีบชิดอก' : 'CLAMPED'}
              </text>
            </>
          ) : (
            <text x="0" y="23" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#6366f1">
              {isTh ? 'คลิกหนีบ' : 'clamp'}
            </text>
          )}
        </g>
        <g
          transform={chamberSkin === 'pleurevac' ? "translate(188, 38)" : "translate(222, 48)"}
          className="cursor-pointer outline-none focus:outline-none"
          style={{ outline: 'none' }}
          onClick={() => onToggleClamp && onToggleClamp('distal')}
          onMouseDown={(e) => e.preventDefault()}
          role="button"
          tabIndex={0}
          aria-label={t.clampDistal}
        >
          <circle cx="0" cy="0" r="13" fill="transparent" stroke={clampPos === 'distal' ? '#4f46e5' : '#6366f1'} strokeWidth="1.2" strokeDasharray="3 2" opacity={clampPos === 'distal' ? 1 : 0.55} />
          {clampPos === 'distal' ? (
            <>
              <rect x="-5" y="-13" width="10" height="26" rx="2" fill="#4f46e5" stroke="#ffffff" strokeWidth="1.5" />
              <text x="0" y="-18" textAnchor="middle" fontSize="9" fontWeight="800" fill="#4f46e5">
                {isTh ? 'หนีบก่อนเข้าขวด' : 'CLAMPED'}
              </text>
            </>
          ) : (
            <text x="0" y="-16" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#6366f1">
              {isTh ? 'คลิกหนีบ' : 'clamp'}
            </text>
          )}
        </g>

        {/* Bottle Elevation Warning Banner inside SVG */}
        {bottleHeightCm > 0 && (() => {
          const bannerW = Math.min(250, vbWidth - 146);
          const bannerX = Math.max(136, Math.min(260, vbWidth - bannerW - 8));
          return (
            <g transform={`translate(${bannerX}, 8)`}>
              <rect x="0" y="0" width={bannerW} height="20" rx="6" fill="#ffe4e6" stroke="#e11d48" strokeWidth="1.2" />
              <text x={bannerW / 2} y="13.5" textAnchor="middle" fontSize={system === '1b' ? "8" : "9.5"} fontWeight="800" fill="#be123c">
                {isTh ? `⚠ ขวดสูงกว่าอก +${bottleHeightCm} ซม. (เสี่ยงไหลย้อน!)` : `⚠ BOTTLE ABOVE CHEST +${bottleHeightCm} cm (SIPHON RISK!)`}
              </text>
            </g>
          );
        })()}


        {/* ================= COMMERCIAL UNIT: PLEUR-EVAC (3-in-1 Compact Casing) ================= */}
        {chamberSkin === 'pleurevac' && (
          <g transform={`translate(200, ${Math.max(4, bottleOffsetY + 14)})`}>
            {/* Floor Base / Stabilizer Feet */}
            <rect x="15" y="222" width="280" height="10" rx="4" fill={dark ? '#334155' : '#64748b'} />
            
            {/* Top Ergonomic Molded Carrying Handle */}
            <path d="M 105 24 C 105 4 205 4 205 24" fill="none" stroke={dark ? '#475569' : '#94a3b8'} strokeWidth="10" strokeLinecap="round" />
            <path d="M 115 24 C 115 10 195 10 195 24" fill="none" stroke={dark ? '#0b1220' : '#f1f5f9'} strokeWidth="4" strokeLinecap="round" />

            {/* Main Integrated Polycarbonate Chassis */}
            <rect x="0" y="24" width="310" height="202" rx="14" fill={glassFill} stroke={glassStroke} strokeWidth="2.5" />
            
            {/* Top Brand Header Strip */}
            <rect x="3" y="27" width="304" height="22" rx="10" fill={dark ? '#1e293b' : '#e2e8f0'} />
            <text x="14" y="42" fontSize="9" fontWeight="900" fill="#4f46e5" letterSpacing="0.8">
              PLEUR-EVAC® A-6000
            </text>
            <text x="296" y="42" textAnchor="end" fontSize="7.5" fontWeight="800" fill={dimText}>
              {system === '3b' ? '3-CHAMBER' : system === '2b' ? '2-CHAMBER' : '1-CHAMBER'}
            </text>

            {/* Suction Vacuum Port above Chamber A */}
            {system === '3b' && (
              <g transform="translate(41, 24)">
                <rect x="-10" y="-8" width="20" height="9" rx="2" fill={phys.ventBlocked ? '#ef4444' : '#7c3aed'} stroke="#a78bfa" strokeWidth="1" />
                <text x="0" y="-12" textAnchor="middle" fontSize="6" fontWeight="800" fill={phys.ventBlocked ? '#ef4444' : '#7c3aed'}>
                  {phys.ventBlocked ? 'OFF' : 'WALL VAC'}
                </text>
              </g>
            )}

            {/* Patient Inlet Fitting above Chamber C */}
            <g transform="translate(227, 24)">
              <rect x="-12" y="-8" width="24" height="9" rx="2" fill={dark ? '#334155' : '#64748b'} stroke={glassStroke} strokeWidth="1" />
              <text x="0" y="-12" textAnchor="middle" fontSize="6" fontWeight="800" fill="#4f46e5">PATIENT</text>
            </g>

            {/* Chamber A: Suction Control Chamber (Left Column) */}
            <g transform="translate(10, 54)">
              <rect x="0" y="0" width="62" height="162" rx="6" fill={dark ? '#0b1324' : '#ffffff'} stroke={glassStroke} strokeWidth="1.2" />
              <text x="31" y="14" textAnchor="middle" fontSize="7" fontWeight="800" fill={dimText}>A: SUCTION</text>
              {system === '3b' ? (
                <>
                  <rect x="2" y={Math.max(20, 160 - hSuction * 5.2)} width="58" height={Math.min(138, hSuction * 5.2)} rx="4" fill="url(#icd-suc-grad)" />
                  {/* Suction Bubbles */}
                  {phys.suctionBubbling && (
                    <g transform="translate(31, 140)">
                      <circle cx="-6" cy="-10" r="3" fill="#ffffff" opacity="0.8" className="icd-bubble-fast" />
                      <circle cx="4" cy="-25" r="2.5" fill="#ffffff" opacity="0.8" className="icd-bubble" />
                      <circle cx="-2" cy="-45" r="3.5" fill="#ffffff" opacity="0.8" className="icd-bubble-fast" />
                    </g>
                  )}
                  {/* Chamber A Drag Handle (adjusts hSuction) */}
                  <g className="cursor-ns-resize" onPointerDown={(e) => startWaterDrag('suction', e)}>
                    <rect x="2" y={Math.max(20, Math.min(150, 160 - hSuction * 5.2)) - 8} width="58" height="16" fill="transparent" />
                    <line x1="4" y1={Math.max(20, Math.min(150, 160 - hSuction * 5.2))} x2="58" y2={Math.max(20, Math.min(150, 160 - hSuction * 5.2))} stroke="#7c3aed" strokeWidth="2" strokeDasharray="4 2" />
                    <text x="12" y={Math.max(20, Math.min(150, 160 - hSuction * 5.2)) - 3} fontSize="8" fontWeight="800" fill="#7c3aed">↕</text>
                  </g>
                  {/* Suction Scale */}
                  {[-10, -15, -20, -25].map((val) => {
                    const sy = 160 - (-val) * 5.2;
                    return (
                      <g key={val}>
                        <line x1="4" y1={sy} x2="14" y2={sy} stroke={dark ? '#94a3b8' : '#64748b'} strokeWidth="1" />
                        <text x="18" y={sy + 2.5} fontSize="5.5" fontWeight="700" fill={dark ? '#94a3b8' : '#64748b'}>{val}</text>
                      </g>
                    );
                  })}
                </>
              ) : (
                <text x="31" y="85" textAnchor="middle" fontSize="6.5" fontWeight="700" fill={dimText}>WATERLESS</text>
              )}
            </g>

            {/* Chamber B: Water Seal & 1-5 Air Leak Meter (Middle Column) */}
            <g transform="translate(78, 54)">
              <rect x="0" y="0" width="70" height="162" rx="6" fill={dark ? '#0b1324' : '#ffffff'} stroke={glassStroke} strokeWidth="1.2" />
              <text x="35" y="14" textAnchor="middle" fontSize="7" fontWeight="800" fill={dimText}>B: WATER SEAL</text>
              {/* Water Seal Pool (2 cmH2O baseline) */}
              <rect x="2" y="126" width="66" height="34" rx="4" fill="url(#icd-water-grad)" />

              {/* Diagnostic Manometer Column Glass Outline */}
              <rect x="8" y="22" width="20" height="106" rx="3" fill="none" stroke={dark ? '#334155' : '#cbd5e1'} strokeWidth="1" strokeDasharray="1 1" />

              {/* Calibrated Manometer Ticks & Labels */}
              {[2, 5, 10, 15, 20].map((val) => {
                const ty = 126 - val * 4.6;
                return (
                  <g key={val}>
                    <line x1="24" y1={ty} x2="28" y2={ty} stroke={dark ? '#64748b' : '#94a3b8'} strokeWidth="0.8" />
                    <text x="30" y={ty + 2} fontSize="5" fontWeight="700" fill={dark ? '#94a3b8' : '#64748b'}>-{val}</text>
                  </g>
                );
              })}

              {/* Dynamic U-Tube Meniscus Column */}
              {(() => {
                const pleurMeniscusY = Math.max(24, Math.min(156, 126 - (phys.tidalingActive ? phys.meniscusCm * 4.6 : 0)));
                return (
                  <>
                    <rect
                      x="9"
                      y={pleurMeniscusY}
                      width="18"
                      height={Math.max(2, 158 - pleurMeniscusY)}
                      rx="3"
                      fill="url(#icd-water-grad)"
                      style={{ transition: 'y 50ms linear, height 50ms linear' }}
                    />
                    <g style={{ transition: 'transform 50ms linear' }} transform={`translate(0, ${pleurMeniscusY})`}>
                      <ellipse cx="18" cy="0" rx="9" ry="2.2" fill="#38bdf8" />
                      <ellipse cx="18" cy="-0.4" rx="5" ry="0.9" fill="#ffffff" opacity="0.75" />
                    </g>
                    {phys.tidalingActive && (
                      <g
                        transform={`translate(38, ${Math.min(118, Math.max(26, pleurMeniscusY))})`}
                        style={{ transition: 'transform 50ms linear' }}
                        pointerEvents="none"
                      >
                        <path d="M 0 0 L 3 -2.5 L 3 2.5 Z" fill={dark ? '#38bdf8' : '#0284c7'} />
                        <rect x="3" y="-6.5" width="27" height="13" rx="3" fill={dark ? 'rgba(15,23,42,0.92)' : 'rgba(255,255,255,0.95)'} stroke={dark ? '#0284c7' : '#38bdf8'} strokeWidth="1" />
                        <text x="16.5" y="2.8" textAnchor="middle" fontSize="6.5" fontWeight="800" fill={dark ? '#38bdf8' : '#0369a1'}>
                          {phys.meniscusCm > 0 ? `+${phys.meniscusCm}` : `${phys.meniscusCm}`}
                        </text>
                      </g>
                    )}
                  </>
                );
              })()}
              
              {/* Air Leak Meter 1 to 5 */}
              <g transform="translate(34, 116)">
                {[1, 2, 3, 4, 5].map((z) => (
                  <rect
                    key={z}
                    x={(z - 1) * 6.5}
                    y="0"
                    width="4.5"
                    height="12"
                    rx="1"
                    fill={phys.waterSealBubbling !== 'none' && z <= (phys.waterSealBubbling === 'continuous' ? 4 : 2) ? '#38bdf8' : (dark ? '#1e293b' : '#e2e8f0')}
                  />
                ))}
                <text x="16" y="20" textAnchor="middle" fontSize="5" fontWeight="800" fill={waterColor}>LEAK 1-5</text>
              </g>

              {/* Water Seal Bubbles */}
              {phys.waterSealBubbling !== 'none' && (
                <g transform="translate(24, 145)">
                  <circle cx="0" cy="-6" r="2.8" fill="#ffffff" opacity="0.85" className="icd-bubble-fast" />
                  <circle cx="6" cy="-18" r="2.2" fill="#ffffff" opacity="0.85" className="icd-bubble" />
                  <circle cx="-4" cy="-30" r="3.2" fill="#ffffff" opacity="0.85" className="icd-bubble-fast" />
                </g>
              )}
            </g>

            {/* Chamber C: Calibrated Fluid Reservoir (Right Multi-Column, 0-2100 mL) */}
            <g transform="translate(154, 54)">
              <rect x="0" y="0" width="146" height="162" rx="6" fill={dark ? '#0b1324' : '#ffffff'} stroke={glassStroke} strokeWidth="1.2" />
              <text x="73" y="14" textAnchor="middle" fontSize="7" fontWeight="800" fill={dimText}>C: COLLECTION (0-2100 mL)</text>
              {/* Internal Inlet Tube from Patient */}
              <line x1="73" y1="0" x2="73" y2="20" stroke={tubeStroke} strokeWidth="4" strokeLinecap="round" />
              {/* Column Dividers */}
              <line x1="48" y1="20" x2="48" y2="158" stroke={glassStroke} strokeWidth="0.8" strokeDasharray="2 2" />
              <line x1="96" y1="20" x2="96" y2="158" stroke={glassStroke} strokeWidth="0.8" strokeDasharray="2 2" />
              
              {/* Fluid Accumulation */}
              {hFluid > 0 && (
                <rect x="2" y={Math.max(22, 160 - hFluid * 13.5)} width="142" height={Math.min(138, hFluid * 13.5)} rx="4" fill="url(#icd-fluid-grad)" />
              )}

              {/* Chamber C Drag Handle (adjusts hFluid) */}
              <g className="cursor-ns-resize" onPointerDown={(e) => startWaterDrag('fluid', e)}>
                <rect x="4" y={Math.max(22, Math.min(150, 160 - hFluid * 13.5)) - 8} width="138" height="16" fill="transparent" />
                <line x1="6" y1={Math.max(22, Math.min(150, 160 - hFluid * 13.5))} x2="140" y2={Math.max(22, Math.min(150, 160 - hFluid * 13.5))} stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
                <text x="16" y={Math.max(22, Math.min(150, 160 - hFluid * 13.5)) - 3} fontSize="8.5" fontWeight="800" fill="#ef4444">↕</text>
              </g>

              {/* Calibrated Markings */}
              {[100, 200, 400, 600, 1000, 1500, 2100].map((v) => {
                const my = 160 - (v / 2100) * 135;
                return (
                  <g key={v}>
                    <line x1="126" y1={my} x2="142" y2={my} stroke={dark ? '#94a3b8' : '#64748b'} strokeWidth="0.8" />
                    <text x="124" y={my + 2} textAnchor="end" fontSize="5" fontWeight="700" fill={dark ? '#94a3b8' : '#64748b'}>{v}</text>
                  </g>
                );
              })}

              {/* Volume Badge at bottom */}
              <rect x="3" y="142" width="140" height="17" rx="4" fill={dark ? '#1e293b' : '#f1f5f9'} />
              <text x="73" y="154" textAnchor="middle" fontSize="8" fontWeight="800" fill="#dc2626">
                {Math.round(hFluid * 100)} mL
              </text>
            </g>

            {/* Specular Highlight Overlay over Pleur-evac */}
            <rect x="0" y="24" width="310" height="202" rx="14" fill="url(#icd-glass-cylinder)" pointerEvents="none" />
          </g>
        )}

        {/* ================= BOTTLE 1 ================= */}
        {chamberSkin === 'classic' && system !== 'dry' && (
          <g transform={`translate(215, ${bottleOffsetY})`}>
          <rect x="0" y={bottleTop} width="110" height={bottleH} rx="12" fill={glassFill} stroke={glassStroke} strokeWidth="2" />
          {/* Stopper */}
          <rect x="20" y={bottleTop - 10} width="70" height="12" rx="4" fill={dark ? '#334155' : '#94a3b8'} />

          {/* Calibrated Volumetric Markings (50 - 1000 mL) on Glass */}
          {[100, 200, 400, 600, 800, 1000].map((vol) => {
            const y = bottleBot - (vol / 100) * 12;
            if (y < bottleTop + 16) return null;
            const isMajor = vol % 200 === 0;
            return (
              <g key={vol} opacity={dark ? 0.65 : 0.85}>
                <line x1={isMajor ? 4 : 8} y1={y} x2={isMajor ? 18 : 13} y2={y} stroke={dark ? '#94a3b8' : '#64748b'} strokeWidth={isMajor ? 1.2 : 0.8} />
                {isMajor && (
                  <text x="21" y={y + 2.5} fontSize="6" fontWeight="700" fill={dark ? '#94a3b8' : '#64748b'}>{vol}</text>
                )}
              </g>
            );
          })}

          {/* Cylindrical Glass Specular Highlight Overlay */}
          <rect x="0" y={bottleTop} width="110" height={bottleH} rx="12" fill="url(#icd-glass-cylinder)" pointerEvents="none" />

          {/* Liquid in Bottle 1 */}
          {system === '1b' ? (
            <>
              {/* Water seal + fluid mixture */}
              {(hSeal + hFluid) > 0 && (
                <rect
                  x="2"
                  y={Math.max(bottleTop + 8, b1SurfaceY)}
                  width="106"
                  height={Math.max(0, bottleBot - Math.max(bottleTop + 8, b1SurfaceY) - 2)}
                  rx="8"
                  fill={hFluid > 0 ? 'url(#icd-fluid-grad)' : 'url(#icd-water-grad)'}
                />
              )}
              {/* Meniscus inside Bottle 1 tube */}
              {phys.tidalingActive && (
                <>
                  <rect
                    x="37.2"
                    y={Math.min(tipY, meniscusY)}
                    width="5.6"
                    height={Math.max(0, tipY - Math.min(tipY, meniscusY))}
                    rx="1.5"
                    fill="url(#icd-water-grad)"
                    style={{ transition: 'y 50ms linear, height 50ms linear' }}
                  />
                  <g style={{ transition: 'transform 50ms linear' }} transform={`translate(0, ${Math.min(tipY, meniscusY)})`}>
                    <ellipse cx="40" cy="0" rx="2.8" ry="1.2" fill="#38bdf8" />
                    <ellipse cx="40" cy="-0.3" rx="1.6" ry="0.6" fill="#ffffff" opacity="0.75" />
                  </g>
                  {/* Floating Tidaling Height Badge */}
                  <g
                    transform={`translate(49, ${Math.min(tipY - 6, Math.max(bottleTop + 14, meniscusY))})`}
                    style={{ transition: 'transform 50ms linear' }}
                    pointerEvents="none"
                  >
                    <path d="M 0 0 L 4 -3 L 4 3 Z" fill={dark ? '#38bdf8' : '#0284c7'} />
                    <rect
                      x="4"
                      y="-8"
                      width="32"
                      height="16"
                      rx="4"
                      fill={dark ? 'rgba(15, 23, 42, 0.92)' : 'rgba(255, 255, 255, 0.95)'}
                      stroke={dark ? '#0284c7' : '#38bdf8'}
                      strokeWidth="1.2"
                    />
                    <text
                      x="20"
                      y="3.5"
                      textAnchor="middle"
                      fontSize="7.5"
                      fontWeight="800"
                      fill={dark ? '#38bdf8' : '#0369a1'}
                    >
                      {phys.meniscusCm > 0 ? `+${phys.meniscusCm}` : `${phys.meniscusCm}`}
                    </text>
                  </g>
                </>
              )}
            </>
          ) : (
            hFluid > 0 && (
              <rect
                x="2"
                y={Math.max(bottleTop + 12, b1SurfaceY)}
                width="106"
                height={Math.max(0, bottleBot - Math.max(bottleTop + 12, b1SurfaceY) - 2)}
                rx="8"
                fill="url(#icd-fluid-grad)"
              />
            )
          )}

          {/* Patient inlet tube in Bottle 1 */}
          {system === '1b' ? (
            <>
              <line x1="40" y1={bottleTop - 10} x2="40" y2={tipY} stroke={tubeStroke} strokeWidth="8" strokeLinecap="round" />
              <line x1="40" y1={bottleTop - 10} x2="40" y2={tipY} stroke={dark ? '#0f172a' : '#f8fafc'} strokeWidth="5.6" strokeLinecap="round" />
            </>
          ) : (
            <line x1="40" y1={bottleTop - 10} x2="40" y2={bottleTop + 26} stroke={tubeStroke} strokeWidth="5" />
          )}

          {/* Air exit / vent tube on right side of Bottle 1 */}
          <line x1="78" y1={bottleTop - 10} x2="78" y2={bottleTop + 18} stroke={tubeStroke} strokeWidth="4" />
          {system === '1b' && (
            <text x="84" y={bottleTop - 15} fontSize="8.5" fontWeight="700" fill={dimText}>
              {isTh ? 'ระบายอากาศ (0)' : 'VENT (0)'}
            </text>
          )}

          {/* Bubbles if 1-bottle */}
          {system === '1b' && phys.waterSealBubbling !== 'none' && (
            <BottleBubbles
              cx={40}
              tipY={tipY}
              surfaceY={Math.max(bottleTop + 8, b1SurfaceY)}
              fast={phys.waterSealBubbling === 'continuous'}
              id="b1"
            />
          )}

          {/* Ruler ticks */}
          {[2, 4, 6, 8].map((cm) => (
            <g key={cm} transform={`translate(96, ${tipY - cm * pxPerCmSeal})`}>
              <line x1="0" y1="0" x2="10" y2="0" stroke={dimText} strokeWidth="1" />
              <text x="-3" y="3" textAnchor="end" fontSize="8" fill={dimText}>{cm}</text>
            </g>
          ))}

          {/* Bottle 1 Drag Handle (adjusts Seal in 1b, Fluid in 2b/3b) */}
          <g
            className="cursor-ns-resize"
            onPointerDown={(e) => startWaterDrag(system === '1b' ? 'seal' : 'fluid', e)}
          >
            <rect
              x="4"
              y={Math.max(bottleTop + 6, Math.min(bottleBot - 10, b1SurfaceY)) - 8}
              width="102"
              height="16"
              fill="transparent"
            />
            <line
              x1="6"
              y1={Math.max(bottleTop + 8, Math.min(bottleBot - 4, b1SurfaceY))}
              x2="104"
              y2={Math.max(bottleTop + 8, Math.min(bottleBot - 4, b1SurfaceY))}
              stroke={system === '1b' ? '#0284c7' : '#d97706'}
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            <text
              x="16"
              y={Math.max(bottleTop + 14, Math.min(bottleBot - 6, b1SurfaceY)) - 3}
              fontSize="8.5"
              fontWeight="800"
              fill={system === '1b' ? '#0284c7' : '#d97706'}
            >
              ↕
            </text>
          </g>

          {/* Bottle 1 Label */}
          <text x="55" y={bottleBot + 16} textAnchor="middle" fontSize="10" fontWeight="800" fill={labelText}>
            {system === '1b'
              ? (isTh ? 'ขวด 1: เก็บสารน้ำ + Seal' : 'B1: Collection + Seal')
              : (isTh ? 'ขวด 1: เก็บสารน้ำ' : 'B1: Collection')}
          </text>
          <text x="55" y={bottleBot + 29} textAnchor="middle" fontSize="9" fontWeight="700" fill={system === '1b' && phys.sealHigh ? '#d97706' : dimText}>
            {system === '1b'
              ? `h_eff = ${phys.hSealEffective} cm (${Math.round(hFluid * 100)} mL)`
              : `${Math.round(hFluid * 100)} mL (+${hFluid} cm)`}
          </text>
        </g>
        )}

        {/* ================= BOTTLE 2 (WATER SEAL) ================= */}
        {chamberSkin === 'classic' && (system === '2b' || system === '3b') && (
          <g>
            {/* Connecting tube B1 -> B2 */}
            <path
              d={b1ToB2Path}
              fill="none"
              stroke={tubeStroke}
              strokeWidth="4.5"
              strokeLinejoin="round"
            />
            {airMovingB1ToB2 && (
              <TubeAirStream
                pathId="icd-path-b1b2"
                count={4}
                dur={phys.waterSealBubbling === 'continuous' ? 0.9 : 1.4}
                color={fault === 'tube_leak' ? '#e11d48' : '#0284c7'}
                radius={2.4}
              />
            )}
            <g transform={`translate(380, ${bottleOffsetY})`}>
              <rect x="0" y={bottleTop} width="110" height={bottleH} rx="12" fill={glassFill} stroke={glassStroke} strokeWidth="2" />
              <rect x="20" y={bottleTop - 10} width="70" height="12" rx="4" fill={dark ? '#334155' : '#94a3b8'} />

              {/* Water Seal Fill */}
              {hSeal > 0 && (
                <rect
                  x="2"
                  y={Math.max(bottleTop + 8, b2SurfaceY)}
                  width="106"
                  height={Math.max(0, bottleBot - Math.max(bottleTop + 8, b2SurfaceY) - 2)}
                  rx="8"
                  fill="url(#icd-water-grad)"
                />
              )}

              {/* Submerged tube + inner meniscus */}
              <line x1="40" y1={bottleTop - 10} x2="40" y2={tipY} stroke={tubeStroke} strokeWidth="8" strokeLinecap="round" />
              <line x1="40" y1={bottleTop - 10} x2="40" y2={tipY} stroke={dark ? '#0f172a' : '#f8fafc'} strokeWidth="5.6" strokeLinecap="round" />
              {phys.tidalingActive && hSeal > 0 && (
                <>
                  <rect
                    x="37.2"
                    y={Math.min(tipY, meniscusY)}
                    width="5.6"
                    height={Math.max(0, tipY - Math.min(tipY, meniscusY))}
                    rx="1.5"
                    fill="url(#icd-water-grad)"
                    style={{ transition: 'y 50ms linear, height 50ms linear' }}
                  />
                  <g style={{ transition: 'transform 50ms linear' }} transform={`translate(0, ${Math.min(tipY, meniscusY)})`}>
                    <ellipse cx="40" cy="0" rx="2.8" ry="1.2" fill="#38bdf8" />
                    <ellipse cx="40" cy="-0.3" rx="1.6" ry="0.6" fill="#ffffff" opacity="0.75" />
                  </g>
                  {/* Floating Tidaling Height Badge */}
                  <g
                    transform={`translate(49, ${Math.min(tipY - 6, Math.max(bottleTop + 14, meniscusY))})`}
                    style={{ transition: 'transform 50ms linear' }}
                    pointerEvents="none"
                  >
                    <path d="M 0 0 L 4 -3 L 4 3 Z" fill={dark ? '#38bdf8' : '#0284c7'} />
                    <rect
                      x="4"
                      y="-8"
                      width="32"
                      height="16"
                      rx="4"
                      fill={dark ? 'rgba(15, 23, 42, 0.92)' : 'rgba(255, 255, 255, 0.95)'}
                      stroke={dark ? '#0284c7' : '#38bdf8'}
                      strokeWidth="1.2"
                    />
                    <text
                      x="20"
                      y="3.5"
                      textAnchor="middle"
                      fontSize="7.5"
                      fontWeight="800"
                      fill={dark ? '#38bdf8' : '#0369a1'}
                    >
                      {phys.meniscusCm > 0 ? `+${phys.meniscusCm}` : `${phys.meniscusCm}`}
                    </text>
                  </g>
                </>
              )}

              {/* Right vent/outlet tube */}
              <line x1="78" y1={bottleTop - 10} x2="78" y2={bottleTop + 18} stroke={tubeStroke} strokeWidth="4" />
              {system === '2b' && (
                <text x="84" y={bottleTop - 15} fontSize="8.5" fontWeight="700" fill={dimText}>
                  {isTh ? 'ระบายอากาศ (0)' : 'VENT (0)'}
                </text>
              )}

              {/* Water seal bubbles */}
              {phys.waterSealBubbling !== 'none' && (
                <BottleBubbles
                  cx={40}
                  tipY={tipY}
                  surfaceY={Math.max(bottleTop + 8, b2SurfaceY)}
                  fast={phys.waterSealBubbling === 'continuous'}
                  id="b2"
                />
              )}

              {/* Ruler ticks */}
              {[2, 4, 6].map((cm) => (
                <g key={cm} transform={`translate(96, ${tipY - cm * pxPerCmSeal})`}>
                  <line x1="0" y1="0" x2="10" y2="0" stroke={dimText} strokeWidth="1" />
                  <text x="-3" y="3" textAnchor="end" fontSize="8" fill={dimText}>{cm}</text>
                </g>
              ))}

              {/* Bottle 2 Drag Handle (adjusts h_seal) */}
              <g className="cursor-ns-resize" onPointerDown={(e) => startWaterDrag('seal', e)}>
                <rect x="4" y={Math.max(bottleTop + 6, Math.min(bottleBot - 10, b2SurfaceY)) - 8} width="102" height="16" fill="transparent" />
                <line x1="6" y1={Math.max(bottleTop + 8, Math.min(bottleBot - 4, b2SurfaceY))} x2="104" y2={Math.max(bottleTop + 8, Math.min(bottleBot - 4, b2SurfaceY))} stroke="#0284c7" strokeWidth="2" strokeDasharray="4 2" />
                <text x="16" y={Math.max(bottleTop + 14, Math.min(bottleBot - 6, b2SurfaceY)) - 3} fontSize="8.5" fontWeight="800" fill="#0284c7">↕</text>
              </g>

              <text x="55" y={bottleBot + 16} textAnchor="middle" fontSize="10" fontWeight="800" fill={labelText}>
                {isTh ? 'ขวด 2: Water Seal' : 'B2: Water Seal'}
              </text>
              <text x="55" y={bottleBot + 29} textAnchor="middle" fontSize="9" fontWeight="700" fill={!phys.sealIntact ? '#e11d48' : '#0284c7'}>
                h_seal = {hSeal} cm {!phys.sealIntact ? (isTh ? '(หลุด!)' : '(OPEN!)') : ''}
              </text>
            </g>
          </g>
        )}

        {/* ================= BOTTLE 3 (SUCTION CONTROL) ================= */}
        {chamberSkin === 'classic' && system === '3b' && (
          <g>
            {/* Connecting tube B2 -> B3 */}
            <path
              d={b2ToB3Path}
              fill="none"
              stroke={tubeStroke}
              strokeWidth="4.5"
              strokeLinejoin="round"
            />
            {airMovingB2ToB3 && (
              <TubeAirStream
                pathId="icd-path-b2b3"
                count={3}
                dur={phys.waterSealBubbling === 'continuous' ? 0.85 : 1.35}
                color="#7c3aed"
                radius={2.3}
              />
            )}
            {phys.suctionBubbling !== 'none' && (
              <>
                <TubeAirStream
                  pathId="icd-path-b3vent"
                  count={phys.suctionBubbling === 'vigorous' ? 5 : 3}
                  dur={phys.suctionBubbling === 'vigorous' ? 0.65 : 1.2}
                  color="#7c3aed"
                  radius={2.2}
                />
                <TubeAirStream
                  pathId="icd-path-b3out"
                  count={phys.suctionBubbling === 'vigorous' ? 4 : 2}
                  dur={phys.suctionBubbling === 'vigorous' ? 0.55 : 1.0}
                  color="#7c3aed"
                  radius={2.2}
                />
              </>
            )}
            <g transform={`translate(545, ${bottleOffsetY})`}>
              <rect x="0" y={bottleTop} width="120" height={bottleH} rx="12" fill={glassFill} stroke={glassStroke} strokeWidth="2" />
              <rect x="18" y={bottleTop - 10} width="84" height="12" rx="4" fill={dark ? '#334155' : '#94a3b8'} />

              {/* Suction Control Water Fill */}
              <rect
                x="2"
                y={Math.max(bottleTop + 8, b3SurfaceY)}
                width="116"
                height={Math.max(0, bottleBot - Math.max(bottleTop + 8, b3SurfaceY) - 2)}
                rx="8"
                fill="url(#icd-suc-grad)"
              />

              {/* Inlet from B2 (left) */}
              <line x1="30" y1={bottleTop - 10} x2="30" y2={bottleTop + 18} stroke={tubeStroke} strokeWidth="4" />

              {/* Center Atmospheric Vent Tube submerged to h_suction */}
              <line x1="60" y1={bottleTop - 26} x2="60" y2={tipY} stroke="#7c3aed" strokeWidth="5.5" />
              <line x1="60" y1={bottleTop - 26} x2="60" y2={tipY} stroke={dark ? '#1e293b' : '#ffffff'} strokeWidth="2.4" />
              <text x="60" y={bottleTop - 30} textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#7c3aed">
                {isTh ? 'ท่ออากาศคุมแรงดูด' : 'ATM VENT'}
              </text>

              {/* Outlet to Wall Suction (right) */}
              <path d={`M 90 ${bottleTop - 10} L 90 ${bottleTop - 22} L 145 ${bottleTop - 22}`} fill="none" stroke={phys.ventBlocked ? '#e11d48' : tubeStroke} strokeWidth="4.5" />
              <rect x="138" y={bottleTop - 34} width="46" height="24" rx="5" fill={phys.ventBlocked ? '#ffe4e6' : '#f3e8ff'} stroke={phys.ventBlocked ? '#e11d48' : '#7c3aed'} strokeWidth="1.2" />
              <text x="161" y={bottleTop - 19} textAnchor="middle" fontSize="8.5" fontWeight="800" fill={phys.ventBlocked ? '#be123c' : '#6d28d9'}>
                {phys.ventBlocked ? 'WALL OFF!' : 'WALL VAC'}
              </text>

              {/* Suction bubbling */}
              {phys.suctionBubbling !== 'none' && (
                <BottleBubbles
                  cx={60}
                  tipY={tipY}
                  surfaceY={Math.max(bottleTop + 8, b3SurfaceY)}
                  fast={phys.suctionBubbling === 'vigorous'}
                  tint="violet"
                  id="b3"
                />
              )}

              {/* Ruler ticks for Suction */}
              {[10, 20, 30, 40].map((cm) => (
                <g key={cm} transform={`translate(106, ${tipY - cm * pxPerCmSuc})`}>
                  <line x1="0" y1="0" x2="10" y2="0" stroke={dimText} strokeWidth="1" />
                  <text x="-3" y="3" textAnchor="end" fontSize="8" fill={dimText}>{cm}</text>
                </g>
              ))}

              {/* Bottle 3 Drag Handle (adjusts h_suction) */}
              <g className="cursor-ns-resize" onPointerDown={(e) => startWaterDrag('suction', e)}>
                <rect x="4" y={Math.max(bottleTop + 6, Math.min(bottleBot - 10, b3SurfaceY)) - 8} width="112" height="16" fill="transparent" />
                <line x1="6" y1={Math.max(bottleTop + 8, Math.min(bottleBot - 4, b3SurfaceY))} x2="114" y2={Math.max(bottleTop + 8, Math.min(bottleBot - 4, b3SurfaceY))} stroke="#7c3aed" strokeWidth="2" strokeDasharray="4 2" />
                <text x="16" y={Math.max(bottleTop + 14, Math.min(bottleBot - 6, b3SurfaceY)) - 3} fontSize="8.5" fontWeight="800" fill="#7c3aed">↕</text>
              </g>

              <text x="60" y={bottleBot + 16} textAnchor="middle" fontSize="10" fontWeight="800" fill={labelText}>
                {isTh ? 'ขวด 3: คุมแรงดูด' : 'B3: Suction Control'}
              </text>
              <text x="60" y={bottleBot + 29} textAnchor="middle" fontSize="9" fontWeight="700" fill={phys.ventBlocked ? '#e11d48' : '#7c3aed'}>
                h_suc = {hSuction} cm ({phys.pOverhead} cmH₂O)
              </text>
            </g>
          </g>
        )}

        {/* ================= DIGITAL / DRY SUCTION CONSOLE ================= */}
        {chamberSkin === 'classic' && system === 'dry' && (
          <g transform="translate(245, 20)">
            {/* Outer Console Shell */}
            <rect x="0" y="24" width="265" height="238" rx="18" fill={glassFill} stroke={glassStroke} strokeWidth="2.5" />

            {/* Integrated Top Handle */}
            <path d="M 90 24 C 90 6 175 6 175 24" fill="none" stroke={dark ? '#475569' : '#94a3b8'} strokeWidth="6" strokeLinecap="round" />
            <path d="M 90 24 C 90 8 175 8 175 24" fill="none" stroke={dark ? '#1e293b' : '#e2e8f0'} strokeWidth="3" strokeLinecap="round" />

            {/* Device Header Bar */}
            <rect x="2" y="26" width="261" height="25" rx="16" fill={dark ? '#1e293b' : '#e2e8f0'} />
            <text x="14" y="43" fontSize="9.5" fontWeight="900" fill="#0d9488" letterSpacing="0.5">
              THOPAZ+ DIGITAL DRAIN
            </text>
            <rect x="188" y="32" width="65" height="14" rx="4" fill="#042f2e" stroke="#14b8a6" strokeWidth="0.8" />
            <text x="220" y="42.5" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#2dd4bf">
              98% 🔋 DRY
            </text>

            {/* Left Canister: Graduated Fluid Reservoir (0-2000 mL) */}
            <g transform="translate(10, 56)">
              <rect x="0" y="0" width="82" height="194" rx="8" fill={dark ? '#0b1324' : '#ffffff'} stroke={glassStroke} strokeWidth="1.6" />
              <text x="41" y="14" textAnchor="middle" fontSize="8" fontWeight="800" fill={dimText}>
                {isTh ? 'กระบอกเก็บน้ำ' : 'COLLECTION'}
              </text>
              {/* Canister volume scale markers */}
              {[2000, 1500, 1000, 500, 200, 100].map((ml, idx) => {
                const markY = 24 + idx * 26;
                return (
                  <g key={ml}>
                    <line x1="66" y1={markY} x2="78" y2={markY} stroke={dimText} strokeWidth="0.8" />
                    <text x="62" y={markY + 2.5} textAnchor="end" fontSize="6.5" fill={dimText}>{ml}</text>
                  </g>
                );
              })}
              {/* Collected Fluid Fill */}
              {hFluid > 0 && (
                <rect
                  x="2"
                  y={Math.max(24, 192 - hFluid * 19)}
                  width="78"
                  height={Math.max(0, 192 - Math.max(24, 192 - hFluid * 19))}
                  rx="6"
                  fill="url(#icd-fluid-grad)"
                />
              )}
              {/* Patient inlet straw inside canister */}
              <line x1="25" y1="0" x2="25" y2="34" stroke={tubeStroke} strokeWidth="3.5" />
              {/* Volume Badge at bottom */}
              <rect x="3" y="174" width="76" height="16" rx="4" fill={dark ? '#1e293b' : '#f1f5f9'} />
              <text x="41" y="185.5" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#b91c1c">
                {Math.round(hFluid * 100)} mL
              </text>
              {/* Drag Handle for Fluid */}
              <g className="cursor-ns-resize" onPointerDown={(e) => startWaterDrag('fluid', e)}>
                <rect x="2" y={Math.max(24, 192 - hFluid * 19) - 8} width="78" height="16" fill="transparent" />
                <line x1="4" y1={Math.max(24, 192 - hFluid * 19)} x2="78" y2={Math.max(24, 192 - hFluid * 19)} stroke="#d97706" strokeWidth="2" strokeDasharray="3 2" />
              </g>
            </g>

            {/* Center: Internal Water Seal & 1-5 Air Leak Meter */}
            <g transform="translate(98, 56)">
              <rect x="0" y="0" width="46" height="194" rx="8" fill={dark ? '#0b1324' : '#ffffff'} stroke={glassStroke} strokeWidth="1.6" />
              <text x="23" y="14" textAnchor="middle" fontSize="7" fontWeight="800" fill={dimText}>
                {isTh ? 'ช่องซีล 1-5' : 'LEAK 1-5'}
              </text>
              {/* Water fill for visual seal */}
              <rect x="2" y="130" width="42" height="62" rx="6" fill="url(#icd-water-grad)" />
              {/* Submerged tube */}
              <line x1="16" y1="20" x2="16" y2="175" stroke={tubeStroke} strokeWidth="5" strokeLinecap="round" />
              <line x1="16" y1="20" x2="16" y2="175" stroke={dark ? '#0f172a' : '#f8fafc'} strokeWidth="3.4" strokeLinecap="round" />
              {/* Tidaling meniscus */}
              {phys.tidalingActive && (
                <>
                  <rect
                    x="14.3"
                    y={Math.max(26, 155 - phys.meniscusCm * 4.2)}
                    width="3.4"
                    height={Math.max(0, 175 - Math.max(26, 155 - phys.meniscusCm * 4.2))}
                    rx="1"
                    fill="#38bdf8"
                    style={{ transition: 'y 50ms linear, height 50ms linear' }}
                  />
                  <ellipse
                    cx="16"
                    cy={Math.max(26, 155 - phys.meniscusCm * 4.2)}
                    rx="1.7"
                    ry="0.8"
                    fill="#7dd3fc"
                    style={{ transition: 'cy 50ms linear' }}
                  />
                </>
              )}
              {/* Air leak 1-5 columns */}
              {[1, 2, 3, 4, 5].map((col) => (
                <text key={col} x="34" y={ col * 23 + 22 } textAnchor="middle" fontSize="7" fontWeight="700" fill={dimText}>
                  {col}
                </text>
              ))}
              {/* Bubbles if leaking */}
              {phys.waterSealBubbling !== 'none' && (
                <BottleBubbles cx={16} tipY={175} surfaceY={130} fast={phys.waterSealBubbling === 'continuous'} id="dry-seal" />
              )}
            </g>

            {/* Right: Digital Touchscreen (Modeled after Thopaz) */}
            <g transform="translate(150, 56)">
              {/* High-Contrast LCD Glass */}
              <rect x="0" y="0" width="105" height="114" rx="8" fill="#041f1e" stroke="#0d9488" strokeWidth="1.5" />

              <text x="52" y="14" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#5eead4" letterSpacing="0.8">
                {isTh ? 'อัตราลมรั่ว' : 'AIR LEAK FLOW'}
              </text>

              {/* Main Digital Numeric Air Leak Readout (mL/min) */}
              <text
                x="52"
                y="46"
                textAnchor="middle"
                fontSize="24"
                fontWeight="900"
                fontFamily="monospace"
                fill={phys.airLeakFlow > 30 ? '#fbbf24' : '#34d399'}
              >
                {phys.airLeakFlow}
              </text>
              <text x="52" y="58" textAnchor="middle" fontSize="8" fontWeight="800" fill="#99f6e4">
                mL/min
              </text>

              {/* Target Suction Line */}
              <line x1="6" y1="64" x2="99" y2="64" stroke="#134e4a" strokeWidth="1" />
              <text x="52" y="76" textAnchor="middle" fontSize="8" fontWeight="700" fill="#a7f3d0">
                {isTh ? 'แรงดูดที่ตั้ง' : 'TARGET P'}: -{hSuction}
              </text>

              {/* ESTS Recommendation Status Pill */}
              <rect
                x="4"
                y="84"
                width="97"
                height="22"
                rx="5"
                fill={phys.obstructed ? '#7f1d1d' : phys.estsRemovalReady ? '#064e3b' : '#78350f'}
                stroke={phys.obstructed ? '#ef4444' : phys.estsRemovalReady ? '#10b981' : '#f59e0b'}
                strokeWidth="1"
              />
              <text
                x="52"
                y="98"
                textAnchor="middle"
                fontSize="7.5"
                fontWeight="800"
                fill={phys.obstructed ? '#fca5a5' : phys.estsRemovalReady ? '#6ee7b7' : '#fde68a'}
              >
                {phys.obstructed
                  ? (isTh ? 'ท่ออุดตัน!' : 'OCCLUDED!')
                  : phys.estsRemovalReady
                  ? (isTh ? '✓ พร้อมถอดสาย' : '✓ READY TO PULL')
                  : (isTh ? 'มีลมรั่ว (ใส่ต่อ)' : 'ACTIVE LEAK')}
              </text>

              {/* Dry Suction Rotary Selector (Below Screen) */}
              <g transform="translate(52, 154)">
                <circle cx="0" cy="0" r="28" fill={dark ? '#1e293b' : '#e2e8f0'} stroke={dark ? '#475569' : '#94a3b8'} strokeWidth="2" />
                <circle cx="0" cy="0" r="22" fill={dark ? '#0f172a' : '#ffffff'} stroke="#0d9488" strokeWidth="1.2" />
                {/* Pointer arrow indicating dialed suction */}
                <line x1="0" y1="0" x2="0" y2="-16" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="0" cy="0" r="4" fill="#0d9488" />
                <text x="0" y="36" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0d9488">
                  -{hSuction} cmH₂O
                </text>
              </g>
            </g>
          </g>
        )}
      </svg>
      <p className="mt-1 text-[10px] font-semibold text-slate-500 text-center">{t.dragHint}</p>
    </div>
  );
};

// --- Modals (Bedside UI pattern: rounded-2xl, backdrop-blur-sm, z-50, Escape closes) ---
const ModalShell = ({ title, subtitle, icon: Icon, tone = 'bg-slate-50', iconTone = 'bg-indigo-100 text-indigo-600', onClose, maxW = 'max-w-3xl', t, children }) => (
  <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 print:hidden" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
    <div className="bg-white w-full rounded-2xl shadow-2xl flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200 overflow-hidden" style={{ maxWidth: maxW === 'max-w-5xl' ? '64rem' : maxW === 'max-w-4xl' ? '56rem' : maxW === 'max-w-xl' ? '36rem' : '48rem' }} role="dialog" aria-modal="true" aria-label={title}>
      <div className={`flex items-start justify-between gap-3 p-4 sm:p-5 border-b border-slate-100 ${tone} shrink-0`}>
        <div className="flex items-center gap-3 min-w-0">
          {Icon && (
            <div className={`p-2 rounded-xl shrink-0 ${iconTone}`}>
              <Icon className="w-5 h-5" />
            </div>
          )}
          <div className="min-w-0">
            <h2 className="text-base sm:text-lg font-extrabold text-slate-800 leading-tight break-words">{title}</h2>
            {subtitle && <p className="text-xs text-slate-500 mt-0.5 break-words">{subtitle}</p>}
          </div>
        </div>
        <button onClick={onClose} aria-label={t.closeBtn} title={t.closeBtn} className="p-2 -m-1 text-slate-400 hover:text-slate-700 hover:bg-white rounded-full transition-colors shrink-0">
          <XIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="p-4 sm:p-5 flex-grow overflow-y-auto bg-white space-y-4 text-xs sm:text-sm">
        {children}
      </div>
      <div className="flex items-center justify-end p-3 sm:p-4 border-t border-slate-100 bg-slate-50 shrink-0">
        <button onClick={onClose} className="px-4 py-2 rounded-lg text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors">{t.closeBtn}</button>
      </div>
    </div>
  </div>
);

const LegendModal = ({ t, lang, onClose }) => {
  const isTh = lang === 'th';
  const row = (sample, desc) => (
    <div className="flex flex-wrap items-center gap-2.5 py-2 border-b border-slate-200 last:border-b-0 text-xs">
      <span className="shrink-0 min-w-[90px] inline-flex items-center gap-1">{sample}</span>
      <span className="text-slate-600 font-medium flex-1 min-w-[180px]">{desc}</span>
    </div>
  );
  const chip = (cls, label) => <span className={`text-[10px] font-bold rounded border px-1.5 py-0.5 whitespace-nowrap ${cls}`}>{label}</span>;

  return (
    <ModalShell title={t.legendTitle} subtitle={t.legendSub} icon={InfoIcon} iconTone="bg-teal-100 text-teal-700" onClose={onClose} maxW="max-w-xl" t={t}>
      <section className="bg-slate-50 rounded-xl border border-slate-200 p-3.5">
        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">{isTh ? 'สีประจำระบบขวดระบาย' : 'System Roles'}</h3>
        {row(chip(SYSTEM_TONE['1b'].badge, isTh ? '1 ขวด' : '1-Bottle'), isTh ? 'รวมขวดเก็บสารน้ำ + Water Seal (แรงต้านเพิ่มเมื่อน้ำขึ้น)' : 'Combined collection + water seal (resistance climbs with fluid)')}
        {row(chip(SYSTEM_TONE['2b'].badge, isTh ? '2 ขวด' : '2-Bottle'), isTh ? 'แยกขวดเก็บสารน้ำ + Water Seal คงที่ 2 ซม.' : 'Isolated collection + constant 2 cm water seal (gravity)')}
        {row(chip(SYSTEM_TONE['3b'].badge, isTh ? '3 ขวด' : '3-Bottle'), isTh ? 'เพิ่มขวดคุมแรงดูดด้วยความลึกน้ำ h_suction' : 'Adds wet suction control chamber regulating negative pressure')}
      </section>
      <section className="bg-slate-50 rounded-xl border border-slate-200 p-3.5">
        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">{isTh ? 'สีทางคลินิกและสถานะความปลอดภัย' : 'Clinical & Safety Coding'}</h3>
        {row(chip('bg-cyan-50 border-cyan-200 text-cyan-700', 'Water Seal / Tidaling'), isTh ? 'ระบบลิ้นทางเดียวและการกระเพื่อมตามจังหวะหายใจ' : 'One-way water seal & respiratory meniscus oscillation')}
        {row(chip('bg-violet-50 border-violet-200 text-violet-700', 'Suction Control'), isTh ? 'แรงดูดลบที่ตั้งค่าในขวดที่ 3 (cmH₂O)' : 'Regulated negative pressure in Bottle 3 (cmH₂O)')}
        {row(chip('bg-emerald-50 border-emerald-200 text-emerald-700', isTh ? 'ปกติ / ปลอดภัย' : 'Optimal / Safe'), isTh ? 'ค่ามาตรฐานหรือการทำงานปกติ' : 'Normal working state or within recommended range')}
        {row(chip('bg-amber-50 border-amber-200 text-amber-800', isTh ? 'เฝ้าระวัง / ข้อควรระวัง' : 'Caution'), isTh ? 'แรงต้านสูงขึ้น น้ำระเหยเร็ว หรือสายตกท้องช้าง' : 'Rising resistance, vigorous suction evaporation, or loop')}
        {row(chip('bg-rose-50 border-rose-200 text-rose-700', isTh ? 'วิกฤต / อันตราย' : 'Critical Alert'), isTh ? 'ท่อรั่ว หลุด seal ปิด suction คา หรือขวดสูงกว่าอก' : 'Tube leak, lost seal, blocked vent, or bottle above chest')}
      </section>
    </ModalShell>
  );
};

const CompareModal = ({ lang, t, onClose }) => {
  const isTh = lang === 'th';
  const th = 'px-3 py-2 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 bg-slate-50 whitespace-nowrap';
  const td = 'px-3 py-2.5 align-top border-b border-slate-100 text-xs text-slate-700';
  const rows = [
    [isTh ? 'จำนวนขวด / ช่อง' : 'Chambers', '1 (Combined)', '2 (Collection + Seal)', '3 (Collection + Seal + Suction)', isTh ? 'รวมเครื่องเดียว (Canister 3 ช่อง + เซนเซอร์/ซีล + ตัวคุมแห้ง)' : 'All-in-One Compact (3-column canister + dry seal/sensor + dry regulator)'],
    [isTh ? 'แรงขับเคลื่อน' : 'Driving Force', isTh ? 'แรงโน้มถ่วง + แรงดันบวกหายใจออก' : 'Gravity + Expiratory pressure', isTh ? 'แรงโน้มถ่วง + แรงดันบวกหายใจออก' : 'Gravity + Expiratory pressure', isTh ? 'แรงดูดลบควบคุม (−15 ถึง −20 cmH₂O)' : 'Regulated negative suction (−15 to −20 cmH₂O)', isTh ? 'แรงดูดแห้งควบคุมแม่นยำ (−10 ถึง −40 cmH₂O)' : 'Precision electronic / dry suction (−10 to −40 cmH₂O)'],
    [isTh ? 'ผลเมื่อสารน้ำสะสม' : 'Effect of Fluid Accumulation', isTh ? 'ความลึก seal เพิ่ม → แรงต้านสูงขึ้น' : 'Raises h_seal_eff → increases resistance', isTh ? 'ไม่มีผล (ขวด 1 รับน้ำแยกต่างหาก)' : 'None (Bottle 1 isolates fluid)', isTh ? 'ไม่มีผล (ขวด 1 รับน้ำแยกต่างหาก)' : 'None (Bottle 1 isolates fluid)', isTh ? 'ไม่มีผล (Canister แยกเก็บได้ถึง 2,000 มล.)' : 'None (Triple-column canister isolates up to 2,000 mL)'],
    [isTh ? 'การคุมแรงดูด' : 'Suction Regulation', isTh ? 'ไม่มี' : 'None', isTh ? 'ไม่มี' : 'None', isTh ? 'ตามความลึกท่ออากาศในขวด 3 (น้ำระเหย)' : 'Submerged depth h_suction in Bottle 3 (evaporation)', isTh ? 'สปริงไดอะแฟรม / ไมโครปั๊มดิจิทัล (เงียบ ไม่ใช้น้ำ)' : 'Internal spring diaphragm / digital pump (silent, zero water)'],
    [isTh ? 'การวัดลมรั่ว (Air Leak)' : 'Air Leak Monitoring', isTh ? 'สังเกตฟองอากาศ (คุณภาพ)' : 'Visual bubbling (qualitative)', isTh ? 'สังเกตฟองอากาศ (คุณภาพ)' : 'Visual bubbling (qualitative)', isTh ? 'สังเกตฟองอากาศ (คุณภาพ)' : 'Visual bubbling (qualitative)', isTh ? 'ตัวเลขดิจิทัลแบบเรียลไทม์ (mL/min) ตามเกณฑ์ ESTS' : 'Continuous digital numeric flow (mL/min) per ESTS'],
    [isTh ? 'ข้อบ่งชี้หลัก' : 'Primary Indications', isTh ? 'ลมรั่วไม่ซับซ้อน / น้ำน้อย' : 'Simple pneumothorax / small effusion', isTh ? 'น้ำ/เลือด/หนองมาก (ไม่ใช้ suction)' : 'Moderate-large effusion, hemothorax, empyema', isTh ? 'ลมรั่วมาก (BPF) / ปอดไม่ขยาย / ใช้เครื่องช่วยหายใจ' : 'Large air leak (BPF), incomplete expansion, ventilated', isTh ? 'หลังผ่าตัดทรวงอก, BPF, ติดตามลมรั่วแม่นยำ & เดินเร็ว' : 'Post-thoracic surgery, BPF, objective leak tracking & early ambulation'],
  ];
  return (
    <ModalShell title={t.guideFull.compare} subtitle={isTh ? 'ตารางเปรียบเทียบระบบระบาย 1, 2, 3 ขวด และระบบดิจิทัล/แรงดูดแห้ง' : 'Side-by-side comparison of 1-, 2-, 3-bottle and Digital / Dry Suction systems'} icon={CompareIcon} iconTone="bg-blue-100 text-blue-700" onClose={onClose} maxW="max-w-5xl" t={t}>
      <div className="rounded-xl border border-slate-200 overflow-x-auto bg-white">
        <table className="w-full min-w-[760px] border-separate border-spacing-0">
          <thead>
            <tr>
              <th className={th + ' sticky left-0 z-10'}>{isTh ? 'หัวข้อ' : 'Feature'}</th>
              <th className={th}><span className="text-sky-700">{isTh ? 'ระบบ 1 ขวด' : '1-Bottle'}</span></th>
              <th className={th}><span className="text-emerald-700">{isTh ? 'ระบบ 2 ขวด' : '2-Bottle'}</span></th>
              <th className={th}><span className="text-purple-700">{isTh ? 'ระบบ 3 ขวด' : '3-Bottle'}</span></th>
              <th className={th}><span className="text-teal-700">{isTh ? 'ดิจิทัล / แรงดูดแห้ง' : 'Digital / Dry Unit'}</span></th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([k, v1, v2, v3, v4], i) => (
              <tr key={i}>
                <td className={td + ' sticky left-0 z-[1] bg-white font-bold text-slate-800 border-r border-slate-100'}>{k}</td>
                <td className={td}>{v1}</td>
                <td className={td}>{v2}</td>
                <td className={td}>{v3}</td>
                <td className={td + ' bg-teal-50/30'}>{v4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SourceLine t={t} k="compare" items={[{ key: 'zisis', label: 'Zisis 2015' }, { key: 'ests_digital', label: 'ESTS / Brunelli 2011' }, { key: 'statpearls', label: 'StatPearls' }]} />
    </ModalShell>
  );
};

const IndicationsModal = ({ lang, t, onClose }) => {
  const isTh = lang === 'th';
  const rows = [
    [isTh ? 'Primary/Secondary Pneumothorax' : 'Pneumothorax (Simple / Spontaneous)', '8–14 Fr (Small-bore)', isTh ? '1 ขวด (ลมน้อย) หรือ 2–3 ขวด (ลมรั่วต่อเนื่อง)' : '1-Bottle (simple) or 2–3 Bottle if persistent air leak'],
    [isTh ? 'น้ำในช่องปอด / หนอง (Effusion / Empyema)' : 'Pleural Effusion / Empyema', '12–14 Fr (BTS small-bore + flush)', isTh ? '2 ขวด (แรงโน้มถ่วง) หรือ 3 ขวด (หากระบายช้า/ข้น)' : '2-Bottle (gravity) or 3-Bottle if slow/loculated'],
    [isTh ? 'เลือดออกในช่องอก (Hemothorax / Trauma)' : 'Traumatic Hemothorax / Tension', '24–32 Fr (Large-bore)', isTh ? '2 ขวด หรือ 3 ขวด (ห้ามใช้ 1 ขวดหากเลือดออกมาก!)' : '2-Bottle or 3-Bottle (avoid 1-Bottle if high output!)'],
    [isTh ? 'หลังผ่าตัดทรวงอก / Bronchopleural Fistula' : 'Post-Thoracotomy / Large BPF', '24–28 Fr', isTh ? '3 ขวด (−15 ถึง −20 cmH₂O) หรือ ดิจิทัล' : '3-Bottle (−15 to −20 cmH₂O regulated suction) or Digital'],
    [isTh ? 'หลังผ่าตัดตัดปอด (Lobectomy / VATS)' : 'Post-Pulmonary Resection (VATS / Lobectomy)', '20–24 Fr', isTh ? 'ระบบดิจิทัล (Digital Thopaz / Dry) — ติดตามอัตราลมรั่วเป็นตัวเลข & ถอดสายเร็วเมื่อ < 30 mL/min' : 'Digital / Dry Unit (e.g. Thopaz) — continuous mL/min air leak tracking & safe removal when < 30 mL/min'],
  ];
  return (
    <ModalShell title={t.guideFull.indications} subtitle={isTh ? 'การเลือกขนาดสายและระบบขวดตามพยาธิสภาพ (BTS 2023 & ATLS)' : 'System & drain size selection by pathology (BTS 2023 & ATLS)'} icon={StethoscopeIcon} iconTone="bg-emerald-100 text-emerald-700" onClose={onClose} maxW="max-w-4xl" t={t}>
      <div className="rounded-xl border border-slate-200 overflow-x-auto bg-white">
        <table className="w-full min-w-[560px] border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="px-3 py-2 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 bg-slate-50">{isTh ? 'ภาวะทางคลินิก' : 'Clinical Condition'}</th>
              <th className="px-3 py-2 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 bg-slate-50">{isTh ? 'ขนาดสายแนะนำ' : 'Recommended Size'}</th>
              <th className="px-3 py-2 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 bg-slate-50">{isTh ? 'ระบบที่เหมาะสม' : 'Preferred Bottle System'}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([c, s, p], i) => (
              <tr key={i}>
                <td className="px-3 py-2.5 border-b border-slate-100 text-xs font-bold text-slate-800">{c}</td>
                <td className="px-3 py-2.5 border-b border-slate-100 text-xs font-bold text-indigo-600 whitespace-nowrap">{s}</td>
                <td className="px-3 py-2.5 border-b border-slate-100 text-xs text-slate-700">{p}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-900 space-y-1">
        <div className="font-extrabold uppercase tracking-wider text-[11px] text-emerald-800">{isTh ? 'ตำแหน่งใส่สายที่ปลอดภัย (Triangle of Safety)' : 'Safe Insertion Zone (Triangle of Safety)'}</div>
        <p>{isTh ? 'ขอบหน้ากล้ามเนื้อ Latissimus dorsi + ขอบหลังกล้ามเนื้อ Pectoralis major + ระดับหัวนม (ICS ที่ 4–5) เหนือขอบบนของซี่โครงเสมอ เพื่อเลี่ยงหลอดเลือดและเส้นประสาทใต้กระดูกซี่โครง (ใช้ Thoracic Ultrasound นำทางก่อนเจาะระบายสารน้ำทุกครั้งตาม BTS 2023)' : 'Bordered by lateral pectoralis major, anterior latissimus dorsi, and 4th–5th ICS (nipple line). Always insert over the SUPERIOR border of the rib to avoid the subcostal neurovascular bundle. Pre-procedural thoracic ultrasound is mandatory for fluid drains (BTS 2023).'}</p>
      </div>
      <SourceLine t={t} k="indications" items={[{ key: 'bts_guideline', label: 'BTS 2023 Guideline' }, { key: 'bts_statement', label: 'BTS 2023 Procedures' }, { key: 'ests_digital', label: 'ESTS / Brunelli 2011' }, { key: 'atls', label: 'ATLS 10th Ed.' }]} />
    </ModalShell>
  );
};

const TroubleshootingGuideModal = ({ lang, t, onClose, onSimulate }) => {
  const isTh = lang === 'th';
  return (
    <ModalShell title={t.guideFull.trouble} subtitle={isTh ? 'แผนผังการตรวจหาตำแหน่งท่อรั่ว (Stepwise Clamp Test) และวิธีแก้ไข' : 'Stepwise Clamp Test to localize tube leaks & rapid bedside fixes'} icon={WrenchIcon} iconTone="bg-rose-100 text-rose-700" onClose={onClose} maxW="max-w-4xl" t={t}>
      <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 space-y-2.5">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <h3 className="font-extrabold text-rose-800 text-sm">{isTh ? 'ขั้นตอนแยก "ท่อรั่วภายนอก" vs "ลมรั่วจากปอด" (Stepwise Clamp Test)' : 'Stepwise Clamp Test: Patient Air Leak vs. External Tube Leak'}</h3>
          <button onClick={() => { onSimulate('tube_leak'); onClose(); }} className="px-2.5 py-1 rounded-lg bg-rose-600 text-white text-[11px] font-bold hover:bg-rose-500 transition-colors inline-flex items-center gap-1">
            <PlayIcon className="w-3 h-3" /> {isTh ? 'ทดลองท่อรั่วในเครื่องจำลอง' : 'Simulate Tube Leak'}
          </button>
        </div>
        <ol className="list-decimal pl-5 space-y-1.5 text-xs text-rose-900">
          <li>{isTh ? 'สังเกตฟองอากาศผุดต่อเนื่องในขวด Water Seal ทั้งจังหวะหายใจเข้าและออก' : 'Observe continuous bubbling in the Water Seal bottle during BOTH inspiration and expiration.'}</li>
          <li>{isTh ? 'ตรวจแผลใส่สายว่ามีรูข้างของสาย (sentinel hole) เลื่อนหลุดออกมานอกผิวหนังหรือไม่' : 'Check chest dressing first to ensure the proximal drainage sentinel hole has not migrated outside the skin.'}</li>
          <li>{isTh ? 'หนีบสายชั่วคราว (< 1–2 วินาที) ชิดผนังอก: ถ้าฟองหยุดทันที = รั่วจากปอดผู้ป่วย (ปลดแคลมป์ทันที!)' : 'Briefly (< 1–2 s) clamp closest to chest wall: if bubbling STOPS = leak is from PATIENT (release clamp immediately!).'}</li>
          <li>{isTh ? 'ถ้าฟองยังผุดต่อ = รอยรั่วอยู่ถัดลงมาในสายหรือขวด → เลื่อนคีมหนีบไล่ลงไปทีละข้อต่อ จุดที่หนีบแล้วฟองหยุดคือข้อต่อที่หลวม/แตก' : 'If bubbling CONTINUES = leak is DISTAL → walk clamp down past each connector until bubbling stops; tighten or replace faulty junction/bottle.'}</li>
        </ol>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900">
        <span className="font-extrabold">{isTh ? 'คำเตือนสำคัญ: ' : 'Critical Rule: '}</span>
        {isTh ? 'ห้ามหนีบสายค้างไว้เกิน 1–2 วินาทีขณะทดสอบ หากมีลมรั่วจากปอดความดันจะพุ่งสูงกลายเป็น Tension Pneumothorax ทันที' : 'Never keep the chest tube clamped while searching for equipment — an active pleural air leak will rapidly cause Tension Pneumothorax.'}
      </div>
      <SourceLine t={t} k="trouble_modal" items={[{ key: 'statpearls', label: 'StatPearls' }, { key: 'bts_statement', label: 'BTS 2023' }]} />
    </ModalShell>
  );
};

const EquationsModal = ({ lang, t, onClose }) => {
  const isTh = lang === 'th';
  const [activeTab, setActiveTab] = useState('hydro'); // 'hydro' | 'poiseuille' | 'elastance' | 'siphon' | 'units'

  // Tab 2: Poiseuille state
  const [selectedFr, setSelectedFr] = useState(28);
  const [selectedFluidId, setSelectedFluidId] = useState('blood');
  const [deltaP, setDeltaP] = useState(10); // cmH2O

  // Tab 3: Elastance state
  const [elastancePresetId, setElastancePresetId] = useState('trapped');
  const [volDrainedMl, setVolDrainedMl] = useState(800); // 0 - 2000 mL

  // Tab 4: Siphon state
  const [dropHeight, setDropHeight] = useState(60); // cm
  const [voidFraction, setVoidFraction] = useState(0.2); // 0 to 1
  const [siphonFluidDensity, setSiphonFluidDensity] = useState(1.0); // 1.0 (water) or 1.05 (blood)

  // Tab 5: Units state
  const [convVal, setConvVal] = useState(20);
  const [convFromUnit, setConvFromUnit] = useState('cmh2o');

  const labData = PHYSICS_LAB_DATA;
  const catheters = labData.catheters;
  const fluids = labData.fluids;
  const elastancePresets = labData.elastancePresets;

  // Selected catheter & fluid calculation
  const curCatheter = catheters.find((c) => c.fr === selectedFr) || catheters[6];
  const curFluid = fluids.find((f) => f.id === selectedFluidId) || fluids[3];

  // Hagen-Poiseuille Q in mL/min:
  const radiusM = (curCatheter.id_mm / 2) * 1e-3;
  const L = 0.4;
  const deltaP_Pa = Math.max(0, deltaP) * 98.0665;
  const eta_Pa_s = curFluid.viscosity_cp * 1e-3;
  const q_m3_s = (Math.PI * Math.pow(radiusM, 4) * deltaP_Pa) / (8 * eta_Pa_s * L);
  const flowRateMlMin = Math.min(9999, Math.round(q_m3_s * 1e6 * 60));

  // Elastance calculations: P_pl = -3 - (Elastance * (V / 1000))
  const curElastanceObj = elastancePresets.find((e) => e.id === elastancePresetId) || elastancePresets[2];
  const currentPpl = -3 - (curElastanceObj.elastance * (volDrainedMl / 1000));
  const isRpeDanger = currentPpl < -20;

  // Siphon calculations: P_siphon = -dropHeight * density * (1 - voidFraction)
  const effectiveSiphonSuction = +(dropHeight * siphonFluidDensity * (1 - voidFraction)).toFixed(1);

  // Unit converter output:
  const valInCmH2O =
    convFromUnit === 'cmh2o'
      ? convVal
      : convFromUnit === 'mmhg'
      ? convVal * 1.3595
      : convVal * 10.197;
  const outMmHg = +(valInCmH2O * 0.73556).toFixed(1);
  const outKPa = +(valInCmH2O * 0.098067).toFixed(2);
  const outCmH2O = +valInCmH2O.toFixed(1);

  // Core hydrostatics cards
  const coreCards = [
    [
      isTh ? '1. ความดันเปิดลิ้น Water Seal (Cracking Pressure)' : '1. Water Seal Cracking Pressure',
      'P_crack = P_overhead + h_seal_eff + P_hydro',
      isTh ? 'ลมหรือสารน้ำจะดันพ้นปลายท่อออกได้เมื่อ P_pleural > P_crack (ในระบบ 1 ขวด h_seal_eff = h_seal + Δh_fluid ดังนั้นน้ำยิ่งเต็ม แรงต้านยิ่งสูง!)' : 'Air/fluid exits only when P_pleural > P_crack. In a 1-bottle system, h_seal_eff = h_seal + Δh_fluid, so fluid buildup increases expiratory resistance!',
    ],
    [
      isTh ? '2. ความสูงน้ำกระเพื่อมในท่อ (Tidaling Meniscus)' : '2. Water-Seal Meniscus Height (Tidaling)',
      'y_meniscus = P_overhead − P_pleural',
      isTh ? 'ในระบบ 1–2 ขวด (P_overhead = 0) เมื่อหายใจเข้า P_pleural = −10 cmH₂O น้ำจะถูกดูดขึ้นไปในหลอดแก้ว 10 ซม. และลดลงเหลือ 4 ซม. เมื่อหายใจออก (−4 cmH₂O)' : 'In 1- & 2-bottle gravity systems (P_overhead = 0), inspiration at −10 cmH₂O draws water 10 cm up the tube; expiration at −4 cmH₂O drops it to 4 cm (6 cm tidaling).',
    ],
    [
      isTh ? '3. แรงดูดสุทธิในระบบ 3 ขวด (Wet Suction Control)' : '3. Three-Bottle Regulated Suction',
      'P_overhead = −min(|P_wall|, h_suction)   |   P_net = −(h_suction − h_seal)',
      isTh ? 'ความลึกท่ออากาศในขวด 3 (เช่น 20 ซม.) เป็นตัวจำกัดความดันลบที่ −20 cmH₂O ต่อให้เปิด wall suction แรง −150 mmHg ก็ไม่ทำให้แรงดูดเพิ่ม แต่ทำให้น้ำระเหยเร็วขึ้น; แรงดูดสุทธิหลังหัก water seal 2 ซม. = −18 cmH₂O' : 'The Bottle 3 submerged vent depth (e.g., 20 cm) clamps chamber pressure at −20 cmH₂O regardless of higher wall vacuum; net effective pleural suction after 2 cm water seal is −18 cmH₂O.',
    ],
    [
      isTh ? '4. การควบคุมแรงดูดแห้งและเกณฑ์ถอดสายดิจิทัล (Dry Suction & ESTS Criteria)' : '4. Dry Suction Regulation & ESTS Digital Threshold',
      'P_overhead = −P_dial (Dry)   |   Q_leak < 30 mL/min (ESTS Safe Removal)',
      isTh ? 'ตัวควบคุมแรงดูดแห้งรักษาความดันลบคงที่โดยไม่ต้องเติมน้ำ; เซนเซอร์วัดการไหลลมดิจิทัลรายงานอัตราลมรั่วต่อเนื่อง หาก Q_leak < 30 mL/min ติดต่อกัน 6–12 ชั่วโมงโดยไม่พุ่งขึ้น ปลอดภัยต่อการถอดสายตามเกณฑ์ ESTS' : 'Dry suction regulators use an internal spring diaphragm to clamp negative pressure precisely without evaporation. Flow sensors report leak rate; Brunelli et al. (ESTS) established < 30 mL/min for 6–12 hours indicates safe drain removal.',
    ],
    [
      isTh ? '5. สรีรวิทยาการกระเพื่อมกลับทิศ (Inverted PPV Tidaling Mechanics)' : '5. Inverted Tidaling under Positive-Pressure Ventilation (PPV)',
      'Spontaneous: Insp (P_pl ↓, y_meniscus ↑)  vs.  PPV: Insp (P_pl ↑, y_meniscus ↓ + Bubbling)',
      isTh ? 'ผู้ป่วยหายใจเอง: กะบังลมดึงช่องอกขยาย ความดันลบมากขึ้น (−10 cmH₂O) น้ำจึงถูกดูดลอยสูงขึ้นในหลอด และฟองผุดตอนหายใจออก; ผู้ป่วยใช้เครื่องช่วยหายใจ: เครื่องดันลมบวกเข้าปอด (+14 cmH₂O) ดันน้ำลดต่ำลงและฟองผุดตอนหายใจเข้า' : 'Spontaneous breathing: Diaphragm contraction creates negative pleural pressure (−10 cmH₂O), drawing water UP the tube on inspiration. Mechanical PPV: Ventilator delivers positive pressure (+14 cmH₂O PIP), forcing water DOWN and triggering bubbling during INSPIRATION.',
    ],
  ];

  return (
    <ModalShell title={t.physLabTitle} subtitle={t.physLabSubtitle} icon={CalcIcon} iconTone="bg-violet-100 text-violet-700" onClose={onClose} maxW="max-w-4xl" t={t}>
      <div className="space-y-4">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar pb-1 border-b border-slate-100">
          {[
            ['hydro', t.physTabHydro],
            ['poiseuille', t.physTabPoiseuille],
            ['elastance', t.physTabElastance],
            ['siphon', t.physTabSiphon],
            ['units', t.physTabUnits],
          ].map(([tabKey, tabLabel]) => (
            <button
              key={tabKey}
              onClick={() => setActiveTab(tabKey)}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tabKey
                  ? 'bg-violet-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tabLabel}
            </button>
          ))}
        </div>

        {/* Tab 1: Core Hydrostatics */}
        {activeTab === 'hydro' && (
          <div className="space-y-3">
            {coreCards.map(([title, eq, desc], i) => (
              <div key={i} className="bg-slate-50 rounded-xl border border-slate-200 p-3.5 space-y-1.5">
                <div className="font-extrabold text-slate-800 text-xs sm:text-sm">{title}</div>
                <div className="font-mono text-xs font-bold bg-white border border-slate-200 rounded-lg px-3 py-2 text-indigo-700 overflow-x-auto">{eq}</div>
                <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Hagen-Poiseuille & Catheter Sizing (r^4 Law) */}
        {activeTab === 'poiseuille' && (
          <div className="space-y-3">
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3 text-xs text-indigo-900 leading-relaxed space-y-1">
              <div className="font-mono font-bold text-indigo-800">
                Hagen-Poiseuille Resistance: R = (8 · η · L) / (π · r⁴)   |   Flow Rate: Q = ΔP / R
              </div>
              <p>{t.physPoiseuillePearl}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Catheter Size Selector */}
              <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-2.5 shadow-xs">
                <label className="block text-[11px] font-extrabold text-slate-600 uppercase tracking-wider">
                  {t.physFrSelector}
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {catheters.map((c) => (
                    <button
                      key={c.fr}
                      onClick={() => setSelectedFr(c.fr)}
                      className={`p-2 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                        selectedFr === c.fr
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-950 font-extrabold ring-1 ring-indigo-400'
                          : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <div className="font-bold">{c.fr} Fr</div>
                      <div className="text-[10px] text-slate-400">{c.id_mm} mm ID</div>
                    </button>
                  ))}
                </div>
                <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-600">
                  <span className="font-bold text-slate-700">{isTh ? 'ข้อบ่งชี้:' : 'Indication:'}</span>{' '}
                  {isTh ? curCatheter.indication_th : curCatheter.indication_en}
                </div>
              </div>

              {/* Fluid Type & Driving Pressure */}
              <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-3 shadow-xs">
                <label className="block text-[11px] font-extrabold text-slate-600 uppercase tracking-wider">
                  {t.physFluidSelector}
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {fluids.map((fl) => (
                    <button
                      key={fl.id}
                      onClick={() => setSelectedFluidId(fl.id)}
                      className={`px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                        selectedFluidId === fl.id
                          ? 'border-violet-600 bg-violet-50 text-violet-900 ring-1 ring-violet-400 shadow-xs'
                          : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600'
                      }`}
                    >
                      {isTh ? fl.name_th : fl.name_en} ({fl.viscosity_cp} cP)
                    </button>
                  ))}
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-slate-700">{t.physDeltaPLabel}</span>
                    <span className="font-bold text-indigo-600">{deltaP} cmH₂O</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={deltaP}
                    onChange={(e) => setDeltaP(+e.target.value)}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                </div>

                {/* Calculation Output Cards */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.physFlowRateLabel}</div>
                    <div className="text-base sm:text-lg font-black text-emerald-600 tabular-nums">{flowRateMlMin} mL/min</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.physRelResistLabel}</div>
                    <div className={`text-base sm:text-lg font-black tabular-nums ${curCatheter.relResist > 10 ? 'text-rose-600' : 'text-slate-700'}`}>
                      {curCatheter.relResist}×
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical Warning if high viscosity + small bore */}
            {selectedFr <= 14 && (selectedFluidId === 'blood' || selectedFluidId === 'empyema') && (
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 text-xs text-rose-900 flex items-start gap-2 shadow-xs">
                <AlertTriangle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
                <div>
                  <div className="font-bold uppercase tracking-wider text-[11px] text-rose-800">
                    {isTh ? 'คำเตือน: ความเสี่ยงท่ออุดตันสูง (High Clot / Debris Risk)' : 'Warning: High Obstruction Risk from Viscous Fluid'}
                  </div>
                  <p className="mt-0.5 leading-relaxed">
                    {isTh
                      ? `สายขนาด ${selectedFr} Fr มีแรงต้านสูงกว่าสาย 28 Fr ถึง ${curCatheter.relResist} เท่า! การระบายเลือดสดหรือหนองข้นจะเกิดการอุดตันได้ง่ายมาก ATLS และศัลยแพทย์ทรวงอกแนะนำให้ใช้สายขนาดใหญ่ 24–32 Fr สำหรับภาวะ Hemothorax`
                      : `A ${selectedFr} Fr catheter imposes ${curCatheter.relResist}× higher resistance than a standard 28 Fr tube! Draining blood or purulent debris through small bores leads to rapid occlusion. ATLS and thoracic surgical guidelines advise ≥ 24–32 Fr for hemothorax.`}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Pleural Elastance (P/V Curve) */}
        {activeTab === 'elastance' && (
          <div className="space-y-3">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 text-xs text-purple-900 leading-relaxed space-y-1">
              <div className="font-mono font-bold text-purple-800">
                Pleural Elastance: E_el,pl = ΔP_pl / ΔV_fluid   |   P_pl = P_initial − (E_el,pl · ΔV)
              </div>
              <p>
                {isTh
                  ? 'ความยืดหยุ่นช่องอก (Pleural Elastance) วัดอัตราการลดลงของความดันช่องอกต่อน้ำ 1 ลิตรที่ดูดออก ในผู้ป่วยที่มีภาวะปอดติดแข็ง (Trapped Lung) ความดันจะดิ่งลงรวดเร็วมากจนเสี่ยงเกิดอาการปวดอกรุนแรงและปอดบวมน้ำ Re-expansion Pulmonary Edema (RPE)'
                  : 'Pleural elastance represents the pressure drop per liter of fluid evacuated. In trapped or non-expandable lungs with rigid visceral peels, pressure plummets rapidly, predisposing to excruciating pleuritic pain and Re-expansion Pulmonary Edema (RPE).'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Controls */}
              <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-3 shadow-xs">
                <label className="block text-[11px] font-extrabold text-slate-600 uppercase tracking-wider">
                  {t.physElastancePresetLabel}
                </label>
                <div className="space-y-1.5">
                  {elastancePresets.map((ep) => (
                    <button
                      key={ep.id}
                      onClick={() => setElastancePresetId(ep.id)}
                      className={`w-full p-2.5 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                        elastancePresetId === ep.id
                          ? 'border-purple-600 bg-purple-50 text-purple-950 font-bold ring-1 ring-purple-400'
                          : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <div className="flex justify-between">
                        <span>{isTh ? ep.name_th : ep.name_en}</span>
                        <span className="font-mono font-bold text-purple-700">{ep.elastance} cmH₂O/L</span>
                      </div>
                      <p className="text-[10px] text-slate-500 font-normal mt-0.5">{isTh ? ep.desc_th : ep.desc_en}</p>
                    </button>
                  ))}
                </div>

                <div className="space-y-1 pt-2 border-t border-slate-100">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-slate-700">{t.physVolDrainedLabel}</span>
                    <span className="font-bold text-purple-700">{volDrainedMl} mL</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    step="50"
                    value={volDrainedMl}
                    onChange={(e) => setVolDrainedMl(+e.target.value)}
                    className="w-full accent-purple-600 cursor-pointer"
                  />
                </div>
              </div>

              {/* Live P/V Graph Display */}
              <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-2 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider mb-2">
                    {isTh ? 'กราฟความดัน-ปริมาตรช่องอก (Pleural Manometry P/V Curve)' : 'Pleural Manometry P/V Curve'}
                  </div>
                  {/* SVG P/V Curve */}
                  <div className="relative w-full h-44 bg-slate-50 rounded-lg border border-slate-200 p-2 overflow-hidden">
                    <svg viewBox="0 0 300 150" className="w-full h-full">
                      {/* Danger zone background P_pl < -20 */}
                      <rect x="35" y="100" width="250" height="40" fill="rgba(244,63,94,0.12)" stroke="rgba(244,63,94,0.25)" strokeDasharray="3 3" />
                      <text x="160" y="125" textAnchor="middle" fill="#f43f5e" fontSize="9" fontWeight="bold">
                        RPE DANGER ZONE (P_pl &lt; −20 cmH₂O)
                      </text>
                      {/* Grid lines */}
                      <line x1="35" y1="20" x2="285" y2="20" stroke="#e2e8f0" strokeWidth="1" />
                      <line x1="35" y1="60" x2="285" y2="60" stroke="#e2e8f0" strokeWidth="1" />
                      <line x1="35" y1="100" x2="285" y2="100" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4 2" />
                      <text x="30" y="23" textAnchor="end" fill="#94a3b8" fontSize="8">0</text>
                      <text x="30" y="63" textAnchor="end" fill="#94a3b8" fontSize="8">−10</text>
                      <text x="30" y="103" textAnchor="end" fill="#f43f5e" fontSize="8" fontWeight="bold">−20</text>
                      <text x="30" y="140" textAnchor="end" fill="#94a3b8" fontSize="8">−30</text>
                      {/* Axes */}
                      <line x1="35" y1="10" x2="35" y2="140" stroke="#94a3b8" strokeWidth="1.5" />
                      <line x1="35" y1="140" x2="285" y2="140" stroke="#94a3b8" strokeWidth="1.5" />
                      <text x="285" y="148" textAnchor="end" fill="#94a3b8" fontSize="8">2000 mL</text>
                      {/* Slope line */}
                      {(() => {
                        const yStart = 20 + 3 * 4;
                        const pEnd = -3 - (curElastanceObj.elastance * 2);
                        const yEnd = 20 + Math.min(30, -pEnd) * 4;
                        return (
                          <>
                            <line x1="35" y1={yStart} x2="285" y2={yEnd} stroke="#9333ea" strokeWidth="2.5" />
                            {(() => {
                              const curX = 35 + (volDrainedMl / 2000) * 250;
                              const curY = 20 + Math.min(30, -currentPpl) * 4;
                              return (
                                <circle cx={curX} cy={curY} r="5" fill={isRpeDanger ? '#e11d48' : '#7c3aed'} stroke="#ffffff" strokeWidth="2" />
                              );
                            })()}
                          </>
                        );
                      })()}
                    </svg>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-600">{t.physCurrentPplLabel}:</span>
                  <span className={`text-base font-black tabular-nums ${isRpeDanger ? 'text-rose-600' : 'text-purple-700'}`}>
                    {currentPpl.toFixed(1)} cmH₂O
                  </span>
                </div>
              </div>
            </div>

            {/* RPE Warning Banner */}
            <div className={`rounded-xl border p-3 text-xs leading-relaxed flex items-start gap-2 shadow-xs ${
              isRpeDanger ? 'bg-rose-50 border-rose-200 text-rose-900' : 'bg-emerald-50 border-emerald-200 text-emerald-900'
            }`}>
              {isRpeDanger ? (
                <>
                  <AlertTriangle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
                  <div>
                    <div className="font-bold uppercase tracking-wider text-[11px] text-rose-800">
                      {isTh ? 'คำเตือน: ความดันช่องอกติดลบวิกฤต (RPE Danger)' : 'Critical Re-expansion Pulmonary Edema (RPE) Risk'}
                    </div>
                    <p className="mt-0.5">{t.physRpeAlert}</p>
                  </div>
                </>
              ) : (
                <>
                  <CheckIcon className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
                  <div>
                    <div className="font-bold uppercase tracking-wider text-[11px] text-emerald-800">
                      {isTh ? 'สภาวะความดันปลอดภัย' : 'Safe Pleural Pressure Range'}
                    </div>
                    <p className="mt-0.5">{t.physRpeSafe}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Tab 4: Gravity Siphon Mechanics & Two-Phase Flow */}
        {activeTab === 'siphon' && (
          <div className="space-y-3">
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-3 text-xs text-sky-900 leading-relaxed space-y-1">
              <div className="font-mono font-bold text-sky-800">
                Siphon Hydrostatic Suction: P_siphon = −ρ · g · Δh · (1 − α)
              </div>
              <p>{t.physSiphonDesc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-3.5 shadow-xs">
                {/* Drop Height */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-slate-700">{t.physDropHeightLabel}</span>
                    <span className="font-bold text-sky-600">{dropHeight} cm</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={dropHeight}
                    onChange={(e) => setDropHeight(+e.target.value)}
                    className="w-full accent-sky-600 cursor-pointer"
                  />
                </div>

                {/* Void Fraction */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-slate-700">{t.physVoidFractionLabel}</span>
                    <span className="font-bold text-indigo-600">{Math.round(voidFraction * 100)}% Air</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={voidFraction}
                    onChange={(e) => setVoidFraction(+e.target.value)}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>0% (Solid Liquid Siphon)</span>
                    <span>100% (Pure Air / Siphon Broken)</span>
                  </div>
                </div>

                {/* Density */}
                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100">
                  <span className="font-bold text-slate-700">{isTh ? 'ความหนาแน่นของเหลว (ρ):' : 'Liquid Density (ρ):'}</span>
                  <div className="flex gap-1.5">
                    {[
                      [1.0, isTh ? 'น้ำ/น้ำเกลือ (1.0)' : 'Water (1.0)'],
                      [1.05, isTh ? 'เลือด (1.05)' : 'Blood (1.05)'],
                    ].map(([dens, lbl]) => (
                      <button
                        key={dens}
                        onClick={() => setSiphonFluidDensity(dens)}
                        className={`px-2 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                          siphonFluidDensity === dens
                            ? 'bg-sky-600 text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {lbl}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Siphon Readout */}
              <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-3 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider mb-2">
                    {t.physSiphonSuctionLabel}
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                    <div className="text-2xl sm:text-3xl font-black text-sky-600 tabular-nums">
                      −{effectiveSiphonSuction} cmH₂O
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {voidFraction === 0
                        ? (isTh ? 'เกิดแรงดูดกาลักน้ำสมบูรณ์ (−Δh)' : 'Full hydrostatic siphon active (−Δh)')
                        : voidFraction >= 0.8
                        ? (isTh ? 'ลำน้ำขาดตอน กาลักน้ำยุบตัว' : 'Siphon column broken by air entrainment')
                        : (isTh ? 'การไหลแบบ 2 สถานะ (ฟองและน้ำสลับช่วง)' : 'Two-phase bubbly flow / dampened siphon')}
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100 leading-snug">
                  <span className="font-bold text-slate-700">{isTh ? 'ความสำคัญทางคลินิก:' : 'Clinical Significance:'}</span>{' '}
                  {isTh
                    ? 'หากสายระบายห้อยต่ำเป็นท้องช้างและมีน้ำเต็มสาย จะเกิดแรงดูดดึงน้ำออกจากช่องอกมากถึง −60 cmH₂O แต่ทันทีที่ลมจากปอดรั่วเข้ามาเป็นฟอง ลำน้ำจะขาดตอน แรงดูดจะหายไปทันที'
                    : 'A fluid-filled loop hanging down can exert −60 cmH₂O siphon suction. However, the instant an air leak releases bubbles into the tube, the liquid column fragments and the siphon collapses.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Multi-Unit Pressure Transducer */}
        {activeTab === 'units' && (
          <div className="space-y-3">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 leading-relaxed flex items-start gap-2 shadow-xs">
              <AlertTriangle className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
              <div>
                <div className="font-bold uppercase tracking-wider text-[11px] text-amber-800">
                  {t.physWallWarningTitle}
                </div>
                <p className="mt-0.5">{t.physWallWarningDesc}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Interactive Unit Converter */}
              <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-3 shadow-xs">
                <div className="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider">
                  {t.physUnitConverterTitle}
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    value={convVal}
                    onChange={(e) => setConvVal(+e.target.value)}
                    className="w-28 border border-slate-200 rounded-lg px-2.5 py-1.5 text-base font-bold text-slate-800 bg-slate-50 text-right"
                  />
                  <div className="flex gap-1">
                    {['cmh2o', 'mmhg', 'kpa'].map((u) => (
                      <button
                        key={u}
                        onClick={() => setConvFromUnit(u)}
                        className={`px-2 py-1 rounded text-xs font-extrabold uppercase transition-all cursor-pointer ${
                          convFromUnit === u ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {u === 'cmh2o' ? 'cmH₂O' : u === 'mmhg' ? 'mmHg' : 'kPa'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Conversion Grid */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-center">
                    <div className="text-[10px] font-bold text-slate-400">cmH₂O</div>
                    <div className="text-sm font-black text-slate-800 tabular-nums">{outCmH2O}</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-center">
                    <div className="text-[10px] font-bold text-slate-400">mmHg</div>
                    <div className="text-sm font-black text-indigo-700 tabular-nums">{outMmHg}</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-center">
                    <div className="text-[10px] font-bold text-slate-400">kPa</div>
                    <div className="text-sm font-black text-violet-700 tabular-nums">{outKPa}</div>
                  </div>
                </div>
              </div>

              {/* Classic Bedside Equivalence Reference Table */}
              <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-2 shadow-xs">
                <div className="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider">
                  {isTh ? 'ตารางเทียบค่าความดันมาตรฐานข้างเตียง' : 'Standard Bedside Equivalence Reference'}
                </div>
                <div className="rounded-lg border border-slate-200 overflow-hidden text-xs">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-[10px] text-slate-500 font-bold uppercase">
                        <th className="p-1.5 text-left">Clinical Benchmark</th>
                        <th className="p-1.5 text-right">cmH₂O</th>
                        <th className="p-1.5 text-right">mmHg</th>
                        <th className="p-1.5 text-right">kPa</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                      <tr>
                        <td className="p-1.5 font-sans font-medium text-slate-700">Standard Water Seal (2 cm)</td>
                        <td className="p-1.5 text-right font-bold text-slate-800">+2.0</td>
                        <td className="p-1.5 text-right text-indigo-700">+1.5</td>
                        <td className="p-1.5 text-right text-slate-500">+0.20</td>
                      </tr>
                      <tr>
                        <td className="p-1.5 font-sans font-medium text-slate-700">Standard Suction Target</td>
                        <td className="p-1.5 text-right font-bold text-slate-800">−20.0</td>
                        <td className="p-1.5 text-right text-indigo-700">−14.7</td>
                        <td className="p-1.5 text-right text-slate-500">−1.96</td>
                      </tr>
                      <tr>
                        <td className="p-1.5 font-sans font-medium text-slate-700">RPE Danger Threshold</td>
                        <td className="p-1.5 text-right font-bold text-rose-600">−20.0</td>
                        <td className="p-1.5 text-right text-rose-600">−14.7</td>
                        <td className="p-1.5 text-right text-rose-600">−1.96</td>
                      </tr>
                      <tr>
                        <td className="p-1.5 font-sans font-medium text-slate-700">Wall Suction Regulator Dial</td>
                        <td className="p-1.5 text-right font-bold text-amber-700">−108.8</td>
                        <td className="p-1.5 text-right text-amber-700">−80.0</td>
                        <td className="p-1.5 text-right text-amber-700">−10.67</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Source attribution line */}
        <SourceLine
          t={t}
          k="math_modal"
          items={[
            { key: 'poiseuille_ref', label: 'Poiseuille 1840' },
            { key: 'light_manometry', label: 'Light (Manometry) 1980' },
            { key: 'zisis', label: 'Zisis 2015' },
            { key: 'ests_digital', label: 'ESTS / Brunelli 2011' },
          ]}
        />
      </div>
    </ModalShell>
  );
};

const PleurodesisModal = ({ lang, t, onClose, onSimulate }) => {
  const isTh = lang === 'th';
  const [activeTab, setActiveTab] = useState('indications');

  const data = PLEURODESIS_DATA;
  const indications = data.indications[lang] || data.indications.en;
  const agents = data.agents[lang] || data.agents.en;
  const protocol = data.protocol[lang] || data.protocol.en;
  const comparison = data.comparison;

  return (
    <ModalShell
      title={t.guideFull.pleurodesis}
      subtitle={isTh ? 'แนวทางเวชปฏิบัติการระงับน้ำในช่องอกมะเร็ง การหยอดแป้งทัลก์ และสายระบายค้าง (BTS 2023, TIME1 & AMPLE)' : 'Malignant pleural effusion management, talc slurry clamping protocol & indwelling catheters (BTS 2023, TIME1 & AMPLE)'}
      icon={SyringeIcon}
      iconTone="bg-purple-100 text-purple-700"
      onClose={onClose}
      maxW="max-w-4xl"
      t={t}
    >
      <div className="space-y-4">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar pb-1 border-b border-slate-100">
          {[
            ['indications', t.pleuroTabIndications || (isTh ? 'ข้อบ่งชี้ & ปอดติดแข็ง' : 'Indications & Trapped Lung')],
            ['agents', t.pleuroTabAgents || (isTh ? 'สารระคายเคือง & ขนาดยา' : 'Agents & Dosing')],
            ['protocol', t.pleuroTabProtocol || (isTh ? 'ขั้นตอนการหนีบสาย & เฝ้าระวัง' : 'Bedside Protocol & Clamping')],
            ['comparison', t.pleuroTabIpc || (isTh ? 'เปรียบเทียบ Talc vs สาย IPC' : 'Talc vs. IPC Matrix')],
          ].map(([tabKey, tabLabel]) => (
            <button
              key={tabKey}
              onClick={() => setActiveTab(tabKey)}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tabKey
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tabLabel}
            </button>
          ))}
        </div>

        {/* Tab 1: Indications & Trapped Lung */}
        {activeTab === 'indications' && (
          <div className="space-y-3">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-3.5 space-y-1.5">
              <h3 className="font-extrabold text-purple-900 text-xs sm:text-sm">
                {isTh ? 'หลักการประเมินความสามารถในการขยายตัวของปอด (Lung Expandability)' : 'Evaluation of Lung Expandability & Apposition'}
              </h3>
              <p className="text-xs text-purple-800 leading-relaxed">
                {isTh
                  ? 'ความสำเร็จของการทำ Chemical Pleurodesis ขึ้นอยู่กับว่า "ผิวปอดสามารถขยายมาแนบชิดกับผนังอกได้หรือไม่" (ต้องมี apposition ≥ 80–90%) หากปอดติดแข็ง (Trapped Lung) การหยอดสารระคายเคืองจะไม่เกิดผลและทรมานผู้ป่วยโดยเปล่าประโยชน์'
                  : 'The clinical success of chemical pleurodesis strictly depends on whether the visceral pleura can achieve direct apposition with the parietal chest wall (≥ 80–90% contact). In non-expandable or trapped lungs, chemical slurry will fail.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {indications.map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-2 flex flex-col justify-between shadow-xs">
                  <div>
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider mb-1 ${i === 0 ? 'bg-emerald-100 text-emerald-800' : i === 1 ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'}`}>
                      {i === 0 ? (isTh ? 'ผู้ป่วยที่เหมาะสม' : 'Prime Candidate') : i === 1 ? (isTh ? 'ข้อห้ามทำ / ต้องเลี่ยง' : 'Contraindication') : (isTh ? 'ข้อบ่งชี้ทางเลือก' : 'Special Indication')}
                    </span>
                    <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-700 leading-snug">
                      <span className="text-purple-600">★ </span>{item.criteria}
                    </p>
                    {i === 1 && (
                      <button
                        onClick={() => { onSimulate('trapped_lung'); onClose(); }}
                        className="mt-2 w-full px-2.5 py-1.5 rounded-lg bg-indigo-600 text-white text-[11px] font-bold hover:bg-indigo-500 transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <PlayIcon className="w-3 h-3" /> {t.pleuroSimTrapped}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Agents & Dosing */}
        {activeTab === 'agents' && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {agents.map((ag, i) => (
                <div key={i} className={`rounded-xl border p-3.5 space-y-2 bg-white shadow-xs ${i === 0 ? 'border-purple-300 ring-1 ring-purple-100' : 'border-slate-200'}`}>
                  <div className="flex items-center justify-between gap-1 flex-wrap">
                    <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm">{ag.name}</h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-purple-50 text-purple-700 border border-purple-200">
                      {ag.success}
                    </span>
                  </div>
                  <div className="text-xs space-y-1">
                    <div className="flex gap-1.5 text-slate-700">
                      <span className="font-bold text-slate-400 shrink-0">{isTh ? 'ขนาดยา:' : 'Dose:'}</span>
                      <span className="font-bold text-purple-900">{ag.dose}</span>
                    </div>
                    <div className="flex gap-1.5 text-slate-600">
                      <span className="font-bold text-slate-400 shrink-0">{isTh ? 'ตัวทำละลาย:' : 'Vehicle:'}</span>
                      <span>{ag.vehicle}</span>
                    </div>
                  </div>
                  <p className="text-[11px] font-medium text-slate-500 bg-slate-50 rounded-lg p-2 border border-slate-100 leading-snug">
                    <span className="font-bold text-indigo-600">Pearls: </span>{ag.pearl}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 leading-relaxed">
              <span className="font-extrabold uppercase tracking-wider text-[11px] text-amber-800 mr-1">{isTh ? 'ข้อควรระวังเรื่องยาชา (Lidocaine Safety):' : 'Intrapleural Lidocaine Safety:'}</span>
              {isTh
                ? 'ขนาดยาชา Lidocaine สูงสุดต้องไม่เกิน 3 มก./กก. (ประมาณ 10–20 มล. ของ 1% Lidocaine) โดยหยอดเข้าช่องอก 10–15 นาทีก่อนหยอด Talc เพื่อให้เยื่อหุ้มปอดชาเต็มที่ก่อนเกิดการระคายเคือง'
                : 'Maximum intrapleural lidocaine dose must not exceed 3 mg/kg (typically 10–20 mL of 1% lidocaine). Instill 10–15 min prior to talc slurry to achieve thorough parietal pleural anesthesia.'}
            </div>
          </div>
        )}

        {/* Tab 3: Bedside Clamping Protocol */}
        {activeTab === 'protocol' && (
          <div className="space-y-3">
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-3.5 space-y-1">
              <div className="font-extrabold uppercase tracking-wider text-[11px] text-rose-800 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                {t.pleuroEmergencyWarning}
              </div>
              <p className="text-xs text-rose-900 leading-relaxed">
                {isTh
                  ? 'ระหว่างหนีบสาย 1 ชั่วโมง หากผู้ป่วยมีอาการเหนื่อย แน่นหน้าอก หายใจเร็ว เหงื่อแตก ชีพจรเต้นเร็ว หรือออกซิเจนปลายนิ้วลดลง ให้ปลดคีมหนีบทันที! ห้ามฝืนหนีบต่อเด็ดขาด'
                  : 'During the 1-hour dwell time, if the patient develops shortness of breath, desaturation, tachypnea, or tachycardia: UNCLAMP IMMEDIATELY! Never keep clamped in the presence of acute respiratory distress.'}
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs divide-y divide-slate-100">
              {protocol.map((stepItem, i) => (
                <div key={i} className="p-3 text-xs flex gap-3 items-start">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${i === 2 ? 'bg-purple-600 text-white' : i === 3 ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                    {i + 1}
                  </div>
                  <div className="space-y-0.5 flex-1 min-w-0">
                    <div className="font-extrabold text-slate-800 text-xs sm:text-sm flex items-center justify-between gap-2 flex-wrap">
                      <span>{stepItem.step}</span>
                      {i === 2 && (
                        <button
                          onClick={() => { onSimulate('pleurodesis_dwell'); onClose(); }}
                          className="px-2 py-0.5 rounded bg-purple-600 text-white text-[10px] font-bold hover:bg-purple-500 transition-colors inline-flex items-center gap-1 cursor-pointer"
                        >
                          <PlayIcon className="w-2.5 h-2.5" /> {t.pleuroSimDwell}
                        </button>
                      )}
                    </div>
                    <p className="text-slate-600 leading-relaxed">{stepItem.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: IPC vs Pleurodesis Comparison Matrix */}
        {activeTab === 'comparison' && (
          <div className="space-y-3">
            <div className="rounded-xl border border-slate-200 overflow-x-auto bg-white shadow-xs">
              <table className="w-full min-w-[560px] border-separate border-spacing-0">
                <thead>
                  <tr>
                    {comparison.headers[lang].map((h, i) => (
                      <th
                        key={i}
                        className={`px-3 py-2 text-left text-[10px] font-bold uppercase tracking-wider border-b border-slate-200 ${
                          i === 1 ? 'bg-purple-50 text-purple-900' : i === 2 ? 'bg-teal-50 text-teal-900' : 'bg-slate-50 text-slate-500'
                        }`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.rows[lang].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50">
                      <td className="px-3 py-2.5 border-b border-slate-100 text-xs font-bold text-slate-800 whitespace-nowrap">{row[0]}</td>
                      <td className="px-3 py-2.5 border-b border-slate-100 text-xs text-purple-950 font-medium bg-purple-50/30">{row[1]}</td>
                      <td className="px-3 py-2.5 border-b border-slate-100 text-xs text-teal-950 font-medium bg-teal-50/30">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-[11px] text-slate-600 space-y-1">
              <p className="font-bold text-slate-700">
                {isTh ? 'ฉันทามติเวชปฏิบัติสมัยใหม่ (BTS 2023 & AMPLE/IPC-Plus Trials):' : 'Modern Clinical Consensus (BTS 2023 & AMPLE/IPC-Plus Trials):'}
              </p>
              <p className="leading-relaxed">
                {isTh
                  ? 'ทั้งการทำ Talc Slurry และการใส่สาย IPC เป็นทางเลือกที่มีประสิทธิภาพทัดเทียมกันในการบรรเทาอาการเหนื่อย หากปอดขยายตัวได้ดี การตัดสินใจเลือกขึ้นอยู่กับความต้องการของผู้ป่วยว่าอยากนอน รพ. สั้นๆ ทำจบครั้งเดียว (Talc) หรืออยากกลับบ้านทันทีและระบายน้ำเองที่บ้าน (IPC); แต่หากเป็นปอดติดแข็ง (Trapped Lung) สาย IPC เป็นทางเลือกเดียวที่มีประสิทธิผล'
                  : 'Both Talc Slurry pleurodesis and Indwelling Pleural Catheters (IPC) achieve clinically equivalent relief of dyspnea in expandable lungs. Patient preference for avoiding hospitalization favors IPC, whereas desire for a definitive one-off procedure without long-term home equipment favors talc slurry. For trapped lung, IPC is the only effective modality.'}
              </p>
            </div>
          </div>
        )}

        {/* Source attribution line */}
        <SourceLine
          t={t}
          k="pleuro_modal"
          items={[
            { key: 'bts_guideline', label: 'BTS Pleural 2023' },
            { key: 'time1_trial', label: 'TIME1 Trial (JAMA 2015)' },
            { key: 'ample_trial', label: 'AMPLE Trial (JAMA 2017)' },
            { key: 'statpearls', label: 'StatPearls' },
          ]}
        />
      </div>
    </ModalShell>
  );
};

const RemovalModal = ({ lang, t, onClose }) => {
  const isTh = lang === 'th';
  return (
    <ModalShell title={t.guideFull.removal} subtitle={isTh ? 'กฎการหนีบสายที่ปลอดภัย และเกณฑ์การถอดสาย ICD' : 'Safe clamping rules & chest tube removal criteria'} icon={ShieldCheckIcon} iconTone="bg-amber-100 text-amber-700" onClose={onClose} maxW="max-w-3xl" t={t}>
      <div className="bg-rose-50 border border-rose-200 rounded-xl p-3.5 space-y-1.5">
        <h3 className="font-extrabold text-rose-800 text-xs uppercase tracking-wider">{isTh ? 'กฎเหล็กเรื่องการหนีบสาย (Clamping Rules)' : 'Chest Tube Clamping Rules (BTS 2023)'}</h3>
        <ul className="list-disc pl-5 text-xs text-rose-900 space-y-1">
          <li>{isTh ? 'ห้ามหนีบสายในผู้ป่วยที่มีลมรั่วอยู่ (bubbling) เพราะจะเกิด Tension Pneumothorax' : 'NEVER clamp a bubbling chest drain — rapid Tension Pneumothorax risk.'}</li>
          <li>{isTh ? 'หนีบได้ชั่วคราว (< 1–2 วินาที) เพื่อเปลี่ยนขวด หรือทำ Clamp Test หาจุดท่อรั่วเท่านั้น' : 'Brief clamping (< 1–2 s) is allowed only during bottle exchange or stepwise leak localization.'}</li>
          <li>{isTh ? 'การหนีบสายทดสอบก่อนถอด (clamping trial) ทำเฉพาะบางกรณีตามดุลยพินิจแพทย์เมื่อไม่มีฟองอากาศและต้องเฝ้าระวังใกล้ชิดพร้อมปลดทันทีหากเหนื่อย' : 'Routine clamping before pneumothorax drain removal is generally discouraged; if done selectively, monitor closely and unclamp immediately at any dyspnea.'}</li>
        </ul>
      </div>
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 space-y-1.5">
        <h3 className="font-extrabold text-emerald-800 text-xs uppercase tracking-wider">{isTh ? 'เกณฑ์พิจารณาถอดสาย ICD (Removal Criteria)' : 'Criteria for Chest Tube Removal'}</h3>
        <ul className="list-disc pl-5 text-xs text-emerald-900 space-y-1">
          <li>{isTh ? 'ปอดขยายตัวเต็มที่บนภาพรังสีทรวงอก (CXR) และอาการทางคลินิกคงที่' : 'Full lung re-expansion confirmed clinically and on CXR.'}</li>
          <li>{isTh ? 'ไม่มีฟองอากาศรั่ว (no bubbling) ต่อเนื่องอย่างน้อย 24 ชั่วโมง (และเปลี่ยนเป็น gravity water seal แล้วไม่กลับมารั่ว)' : 'Complete cessation of air leak (no bubbling for ≥ 24 h on water seal).'}</li>
          <li>{isTh ? 'ปริมาณสารน้ำลดลง < 100–200 มล./วัน (ขึ้นกับข้อบ่งชี้เริ่มต้น) และสารน้ำใสไม่เป็นเลือดสด/หนอง' : 'Fluid output reduced below threshold (typically < 100–200 mL/24 h) and non-purulent/non-hemorrhagic.'}</li>
          <li>{isTh ? 'เทคนิคถอด: ให้ผู้ป่วยหายใจเข้าสุดแล้วกลั้นหายใจหรือเบ่ง Valsalva ดึงสายออกเร็วต่อเนื่องแล้วปิดแผลด้วยผ้าก๊อซวาสลีน/แผ่นปิดกันอากาศทันที' : 'Technique: Remove briskly at end-inspiration (Valsalva maneuver) while immediately sealing tract with petroleum/occlusive dressing; check post-removal CXR if indicated.'}</li>
        </ul>
      </div>
      <div className="bg-teal-50 border border-teal-200 rounded-xl p-3.5 space-y-1.5">
        <h3 className="font-extrabold text-teal-800 text-xs uppercase tracking-wider">{isTh ? 'เกณฑ์สำหรับระบบดิจิทัล (Digital Drainage Consensus - ESTS 2011)' : 'Digital Drainage Objective Criteria (ESTS Consensus)'}</h3>
        <ul className="list-disc pl-5 text-xs text-teal-900 space-y-1">
          <li>{isTh ? 'อัตราลมรั่วดิจิทัล < 30 mL/min ต่อเนื่อง 6–12 ชั่วโมงโดยไม่มีการพุ่งขึ้นผิดปกติ' : 'Digital air leak flow < 30 mL/min continuously for 6–12 hours without spikes.'}</li>
          <li>{isTh ? 'ไม่มีลมรั่วพุ่งขึ้นขณะผู้ป่วยไอแรงๆ หรือทดสอบหายใจลึก' : 'No air leak spike during voluntary forced cough test.'}</li>
          <li>{isTh ? 'ช่วยลดความคลาดเคลื่อนจากการสังเกตด้วยสายตา และลดระยะเวลานอนโรงพยาบาล' : 'Eliminates observer subjectivity and shortens chest tube duration / length of stay.'}</li>
        </ul>
      </div>
      <SourceLine t={t} k="removal_modal" items={[{ key: 'bts_guideline', label: 'BTS 2023 Guideline' }, { key: 'bts_statement', label: 'BTS 2023 Procedures' }, { key: 'ests_digital', label: 'ESTS / Brunelli 2011' }, { key: 'statpearls', label: 'StatPearls' }]} />
    </ModalShell>
  );
};

const ChangelogModal = ({ t, lang, onClose }) => (
  <ModalShell title={t.changelogTitle} subtitle={`Intercostal Drainage Simulator ${APP_VERSION}`} icon={ActivityIcon} iconTone="bg-indigo-100 text-indigo-600" onClose={onClose} maxW="max-w-xl" t={t}>
    <div className="space-y-3">
      {CHANGELOG.map((entry) => (
        <div key={entry.version} className="bg-slate-50 rounded-xl border border-slate-200 p-3.5">
          <div className="flex items-center justify-between mb-2">
            <span className="font-extrabold text-indigo-600 text-sm">{entry.version}</span>
            <span className="text-[11px] font-semibold text-slate-400">{entry.date}</span>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-xs text-slate-700">
            {(lang === 'th' ? entry.th : entry.en).map((line, idx) => <li key={idx}>{line}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </ModalShell>
);

const SystemDetailModal = ({ spec, lang, t, onClose, onLoadSim }) => {
  const s = lang === 'th' ? spec.th : spec.en;
  const tone = SYSTEM_TONE[spec.id];
  return (
    <ModalShell title={s.name} subtitle={s.subtitle} icon={BookOpenIcon} iconTone={tone.badge} onClose={onClose} maxW="max-w-2xl" t={t}>
      <div className="flex items-center justify-between gap-2 flex-wrap bg-slate-50 rounded-xl border border-slate-200 p-3">
        <span className="text-xs font-bold text-slate-700">{s.pressureSpec}</span>
        <button onClick={() => { onLoadSim(spec.id); onClose(); }} className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-500 transition-colors">
          {t.loadInSim}
        </button>
      </div>
      <div className="space-y-1.5">
        <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{lang === 'th' ? 'หลักการทำงาน' : 'Mechanism'}</h3>
        <p className="text-xs text-slate-700 leading-relaxed">{s.mechanism}</p>
      </div>
      <div className="font-mono text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-indigo-700">{s.keyFormula}</div>
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5">
        <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 mb-1.5">{t.indicationsHdr}</h3>
        <ul className="list-disc pl-5 space-y-1 text-xs text-emerald-900">
          {s.indications.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5">
        <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">{t.limitationsHdr}</h3>
        <ul className="list-disc pl-5 space-y-1 text-xs text-amber-900">
          {s.limitations.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
      <SourceLine t={t} k={`sys-detail-${spec.id}`} items={spec.sources} />
    </ModalShell>
  );
};

const TroubleDetailModal = ({ item, lang, t, onClose, onSimulate }) => {
  const body = lang === 'th' ? item.th : item.en;
  return (
    <ModalShell title={body.title} subtitle={t.catOpts[item.cat]} icon={WrenchIcon} iconTone={SEVERITY_TONE[item.severity]} onClose={onClose} maxW="max-w-2xl" t={t}>
      <div className="flex items-center justify-between gap-2 flex-wrap bg-slate-50 rounded-xl border border-slate-200 p-3">
        <span className={`text-[10px] font-bold rounded border px-1.5 py-0.5 uppercase tracking-wider ${SEVERITY_TONE[item.severity]}`}>{t.catOpts[item.cat]}</span>
        {item.simPreset && (
          <button onClick={() => { onSimulate(item.simPreset); onClose(); }} className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-500 transition-colors inline-flex items-center gap-1">
            <PlayIcon className="w-3 h-3" /> {t.simulateBtn}
          </button>
        )}
      </div>
      <p className="text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-3">{body.sign}</p>
      <div className="space-y-1.5">
        <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{t.causesHdr}</h3>
        <ul className="list-disc pl-5 space-y-1 text-xs text-slate-700">{body.causes.map((c, idx) => <li key={idx}>{c}</li>)}</ul>
      </div>
      <div className="space-y-1.5">
        <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{t.stepsHdr}</h3>
        <ul className="space-y-1 text-xs text-slate-700 leading-relaxed">{body.steps.map((st, idx) => <li key={idx}>{st}</li>)}</ul>
      </div>
      <div className="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2.5 text-xs font-bold text-rose-800 leading-snug">
        <span className="uppercase tracking-wider">{t.neverDoHdr}: </span>{body.neverDo}
      </div>
      <SourceLine t={t} k={`tr-detail-${item.id}`} items={item.sources} />
    </ModalShell>
  );
};

// --- Main Application ---
function App() {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('icd-lang') === 'th' ? 'th' : 'en'; } catch (e) { return 'en'; }
  });
  const [theme, setTheme] = useState(() => {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });

  useEffect(() => {
    try { localStorage.setItem('icd-lang', lang); } catch (e) {}
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    try { localStorage.setItem('icd-theme', next); } catch (e) {}
  };

  const t = TRANSLATIONS[lang];
  const isTh = lang === 'th';

  // Narrow phone detection for short guide labels (matching Bronchodilator app)
  const [narrow, setNarrow] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 640 : false));
  useEffect(() => {
    const onResize = () => setNarrow(window.innerWidth < 640);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Simulator State
  const simRef = useRef(null);
  const [system, setSystem] = useState('2b');
  const [hSeal, setHSeal] = useState(2.0);
  const [hFluid, setHFluid] = useState(0.0);
  const [hSuction, setHSuction] = useState(20);
  const [wallSuctionMode, setWallSuctionMode] = useState('standard');
  const [bottleHeightCm, setBottleHeightCm] = useState(-60);
  const [fault, setFault] = useState('none');
  const [clampPos, setClampPos] = useState('none');
  const [activePreset, setActivePreset] = useState('normal');

  // Breathing & Pleural Pressure State
  const [breathingOn, setBreathingOn] = useState(true);
  const [ventMode, setVentMode] = useState('spontaneous'); // 'spontaneous' | 'mechanical'
  const [pExp, setPExp] = useState(-4);
  const [pInsp, setPInsp] = useState(-9);
  const [pStatic, setPStatic] = useState(-5);
  const [breathPhase, setBreathPhase] = useState(0); // 0..2pi
  const [coughFlash, setCoughFlash] = useState(false);
  const [chamberSkin, setChamberSkin] = useState('classic'); // 'classic' | 'pleurevac'
  const [activeHotspot, setActiveHotspot] = useState(null); // null | 'safety' | 'van' | 'sentinel'
  const [maneuverOverride, setManeuverOverride] = useState(null);
  const [maneuverToast, setManeuverToast] = useState(null);

  const handleSetVentMode = (mode) => {
    setVentMode(mode);
    setActivePreset('');
    if (mode === 'mechanical') {
      setPExp(3);   // PEEP
      setPInsp(14); // Peak Inspiratory Pressure
    } else {
      setPExp(-4);
      setPInsp(-9);
    }
  };

  // Procedural Web Audio Engine (Option 1)
  const [soundActive, setSoundActive] = useState(false);
  const toggleSound = () => {
    const next = !soundActive;
    setSoundActive(next);
    icdAudio.setMuted(!next);
  };

  // Source toggle inside simulator calculation card (folded behind "Show sources", Bedside UI)
  const [showCalcSources, setShowCalcSources] = useState(() => {
    try { return localStorage.getItem('icd-show-sources') === '1'; } catch (e) { return false; }
  });
  const toggleCalcSources = () => setShowCalcSources((v) => {
    const n = !v;
    try { localStorage.setItem('icd-show-sources', n ? '1' : '0'); } catch (e) {}
    return n;
  });

  // Troubleshooting search, filter rail & compact view toggle
  const [troubleSearch, setTroubleSearch] = useState('');
  const [troubleCat, setTroubleCat] = useState('all');
  const [troubleView, setTroubleView] = useState('grid'); // 'grid' | 'list'
  const [showCardSources, setShowCardSources] = useState(false);

  // Control panel sub-tab & Before-vs-After Baseline snapshot
  const [controlTab, setControlTab] = useState('water'); // 'water' | 'patient'
  const [baseline, setBaseline] = useState(null); // null = standard baseline for current system

  // Mobile layout mode, waveform freeze, and scenario category filter (v1.3 All-in-One UI)
  const [mobileView, setMobileView] = useState('visual'); // 'visual' | 'controls' | 'math'
  const [isFrozen, setIsFrozen] = useState(false);
  const [presetCat, setPresetCat] = useState('all'); // 'all' | 'physio' | 'vent' | 'leaks' | 'hazards' | 'digital'

  // Modals
  const [modal, setModal] = useState(null);
  const [pressureUnit, setPressureUnit] = useState('cmh2o'); // 'cmh2o' | 'mmhg' | 'kpa'

  const formatP = (val, customUnit = null) => {
    if (val === null || val === undefined) return '—';
    const u = customUnit || pressureUnit;
    if (u === 'mmhg') return `${val > 0 ? '+' : ''}${(val * 0.73556).toFixed(1)} mmHg`;
    if (u === 'kpa') return `${val > 0 ? '+' : ''}${(val * 0.098067).toFixed(2)} kPa`;
    return `${val > 0 ? '+' : ''}${val} cmH₂O`;
  }; // null | 'compare' | 'indications' | 'trouble' | 'math' | 'removal' | 'legend' | 'changelog'
  const [detailSysId, setDetailSysId] = useState(null);
  const [detailTroubleId, setDetailTroubleId] = useState(null);

  // Escape closes topmost modal
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key !== 'Escape') return;
      if (detailTroubleId) setDetailTroubleId(null);
      else if (detailSysId) setDetailSysId(null);
      else if (modal) setModal(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [detailTroubleId, detailSysId, modal]);

  // Smooth breathing loop: 40ms interval (25 FPS) with 0.08 rad step keeps 3.14s breath cycle silky smooth
  useEffect(() => {
    if (!breathingOn) return;
    const id = setInterval(() => {
      setBreathPhase((p) => (p + 0.08) % (Math.PI * 2));
    }, 40);
    return () => clearInterval(id);
  }, [breathingOn]);

  const currentPleuralPressure = useMemo(() => {
    if (coughFlash) return 20;
    if (maneuverOverride !== null) return maneuverOverride;
    if (!breathingOn) return pStatic;
    const mid = (pExp + pInsp) / 2;
    const amp = (pExp - pInsp) / 2;
    return +(mid + amp * Math.cos(breathPhase)).toFixed(1);
  }, [coughFlash, maneuverOverride, breathingOn, pExp, pInsp, pStatic, breathPhase]);

  const triggerCough = () => {
    setCoughFlash(true);
    if (soundActive) icdAudio.playCough();
    setTimeout(() => setCoughFlash(false), 1200);
  };

  const handleManeuver = (type) => {
    if (type === 'cough') {
      triggerCough();
      setManeuverToast(isTh ? '🗣 ผู้ป่วยไอแรง (+20 cmH₂O) — ความดันบวกดันน้ำและลมออกทาง Water Seal' : '🗣 Patient Cough (+20 cmH₂O) — Expelling residual pleural air and fluid');
    } else if (type === 'valsalva') {
      setManeuverOverride(30);
      if (soundActive) icdAudio.playCough();
      setManeuverToast(isTh ? '😤 เบ่ง Valsalva (+30 cmH₂O) ค้าง 2.5 วินาที — ขับลมตกค้างในโพรงเยื่อหุ้มปอด' : '😤 Sustained Valsalva (+30 cmH₂O) for 2.5s — Evacuating residual pneumothorax');
      setTimeout(() => {
        setManeuverOverride(null);
      }, 2500);
    } else if (type === 'sniff') {
      setManeuverOverride(-25);
      if (soundActive) icdAudio.playTidalingSound(18);
      setManeuverToast(isTh ? '👃 สูดลึกสุด Deep Sniff (−25 cmH₂O) — ลำน้ำใน Water seal ยกตัวสูงฉับพลัน' : '👃 Deep Sniff (−25 cmH₂O) — Meniscus column draws upward sharply');
      setTimeout(() => {
        setManeuverOverride(null);
      }, 2000);
    } else if (type === 'drain') {
      setHFluid((prev) => +(Math.min(10, prev + 2.0)).toFixed(1));
      if (soundActive) icdAudio.playFluidDrip(0.8);
      setManeuverToast(isTh ? '🩸 ระบายสารน้ำสะสม +200 มล. ลงกระบอกเก็บน้ำ (ระดับน้ำเพิ่มขึ้น 2 ซม.)' : '🩸 Drained +200 mL fluid into collection reservoir (+2 cm column height)');
    } else if (type === 'clamp') {
      setClampPos('chest');
      if (soundActive) icdAudio.playClampSnap(true);
      setManeuverToast(isTh ? '🗜 หนีบสายชั่วคราว (ตรวจเช็ค 3 วินาที) — ห้ามหนีบสายทิ้งไว้ต่อเนื่อง!' : '🗜 Stepwise Clamp (3-second test) — Diagnostic clamp per BTS 2023 guidelines');
      setTimeout(() => {
        setClampPos('none');
        if (soundActive) icdAudio.playClampSnap(false);
        setManeuverToast(isTh ? '✓ คลายหนีบสายอัตโนมัติ — ปลอดภัย ระบบระบายลมได้ต่อเนื่อง' : '✓ Clamp auto-released — Chest tube draining freely');
        setTimeout(() => setManeuverToast(null), 3000);
      }, 3000);
      return;
    } else if (type === 'milk') {
      setManeuverOverride(-38);
      if (soundActive) icdAudio.playChamberBubble('vigorous');
      setManeuverToast(isTh ? '🔄 รูดสาย (Milking) — เกิดแรงดูดลบกระชาก (−38 cmH₂O) เสี่ยงทำลายเนื้อเยื่อปอด!' : '🔄 Tubing Milking/Stripping — Transient negative spike (−38 cmH₂O) risks lung entrapment!');
      setTimeout(() => {
        setManeuverOverride(null);
      }, 1500);
    }
    setTimeout(() => setManeuverToast(null), 3500);
  };

  const applyPreset = (presetId) => {
    const p = SCENARIO_PRESETS.find((x) => x.id === presetId);
    if (!p) return;
    const a = p.apply;
    if (a.system) setSystem(a.system);
    if (a.hSeal !== undefined) setHSeal(a.hSeal);
    if (a.hFluid !== undefined) setHFluid(a.hFluid);
    if (a.hSuction !== undefined) setHSuction(a.hSuction);
    if (a.wallSuctionMode !== undefined) setWallSuctionMode(a.wallSuctionMode);
    if (a.bottleHeightCm !== undefined) setBottleHeightCm(a.bottleHeightCm);
    if (a.fault !== undefined) setFault(a.fault);
    if (a.breathingOn !== undefined) setBreathingOn(a.breathingOn);
    if (a.ventMode !== undefined) setVentMode(a.ventMode);
    else if (a.pExp !== undefined && a.pExp > 0) setVentMode('mechanical');
    else if (a.pExp !== undefined && a.pExp < 0) setVentMode('spontaneous');
    if (a.pExp !== undefined) setPExp(a.pExp);
    if (a.pInsp !== undefined) setPInsp(a.pInsp);
    if (a.pStatic !== undefined) setPStatic(a.pStatic);
    setClampPos('none');
    setActivePreset(presetId);
  };

  const resetDefaults = () => {
    setVentMode('spontaneous');
    applyPreset('normal');
  };

  const phys = useMemo(() => computeIcdPhysics({
    system,
    hSeal,
    hFluid,
    pPleural: currentPleuralPressure,
    hSuction,
    wallSuctionMode,
    bottleHeightCm,
    fault,
    clampPos,
  }), [system, hSeal, hFluid, currentPleuralPressure, hSuction, wallSuctionMode, bottleHeightCm, fault, clampPos]);

  // Sync physics state with procedural Web Audio engine
  useEffect(() => {
    if (!soundActive) return;
    icdAudio.syncState({
      waterSealBubbling: phys.waterSealBubbling,
      suctionBubbling: phys.suctionBubbling,
      fault,
      clampPos,
      system,
      wallSuctionMode,
    });
  }, [soundActive, phys.waterSealBubbling, phys.suctionBubbling, fault, clampPos, system, wallSuctionMode]);

  // Before-vs-After Baseline physics snapshot
  const baselinePhys = useMemo(() => {
    const b = baseline || {
      system,
      hSeal: 2.0,
      hFluid: 0.0,
      pPleural: currentPleuralPressure,
      hSuction: 20,
      wallSuctionMode: 'standard',
      bottleHeightCm: -60,
      fault: 'none',
      clampPos: 'none',
    };
    return computeIcdPhysics({ ...b, pPleural: currentPleuralPressure });
  }, [baseline, system, currentPleuralPressure]);

  // Rolling waveform history buffer (max 90 samples, pauses when frozen)
  const [waveHistory, setWaveHistory] = useState([]);
  useEffect(() => {
    if (isFrozen) return;
    setWaveHistory((prev) => {
      const next = [...prev, { pPleural: currentPleuralPressure, meniscusCm: phys.tidalingActive ? phys.meniscusCm : 0 }];
      return next.length > 90 ? next.slice(next.length - 90) : next;
    });
  }, [currentPleuralPressure, phys.tidalingActive, phys.meniscusCm, isFrozen]);

  const handleDragWater = (target, val) => {
    setActivePreset('');
    if (target === 'seal') setHSeal(val);
    else if (target === 'fluid') setHFluid(val);
    else if (target === 'suction') setHSuction(val);
  };

  const handleToggleClamp = (pos) => {
    setClampPos((cur) => (cur === pos ? 'none' : pos));
  };

  // Expected Tidaling Range across the breathing cycle
  const tidalingAmplitude = useMemo(() => {
    if (!phys.tidalingActive) return 0;
    if (!breathingOn) return 0;
    const mInsp = Math.max(-phys.hSealEffective, Math.min(26, phys.pOverhead - pInsp));
    const mExp = Math.max(-phys.hSealEffective, Math.min(26, phys.pOverhead - pExp));
    return +Math.abs(mInsp - mExp).toFixed(1);
  }, [phys.tidalingActive, phys.hSealEffective, phys.pOverhead, breathingOn, pInsp, pExp]);

  // Live clinical alerts array
  const liveAlerts = useMemo(() => {
    const list = [];
    if (phys.airSuckBackRisk) {
      list.push({ sev: 'critical', msg: isTh ? 'อันตราย! ปลายท่อ Water Seal ไม่จุ่มน้ำ — อากาศภายนอกถูกดูดเข้าช่องปอดขณะหายใจเข้า!' : 'CRITICAL: Water seal tip unsubmerged — room air is entering the pleural space on inspiration!' });
    } else if (phys.sealLow) {
      list.push({ sev: 'caution', msg: isTh ? `ระดับน้ำ Water Seal ต่ำ (${phys.hSealEffective} ซม.) แนะนำเติมน้ำปลอดเชื้อให้ลึก 2.0 ซม.` : `Water seal depth low (${phys.hSealEffective} cm) — refill sterile water to 2.0 cm.` });
    }
    if (phys.siphonBackRisk) {
      list.push({ sev: 'critical', msg: isTh ? `อันตราย! ขวดอยู่สูงกว่าหน้าอก (+${bottleHeightCm} ซม.) — สารน้ำในขวดเสี่ยงไหลย้อนเข้าช่องอก!` : `CRITICAL: Bottle raised +${bottleHeightCm} cm above chest — fluid can siphon back into pleural cavity!` });
    }
    if (phys.ventBlocked) {
      list.push({ sev: 'critical', msg: isTh ? 'อันตราย! Wall Suction ปิดโดยเสียบสายคาอยู่ที่ขวด 3 — ระบบปิดตันเสี่ยง Tension Pneumothorax!' : 'CRITICAL: Wall suction OFF while plugged into Bottle 3 — closed circuit risks Tension Pneumothorax!' });
    }
    if (fault === 'tube_leak' && clampPos !== 'distal') {
      list.push({ sev: 'critical', msg: isTh ? 'ฟองอากาศผุดต่อเนื่อง: ท่อ/ข้อต่อภายนอกรั่ว! ทดสอบ Stepwise Clamp Test ด้านล่างเพื่อหาจุดรั่ว' : 'Continuous Water-Seal Bubbling: External Tube Leak! Use the Stepwise Clamp Test below to localize.' });
    }
    if (fault === 'air_leak_bpf' && clampPos === 'none') {
      list.push({ sev: 'caution', msg: isTh ? 'ฟองอากาศผุดต่อเนื่องจากปอดผู้ป่วย (BPF) — หากหนีบชิดอกฟองจะหยุด (อย่าหนีบทิ้งไว้!)' : 'Continuous Bubbling from Patient Air Leak (BPF) — stops if briefly clamped at chest wall.' });
    }
    if (fault === 'kink_clot') {
      list.push({ sev: 'critical', msg: isTh ? 'ท่ออุดตัน/พับงอ: การกระเพื่อม (Tidaling) หยุดนิ่งและความดันคั่งในช่องอก!' : 'Tube Kink / Clot Obstruction: Tidaling ceased and pleural drainage is blocked!' });
    }
    if (system === '1b' && phys.sealHigh) {
      list.push({ sev: 'caution', msg: isTh ? `กับดักระบบ 1 ขวด: น้ำสะสมทำให้ h_eff เพิ่มเป็น ${phys.hSealEffective} ซม. แรงต้านหายใจออกพุ่งเป็น +${phys.pCrack} cmH₂O!` : `1-Bottle Fluid Trap: Accumulated fluid raised h_eff to ${phys.hSealEffective} cm — cracking pressure climbed to +${phys.pCrack} cmH₂O!` });
    }
    if (system === '3b' && wallSuctionMode === 'high') {
      list.push({ sev: 'caution', msg: isTh ? `เปิดแรงดูดผนังสูง (−204 cmH₂O) ไม่ได้เพิ่มแรงดูดที่ปอด (ยังถูกคุมไว้ที่ −${hSuction} cmH₂O) แต่น้ำระเหยเร็ว` : `High wall vacuum does NOT increase chest suction (still clamped at −${hSuction} cmH₂O), but rapidly evaporates Bottle 3 water.` });
    }
    if (system === '3b' && wallSuctionMode === 'low') {
      list.push({ sev: 'caution', msg: isTh ? `แรงดูดผนัง (−10 cmH₂O) น้อยกว่าความลึกท่อขวด 3 (${hSuction} ซม.) จึงไม่มีฟองในขวด 3` : `Wall vacuum (−10 cmH₂O) is below Bottle 3 depth (${hSuction} cm) — no suction bubbling.` });
    }
    if (ventMode === 'mechanical') {
      list.push({
        sev: 'info',
        msg: isTh
          ? 'โหมดเครื่องช่วยหายใจ (Mechanical PPV): การกระเพื่อม (Tidaling) สลับทิศทางกับคนหายใจเอง — น้ำถูกดันลงและฟองอากาศผุดช่วงหายใจเข้า (Inspiration) เนื่องจากแรงดันบวกจากเครื่อง'
          : 'Mechanical PPV Mode: Tidaling direction is INVERTED compared to spontaneous breathing — water moves down and air bubbles emerge during INSPIRATION due to ventilator positive pressure.',
      });
      if (fault === 'air_leak_bpf') {
        list.push({
          sev: 'critical',
          msg: isTh
            ? 'คำเตือน ICU: ผู้ป่วยลมรั่ว BPF บนเครื่องช่วยหายใจ — แรงดันบวกช่วงหายใจเข้าจะดันลมรั่วต่อเนื่อง ห้ามหนีบสายระบายเด็ดขาด เสี่ยง Tension Pneumothorax รุนแรง!'
            : 'ICU WARNING: Ventilated patient with BPF — positive inspiratory pressure drives continuous bubbling. NEVER clamp chest drain (rapid Tension Pneumothorax risk)!',
        });
      }
    }
    if (list.length === 0) {
      list.push({ sev: 'info', msg: isTh ? 'ระบบทำงานปกติ: Water Seal ป้องกันลมย้อนกลับและระบายตามสมดุลความดัน' : 'Circuit functioning normally: intact one-way water seal with appropriate pressure dynamics.' });
    }
    return list;
  }, [phys, fault, clampPos, system, wallSuctionMode, hSuction, bottleHeightCm, ventMode, isTh]);

  // Filtered troubleshooting cards
  const filteredTrouble = useMemo(() => {
    const q = troubleSearch.toLowerCase().trim();
    return TROUBLESHOOTING_ITEMS.filter((item) => {
      if (troubleCat !== 'all' && item.cat !== troubleCat) return false;
      if (!q) return true;
      const body = lang === 'th' ? item.th : item.en;
      const hay = `${body.title} ${body.sign} ${body.causes.join(' ')} ${body.steps.join(' ')} ${body.neverDo}`.toLowerCase();
      return hay.includes(q);
    });
  }, [troubleSearch, troubleCat, lang]);

  const jumpToSimulate = (presetId) => {
    applyPreset(presetId);
    if (simRef.current) simRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const detailSpec = SYSTEM_SPECS.find((x) => x.id === detailSysId);
  const detailTroubleItem = TROUBLESHOOTING_ITEMS.find((x) => x.id === detailTroubleId);

  // Categorized scenario presets filter & active scenario metadata (v1.3)
  const filteredPresets = useMemo(() => {
    if (presetCat === 'all') return SCENARIO_PRESETS;
    return SCENARIO_PRESETS.filter((p) => p.cat === presetCat);
  }, [presetCat]);

  const activePresetObj = useMemo(() => {
    return SCENARIO_PRESETS.find((p) => p.id === activePreset);
  }, [activePreset]);

  return (
    <div id="main-app-container" className="min-h-screen bg-slate-100 text-slate-900 p-2.5 sm:p-4 md:p-6">
      <div className="max-w-6xl mx-auto relative pt-10 md:pt-0">

        {/* Top Right Controls (Bedside UI pattern) */}
        <div className="absolute top-0 right-0 flex items-center gap-1.5 md:gap-2 z-20 print:hidden" data-top-controls>
          <button
            onClick={toggleSound}
            aria-label={soundActive ? t.soundOn : t.soundOff}
            title={t.soundHint}
            className={`h-7 px-2.5 text-[10px] md:text-xs font-bold rounded-full border shadow-sm flex items-center gap-1.5 transition-all cursor-pointer ${soundActive ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'}`}
          >
            {soundActive ? <Volume2Icon className="w-3.5 h-3.5 text-white" /> : <VolumeXIcon className="w-3.5 h-3.5 text-slate-400" />}
            <span className="hidden sm:inline">{soundActive ? (isTh ? 'เสียง' : 'Sound') : (isTh ? 'ปิดเสียง' : 'Muted')}</span>
          </button>
          <button
            onClick={() => setModal('changelog')}
            className="text-[10px] font-bold text-slate-500 bg-white shadow-sm px-2.5 py-1.5 rounded-full border border-slate-200 flex items-center gap-1.5 hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-200 transition-all cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {APP_VERSION}
          </button>
          <button
            onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
            className="text-[10px] md:text-xs font-bold text-slate-700 bg-white shadow-sm px-2.5 py-1.5 rounded-full border border-slate-200 flex items-center gap-1.5 hover:bg-slate-50 transition-all cursor-pointer"
          >
            {lang === 'en' ? 'ไทย' : 'EN'}
          </button>
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'}
            title={theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'}
            className="w-7 h-7 text-slate-600 bg-white shadow-sm rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:text-slate-700 transition-all cursor-pointer"
          >
            {theme === 'dark' ? <SunIcon className="w-3.5 h-3.5" /> : <MoonIcon className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Header */}
        <header className="mb-3 md:mb-4">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-800 mb-1 md:mb-2 leading-tight sm:pr-32 md:pr-48">
            {t.title}
            <span className="ml-2 inline-block align-middle text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded border border-amber-300 bg-amber-50 text-amber-700">
              BETA
            </span>
          </h1>
          <p className="hidden sm:block text-xs md:text-sm text-slate-600">{t.subtitle}</p>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 sm:block">
            <p className="text-[10px] md:text-xs font-semibold text-indigo-500 sm:mt-1">{t.credit}</p>
            <a
              href="#disclaimer-heading"
              onClick={(e) => { e.preventDefault(); document.getElementById('disclaimer-heading')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
              className="block sm:mt-1 text-[11px] md:text-xs font-semibold text-amber-700 hover:underline print:hidden"
            >
              {t.discLink}
            </a>
          </div>
        </header>

        {/* Pinned Sticky 6-Tile Guide Bar (Bedside UI exact pattern) */}
        <div className="sticky top-0 z-30 pt-2 pb-2 md:pt-3 md:pb-2.5 -mt-2 md:-mt-3 bg-slate-100 print:hidden mb-3 md:mb-5">
          <div className="grid grid-cols-4 min-[540px]:grid-cols-7 sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:gap-2 w-full">
            {[
              ['compare', 'bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700', CompareIcon],
              ['indications', 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200 text-emerald-700', StethoscopeIcon],
              ['trouble', 'bg-rose-50 hover:bg-rose-100 border-rose-200 text-rose-700', WrenchIcon],
              ['math', 'bg-violet-50 hover:bg-violet-100 border-violet-200 text-violet-700', CalcIcon],
              ['removal', 'bg-amber-50 hover:bg-amber-100 border-amber-200 text-amber-700', ShieldCheckIcon],
              ['pleurodesis', 'bg-purple-50 hover:bg-purple-100 border-purple-200 text-purple-700', SyringeIcon],
              ['legend', 'bg-teal-50 hover:bg-teal-100 border-teal-200 text-teal-700', InfoIcon],
            ].map(([k, tone, Icon]) => {
              const labelKey = k === 'legend' ? 'key' : k;
              const fullLabel = t.guideFull[labelKey];
              const shortLabel = t.guideShort[labelKey];
              return (
                <button
                  key={k}
                  onClick={() => setModal(k)}
                  aria-label={fullLabel}
                  title={fullLabel}
                  className={`flex flex-col sm:flex-row min-w-0 sm:flex-grow-0 items-center justify-center gap-0.5 sm:gap-1.5 md:gap-2 ${tone} border px-0.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-lg font-bold shadow-sm transition-all active:scale-95 text-xs md:text-sm`}
                >
                  <Icon className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 shrink-0" />
                  <span className="text-[10px] max-[359px]:text-[9px] leading-[1.15] text-center sm:text-[length:inherit] sm:leading-normal sm:whitespace-nowrap min-w-0 max-w-full break-words">
                    {narrow ? shortLabel : fullLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ==================== INTERACTIVE SIMULATOR CARD ==================== */}
        <section ref={simRef} className="rounded-xl md:rounded-2xl border border-slate-200 bg-white shadow-sm p-3.5 md:p-5 mb-6 md:mb-8">
          {/* System Selector & Presets Bar */}
          <div className="flex flex-col gap-3 pb-3.5 mb-4 border-b border-slate-100">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">{t.sysLabel}:</span>
                {SYSTEM_SPECS.map((sp) => {
                  const active = system === sp.id;
                  return (
                    <button
                      key={sp.id}
                      onClick={() => { setSystem(sp.id); setActivePreset(''); }}
                      aria-pressed={active}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${active ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm' : `${SYSTEM_TONE[sp.id].badge} hover:opacity-90`}`}
                    >
                      {lang === 'th' ? sp.th.short : sp.en.short}
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={resetDefaults}
                  className="px-2.5 py-1.5 rounded-lg text-[11px] font-bold border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcwIcon className="w-3 h-3" /> {t.resetBtn}
                </button>
              </div>
            </div>

            {/* Rapid Bedside Clinical Action Deck & Chamber Skin Selector */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 pb-1 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 shrink-0 mr-1 flex items-center gap-1">
                  <ZapIcon className="w-3.5 h-3.5 text-amber-500" />
                  <span>{t.actionDeckTitle || 'Bedside Actions'}:</span>
                </span>
                <button
                  onClick={() => handleManeuver('cough')}
                  className="px-2.5 py-1 rounded-md text-[11px] font-bold border border-sky-300 dark:border-sky-800/80 bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 hover:bg-sky-100 transition-all cursor-pointer shadow-2xs"
                >
                  🗣 {t.actionCough || 'Cough (+20)'}
                </button>
                <button
                  onClick={() => handleManeuver('valsalva')}
                  className="px-2.5 py-1 rounded-md text-[11px] font-bold border border-amber-300 dark:border-amber-800/80 bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 hover:bg-amber-100 transition-all cursor-pointer shadow-2xs"
                >
                  😤 {t.actionValsalva || 'Valsalva (+30)'}
                </button>
                <button
                  onClick={() => handleManeuver('sniff')}
                  className="px-2.5 py-1 rounded-md text-[11px] font-bold border border-indigo-300 dark:border-indigo-800/80 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 transition-all cursor-pointer shadow-2xs"
                >
                  👃 {t.actionSniff || 'Deep Sniff (−25)'}
                </button>
                <button
                  onClick={() => handleManeuver('drain')}
                  className="px-2.5 py-1 rounded-md text-[11px] font-bold border border-rose-300 dark:border-rose-800/80 bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 hover:bg-rose-100 transition-all cursor-pointer shadow-2xs"
                >
                  🩸 {t.actionDrainFluid || 'Drain +200 mL'}
                </button>
                <button
                  onClick={() => handleManeuver('clamp')}
                  className="px-2.5 py-1 rounded-md text-[11px] font-bold border border-purple-300 dark:border-purple-800/80 bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 hover:bg-purple-100 transition-all cursor-pointer shadow-2xs"
                >
                  🗜 {t.actionClampBrief || 'Stepwise Clamp'}
                </button>
                <button
                  onClick={() => handleManeuver('milk')}
                  className="px-2.5 py-1 rounded-md text-[11px] font-bold border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 transition-all cursor-pointer shadow-2xs"
                >
                  🔄 {t.actionMilk || 'Milk Tubing'}
                </button>
              </div>

              {/* Dual-Skin Mode Toggle */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/90 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700">
                <button
                  onClick={() => setChamberSkin('classic')}
                  className={`px-2 py-1 rounded text-[10px] font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                    chamberSkin === 'classic'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700'
                  }`}
                >
                  🍾 {t.skinClassic || 'Classic'}
                </button>
                <button
                  onClick={() => {
                    setChamberSkin('pleurevac');
                    if (system === 'dry') setSystem('3b');
                  }}
                  className={`px-2 py-1 rounded text-[10px] font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                    chamberSkin === 'pleurevac'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700'
                  }`}
                >
                  📦 {t.skinPleurevac || 'Pleur-evac'}
                </button>
              </div>
            </div>

            {/* Action Toast Banner */}
            {maneuverToast && (
              <div className="rounded-lg bg-indigo-950/95 border border-indigo-500/80 px-3 py-1.5 text-xs font-bold text-indigo-100 flex items-center justify-between shadow-sm animate-in fade-in duration-200">
                <span>{maneuverToast}</span>
                <button onClick={() => setManeuverToast(null)} className="text-indigo-300 hover:text-white font-mono text-sm ml-2 cursor-pointer">×</button>
              </div>
            )}

            {/* Categorized Scenario Hub Filter Bar & Presets */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar pb-0.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">{t.presetsLabel}:</span>
                {[
                  ['all', t.catAllScenarios || 'All (14)'],
                  ['physio', t.catPhysio || 'Physiology'],
                  ['vent', t.catVent || 'Ventilator PPV'],
                  ['leaks', t.catLeaks || 'Air Leaks'],
                  ['hazards', t.catHazards || 'Hazards & Traps'],
                  ['digital', t.catDigital || 'Digital Drain'],
                  ['procedures', t.catProcedures || 'Pleurodesis & MPE'],
                ].map(([catId, catLabel]) => (
                  <button
                    key={catId}
                    onClick={() => setPresetCat(catId)}
                    className={`shrink-0 px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                      presetCat === catId
                        ? 'bg-slate-800 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {catLabel}
                  </button>
                ))}
              </div>

              {/* Filtered Preset Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar pb-0.5">
                {filteredPresets.map((pr) => {
                  const on = activePreset === pr.id;
                  return (
                    <button
                      key={pr.id}
                      onClick={() => applyPreset(pr.id)}
                      className={`shrink-0 px-2.5 py-1 rounded-md text-[11px] font-bold border transition-all whitespace-nowrap cursor-pointer ${on ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm ring-1 ring-indigo-400' : (PRESET_TONE[pr.tone] || PRESET_TONE.sky)}`}
                    >
                      {isTh ? pr.th : pr.en}
                    </button>
                  );
                })}
              </div>

              {/* Active Clinical Scenario Vignette Banner (High Contrast Bedside Tokens) */}
              {activePresetObj && activePresetObj.vignette && (
                <div className="rounded-xl border border-indigo-200 dark:border-indigo-800/80 bg-indigo-50/90 dark:bg-slate-900/95 p-3 text-xs space-y-1.5 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-900 dark:text-indigo-300 flex items-center gap-1.5">
                      <BookOpenIcon className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      <span>{t.vignetteLabel}: {isTh ? activePresetObj.th : activePresetObj.en}</span>
                    </span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${SYSTEM_TONE[activePresetObj.apply?.system || '2b']?.badge || 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'}`}>
                      {activePresetObj.apply?.system ? activePresetObj.apply.system.toUpperCase() : '2-BOTTLE'}
                    </span>
                  </div>
                  <p className="text-slate-800 dark:text-slate-200 text-xs font-semibold leading-relaxed">
                    {isTh ? activePresetObj.vignette.th : activePresetObj.vignette.en}
                  </p>
                  <div className="pt-1.5 border-t border-indigo-200 dark:border-indigo-800/60 flex items-start gap-1.5 text-xs text-indigo-900 dark:text-indigo-300 font-bold">
                    <span className="text-indigo-600 dark:text-indigo-400 shrink-0 font-extrabold">{t.expectedLabel}:</span>
                    <span className="text-slate-800 dark:text-slate-200 font-semibold">{isTh ? activePresetObj.expected.th : activePresetObj.expected.en}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile View Switcher (visible on < 1024px screens) */}
          <div className="lg:hidden flex bg-slate-100 rounded-xl border border-slate-200 p-1 mb-3.5 shadow-xs">
            {[
              ['visual', t.mobileTabVisual || 'Visual Simulator', '🫁'],
              ['controls', t.mobileTabControls || 'Controls & Sliders', '⚙️'],
              ['math', t.mobileTabMath || 'Pressure Math', '📊'],
            ].map(([id, label, icon]) => (
              <button
                key={id}
                onClick={() => setMobileView(id)}
                className={`flex-1 min-w-0 py-1.5 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                  mobileView === id ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:bg-white'
                }`}
              >
                <span>{icon}</span>
                <span className="leading-tight text-center">{label}</span>
              </button>
            ))}
          </div>

          {/* 2-Column Simulator Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 items-start">
            {/* LEFT 7 COLS: Visual SVG + ICU Monitor + Waveform Strip + Mobile Quick Controls */}
            <div className={mobileView === 'visual' ? 'lg:col-span-7 flex flex-col gap-3 min-w-0' : 'hidden lg:flex lg:col-span-7 flex-col gap-3 min-w-0'}>
              <IcdBottleSvg
                system={system}
                hSeal={hSeal}
                hFluid={hFluid}
                hSuction={hSuction}
                pPleural={currentPleuralPressure}
                bottleHeightCm={bottleHeightCm}
                fault={fault}
                clampPos={clampPos}
                phys={phys}
                lang={lang}
                dark={theme === 'dark'}
                t={t}
                onToggleClamp={handleToggleClamp}
                onDragWater={handleDragWater}
                chamberSkin={chamberSkin}
                activeHotspot={activeHotspot}
                onSelectHotspot={setActiveHotspot}
              />

              {/* Interactive Anatomical Hotspots Pills Bar */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                  {isTh ? 'จุดตรวจทางคลินิก:' : 'Anatomical Inspect:'}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveHotspot(activeHotspot === 'safety' ? null : 'safety')}
                  className={`px-2 py-1 rounded-md text-[10px] font-bold border transition-all cursor-pointer ${
                    activeHotspot === 'safety'
                      ? 'bg-cyan-600 text-white border-cyan-600 shadow-xs'
                      : 'bg-cyan-50 dark:bg-cyan-950/50 border-cyan-200 dark:border-cyan-800/60 text-cyan-800 dark:text-cyan-300 hover:bg-cyan-100'
                  }`}
                >
                  🛡 {t.hotspotSafetyTitle || 'Triangle of Safety (5th ICS)'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveHotspot(activeHotspot === 'van' ? null : 'van')}
                  className={`px-2 py-1 rounded-md text-[10px] font-bold border transition-all cursor-pointer ${
                    activeHotspot === 'van'
                      ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                      : 'bg-rose-50 dark:bg-rose-950/50 border-rose-200 dark:border-rose-800/60 text-rose-800 dark:text-rose-300 hover:bg-rose-100'
                  }`}
                >
                  🩸 {t.hotspotVanTitle || 'Subcostal VAN Avoidance'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveHotspot(activeHotspot === 'sentinel' ? null : 'sentinel')}
                  className={`px-2 py-1 rounded-md text-[10px] font-bold border transition-all cursor-pointer ${
                    activeHotspot === 'sentinel'
                      ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                      : 'bg-purple-50 dark:bg-purple-950/50 border-purple-200 dark:border-purple-800/60 text-purple-800 dark:text-purple-300 hover:bg-purple-100'
                  }`}
                >
                  👁 {t.hotspotSentinelTitle || 'Sentinel Eye'}
                </button>
              </div>

              {/* Interactive Anatomical Hotspot Clinical Guidance Card */}
              {activeHotspot && (
                <div className="rounded-xl border border-cyan-300 dark:border-cyan-800/80 bg-cyan-50/90 dark:bg-slate-900/95 p-3 text-xs space-y-1 shadow-sm animate-in fade-in duration-150">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-cyan-900 dark:text-cyan-300 flex items-center gap-1.5">
                      <InfoIcon className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                      <span>
                        {activeHotspot === 'safety' ? (t.hotspotSafetyTitle || 'Triangle of Safety (5th ICS)') : activeHotspot === 'van' ? (t.hotspotVanTitle || 'Subcostal VAN Bundle Avoidance') : (t.hotspotSentinelTitle || 'Chest Tube Sentinel Eye')}
                      </span>
                    </span>
                    <button onClick={() => setActiveHotspot(null)} className="text-cyan-700 dark:text-cyan-400 hover:opacity-75 font-mono text-xs cursor-pointer">✕ Close</button>
                  </div>
                  <p className="text-slate-800 dark:text-slate-200 text-xs font-medium leading-relaxed">
                    {activeHotspot === 'safety' ? (t.hotspotSafetyDesc || 'Boundaries: Latissimus dorsi, Pectoralis major, 5th intercostal space. Advance tube strictly over superior rib border.') : activeHotspot === 'van' ? (t.hotspotVanDesc || 'Intercostal Vein, Artery, Nerve run along inferior costal groove. Insertion over the top of the lower rib prevents severe hemothorax.') : (t.hotspotSentinelDesc || 'The innermost drainage hole must reside completely within the pleural space to avoid subcutaneous emphysema.')}
                  </p>
                </div>
              )}

              {/* ICU Bedside Telemetry Monitor Strip */}
              <IcuBedsideMonitor
                phys={phys}
                currentPleuralPressure={currentPleuralPressure}
                breathingOn={breathingOn}
                tidalingAmplitude={tidalingAmplitude}
                ventMode={ventMode}
                system={system}
                isTh={isTh}
                t={t}
              />

              <PressureWaveformStrip
                history={waveHistory}
                pCrack={phys.pCrack}
                pPleural={currentPleuralPressure}
                meniscusCm={phys.meniscusCm}
                tidalingActive={phys.tidalingActive}
                ventMode={ventMode}
                isFrozen={isFrozen}
                onToggleFreeze={() => setIsFrozen((f) => !f)}
                t={t}
                dark={theme === 'dark'}
              />

              {/* Interactive Stepwise Clamp Test Bar (shown when Tube Leak, Patient Air Leak, or manually clamped) */}
              {(fault === 'tube_leak' || fault === 'air_leak_bpf' || clampPos !== 'none') && (
                <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3 space-y-2">
                  <div className="text-xs font-extrabold text-indigo-800">{t.clampBarTitle}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      ['none', t.clampNone],
                      ['chest', t.clampChest],
                      ['distal', t.clampDistal],
                    ].map(([id, label]) => (
                      <button
                        key={id}
                        onClick={() => setClampPos(id)}
                        className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold border transition-all ${clampPos === id ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm' : 'bg-white text-indigo-700 border-indigo-200 hover:bg-indigo-100'}`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                  {clampPos === 'chest' && (
                    <p className="text-xs font-semibold text-indigo-900 leading-snug">
                      {fault === 'air_leak_bpf' ? t.clampNoteChestStop : t.clampNoteChestCont}
                    </p>
                  )}
                  {clampPos === 'distal' && (
                    <p className="text-xs font-semibold text-indigo-900 leading-snug">
                      {fault === 'tube_leak' ? t.clampNoteDistalStop : t.clampNoteChestStop}
                    </p>
                  )}
                </div>
              )}

              {/* Live Clinical Alerts */}
              <div className="space-y-1.5">
                {liveAlerts.map((al, idx) => (
                  <div key={idx} className={`rounded-xl border px-3 py-2 text-xs font-semibold flex items-start gap-2 ${SEVERITY_TONE[al.sev]}`}>
                    {al.sev === 'info' ? <InfoIcon className="w-4 h-4 shrink-0 mt-0.5" /> : <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />}
                    <span>{al.msg}</span>
                  </div>
                ))}
              </div>

              {/* Mobile Quick Action Strip (visible only on mobile visual tab) */}
              <div className="lg:hidden rounded-xl border border-indigo-200 bg-indigo-50 p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-indigo-900">{t.quickControlsTitle}</span>
                  <button
                    onClick={() => setMobileView('controls')}
                    className="text-[10px] font-bold text-indigo-700 underline"
                  >
                    {t.mobileTabControls} ›
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold text-slate-700">
                      <span>Water Seal</span>
                      <span className="text-cyan-700">{hSeal.toFixed(1)} cm</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => { setHSeal(Math.max(0, +(hSeal - 0.5).toFixed(1))); setActivePreset(''); }}
                        className="w-7 h-7 bg-white rounded border border-slate-200 font-bold text-xs"
                      >−</button>
                      <button
                        onClick={() => { setHSeal(Math.min(8, +(hSeal + 0.5).toFixed(1))); setActivePreset(''); }}
                        className="w-7 h-7 bg-white rounded border border-slate-200 font-bold text-xs"
                      >+</button>
                      <button
                        onClick={triggerCough}
                        className="flex-1 h-7 bg-sky-600 text-white rounded font-bold text-[10px] truncate px-1"
                      >Cough</button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold text-slate-700">
                      <span>{ventMode === 'mechanical' ? 'PIP (Insp)' : 'P_insp'}</span>
                      <span className={ventMode === 'mechanical' ? 'text-rose-600' : 'text-indigo-600'}>
                        {pInsp > 0 ? `+${pInsp}` : pInsp}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => {
                          if (ventMode === 'mechanical') setPInsp(Math.max(5, pInsp - 1));
                          else setPInsp(Math.max(-30, pInsp - 1));
                          setActivePreset('');
                        }}
                        className="w-7 h-7 bg-white rounded border border-slate-200 font-bold text-xs"
                      >−</button>
                      <button
                        onClick={() => {
                          if (ventMode === 'mechanical') setPInsp(Math.min(28, pInsp + 1));
                          else setPInsp(Math.min(0, pInsp + 1));
                          setActivePreset('');
                        }}
                        className="w-7 h-7 bg-white rounded border border-slate-200 font-bold text-xs"
                      >+</button>
                      <button
                        onClick={() => handleSetVentMode(ventMode === 'mechanical' ? 'spontaneous' : 'mechanical')}
                        className="flex-1 h-7 bg-white border border-indigo-200 text-indigo-700 rounded font-bold text-[10px] truncate px-1"
                      >{ventMode === 'mechanical' ? 'PPV' : 'Spont'}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT 5 COLS: Ergonomic Tabbed Sliders + Before/After Pressure Calculations */}
            <div className={mobileView !== 'visual' ? 'lg:col-span-5 flex flex-col gap-3 min-w-0' : 'hidden lg:flex lg:col-span-5 flex-col gap-3 min-w-0'}>
              {/* Pinned Sticky Bedside Mini-HUD for Mobile */}
              <div className="lg:hidden sticky top-0 z-20 -mx-1 px-3 py-2 bg-slate-900 text-white rounded-xl shadow-md flex items-center justify-between gap-2 text-xs mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-extrabold tabular-nums">P_pl: {currentPleuralPressure > 0 ? `+${currentPleuralPressure}` : currentPleuralPressure}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-cyan-300">Tidal: {phys.tidalingActive ? `${tidalingAmplitude}cm` : '0'}</span>
                  <span className={`text-[9.5px] font-extrabold px-1.5 py-0.5 rounded ${phys.waterSealBubbling !== 'none' ? 'bg-rose-500 text-white' : 'bg-slate-700 text-slate-300'}`}>
                    {phys.waterSealBubbling !== 'none' ? 'Bubbling!' : 'Seal OK'}
                  </span>
                </div>
                <button
                  onClick={() => setMobileView('visual')}
                  className="px-2 py-1 rounded bg-indigo-600 text-white font-extrabold text-[10px] shrink-0"
                >
                  {t.viewBottlesBtn} ›
                </button>
              </div>
              {/* Sliders Panel */}
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-3.5 space-y-3.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-600">{t.controlsTitle}</h2>
                  <div className="flex bg-white rounded-lg border border-slate-200 p-0.5 shadow-sm">
                    <button onClick={() => setControlTab('water')} className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-colors ${controlTab === 'water' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-50'}`}>
                      {t.tabWaterSuction}
                    </button>
                    <button onClick={() => setControlTab('patient')} className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-colors ${controlTab === 'patient' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-50'}`}>
                      {t.tabPatientFault}
                    </button>
                  </div>
                </div>

                {/* Tab 1: Water Heights & Suction Controls (kept mounted via hidden for reliable refs/tests) */}
                <div className={controlTab === 'water' ? 'space-y-3.5' : 'hidden'}>
                  <SliderRow
                    id="sld-seal"
                    label={t.hSealLabel}
                    valueText={`${hSeal.toFixed(1)} cm`}
                    valueColor="text-cyan-700"
                    min={0}
                    max={8}
                    step={0.5}
                    value={hSeal}
                    onChange={(v) => { setHSeal(v); setActivePreset(''); }}
                  />
                  <SliderRow
                    id="sld-fluid"
                    label={t.hFluidLabel}
                    valueText={`+${hFluid.toFixed(1)} cm (${Math.round(hFluid * 100)} mL)`}
                    valueColor="text-amber-700"
                    min={0}
                    max={8}
                    step={0.5}
                    value={hFluid}
                    onChange={(v) => { setHFluid(v); setActivePreset(''); }}
                  />
                  {system === '3b' && (
                    <div className="pt-2.5 border-t border-slate-200 space-y-3">
                      <SliderRow
                        id="sld-suc"
                        label={t.hSuctionLabel}
                        valueText={`${hSuction} cm (−${hSuction} cmH₂O)`}
                        valueColor="text-violet-700"
                        min={5}
                        max={40}
                        step={1}
                        value={hSuction}
                        onChange={(v) => { setHSuction(v); setActivePreset(''); }}
                      />
                      <div>
                        <label htmlFor="sel-wall" className="block text-[11px] font-bold text-slate-600 mb-1">{t.wallSuctionLabel}</label>
                        <select id="sel-wall" value={wallSuctionMode} onChange={(e) => { setWallSuctionMode(e.target.value); setActivePreset(''); }} className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-700">
                          {Object.entries(t.wallOpts).map(([k, lbl]) => <option key={k} value={k}>{lbl}</option>)}
                        </select>
                      </div>
                    </div>
                  )}
                  {system === 'dry' && (
                    <div className="pt-2.5 border-t border-slate-200 space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="text-[11px] font-bold text-slate-600">{t.drySuctionDial || (isTh ? 'แป้นบิดแรงดูดแห้ง (cmH₂O)' : 'Dry Suction Dial (cmH₂O)')}</label>
                          <span className="text-xs font-extrabold text-teal-700 tabular-nums">−{hSuction} cmH₂O</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {[10, 15, 20, 30, 40].map((val) => (
                            <button
                              key={val}
                              onClick={() => { setHSuction(val); setActivePreset(''); }}
                              className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-all ${hSuction === val ? 'bg-teal-600 text-white border-teal-600 shadow-sm' : 'bg-white text-teal-800 border-teal-200 hover:bg-teal-50'}`}
                            >
                              −{val}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-lg bg-teal-50 border border-teal-200 p-2.5 text-[11px] text-teal-900 leading-relaxed">
                        <span className="font-extrabold">{isTh ? 'กลไกควบคุมแห้ง: ' : 'Dry Mechanism: '}</span>
                        {isTh ? 'สปริงไดอะแฟรมปรับแรงดันคงที่อัตโนมัติ เงียบสนิท ไม่มีน้ำระเหย ไม่ต้องใช้เสาน้ำเหมือนระบบ 3 ขวด' : 'Internal spring diaphragm maintains precise constant suction without water bubbling or evaporation.'}
                      </div>
                    </div>
                  )}
                </div>

                {/* Tab 2: Patient Breathing, Bottle Position & Faults */}
                <div className={controlTab === 'patient' ? 'space-y-3.5' : 'hidden'}>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-slate-600">{isTh ? 'โหมดการหายใจ' : 'Respiration Mode'}</span>
                    <div className="flex bg-white rounded-md border border-slate-200 p-0.5">
                      <button onClick={() => setBreathingOn(true)} className={`px-2 py-0.5 rounded text-[10px] font-bold ${breathingOn ? 'bg-indigo-600 text-white' : 'text-slate-500'}`}>{t.liveBreath}</button>
                      <button onClick={() => setBreathingOn(false)} className={`px-2 py-0.5 rounded text-[10px] font-bold ${!breathingOn ? 'bg-indigo-600 text-white' : 'text-slate-500'}`}>{t.staticManual}</button>
                    </div>
                  </div>
                  {breathingOn && (
                    <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-indigo-50 border border-indigo-200">
                      <span className="text-[11px] font-bold text-indigo-900">{t.ventModeLabel}</span>
                      <div className="flex bg-white rounded-md border border-indigo-200 p-0.5 shadow-2xs">
                        <button
                          type="button"
                          onClick={() => handleSetVentMode('spontaneous')}
                          className={`px-2.5 py-0.5 rounded text-[10px] font-bold transition-all ${ventMode === 'spontaneous' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-indigo-600'}`}
                        >
                          {t.ventSpontaneous}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSetVentMode('mechanical')}
                          className={`px-2.5 py-0.5 rounded text-[10px] font-bold transition-all ${ventMode === 'mechanical' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-indigo-600'}`}
                        >
                          {t.ventMechanical}
                        </button>
                      </div>
                    </div>
                  )}
                  {breathingOn ? (
                    ventMode === 'mechanical' ? (
                      <div className="space-y-3">
                        <SliderRow
                          id="sld-pinsp"
                          label={t.pipLabel}
                          valueText={`+${pInsp} cmH₂O`}
                          valueColor="text-rose-600"
                          min={5}
                          max={28}
                          step={1}
                          value={pInsp}
                          onChange={(v) => { setPInsp(v); if (v < pExp) setPExp(v); setActivePreset(''); }}
                        />
                        <SliderRow
                          id="sld-pexp"
                          label={t.peepLabel}
                          valueText={`+${pExp} cmH₂O`}
                          valueColor="text-indigo-600"
                          min={0}
                          max={15}
                          step={1}
                          value={pExp}
                          onChange={(v) => { setPExp(v); if (v > pInsp) setPInsp(v); setActivePreset(''); }}
                        />
                        <div className="rounded-lg bg-indigo-50 border border-indigo-200 p-2 text-[10px] font-semibold text-indigo-900 leading-snug">
                          <span className="font-extrabold text-indigo-800">{isTh ? 'สรีรวิทยาเครื่องช่วยหายใจ: ' : 'PPV Physiology: '}</span>
                          {t.ppvHint}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <SliderRow
                          id="sld-pexp"
                          label={t.pExpLabel}
                          valueText={`${pExp > 0 ? `+${pExp}` : pExp} cmH₂O`}
                          min={-15}
                          max={15}
                          step={1}
                          value={pExp}
                          onChange={(v) => { setPExp(v); if (v < pInsp) setPInsp(v); setActivePreset(''); }}
                        />
                        <SliderRow
                          id="sld-pinsp"
                          label={t.pInspLabel}
                          valueText={`${pInsp > 0 ? `+${pInsp}` : pInsp} cmH₂O`}
                          min={-30}
                          max={0}
                          step={1}
                          value={pInsp}
                          onChange={(v) => { setPInsp(v); if (v > pExp) setPExp(v); setActivePreset(''); }}
                        />
                      </div>
                    )
                  ) : (
                    <SliderRow
                      id="sld-pstat"
                      label={t.pStaticLabel}
                      valueText={`${pStatic > 0 ? `+${pStatic}` : pStatic} cmH₂O`}
                      valueColor="text-indigo-600"
                      min={-30}
                      max={30}
                      step={1}
                      value={pStatic}
                      onChange={(v) => { setPStatic(v); setActivePreset(''); }}
                    />
                  )}
                  <div className="pt-2.5 border-t border-slate-200 space-y-3">
                    <SliderRow
                      id="sld-pos"
                      label={t.bottleHeightLabel}
                      valueText={`${bottleHeightCm > 0 ? `+${bottleHeightCm}` : bottleHeightCm} cm`}
                      valueColor={bottleHeightCm > 0 ? 'text-rose-700' : 'text-slate-700'}
                      min={-60}
                      max={25}
                      step={5}
                      value={bottleHeightCm}
                      onChange={(v) => { setBottleHeightCm(v); setActivePreset(''); }}
                    />
                    <div>
                      <label htmlFor="sel-fault" className="block text-[11px] font-bold text-slate-600 mb-1">{t.faultLabel}</label>
                      <select id="sel-fault" value={fault} onChange={(e) => { setFault(e.target.value); setActivePreset(''); }} className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-700">
                        {Object.entries(t.faultOpts).map(([k, lbl]) => <option key={k} value={k}>{lbl}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Pressure Change Calculations Card (with Before vs. After Delta Pills) */}
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-3.5 space-y-1.5 text-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-1.5 border-b border-slate-200">
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">{t.calcTitle}</h3>
                      <div className="flex items-center gap-0.5 bg-white border border-slate-200 rounded-md p-0.5">
                        {['cmh2o', 'mmhg', 'kpa'].map((u) => (
                          <button
                            key={u}
                            onClick={() => setPressureUnit(u)}
                            className={`px-1.5 py-0.5 text-[9px] font-black rounded uppercase transition-all cursor-pointer ${
                              pressureUnit === u ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'
                            }`}
                          >
                            {u === 'cmh2o' ? 'cmH₂O' : u === 'mmhg' ? 'mmHg' : 'kPa'}
                          </button>
                        ))}
                      </div>
                    </div>
                    <span className="text-[9px] font-bold rounded border border-slate-200 bg-white px-1 py-px text-slate-500">
                      {baseline ? t.customBaselineLbl : t.baselineSetLbl}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setBaseline(baseline ? null : { system, hSeal, hFluid, hSuction, wallSuctionMode, bottleHeightCm, fault, clampPos })}
                      className="text-[10px] font-bold text-indigo-600 hover:underline"
                    >
                      {baseline ? t.resetBtn : t.setBaselineBtn}
                    </button>
                    <button onClick={toggleCalcSources} className="text-[10px] font-bold text-slate-500 hover:underline">
                      {showCalcSources ? t.hideSources : t.showSources}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800 gap-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">{isTh ? '1. ความลึก Seal จริง (h_eff)' : '1. Effective Seal (h_eff)'}</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200 tabular-nums text-right">
                    {system === '1b' ? `${hSeal} + ${hFluid} = ${phys.hSealEffective} cm` : `${hSeal} cm (${isTh ? 'คงที่' : 'isolated'})`}
                    <DeltaPill now={phys.hSealEffective} base={baselinePhys.hSealEffective} unit=" cm" />
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800 gap-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">{isTh ? '2. ความดันเหนือน้ำ (P_overhead)' : '2. Chamber Overhead (P_overhead)'}</span>
                  <span className="font-bold text-violet-700 dark:text-violet-400 tabular-nums text-right">
                    {system === '1b' || system === '2b'
                      ? (pressureUnit === 'cmh2o' ? '0 cmH₂O (ATM)' : formatP(0))
                      : system === 'dry'
                      ? `${formatP(phys.pOverhead)} (Dry Reg)`
                      : phys.ventBlocked
                      ? `${formatP(5)} (TRAPPED!)`
                      : formatP(phys.pOverhead)}
                    <DeltaPill now={phys.pOverhead} base={baselinePhys.pOverhead} pressureUnit={pressureUnit} />
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800 gap-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">{isTh ? '3. ความดันเปิดลิ้น (P_crack)' : '3. Cracking Threshold (P_crack)'}</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200 tabular-nums text-right">
                    {phys.pCrack === null ? (isTh ? 'อุดตัน (∞)' : 'Blocked (∞)') : formatP(phys.pCrack)}
                    <DeltaPill now={phys.pCrack} base={baselinePhys.pCrack} pressureUnit={pressureUnit} />
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800 gap-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">{isTh ? '4. แรงขับระบายสุทธิ (ΔP = P_pleural − P_crack)' : '4. Net Outflow Drive (ΔP)'}</span>
                  <span className={`font-extrabold tabular-nums text-right ${phys.netDrive > 0 ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-400'}`}>
                    {phys.pCrack === null ? (isTh ? '0 (อุดตัน)' : '0 (Blocked)') : formatP(phys.netDrive)}
                    <DeltaPill now={phys.pCrack === null ? null : phys.netDrive} base={baselinePhys.pCrack === null ? null : baselinePhys.netDrive} pressureUnit={pressureUnit} />
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800 gap-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">{isTh ? '5. ระดับน้ำในหลอด (y_meniscus)' : '5. Tube Meniscus (y = P_over − P_pl)'}</span>
                  <span className="font-bold text-cyan-700 dark:text-cyan-400 tabular-nums text-right">
                    {phys.tidalingActive ? `${phys.meniscusCm > 0 ? `+${phys.meniscusCm}` : phys.meniscusCm} cm` : (isTh ? 'ไม่มีการกระเพื่อม' : 'No tidaling')}
                  </span>
                </div>
                {(system === '3b' || system === 'dry') && (
                  <div className="flex justify-between py-1 gap-2">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">{isTh ? '6. แรงดูดสุทธิที่ปอด' : '6. Net Pleural Suction'}</span>
                    <span className="font-extrabold text-purple-700 dark:text-purple-400 tabular-nums text-right">
                      {phys.netEffectiveSuction === null ? 'N/A' : formatP(phys.netEffectiveSuction)}
                      <DeltaPill now={phys.netEffectiveSuction} base={baselinePhys.netEffectiveSuction} pressureUnit={pressureUnit} />
                    </span>
                  </div>
                )}
                {system === 'dry' && (
                  <>
                    <div className="flex justify-between py-1 border-b border-slate-200 gap-2">
                      <span className="text-slate-500 font-medium">{isTh ? '6. อัตราลมรั่วดิจิทัล (Digital Flow)' : '6. Digital Air Leak Flow'}</span>
                      <span className="font-extrabold text-teal-700 tabular-nums text-right">
                        {phys.airLeakFlow} mL/min
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1 gap-2">
                      <span className="text-slate-500 font-medium">{isTh ? '7. เกณฑ์ถอดสาย (ESTS Consensus)' : '7. Removal Readiness (ESTS)'}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider ${phys.estsRemovalReady ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                        {phys.estsRemovalReady
                          ? (isTh ? 'พร้อมถอดสาย (<30 mL/min)' : 'Ready for Removal (<30 mL/min)')
                          : (isTh ? 'ยังมีลมรั่ว (ใส่สายต่อ)' : 'Active Leak (Keep Drain)')}
                      </span>
                    </div>
                  </>
                )}
                {showCalcSources && (
                  <SourceLine t={t} k="calc-sources" items={[{ key: 'zisis', label: 'Zisis 2015' }, { key: 'statpearls', label: 'StatPearls' }, { key: 'bts_statement', label: 'BTS 2023' }]} />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SYSTEM INDICATIONS CARDS (1, 2, 3 Bottle & Digital) ==================== */}
        <section className="mb-8">
          <div className="mb-3">
            <h2 className="text-lg md:text-xl font-extrabold text-slate-800">{t.indicationsSectionTitle}</h2>
            <p className="text-xs text-slate-500 mt-0.5">{t.indicationsSectionSub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 md:gap-4">
            {SYSTEM_SPECS.map((sp) => {
              const s = isTh ? sp.th : sp.en;
              const tone = SYSTEM_TONE[sp.id];
              const isCurrent = system === sp.id;
              return (
                <article
                  key={sp.id}
                  className={`rounded-xl md:rounded-2xl border shadow-sm p-3.5 md:p-5 bg-white flex flex-col justify-between transition-all ${isCurrent ? 'border-indigo-500 ring-1 ring-indigo-500' : 'border-slate-200'}`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className={`text-[10px] font-bold rounded border px-1.5 py-0.5 uppercase tracking-wider ${tone.badge}`}>
                        {s.short}
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => jumpToSimulate(sp.id === '1b' ? 'fluid_trap' : sp.id === '2b' ? 'normal' : sp.id === 'dry' ? 'digital_normal' : 'air_leak_bpf')}
                          className="text-[10px] font-bold px-2 py-1 rounded-md border border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors"
                        >
                          {t.loadInSim}
                        </button>
                        <button
                          onClick={() => setDetailSysId(sp.id)}
                          className="text-[10px] font-bold px-2 py-1 rounded-md border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors"
                        >
                          {t.detailsBtn} ›
                        </button>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-800 leading-tight">{s.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5 mb-3">{s.subtitle}</p>

                    <div className="bg-slate-50 rounded-xl border border-slate-100 p-3 mb-3">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{t.indicationsHdr}</span>
                      <ul className="list-disc pl-4 space-y-1 text-xs text-slate-700 leading-snug">
                        {s.indications.map((ind, idx) => <li key={idx}>{ind}</li>)}
                      </ul>
                    </div>

                    <p className="text-[11px] font-semibold text-slate-600 leading-snug mb-2">
                      <span className="font-extrabold text-amber-700">Pearl: </span>{s.pearl}
                    </p>
                  </div>
                  <SourceLine t={t} k={`sys-${sp.id}`} items={sp.sources} />
                </article>
              );
            })}
          </div>
        </section>

        {/* ==================== BEDSIDE TROUBLESHOOTING & TUBE LEAK GUIDE ==================== */}
        <section className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-3">
            <div>
              <h2 className="text-lg md:text-xl font-extrabold text-slate-800">{t.troubleSectionTitle}</h2>
              <p className="text-xs text-slate-500 mt-0.5">{t.troubleSectionSub}</p>
            </div>
            <button
              onClick={() => setShowCardSources((v) => !v)}
              className="self-start sm:self-auto text-[11px] font-bold text-indigo-600 bg-white border border-slate-200 px-2.5 py-1 rounded-lg hover:bg-slate-50"
            >
              {showCardSources ? t.hideSources : t.showSources}
            </button>
          </div>

          {/* Search + View Toggle + Filter Rail (Bedside UI pattern) */}
          <div className="flex flex-col sm:flex-row gap-2 mb-4">
            <div className="flex gap-2 shrink-0">
              <div className="relative flex-1 sm:w-64">
                <input
                  type="text"
                  value={troubleSearch}
                  onChange={(e) => setTroubleSearch(e.target.value)}
                  placeholder={narrow ? t.searchPlaceholderShort : t.searchPlaceholder}
                  className="w-full h-9 pl-3 pr-8 rounded-lg border border-slate-200 bg-white text-xs shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {troubleSearch ? (
                  <button onClick={() => setTroubleSearch('')} aria-label="Clear search" className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    <XIcon className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <SearchIcon className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                )}
              </div>
              <div className="flex bg-white rounded-lg border border-slate-200 p-0.5 shadow-sm shrink-0 items-center h-9" data-trouble-view-toggle>
                <button
                  onClick={() => setTroubleView('grid')}
                  aria-label={t.gridView}
                  title={t.gridView}
                  aria-pressed={troubleView === 'grid'}
                  className={`h-full px-2 rounded-md transition-colors flex items-center justify-center ${troubleView === 'grid' ? 'bg-slate-100 text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <LayoutGridIcon className="w-3.5 h-3.5" />
                  {troubleView === 'grid' && <span className="ml-1 text-[10px] font-bold whitespace-nowrap">{t.gridView}</span>}
                </button>
                <button
                  onClick={() => setTroubleView('list')}
                  aria-label={t.listView}
                  title={t.listView}
                  aria-pressed={troubleView === 'list'}
                  className={`h-full px-2 rounded-md transition-colors flex items-center justify-center ${troubleView === 'list' ? 'bg-slate-100 text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <ListIcon className="w-3.5 h-3.5" />
                  {troubleView === 'list' && <span className="ml-1 text-[10px] font-bold whitespace-nowrap">{t.listView}</span>}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar bg-white rounded-lg border border-slate-200 p-1 shadow-sm flex-1 min-w-0">
              {['all', 'leak', 'tidaling', 'suction', 'obstruction', 'emergency'].map((c) => {
                const active = troubleCat === c;
                const label = c === 'all' ? t.catAll : t.catOpts[c];
                return (
                  <button
                    key={c}
                    onClick={() => setTroubleCat(c)}
                    className={`shrink-0 px-2.5 py-1 rounded-md text-[11px] font-bold transition-all whitespace-nowrap ${active ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Troubleshooting Cards (Grid or Compact List) */}
          {troubleView === 'list' ? (
            <div className="flex flex-col gap-2.5">
              {filteredTrouble.map((item) => {
                const body = isTh ? item.th : item.en;
                return (
                  <article key={item.id} className="rounded-xl border border-slate-200 bg-white shadow-sm p-3 md:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div className="min-w-0 space-y-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className={`text-[10px] font-bold rounded border px-1.5 py-0.5 uppercase tracking-wider ${SEVERITY_TONE[item.severity]}`}>
                          {t.catOpts[item.cat]}
                        </span>
                        <h3 className="text-xs sm:text-sm font-extrabold text-slate-800 leading-snug">{body.title}</h3>
                      </div>
                      <p className="text-xs text-slate-600 leading-snug">{body.sign}</p>
                      {showCardSources && <SourceLine t={t} k={`tr-list-${item.id}`} items={item.sources} />}
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {item.simPreset && (
                        <button
                          onClick={() => jumpToSimulate(item.simPreset)}
                          className="px-2.5 py-1.5 rounded-md text-[10px] font-bold bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 inline-flex items-center gap-1 transition-colors"
                        >
                          <PlayIcon className="w-2.5 h-2.5" /> {t.simulateBtn}
                        </button>
                      )}
                      <button
                        onClick={() => setDetailTroubleId(item.id)}
                        className="px-2.5 py-1.5 rounded-md text-[10px] font-bold bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors whitespace-nowrap"
                      >
                        {t.detailsBtn} ›
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-4">
              {filteredTrouble.map((item) => {
                const body = isTh ? item.th : item.en;
                return (
                  <article key={item.id} className="rounded-xl md:rounded-2xl border border-slate-200 bg-white shadow-sm p-3.5 md:p-5 flex flex-col justify-between gap-3">
                    <div className="space-y-2.5">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className={`text-[10px] font-bold rounded border px-1.5 py-0.5 uppercase tracking-wider ${SEVERITY_TONE[item.severity]}`}>
                            {t.catOpts[item.cat]}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          {item.simPreset && (
                            <button
                              onClick={() => jumpToSimulate(item.simPreset)}
                              className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 inline-flex items-center gap-1 transition-colors"
                            >
                              <PlayIcon className="w-2.5 h-2.5" /> {t.simulateBtn}
                            </button>
                          )}
                          <button
                            onClick={() => setDetailTroubleId(item.id)}
                            className="px-2 py-1 rounded-md text-[10px] font-bold bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors"
                          >
                            {t.detailsBtn} ›
                          </button>
                        </div>
                      </div>

                      <h3 className="text-sm sm:text-base font-extrabold text-slate-800 leading-snug">{body.title}</h3>
                      <p className="text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-100 rounded-lg p-2.5">{body.sign}</p>

                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">{t.causesHdr}</span>
                        <ul className="list-disc pl-4 space-y-0.5 text-xs text-slate-700">
                          {body.causes.map((c, idx) => <li key={idx}>{c}</li>)}
                        </ul>
                      </div>

                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">{t.stepsHdr}</span>
                        <ul className="space-y-1 text-xs text-slate-700 leading-relaxed">
                          {body.steps.map((st, idx) => <li key={idx}>{st}</li>)}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-[11px] font-bold text-rose-800 leading-snug">
                        <span className="uppercase tracking-wider">{t.neverDoHdr}: </span>{body.neverDo}
                      </div>
                      {showCardSources && <SourceLine t={t} k={`tr-${item.id}`} items={item.sources} />}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        <DisclaimerSection t={t} />
        <ReferencesSection t={t} lang={lang} />
      </div>

      {/* Modals */}
      {modal === 'compare' && <CompareModal lang={lang} t={t} onClose={() => setModal(null)} />}
      {modal === 'indications' && <IndicationsModal lang={lang} t={t} onClose={() => setModal(null)} />}
      {modal === 'trouble' && <TroubleshootingGuideModal lang={lang} t={t} onClose={() => setModal(null)} onSimulate={jumpToSimulate} />}
      {modal === 'math' && <EquationsModal lang={lang} t={t} onClose={() => setModal(null)} />}
      {modal === 'removal' && <RemovalModal lang={lang} t={t} onClose={() => setModal(null)} />}
        {modal === 'pleurodesis' && <PleurodesisModal lang={lang} t={t} onClose={() => setModal(null)} onSimulate={jumpToSimulate} />}
      {modal === 'legend' && <LegendModal lang={lang} t={t} onClose={() => setModal(null)} />}
      {modal === 'changelog' && <ChangelogModal lang={lang} t={t} onClose={() => setModal(null)} />}
      {detailSpec && <SystemDetailModal spec={detailSpec} lang={lang} t={t} onClose={() => setDetailSysId(null)} onLoadSim={(id) => { setSystem(id); if (simRef.current) simRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} />}
      {detailTroubleItem && <TroubleDetailModal item={detailTroubleItem} lang={lang} t={t} onClose={() => setDetailTroubleId(null)} onSimulate={jumpToSimulate} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
