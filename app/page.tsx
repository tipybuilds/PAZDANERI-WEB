import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/sections/About";
import Enfoque from "@/components/sections/Enfoque";
import Clients from "@/components/sections/Clients";
import Projects from "@/components/sections/Projects";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Enfoque />
        <Clients />
        <Projects />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
