# Plan de posicionamiento — Paz Daneri

**Objetivo:** posicionar a Paz Daneri como referente en **gestión de redes
sociales para marcas, PYMES y emprendedores en Chile**, a través de SEO, SEM,
AEO y GEO.

**Decisiones base:** sitio multipágina · foco geográfico todo Chile · marca
personal (Paz Daneri).

> ⚠️ **Expectativa honesta sobre el "#1".** Nadie puede *garantizar* el puesto 1:
> en SEO depende de competencia, autoridad y tiempo; en SEM depende de
> presupuesto y calidad del anuncio. Lo que sí podemos hacer —y ya empezamos— es
> construir la mejor base técnica y de contenido posible para *maximizar* la
> posición. El #1 se gana con consistencia durante meses, no con un solo cambio.

---

## Lo que YA quedó implementado en el sitio (esta entrega)

Base técnica on-site, lista en el código:

- **Arquitectura multipágina**: `/` (home), `/servicios`, y 6 páginas de casos
  `/casos/[marca]`. Más páginas = más superficie para rankear long-tail.
- **Metadata enfocada en Chile**: títulos, descripción y keywords orientados a
  "gestión de redes sociales para PYMES en Chile", locale `es-CL`, canónicas,
  Open Graph y Twitter Cards.
- **Datos estructurados (JSON-LD / schema.org)**: `ProfessionalService`,
  `Person`, `WebSite`, `Service` + `OfferCatalog` (planes), `FAQPage`,
  `BreadcrumbList` y `CreativeWork` por caso. → resultados enriquecidos en Google.
- **Sección FAQ visible** + `FAQPage` schema → base para **AEO** (respuestas que
  Google y los buscadores conversacionales pueden citar).
- **GEO**: `robots.txt` que permite explícitamente a GPTBot, ClaudeBot,
  PerplexityBot, Google-Extended, etc., y un `llms.txt` con un resumen
  estructurado para que las IA citen a Paz con datos correctos.
- **Sitemap.xml** dinámico con todas las rutas + enlazado interno entre home,
  servicios y casos.

> Pendiente técnico recomendado: imagen Open Graph (1200×630) para compartir en
> redes/WhatsApp, y favicon/manifest. Se puede agregar cuando haya arte.

---

## 1. SEO (búsqueda orgánica en Google/Bing)

### On-site (hecho / a mantener)
- ✅ Estructura, metadata, schema, sitemap, FAQ, enlazado interno.
- 🔜 **Contenido nuevo periódico** (lo más importante para escalar): abrir un
  `/blog` o `/recursos` y publicar 1–2 artículos al mes resolviendo dudas reales
  del público objetivo. Ejemplos de temas (long-tail con intención):
  - "¿Cuánto cuesta un community manager en Chile en 2026?"
  - "Cómo elegir entre agencia y community manager freelance"
  - "Qué publicar en Instagram si tienes una PYME"
  - "Calendario de contenido: plantilla para emprendedores"
  Cada artículo capta búsquedas y alimenta a las IA (GEO).

### Off-site (lo tienes que hacer tú — fuera del código)
1. **Google Search Console** → verificar `pazdaneri.com`, enviar el sitemap,
   monitorear posiciones y errores. (Imprescindible, gratis.)
2. **Google Business Profile** (Perfil de Empresa) → aunque seas remota, crear
   ficha "Servicio a domicilio / área de servicio: Chile". Pesa MUCHO para
   búsquedas locales tipo "community manager cerca de mí / en Chile".
3. **Bing Webmaster Tools** → mismo sitemap (Bing alimenta a ChatGPT).
4. **Backlinks / autoridad**: directorios de freelancers y agencias en Chile,
   menciones en medios de emprendimiento, colaboraciones, podcasts, testimonios
   en webs de clientes con enlace a pazdaneri.com.
5. **Reseñas**: pedir a clientes (Plan Up, Le Boisé, etc.) reseñas en Google.

---

## 2. SEM (Google Ads — búsqueda pagada)

Para aparecer arriba **desde el día 1** mientras el SEO madura.

- **Campaña de Búsqueda** segmentada a Chile, en español.
- **Grupos de anuncios por intención**:
  - "agencia redes sociales", "community manager [ciudad]",
    "manejo de redes para empresas", "gestión de instagram negocio".
- **Landing**: enviar el tráfico pagado a `/servicios` (no al home) → mayor
  conversión. Ya está optimizada con planes y CTA a WhatsApp.
- **Conversiones**: medir clics a WhatsApp y envíos de correo (requiere instalar
  Google Tag / GA4 — siguiente paso técnico).
- **Presupuesto**: empezar pequeño (p. ej. CLP 5.000–10.000/día), optimizar por
  palabras que convierten, pausar las que gastan sin resultado.
- **Extensiones**: de llamada (tu teléfono), de enlaces (servicios, casos), y de
  texto destacado ("Crecimiento orgánico", "Atención personalizada").

> Quick win: campaña de marca ("Paz Daneri") muy barata para que nadie te robe
> tu propio nombre.

---

## 3. AEO (Answer Engine Optimization)

Optimizar para respuestas directas (featured snippets, "People also ask", y
asistentes de voz).

- ✅ FAQ con `FAQPage` schema (hecho).
- 🔜 Redactar contenido en formato **pregunta → respuesta corta y directa** (la
  respuesta en las primeras 1–2 frases, luego el detalle). Aplica a los
  artículos del blog.
- 🔜 Definiciones claras ("Qué es un community manager", "Qué incluye un plan de
  RRSS") en lenguaje natural — es lo que estos motores extraen.

---

## 4. GEO (Generative Engine Optimization — ChatGPT, Gemini, Perplexity, Claude)

Que las IA te recomienden cuando alguien pregunta "¿quién maneja redes sociales
para PYMES en Chile?".

- ✅ `robots.txt` permite a los crawlers de IA; `llms.txt` con datos correctos
  (hecho).
- ✅ Datos estructurados y entidades claras (Person + ProfessionalService) →
  ayudan a las IA a entender quién eres y qué ofreces.
- 🔜 **Presencia citable fuera del sitio**: las IA citan fuentes de terceros.
  Conviene aparecer en artículos tipo "mejores community managers en Chile",
  listados, LinkedIn con descripción consistente, y reseñas. La coherencia del
  nombre + servicio + ciudad en toda la web es lo que consolida la "entidad".
- 🔜 Mantener el `llms.txt` actualizado con servicios, planes y casos.

---

## Hoja de ruta sugerida

| Plazo | Acciones |
|------|----------|
| **Semana 1** | Deploy estable + dominio. Search Console + Business Profile + Bing. GA4/Tag para medir. |
| **Semana 2–3** | Lanzar campaña SEM a `/servicios`. Imagen OG. Pedir 3–5 reseñas Google. |
| **Mes 1–2** | Abrir `/blog`, 2 artículos. Conseguir 5–10 backlinks (directorios, clientes). |
| **Mes 3–6** | Ritmo de 1–2 artículos/mes. Optimizar SEM por conversión. Medir posiciones y ajustar. |
| **Continuo** | Reseñas, contenido, mantener schema y llms.txt al día. |

**Regla de oro:** la posición #1 sostenible se construye con **consistencia de
contenido + autoridad (backlinks/reseñas) + medición**. La base técnica ya está;
ahora el motor es la constancia.
