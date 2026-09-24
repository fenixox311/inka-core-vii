import { Emblem } from "./Emblem";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const hasSocial = siteConfig.instagram || siteConfig.facebook;
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <Emblem size={26} />
          <div>
            <p className="footer-name">INKA CORE <em>VII</em></p>
            <p className="footer-tagline">{siteConfig.tagline}</p>
          </div>
        </div>
        <div className="footer-meta">
          <p>{siteConfig.city}</p>
          {hasSocial && (<p className="footer-social">{siteConfig.instagram && <a href={siteConfig.instagram}>Instagram</a>}{siteConfig.facebook && <a href={siteConfig.facebook}>Facebook</a>}</p>)}
        </div>
      </div>
      <style>{`
        .footer { padding: var(--space-4) 0; border-top: 1px solid var(--c-borde); }
        .footer-inner { display: flex; justify-content: space-between; align-items: center; gap: var(--space-3); flex-wrap: wrap; }
        .footer-brand { display: flex; align-items: center; gap: 0.6rem; }
        .footer-name { font-family: var(--font-display); font-size: 0.9rem; color: var(--c-hueso); }
        .footer-name em { color: var(--c-oro); font-style: normal; }
        .footer-tagline { font-family: var(--font-mono); font-size: 0.7rem; color: var(--c-ceniza-2); margin-top: 0.1rem; }
        .footer-meta { text-align: right; font-size: 0.82rem; color: var(--c-ceniza); }
        .footer-social { margin-top: 0.3rem; display: flex; gap: 0.8rem; justify-content: flex-end; }
        .footer-social a:hover { color: var(--c-oro); }
        @media (max-width: 560px) { .footer-inner { flex-direction: column; align-items: flex-start; } .footer-meta { text-align: left; } .footer-social { justify-content: flex-start; } }
      `}</style>
    </footer>
  );
}
