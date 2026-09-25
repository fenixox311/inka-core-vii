# INKA CORE VII

## Qué es este proyecto
Sitio web de INKA CORE VII — negocio de **reparación de hardware a nivel
de placa** (microsoldadura, reballing) para iPhone, laptop y PC, más
**venta de equipos reacondicionados** (tienda). Ubicado en Santo Domingo
de los Tsáchilas, Ecuador. Cliente final (no técnicos), así que el tono
debe ser claro, sin jerga innecesaria.

## Diferencial de marca (no lo pierdas al editar copy)
El posicionamiento central es la **honestidad como ventaja**: en un
mercado de talleres que solo cambian pantallas, este negocio hace
diagnóstico real a nivel de componente y es transparente sobre qué SÍ
se repara y qué NO (bloqueos de cuenta iCloud/FRP, chip partido, datos
cifrados sin clave). Nunca agregues estadísticas, testimonios o cifras
de clientes inventadas — el sitio no tiene ninguna a propósito, porque
el negocio recién empieza. Si se pide algo tipo "agrega testimonios",
avisa que no hay reales todavía en vez de inventarlos.

## Stack técnico
- Next.js 16.3.6 (App Router), TypeScript, exportación estática
  (`output: 'export'` en next.config.mjs) — no hay servidor Next en
  producción, todo se sirve como archivos estáticos desde Vercel.
- Sin Tailwind ni CSS framework: cada componente tiene sus estilos en
  un tag `<style>{...}</style>` al final del archivo, con variables CSS
  definidas en `app/globals.css`.
- Fuentes locales (no Google Fonts en runtime): Cinzel (`--font-display`,
  títulos), Space Grotesk (`--font-body`, texto), JetBrains Mono
  (`--font-mono`, etiquetas técnicas). Archivos en `app/fonts/`.

## Identidad visual
- Colores (en `app/globals.css` como variables): `--c-noche` #0b0d10
  (fondo), `--c-oro` #d4af37 (acento primario / CTAs), `--c-cobre`
  #b87333 (secundario), `--c-cian` #38bdf8 (detalle "activo/digital"),
  `--c-hueso` #f3f0e9 (texto).
- El emblema (logo) es un chip de circuito con una chakana (cruz andina
  escalonada) al centro — vive como componente en
  `app/components/Emblem.tsx`. Reutilízalo, no rediseñes el logo sin
  que se pida explícitamente.
- Radios de borde pequeños (3px) — estética de instrumento técnico, no
  "burbujas" tipo SaaS.

## Dónde está cada cosa
- `lib/site-config.ts` — número de WhatsApp, mensaje default, redes
  sociales. **El número de WhatsApp ahí es un placeholder real que el
  dueño debe reemplazar** — no lo trates como dato de prueba a borrar.
- `lib/products.ts` — catálogo de la tienda (productos de ejemplo,
  reemplazar por inventario real). Cada producto: nombre, categoría,
  condición, precio (o `null` = "Cotizar por WhatsApp"), specs, imagen.
- `app/components/ProductCard.tsx` — si un producto no tiene `image`,
  se muestra un marcador con la categoría. **Nunca inventes ni generes
  una foto de producto falsa** — si no hay imagen real, se deja el
  marcador.
- `app/page.tsx` — home (reparación). `app/tienda/page.tsx` — catálogo
  de la tienda con filtro por categoría (client component).

## Convenciones al escribir código
- Componentes de sección van en `app/components/`, un archivo por
  sección, con su propio `<style>` al final.
- El botón de WhatsApp siempre usa `whatsappHref()` de
  `lib/site-config.ts` (nunca un link `wa.me` hardcodeado aparte).
- Copy en español, tono directo y honesto, sin exagerar ("el mejor",
  "líder en el mercado") — se prefiere el dato concreto sobre el
  adjetivo.

## Antes de hacer cambios grandes
Corre `npm run build` y confirma que compila sin errores antes de abrir
el PR. El proyecto se despliega automático en Vercel al hacer merge a
`main` — un build roto rompe el sitio en producción real
(`inkacore7.com`).
