export const site = {
  name: "Paz Daneri",
  role: "Publicista · Marketing digital",
  email: "mariapaz.daneri@gmail.com",
  phone: "+569 8132 7043",
  phoneHref: "+56981327043",
  location: "Chile · Remoto",
};

export const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Enfoque", href: "#enfoque" },
  { label: "Clientes", href: "#clientes" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export const clients = [
  "Plan Up",
  "Le Boisé",
  "MAU Natural",
  "Jelly Pills",
  "Fundación Roxy",
  "Cactus",
  "The Real Ghee",
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  tag: string;
  details?: string;
};

export const projects: Project[] = [
  {
    slug: "plan-up",
    name: "Plan Up",
    tagline: "Muebles y accesorios de madera para Quinchos y Hogar",
    tag: "Branding · RRSS",
  },
  {
    slug: "le-boise",
    name: "Le Boisé",
    tagline: "Esencias que conectan con tu esencia",
    tag: "Contenido · Estrategia",
  },
  {
    slug: "mau-natural",
    name: "MAU Natural",
    tagline: "Cosmética natural — Plan Plus",
    tag: "Plan Plus",
  },
  {
    slug: "jelly-pills",
    name: "Jelly Pills",
    tagline: "Suplementos nutricionales — Plan Plus",
    tag: "Plan Plus",
  },
  {
    slug: "the-real-ghee",
    name: "The Real Ghee",
    tagline: "Mantequilla clarificada llevada a otro nivel gastronómico",
    tag: "Plan Plus",
    details: "Variedades: Albahaca, Merkén, Garlic, Classic",
  },
  {
    slug: "fundacion-roxy",
    name: "Fundación Roxy",
    tagline: "Causa social y comunidad",
    tag: "RRSS · Comunidad",
  },
];

export const services = [
  {
    n: "01",
    title: "Estrategia de contenido",
    body: "Definimos el rumbo: pilares de contenido, tono de marca y un calendario que ordena ideas y sostiene el ritmo.",
  },
  {
    n: "02",
    title: "Gestión de redes",
    body: "Publicación, comunidad y seguimiento. Trabajo sostenido que construye presencia mes a mes.",
  },
  {
    n: "03",
    title: "Crecimiento orgánico",
    body: "Más alcance y conexión real con tu audiencia. Sin fórmulas mágicas, con foco en el largo plazo.",
  },
  {
    n: "04",
    title: "Acompañamiento",
    body: "Ayudo a ordenar ideas, tomar decisiones y ejecutar estrategias que funcionen en la práctica.",
  },
];
