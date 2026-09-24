import { whatsappHref } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section className="cta">
      <div className="wrap cta-inner">
        <h2>¿Tu equipo no enciende, no carga, o ya te dijeron<br />que no tiene arreglo?</h2>
        <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-primary cta-btn">
          Escribir por WhatsApp
        </a>
      </div>
      <style>{`
        .cta { padding: var(--space-6) 0; background: var(--c-carbon); border-top: 1px solid var(--c-borde); border-bottom: 1px solid var(--c-borde); }
        .cta-inner { display: flex; align-items: center; justify-content: space-between; gap: var(--space-4); flex-wrap: wrap; }
        .cta h2 { font-size: clamp(1.4rem, 3vw, 2rem); max-width: 32ch; }
        .cta-btn { font-size: 1rem; padding: 1rem 2rem; }
      `}</style>
    </section>
  );
}
