export const site = {
  name: "Paz Daneri",
  legalName: "María Paz Daneri",
  role: "Publicista · Marketing digital",
  email: "mariapaz.daneri@gmail.com",
  phone: "+569 8132 7043",
  phoneHref: "+56981327043",
  location: "Chile · Remoto",
  url: "https://pazdaneri.com",
  areaServed: "Chile",
};

/**
 * Palabras clave objetivo (SEO). Foco: gestión de RRSS para PYMES en Chile.
 */
export const keywords = [
  "gestión de redes sociales Chile",
  "community manager Chile",
  "social media manager Chile",
  "agencia de redes sociales PYMES",
  "marketing digital para PYMES Chile",
  "manejo de redes sociales para empresas",
  "gestión de Instagram para negocios",
  "publicidad en redes sociales Chile",
  "estrategia de contenido redes sociales",
  "community manager para emprendedores",
  "crecimiento orgánico en redes sociales",
  "Paz Daneri",
];

/**
 * Preguntas frecuentes — base para la sección visible y para el schema
 * FAQPage (AEO/GEO: respuestas que los buscadores y las IA pueden citar).
 */
export const faqs = [
  {
    q: "¿Qué incluye la gestión de redes sociales para una PYME?",
    a: "Incluye estrategia de contenido, calendario editorial, diseño y publicación, gestión de comunidad (responder mensajes y comentarios) y reportería mensual de métricas. El objetivo es construir presencia de marca y generar oportunidades de venta de forma sostenida.",
  },
  {
    q: "¿Trabajas con empresas de todo Chile?",
    a: "Sí. Trabajo de forma remota con marcas, PYMES y emprendedores de todo Chile —Santiago y regiones— y también con clientes del resto de Latinoamérica.",
  },
  {
    q: "¿Cuánto cuesta gestionar las redes sociales de mi negocio?",
    a: "El valor depende del alcance: cantidad de redes, frecuencia de publicación y si incluye producción de contenido o pauta. Trabajo con planes mensuales (Integral, Plus y Causa) y cotizo a medida según los objetivos de cada marca.",
  },
  {
    q: "¿Qué redes sociales gestionas?",
    a: "Principalmente Instagram, Facebook y TikTok, junto con la estrategia de contenido que las conecta. Definimos juntos en qué plataformas conviene estar según tu audiencia y rubro.",
  },
  {
    q: "¿En cuánto tiempo se ven resultados?",
    a: "El crecimiento orgánico es un trabajo de mediano y largo plazo. El orden y la consistencia se notan en semanas; los resultados de alcance y comunidad se consolidan a partir de los 3 a 6 meses de trabajo sostenido.",
  },
  {
    q: "¿Cuál es la diferencia entre crecimiento orgánico y pauta pagada?",
    a: "El crecimiento orgánico construye comunidad y confianza con contenido de valor, sin pagar por alcance. La pauta acelera la visibilidad con inversión publicitaria. Lo ideal es combinarlos: una base orgánica sólida hace que cada peso invertido en pauta rinda más.",
  },
  {
    q: "¿Cómo empezamos a trabajar juntos?",
    a: "Conversamos por WhatsApp o correo, reviso tu marca y tus objetivos, y te propongo un plan a medida. Una vez definido, comenzamos con la estrategia y el calendario del primer mes.",
  },
];

/**
 * Planes mensuales. Sin precio fijo público (cotización a medida).
 */
export const plans = [
  {
    name: "Plan Integral",
    tagline: "Para marcas que quieren delegar toda su presencia digital.",
    includes: [
      "Estrategia de contenido",
      "Calendario editorial",
      "Diseño y publicación",
      "Gestión de comunidad",
      "Producción de contenido",
      "Reportería mensual",
    ],
  },
  {
    name: "Plan Plus",
    tagline: "Para negocios en crecimiento que necesitan constancia.",
    includes: [
      "Plan de contenido mensual",
      "Diseño de feed",
      "Gestión de comunidad",
      "Reportería de métricas",
    ],
  },
  {
    name: "Plan Causa",
    tagline: "Para fundaciones y causas sociales.",
    includes: [
      "Estrategia de comunicación",
      "Gestión de comunidad",
      "Campañas de difusión",
      "Vocería digital",
    ],
  },
];

export const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Enfoque", href: "#enfoque" },
  { label: "Clientes", href: "#clientes" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
  { label: "FAQ", href: "#faq" },
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
  plan: string;
  year: string;
  description: string;
  deliverables: string[];
  details?: string;
};

export const projects: Project[] = [
  {
    slug: "plan-up",
    name: "Plan Up",
    tagline: "Muebles y accesorios de madera para Quinchos y Hogar",
    tag: "Branding · RRSS",
    plan: "Plan Integral",
    year: "2024",
    description:
      "Construcción de una identidad cálida y artesanal en redes. Ordenamos el catálogo, definimos pilares de contenido y dimos ritmo a las publicaciones para mostrar el producto en contexto de hogar.",
    deliverables: [
      "Estrategia de contenido",
      "Calendario editorial",
      "Fotografía de producto",
      "Gestión de comunidad",
    ],
  },
  {
    slug: "le-boise",
    name: "Le Boisé",
    tagline: "Esencias que conectan con tu esencia",
    tag: "Contenido · Estrategia",
    plan: "Plan Integral",
    year: "2024",
    description:
      "Un universo sensorial traducido a lo digital. Tono de marca, dirección visual y contenido que comunica la experiencia de las esencias más allá del producto.",
    deliverables: [
      "Identidad de marca digital",
      "Dirección de contenido",
      "Storytelling de producto",
      "Crecimiento orgánico",
    ],
  },
  {
    slug: "mau-natural",
    name: "MAU Natural",
    tagline: "Cosmética natural",
    tag: "Cosmética",
    plan: "Plan Plus",
    year: "2023",
    description:
      "Posicionamiento de una cosmética natural con foco en lo consciente. Educación de audiencia, beneficios de cada producto y una comunidad fiel alrededor del cuidado natural.",
    deliverables: [
      "Plan de contenido mensual",
      "Educación de producto",
      "Gestión de comunidad",
      "Reportería de métricas",
    ],
  },
  {
    slug: "jelly-pills",
    name: "Jelly Pills",
    tagline: "Suplementos nutricionales",
    tag: "Wellness",
    plan: "Plan Plus",
    year: "2023",
    description:
      "Comunicación clara y atractiva para suplementos nutricionales: beneficios, hábitos y constancia, con un lenguaje cercano que invita a sumar bienestar a la rutina.",
    deliverables: [
      "Estrategia de contenido",
      "Diseño de feed",
      "Campañas de lanzamiento",
      "Gestión de comunidad",
    ],
  },
  {
    slug: "the-real-ghee",
    name: "The Real Ghee",
    tagline: "Mantequilla clarificada llevada a otro nivel gastronómico",
    tag: "Gastronomía",
    plan: "Plan Plus",
    year: "2023",
    description:
      "Golden Elixir: una mantequilla clarificada premium contada desde lo gastronómico. Recetas, usos y variedades para despertar el deseo y educar el paladar.",
    deliverables: [
      "Dirección gastronómica",
      "Contenido de recetas",
      "Lanzamiento de variedades",
      "Gestión de comunidad",
    ],
    details: "Variedades: Albahaca, Merkén, Garlic, Classic",
  },
  {
    slug: "fundacion-roxy",
    name: "Fundación Roxy",
    tagline: "Causa social y comunidad",
    tag: "RRSS · Comunidad",
    plan: "Plan Causa",
    year: "2024",
    description:
      "Acompañamiento a una causa social: visibilizar el propósito, activar a la comunidad y sostener un mensaje coherente que moviliza y suma apoyos.",
    deliverables: [
      "Estrategia de comunicación",
      "Gestión de comunidad",
      "Campañas de difusión",
      "Vocería digital",
    ],
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
