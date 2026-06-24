import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

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
    default: "Paz Daneri — Gestión estratégica de redes sociales",
    template: "%s — Paz Daneri",
  },
  description:
    "Gestión profesional y estratégica de redes sociales para marcas, PYMES y emprendedores. Crecimiento orgánico, estrategia y foco en el largo plazo.",
  keywords: [
    "redes sociales",
    "marketing digital",
    "community manager",
    "estrategia digital",
    "Paz Daneri",
    "publicidad",
  ],
  openGraph: {
    title: "Paz Daneri — Gestión estratégica de redes sociales",
    description:
      "Haz crecer tu presencia digital de forma orgánica. Estrategia, alcance y conexión real con tu audiencia.",
    url: siteUrl,
    siteName: "Paz Daneri",
    locale: "es_ES",
    type: "website",
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
    <html lang="es" suppressHydrationWarning>
      <body className={`${serif.variable} ${sans.variable} font-sans`}>
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
