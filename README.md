# Paz Daneri — Sitio web

Sitio one-page para **Paz Daneri**, gestión estratégica de redes sociales.
Inspirado en la estética editorial de [aristidebenoist.com](https://aristidebenoist.com):
tipografía serif grande, smooth-scroll, transiciones y micro-interacciones.

## Stack

- **Next.js 14** (App Router, export estático)
- **Tailwind CSS** (modo oscuro por defecto + toggle a claro — _night/day shift_)
- **Framer Motion** (reveals, parallax, cursor)
- **Lenis** (smooth scroll)
- **GSAP** (animación de la galería Masonry)
- Componentes [ReactBits](https://reactbits.dev): `GlassSurface` (nav glassmorphism) y `Masonry` (galería)

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build (export estático)

```bash
npm run build      # genera ./out con HTML/CSS/JS estático
```

El sitio se exporta como estático (`output: "export"`) → carpeta `out/`.

## Despliegue en Cloudflare Pages

El dominio `pazdaneri.com` ya está en Cloudflare. Para publicar:

1. **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git**
   y selecciona este repositorio.
2. Configuración de build:
   - **Framework preset:** `Next.js (Static HTML Export)`
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** 20 o superior (variable `NODE_VERSION=20`)
3. En **Custom domains** añade `pazdaneri.com` y `www.pazdaneri.com`.
   Como el DNS ya está en Cloudflare, los registros se crean automáticamente.

Alternativa por CLI (Wrangler):

```bash
npm run build
npx wrangler pages deploy out --project-name pazdaneri
```

## Estructura

```
app/
  layout.tsx        # fuentes, metadata, providers (tema + smooth scroll + cursor)
  page.tsx          # composición de secciones
  globals.css       # tokens de tema (claro/oscuro) y utilidades
  icon.svg          # favicon
components/
  Nav.tsx           # navegación (pill GlassSurface en desktop + menú móvil)
  ThemeToggle.tsx   # toggle night/day
  SmoothScroll.tsx  # Lenis
  Cursor.tsx        # cursor personalizado
  Reveal.tsx        # utilidades de reveal (texto y bloques)
  GlassSurface.tsx  # efecto glass (ReactBits)
  Masonry.tsx       # galería animada (ReactBits + GSAP)
  sections/         # Hero, About, Enfoque, Clients, Galeria, Projects, Contact
lib/content.ts      # TODO el contenido editable (textos, clientes, proyectos)
```

## Personalización

- **Contenido:** edita `lib/content.ts` (nombre, contacto, clientes, proyectos, servicios).
- **Colores / tema:** `tailwind.config.ts` (paletas `cream/ink` claro y `night/bone` oscuro) y tokens en `app/globals.css`.
- **Galería:** reemplaza las imágenes placeholder (picsum) en `components/sections/Galeria.tsx`
  por fotos reales (campañas, feeds, etc.).
- **Logos de clientes:** actualmente texto en marquee (`components/sections/Clients.tsx`);
  se pueden cambiar por logos cuando los tengas.
