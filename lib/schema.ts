import { site, faqs, services, plans, projects, clients } from "./content";

/**
 * Esquemas JSON-LD reutilizables (schema.org).
 * Alimentan resultados enriquecidos en Google (SEO), respuestas en
 * buscadores conversacionales (AEO) y citaciones en IA generativa (GEO).
 */

const personId = `${site.url}/#paz-daneri`;
const businessId = `${site.url}/#business`;

export const personSchema = {
  "@type": "Person",
  "@id": personId,
  name: site.legalName,
  alternateName: site.name,
  jobTitle: "Publicista · Social Media Manager",
  description:
    "Publicista chilena especializada en gestión estratégica de redes sociales para marcas, PYMES y emprendedores.",
  url: site.url,
  email: `mailto:${site.email}`,
  telephone: site.phoneHref,
  knowsAbout: [
    "Gestión de redes sociales",
    "Community management",
    "Marketing digital",
    "Estrategia de contenido",
    "Crecimiento orgánico",
  ],
  areaServed: { "@type": "Country", name: "Chile" },
};

export const businessSchema = {
  "@type": "ProfessionalService",
  "@id": businessId,
  name: "Paz Daneri — Gestión de redes sociales",
  description:
    "Gestión estratégica de redes sociales para marcas, PYMES y emprendedores en todo Chile. Crecimiento orgánico, estrategia y foco en el largo plazo.",
  url: site.url,
  email: `mailto:${site.email}`,
  telephone: site.phoneHref,
  priceRange: "$$",
  founder: { "@id": personId },
  provider: { "@id": personId },
  areaServed: { "@type": "Country", name: "Chile" },
  serviceType: "Gestión de redes sociales",
  knowsAbout: [
    "Instagram",
    "TikTok",
    "Facebook",
    "Community management",
    "Estrategia de contenido",
  ],
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.title,
      description: s.body,
    },
  })),
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  inLanguage: "es-CL",
  publisher: { "@id": personId },
};

/** Grafo principal, se inyecta en todas las páginas vía layout. */
export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [websiteSchema, personSchema, businessSchema],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Gestión de redes sociales",
  provider: { "@id": personId },
  areaServed: { "@type": "Country", name: "Chile" },
  description:
    "Planes mensuales de gestión de redes sociales para marcas, PYMES y emprendedores en Chile.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Planes de gestión de redes sociales",
    itemListElement: plans.map((p) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: p.name,
        description: p.tagline,
      },
    })),
  },
};

export function caseSchema(slug: string) {
  const p = projects.find((x) => x.slug === slug);
  if (!p) return null;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${p.name} — ${p.tagline}`,
    headline: `Caso: ${p.name}`,
    description: p.description,
    url: `${site.url}/casos/${p.slug}`,
    creator: { "@id": personId },
    about: clients.includes(p.name) ? p.name : undefined,
    keywords: p.deliverables.join(", "),
    dateCreated: p.year,
  };
}
