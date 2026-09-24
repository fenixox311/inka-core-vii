export function Trust() {
  return (
    <section className="trust">
      <div className="wrap trust-inner">
        <p className="trust-text">
          Trabajamos con microscopio trinocular, fuente de diagnóstico y
          equipo de microsoldadura — la misma clase de herramienta que usan
          los talleres especializados a nivel internacional. Estamos
          empezando en Santo Domingo, y cada equipo que entra se documenta y
          se repara con el mismo cuidado, sea el primero o el número cien.
        </p>
      </div>
      <style>{`
        .trust { padding: var(--space-5) 0; border-top: 1px solid var(--c-borde); }
        .trust-inner { border-left: 2px solid var(--c-cobre); padding-left: var(--space-3); }
        .trust-text { font-family: var(--font-display); font-size: clamp(1.15rem, 2vw, 1.5rem); line-height: 1.5; color: var(--c-hueso); max-width: 62ch; }
      `}</style>
    </section>
  );
}
