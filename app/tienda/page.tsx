"use client";

import { useMemo, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WhatsAppFloat } from "../components/WhatsAppFloat";
import { ProductCard } from "../components/ProductCard";
import { products, categoryLabels, ProductCategory } from "@/lib/products";

type FilterValue = ProductCategory | "todos";

export default function TiendaPage() {
  const [filter, setFilter] = useState<FilterValue>("todos");

  const categoriesPresent = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return Array.from(set);
  }, []);

  const filtered = useMemo(
    () => (filter === "todos" ? products : products.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <>
      <Header />
      <main>
        <section className="tienda-hero">
          <div className="wrap">
            <p className="eyebrow">Tienda</p>
            <h1>Equipos y repuestos.</h1>
            <p className="tienda-sub">
              Laptops reacondicionadas, revisadas en taller antes de salir.
              El catálogo va creciendo — escríbenos si buscas algo puntual y
              no lo ves aquí todavía.
            </p>
          </div>
        </section>

        <section className="tienda-catalog">
          <div className="wrap">
            <div className="filters" role="tablist" aria-label="Filtrar por categoría">
              <button
                className={`filter-btn ${filter === "todos" ? "active" : ""}`}
                onClick={() => setFilter("todos")}
                aria-pressed={filter === "todos"}
              >
                Todos
              </button>
              {categoriesPresent.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${filter === cat ? "active" : ""}`}
                  onClick={() => setFilter(cat)}
                  aria-pressed={filter === cat}
                >
                  {categoryLabels[cat]}
                </button>
              ))}
            </div>

            {filtered.length > 0 ? (
              <div className="product-grid">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <p className="empty">Todavía no hay productos en esta categoría.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />

      <style>{`
        .tienda-hero { padding: var(--space-5) 0 var(--space-4); }
        .tienda-hero h1 { margin-top: var(--space-1); font-size: clamp(1.8rem, 3.6vw, 2.6rem); }
        .tienda-sub { margin-top: var(--space-2); max-width: 54ch; color: var(--c-ceniza); font-size: 1rem; }

        .tienda-catalog { padding: 0 0 var(--space-6); }
        .filters { display: flex; gap: 0.6rem; flex-wrap: wrap; margin-bottom: var(--space-4); }
        .filter-btn {
          background: transparent;
          border: 1px solid var(--c-borde);
          color: var(--c-ceniza);
          padding: 0.5rem 1rem;
          border-radius: var(--radius);
          font-size: 0.85rem;
          font-family: inherit;
        }
        .filter-btn:hover { border-color: var(--c-oro); color: var(--c-hueso); }
        .filter-btn.active { background: var(--c-oro); border-color: var(--c-oro); color: var(--c-noche); font-weight: 600; }

        .product-grid {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-3);
        }
        .product-grid > * {
          flex: 1 1 260px;
          max-width: 340px;
        }

        .empty { color: var(--c-ceniza-2); font-size: 0.95rem; }
      `}</style>
    </>
  );
}
