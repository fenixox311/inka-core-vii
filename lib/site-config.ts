// ── Configuración del sitio ──────────────────────────────────────────────
// Antes de publicar, reemplaza estos valores por los reales del negocio.

export const siteConfig = {
  name: "INKA CORE VII",
  tagline: "Reparación a nivel de placa y venta de tecnología",
  city: "Santo Domingo de los Tsáchilas, Ecuador",

  // TODO: reemplazar por el número real, formato internacional sin + ni espacios
  whatsappNumber: "593990000000",
  whatsappMessage: "Hola, quiero una cotización para mi equipo.",

  // TODO: reemplazar por redes reales o dejar vacío para ocultar del footer
  instagram: "",
  facebook: "",
};

export function whatsappHref(customMessage?: string) {
  const msg = encodeURIComponent(customMessage ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${msg}`;
}
