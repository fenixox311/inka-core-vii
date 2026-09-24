import { products } from "@/lib/products";

export function StoreTeaser() {
  const featured = products.slice(0, 3);

  return (
    <section className="teaser">
      <div className="wrap teaser-inner">
        <div className="teaser-text">
          <p className="eyebrow">Tienda</p>
          <h2>Equipos reacondicionados,<br />revisados en taller.</h2>
          <a href="/tienda" className="btn btn-ghost">
            Ver catálogo completo
          </a>
        </div>
        <ul className="teaser-list">
          {featured.map((p) => (
            <li key={p.id}>
              <span>{p.name}</span>
              <strong>{p.price !== null ? `$${p.price}` : "Cotizar"}</strong>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .teaser { padding: var(--space-5) 0; border-top: 1px solid var(--c-borde); }
        .teaser-inner { display: flex; gap: var(--space-5); align-items: flex-start; flex-wrap: wrap; }
        .teaser-text { flex: 1 1 300px; }
        .teaser-text h2 { margin-top: var(--space-1); font-size: clamp(1.4rem, 2.6vw, 1.9rem); }
        .teaser-text .btn { margin-top: var(--space-3); }
        .teaser-list { flex: 1 1 320px; list-style: none; margin: 0; padding: 0; border: 1px solid var(--c-borde); border-radius: var(--radius); overflow: hidden; }
        .teaser-list li { display: flex; justify-content: space-between; padding: 0.9rem 1.1rem; font-size: 0.9rem; border-bottom: 1px solid var(--c-borde); background: var(--c-carbon); }
        .teaser-list li:last-child { border-bottom: none; }
        .teaser-list strong { font-family: var(--font-mono); color: var(--c-oro); }
      `}</style>
    </section>
  );
}
