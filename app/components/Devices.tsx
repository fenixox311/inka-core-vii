const devices = [
  { id: "iphone", name: "iPhone", detail: "Placa lógica, conectores, baterías, True Tone y NAND." },
  { id: "laptop", name: "Laptop", detail: "Chipset, GPU, DC jack, circuitos de carga y encendido." },
  { id: "pc", name: "PC y consola", detail: "Reballing, fuentes de poder, diagnóstico de placa base." },
];

export function Devices() {
  return (
    <section id="dispositivos" className="devices">
      <div className="wrap">
        <p className="section-kicker">Dispositivos</p>
        <div className="devices-row">
          {devices.map((d) => (<div key={d.id} className="device-card"><h3>{d.name}</h3><p>{d.detail}</p></div>))}
        </div>
      </div>
      <style>{`
        .devices { padding: var(--space-5) 0; border-top: 1px solid var(--c-borde); }
        .section-kicker { font-family: var(--font-mono); font-size: 0.78rem; color: var(--c-ceniza-2); margin-bottom: var(--space-3); }
        .devices-row { display: flex; gap: var(--space-3); flex-wrap: wrap; }
        .device-card { flex: 1 1 240px; padding: var(--space-3); border: 1px solid var(--c-borde); border-radius: var(--radius); background: var(--c-carbon); }
        .device-card h3 { font-size: 1.15rem; color: var(--c-hueso); }
        .device-card p { margin-top: 0.6rem; font-size: 0.92rem; color: var(--c-ceniza); }
      `}</style>
    </section>
  );
}
