import { whatsappHref, siteConfig } from "@/lib/site-config";

const labels = [
  { id: "diag", x: 70, y: 70, text: "Diagnóstico" },
  { id: "solder", x: 450, y: 70, text: "Microsoldadura" },
  { id: "reball", x: 70, y: 450, text: "Reballing" },
  { id: "soft", x: 450, y: 450, text: "Software iPhone" },
];

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <h1>
            Reparación a nivel
            <br />
            de placa.
            <br />
            <span className="accent">Cuando cambiar la pieza</span>
            <br />
            <span className="accent">no alcanza.</span>
          </h1>
          <p className="hero-sub">
            Microsoldadura y reballing para iPhone, laptop y PC — el trabajo
            que la mayoría de talleres no puede hacer, hecho con microscopio,
            diagnóstico real y honestidad sobre lo que sí y no tiene arreglo.
          </p>
          <div className="hero-actions">
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Escribir por WhatsApp
            </a>
            <a href="/tienda" className="btn btn-ghost">
              Ver tienda
            </a>
          </div>
          <p className="hero-locale">{siteConfig.city}</p>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <svg viewBox="0 0 520 520" className="schematic">
            <g className="traces" stroke="#3a4250" strokeWidth="2" fill="none">
              <path className="trace t1" pathLength={1} d="M225 175 V110 H70 V78" />
              <path className="trace t2" pathLength={1} d="M295 175 V110 H450 V78" />
              <path className="trace t3" pathLength={1} d="M225 345 V410 H70 V442" />
              <path className="trace t4" pathLength={1} d="M295 345 V410 H450 V442" />
            </g>
            <g className="endpoints" fill="#38bdf8">
              <circle className="dot d1" cx="70" cy="70" r="4" />
              <circle className="dot d2" cx="450" cy="70" r="4" />
              <circle className="dot d3" cx="70" cy="450" r="4" />
              <circle className="dot d4" cx="450" cy="450" r="4" />
            </g>
            <g className="emblem-group" transform="translate(70 120)">
              <g stroke="#b87333" strokeWidth="2.4" fill="none" strokeLinecap="round">
                <path d="M120 110 H92" /><circle cx="86" cy="110" r="4" fill="#b87333" />
                <path d="M120 140 H78" /><circle cx="72" cy="140" r="4" fill="#38bdf8" stroke="#38bdf8" />
                <path d="M120 170 H92" /><circle cx="86" cy="170" r="4" fill="#b87333" />
                <path d="M260 110 H288" /><circle cx="294" cy="110" r="4" fill="#b87333" />
                <path d="M260 140 H302" /><circle cx="308" cy="140" r="4" fill="#38bdf8" stroke="#38bdf8" />
                <path d="M260 170 H288" /><circle cx="294" cy="170" r="4" fill="#b87333" />
                <path d="M155 82 V60" /><circle cx="155" cy="55" r="4" fill="#b87333" />
                <path d="M225 82 V60" /><circle cx="225" cy="55" r="4" fill="#b87333" />
                <path d="M155 198 V220" /><circle cx="155" cy="225" r="4" fill="#b87333" />
                <path d="M225 198 V220" /><circle cx="225" cy="225" r="4" fill="#b87333" />
              </g>
              <path d="M140 82 h20 v-8 h20 v8 h20 v8 h8 v20 h8 v20 h-8 v20 h8 v20 h-8 v20 h-8 v8 h-20 v8 h-20 v-8 h-20 v-8 h-8 v-20 h-8 v-20 h8 v-20 h-8 v-20 h8 v-20 h8 z" fill="#161b22" stroke="#d4af37" strokeWidth="3" strokeLinejoin="round" />
              <g fill="#d4af37">
                <rect x="182" y="112" width="16" height="16" /><rect x="166" y="128" width="16" height="16" />
                <rect x="198" y="128" width="16" height="16" /><rect x="150" y="132" width="16" height="8" />
                <rect x="214" y="132" width="16" height="8" /><rect x="182" y="144" width="16" height="16" />
                <rect x="166" y="160" width="16" height="8" /><rect x="198" y="160" width="16" height="8" />
              </g>
              <rect x="182" y="128" width="16" height="16" fill="#38bdf8" />
            </g>
          </svg>
          {labels.map((l, i) => (
            <span key={l.id} className={`pill pill-${i + 1}`} style={{ left: `${(l.x / 520) * 100}%`, top: `${(l.y / 520) * 100}%` }}>
              {l.text}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .hero { padding: var(--space-6) 0 var(--space-5); }
        .hero-inner { display: flex; align-items: center; gap: var(--space-6); }
        .hero-copy { flex: 1 1 460px; min-width: 0; }
        .hero-copy h1 { font-size: clamp(2rem, 4.2vw, 3.1rem); }
        .hero-copy h1 .accent { color: var(--c-oro); }
        .hero-sub { margin-top: var(--space-3); max-width: 46ch; color: var(--c-ceniza); font-size: 1.05rem; }
        .hero-actions { margin-top: var(--space-4); display: flex; gap: var(--space-2); flex-wrap: wrap; }
        .hero-locale { margin-top: var(--space-3); font-family: var(--font-mono); font-size: 0.78rem; color: var(--c-ceniza-2); }
        .hero-visual { position: relative; flex: 1 1 440px; min-width: 320px; max-width: 460px; }
        .schematic { width: 100%; height: auto; overflow: visible; }
        .trace { stroke-dasharray: 1; stroke-dashoffset: 1; animation: draw 0.9s ease-out forwards; }
        .t1 { animation-delay: 0.15s; } .t2 { animation-delay: 0.3s; } .t3 { animation-delay: 0.45s; } .t4 { animation-delay: 0.6s; }
        @keyframes draw { to { stroke-dashoffset: 0; } }
        .dot { opacity: 0; animation: pop 0.4s ease-out forwards; transform-origin: center; }
        .d1 { animation-delay: 1.0s; } .d2 { animation-delay: 1.15s; } .d3 { animation-delay: 1.3s; } .d4 { animation-delay: 1.45s; }
        @keyframes pop { from { opacity: 0; r: 1; } to { opacity: 1; } }
        .emblem-group { opacity: 0; animation: fadein 0.6s ease-out 0.05s forwards; }
        @keyframes fadein { to { opacity: 1; } }
        .pill { position: absolute; transform: translate(-50%, -50%); background: var(--c-carbon-2); border: 1px solid var(--c-borde); color: var(--c-ceniza); font-family: var(--font-mono); font-size: 0.72rem; padding: 0.35rem 0.6rem; border-radius: var(--radius); white-space: nowrap; opacity: 0; animation: labelin 0.5s ease-out forwards; }
        .pill-1 { animation-delay: 1.05s; } .pill-2 { animation-delay: 1.2s; } .pill-3 { animation-delay: 1.35s; } .pill-4 { animation-delay: 1.5s; }
        @keyframes labelin { from { opacity: 0; transform: translate(-50%, -40%); } to { opacity: 1; transform: translate(-50%, -50%); } }
        @media (max-width: 900px) {
          .hero-inner { flex-direction: column; align-items: stretch; }
          .hero-copy, .hero-visual { flex: none; width: 100%; min-width: 0; }
          .hero-visual { max-width: 420px; margin: var(--space-4) auto 0; }
        }
      `}</style>
    </section>
  );
}
