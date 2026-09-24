# INKA CORE VII — Sitio web

Landing page en Next.js para INKA CORE VII: **reparación a nivel de placa**
(iPhone, laptop, PC) + **tienda** de equipos y repuestos. Construida con la
identidad de marca (emblema chip + chakana, paleta oro/cobre/cian,
tipografía Cinzel + Space Grotesk).

## ⚠️ Antes de publicar — completa esto

**1. WhatsApp y redes** — abre `lib/site-config.ts`:
- `whatsappNumber` — tu número real, formato internacional, **sin** `+` ni espacios (ej. `593991234567`).
- `whatsappMessage` — mensaje pre-llenado por defecto.
- `instagram` / `facebook` — deja vacío (`""`) para ocultarlos, o pon la URL completa.

**2. Catálogo de la tienda** — abre `lib/products.ts`:
- Reemplaza los 3 productos de ejemplo por tu inventario real.
- Para fotos: sube la imagen a `public/products/` (crea la carpeta) y
  pon el nombre del archivo en el campo `image` (ej. `"laptop-hp-01.jpg"`).
  Si lo dejas vacío, se muestra un marcador con la categoría — nunca se
  inventa una foto.
- Si un producto no tiene precio fijo, usa `price: null` y se muestra
  "Cotizar por WhatsApp".

No hay ninguna otra información inventada en el sitio (sin testimonios,
sin cifras de clientes) — el texto es honesto a propósito.

## Cómo correrlo en tu computadora

Necesitas [Node.js](https://nodejs.org) instalado (versión 18 o superior).

```bash
npm install       # instala las dependencias (una sola vez)
npm run dev       # levanta el sitio en http://localhost:3000
```

## Cómo generar la versión final

```bash
npm run build
```

Genera la carpeta `out/` con el sitio ya listo — HTML/CSS/JS estáticos,
sin necesidad de servidor especial.

## Subir el proyecto a GitHub (primera vez)

Si el proyecto todavía no está en GitHub:

```bash
git init
git add .
git commit -m "Sitio INKA CORE VII"
```

Luego crea un repositorio vacío en [github.com/new](https://github.com/new)
(sin README, sin .gitignore — ya los tienes) y conecta:

```bash
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git branch -M main
git push -u origin main
```

## Publicar en Vercel (gratis)

1. Entra a [vercel.com](https://vercel.com) e inicia sesión con GitHub.
2. **New Project** → selecciona el repositorio → Vercel detecta Next.js
   automáticamente → **Deploy**.
3. En ~1 minuto tienes una URL tipo `inka-core-vii.vercel.app` ya viva.

## Conectar tu dominio de Cloudflare

1. En el proyecto de Vercel: **Settings → Domains** → escribe tu dominio → **Add**.
2. Vercel te muestra un registro para agregar, algo así:
   ```
   Tipo: CNAME
   Nombre: @
   Valor: <algo>.vercel-dns-xxx.com
   ```
3. Ve a **Cloudflare → tu dominio → DNS → Records → Add record** y pega
   exactamente eso.
4. **⚠️ Paso crítico:** la nube junto al registro debe quedar **gris
   ("DNS only")**, NO naranja ("Proxied"). Haz clic en la nube para
   apagarla. Si queda naranja, Cloudflare intercepta el tráfico HTTPS y
   Vercel no puede emitir el certificado SSL — el sitio no cargará bien.
5. Espera unos minutos (hasta 48h en el peor caso) y confirma en Vercel
   que el dominio pasa a "Valid Configuration" con el candado SSL activo.
6. Repite el mismo proceso para `www` si quieres que ambas versiones
   funcionen (Vercel no lo agrega junto automáticamente).

Cada vez que hagas `git push`, Vercel vuelve a publicar el sitio solo —
no hace falta repetir el despliegue a mano.

## Estructura del proyecto

```
app/
  layout.tsx          — metadata del sitio y carga de fuentes
  page.tsx            — home: arma todas las secciones de reparación
  globals.css          — colores, tipografía y estilos base de marca
  fonts/               — Cinzel, Space Grotesk, JetBrains Mono
  tienda/
    page.tsx            — página de la tienda (filtro + catálogo)
  components/
    Header.tsx          — encabezado con navegación (incluye Tienda)
    Hero.tsx            — portada con el diagrama animado
    Differentiator.tsx  — "lo que la mayoría no repara"
    Devices.tsx         — iPhone / laptop / PC
    StoreTeaser.tsx     — adelanto de la tienda en el home
    Process.tsx         — los 4 pasos del proceso
    Trust.tsx           — por qué confiar (equipo, honestidad)
    FinalCta.tsx        — llamado a la acción final
    Footer.tsx          — pie de página
    WhatsAppFloat.tsx   — botón flotante (solo en mobile)
    ProductCard.tsx     — tarjeta de producto de la tienda
    Emblem.tsx           — el logo (chip + chakana) en código
lib/
  site-config.ts       — número de WhatsApp y redes (editar aquí)
  products.ts           — catálogo de la tienda (editar aquí)
  fonts.ts              — configuración de las fuentes
public/
  products/             — sube aquí las fotos de tus productos
```

## Editar textos

Todo el texto visible está en `app/components/*.tsx` en español —
ábrelos y edita el texto entre comillas o etiquetas.

## Notas técnicas

- Next.js 16.3.6 — actualizado en septiembre 2026 para corregir una
  vulnerabilidad crítica (CVE-2026-75604) publicada por Vercel en agosto
  2026. Esa falla solo afecta servidores Next.js corriendo sobre Windows;
  el sitio publicado (exportación estática en Vercel/Linux) nunca estuvo
  expuesto, pero como el desarrollo local en Windows sí quedaba en el
  rango de versiones afectadas, se subió a la versión ya parchada para
  no dejar ninguna duda. `npm audit` debe mostrar "0 vulnerabilities".
- Exportación estática (`output: 'export'`) — cualquier hosting de
  archivos estáticos sirve, no solo Vercel.
- La tienda filtra por categoría en el navegador (sin backend) — para
  ~100 productos esto sigue siendo instantáneo. Si el catálogo crece
  mucho más o necesitas que se actualice sin volver a publicar el
  sitio, ese es el momento de conectar una base de datos real (ver el
  documento de arquitectura del proyecto).
