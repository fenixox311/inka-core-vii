// ── Catálogo de la tienda ─────────────────────────────────────────────────
// EJEMPLO / PLANTILLA — reemplaza estos productos por tu inventario real
// antes de publicar. Para cada producto:
//   - "image": pon el nombre del archivo dentro de /public/products/
//     (ej. sube tu foto a public/products/mi-laptop.jpg y pon "mi-laptop.jpg").
//     Si lo dejas vacío (""), se muestra un marcador genérico — nunca
//     se inventa ni se descarga una foto de stock.
//   - "price": en dólares, sin el símbolo. Si aún no defines precio fijo,
//     usa null y se mostrará "Cotizar por WhatsApp".

export type ProductCategory = "laptop" | "celular" | "repuesto" | "accesorio";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  condition: "Nuevo" | "Reacondicionado" | "Usado — revisado";
  price: number | null;
  specs: string[];
  image: string;
}

export const categoryLabels: Record<ProductCategory, string> = {
  laptop: "Laptops",
  celular: "Celulares",
  repuesto: "Repuestos",
  accesorio: "Accesorios",
};

// TODO: reemplaza este arreglo con tu inventario real antes de publicar.
export const products: Product[] = [
  {
    id: "laptop-ejemplo-1",
    name: "Laptop reacondicionada — Core i5",
    category: "laptop",
    condition: "Reacondicionado",
    price: 350,
    specs: ["Intel Core i5", "8 GB RAM", "256 GB SSD", "Revisada y probada en taller"],
    image: "",
  },
  {
    id: "laptop-ejemplo-2",
    name: "Laptop reacondicionada — Core i7",
    category: "laptop",
    condition: "Reacondicionado",
    price: 480,
    specs: ["Intel Core i7", "12 GB RAM", "512 GB SSD", "Batería verificada"],
    image: "",
  },
  {
    id: "laptop-ejemplo-3",
    name: "Laptop — a definir precio",
    category: "laptop",
    condition: "Usado — revisado",
    price: null,
    specs: ["Pendiente de detallar specs", "Diagnóstico incluido antes de la venta"],
    image: "",
  },
];
