const repairable = [
  "Puerto de carga y conectores",
  "Líneas de audio y backlight",
  "Cortos y consumo anómalo",
  "Reballing de CPU, chipset y GPU",
  "PMIC y circuitos de alimentación",
  "Software: True Tone, batería, NAND",
];
const limits = [
  "Bloqueos de cuenta (iCloud, FRP) sin las credenciales del dueño",
  "Chip partido internamente",
  "Datos cifrados sin la clave del usuario",
];

export function Differentiator() {
  return (
    <section id="servicios" className="diff">
      <div className="wrap diff-inner">
        <div className="diff-text">
          <h2>Lo que la mayoría<br />no repara.</h2>
          <p>
            En muchos talleres, si el problema no es la pantalla o la
            batería, el equipo &ldquo;no tiene arreglo&rdquo;. Con
            microscopio y diagnóstico a nivel de componente, la lista de
            fallas reparables es mucho más larga — y te lo decimos con
            precisión desde el diagnóstico, no después de cobrar.
          </p>
        </div>
        <div className="diff-lists">
          <div className="diff-col">
            <p className="col-label">Se repara</p>
            <ul>{repairable.map((item) => (<li key={item}><span className="mark mark-yes" aria-hidden="true" />{item}</li>))}</ul>
          </div>
          <div className="diff-col">
            <p className="col-label">Tiene límites</p>
            <ul>{limits.map((item) => (<li key={item}><span className="mark mark-no" aria-hidden="true" />{item}</li>))}</ul>
            <p className="diff-note">Esto no es falta de habilidad — es honestidad sobre lo que es técnicamente reparable.</p>
          </div>
        </div>
      </div>
      <style>{`
        .diff { padding: var(--space-6) 0; border-top: 1px solid var(--c-borde); }
        .diff-inner { display: flex; gap: var(--space-6); align-items: flex-start; }
        .diff-text { flex: 1 1 320px; position: sticky; top: 100px; }
        .diff-text h2 { font-size: clamp(1.7rem, 3vw, 2.3rem); }
        .diff-text p { margin-top: var(--space-3); color: var(--c-ceniza); max-width: 40ch; }
        .diff-lists { flex: 1.3 1 460px; display: flex; gap: var(--space-4); }
        .diff-col { flex: 1; min-width: 0; }
        .col-label { font-family: var(--font-mono); font-size: 0.78rem; letter-spacing: 0.03em; color: var(--c-oro); padding-bottom: var(--space-2); border-bottom: 1px solid var(--c-borde); margin-bottom: var(--space-3); }
        .diff-col:last-child .col-label { color: var(--c-ceniza); }
        .diff-col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: var(--space-2); }
        .diff-col li { display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.94rem; color: var(--c-hueso); }
        .mark { flex-shrink: 0; width: 8px; height: 8px; margin-top: 0.45rem; margin-right: 0.6rem; border-radius: 1px; }
        .mark-yes { background: var(--c-oro); }
        .mark-no { background: var(--c-ceniza-2); }
        .diff-note { margin-top: var(--space-3); font-size: 0.85rem; color: var(--c-ceniza-2); font-style: italic; }
        @media (max-width: 900px) {
          .diff-inner { flex-direction: column; }
          .diff-text, .diff-lists { flex: none; width: 100%; }
          .diff-text { position: static; }
          .diff-lists { flex-direction: column; gap: var(--space-4); }
        }
      `}</style>
    </section>
  );
}
