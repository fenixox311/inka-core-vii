const steps = [
  { n: "01", title: "Diagnóstico", detail: "Revisamos la placa bajo microscopio y con fuente de diagnóstico antes de cobrar nada." },
  { n: "02", title: "Reparación", detail: "Microsoldadura, reballing o cambio de componente según el caso — a nivel de placa, no solo de módulo." },
  { n: "03", title: "Pruebas", detail: "El equipo se prueba en condiciones reales antes de avisarte que está listo." },
  { n: "04", title: "Entrega", detail: "Te explicamos qué se hizo y por qué, sin tecnicismos innecesarios." },
];

export function Process() {
  return (
    <section id="proceso" className="process">
      <div className="wrap">
        <p className="section-kicker">Proceso</p>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <span className="step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .process { padding: var(--space-5) 0; border-top: 1px solid var(--c-borde); }
        .steps { display: flex; gap: var(--space-3); }
        .step { position: relative; flex: 1; min-width: 0; padding-top: var(--space-3); border-top: 2px solid var(--c-oro); }
        .step-n { font-family: var(--font-mono); font-size: 0.8rem; color: var(--c-cobre); }
        .step h3 { margin-top: 0.5rem; font-size: 1.05rem; font-family: var(--font-body); font-weight: 600; }
        .step p { margin-top: 0.5rem; font-size: 0.88rem; color: var(--c-ceniza); }
        @media (max-width: 800px) { .steps { flex-direction: column; gap: var(--space-4); } }
      `}</style>
    </section>
  );
}
