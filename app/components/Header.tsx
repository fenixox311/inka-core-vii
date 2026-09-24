import { Emblem } from "./Emblem";
import { siteConfig, whatsappHref } from "@/lib/site-config";

const links = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#dispositivos", label: "Dispositivos" },
  { href: "/tienda", label: "Tienda" },
  { href: "/#proceso", label: "Proceso" },
];

export function Header() {
  return (
    <header className="header">
      <div className="wrap header-inner">
        <a href="/" className="brand" aria-label={siteConfig.name}>
          <Emblem size={30} />
          <span className="brand-text">
            INKA CORE <em>VII</em>
          </span>
        </a>

        <nav className="nav" aria-label="Navegación principal">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary header-cta"
        >
          Escribir por WhatsApp
        </a>
      </div>

      <style>{`
        .header { position: sticky; top: 0; z-index: 40; background: rgba(11, 13, 16, 0.88); backdrop-filter: blur(6px); border-bottom: 1px solid var(--c-borde); }
        .header-inner { display: flex; align-items: center; justify-content: space-between; gap: var(--space-3); height: 68px; }
        .brand { display: flex; align-items: center; gap: 0.65rem; flex-shrink: 0; }
        .brand-text { font-family: var(--font-display); font-size: 1.02rem; letter-spacing: 0.03em; color: var(--c-hueso); }
        .brand-text em { color: var(--c-oro); font-style: normal; }
        .nav { display: flex; gap: var(--space-4); font-size: 0.92rem; color: var(--c-ceniza); }
        .nav a + a { margin-left: var(--space-4); }
        .nav a:hover { color: var(--c-hueso); }
        .header-cta { padding: 0.6rem 1.15rem; font-size: 0.85rem; }
        @media (max-width: 850px) { .nav { display: none; } }
      `}</style>
    </header>
  );
}
