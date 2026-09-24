import { Product } from "@/lib/products";
import { whatsappHref } from "@/lib/site-config";

export function ProductCard({ product }: { product: Product }) {
  const priceLabel =
    product.price !== null ? `$${product.price}` : "Cotizar por WhatsApp";

  const message = `Hola, me interesa: ${product.name}${
    product.price !== null ? ` ($${product.price})` : ""
  }`;

  return (
    <div className="product-card">
      <div className="product-image" aria-hidden="true">
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={`/products/${product.image}`} alt="" />
        ) : (
          <span className="placeholder">{product.category}</span>
        )}
      </div>

      <div className="product-body">
        <p className="product-condition">{product.condition}</p>
        <h3 className="product-name">{product.name}</h3>
        <ul className="product-specs">
          {product.specs.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>

      <div className="product-footer">
        <span className="product-price">{priceLabel}</span>
        <a
          href={whatsappHref(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          Consultar
        </a>
      </div>

      <style>{`
        .product-card {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--c-borde);
          border-radius: var(--radius);
          background: var(--c-carbon);
          overflow: hidden;
        }
        .product-image {
          aspect-ratio: 4 / 3;
          background: var(--c-carbon-2);
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid var(--c-borde);
        }
        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .placeholder {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--c-ceniza-2);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .product-body {
          padding: var(--space-3);
          flex: 1;
        }
        .product-condition {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--c-oro);
          letter-spacing: 0.03em;
        }
        .product-name {
          margin-top: 0.4rem;
          font-size: 1.05rem;
          line-height: 1.3;
        }
        .product-specs {
          margin-top: 0.7rem;
          padding-left: 1rem;
          font-size: 0.85rem;
          color: var(--c-ceniza);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .product-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-2);
          padding: var(--space-3);
          border-top: 1px solid var(--c-borde);
        }
        .product-price {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          color: var(--c-hueso);
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}
