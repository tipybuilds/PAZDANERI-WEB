import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Enfoque from "@/components/sections/Enfoque";
import Clients from "@/components/sections/Clients";
import Galeria from "@/components/sections/Galeria";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Enfoque />
        <Clients />
        <Projects />
        <Galeria />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
