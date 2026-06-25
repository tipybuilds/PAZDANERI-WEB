import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import JsonLd from "@/components/JsonLd";
import { siteGraph } from "@/lib/schema";
import { keywords as siteKeywords } from "@/lib/content";

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://pazdaneri.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Paz Daneri — Gestión de redes sociales para PYMES y marcas en Chile",
    template: "%s — Paz Daneri",
  },
  description:
    "Gestión profesional y estratégica de redes sociales para marcas, PYMES y emprendedores en todo Chile. Community management, estrategia de contenido y crecimiento orgánico con foco en el largo plazo.",
  keywords: siteKeywords,
  authors: [{ name: "María Paz Daneri" }],
  creator: "María Paz Daneri",
  category: "Marketing digital",
  openGraph: {
    title:
      "Paz Daneri — Gestión de redes sociales para PYMES y marcas en Chile",
    description:
      "Haz crecer tu presencia digital de forma orgánica. Estrategia, community management y conexión real con tu audiencia. Para marcas, PYMES y emprendedores en Chile.",
    url: siteUrl,
    siteName: "Paz Daneri",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paz Daneri — Gestión de redes sociales en Chile",
    description:
      "Gestión estratégica de redes sociales para marcas, PYMES y emprendedores en Chile. Crecimiento orgánico con foco en el largo plazo.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CL" suppressHydrationWarning>
      <body className={`${serif.variable} ${sans.variable} font-sans`}>
        <JsonLd data={siteGraph} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Cursor />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
