import { useReveal } from "@/hooks/useReveal";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Delivery } from "@/sections/Delivery";
import { AiFirst } from "@/sections/AiFirst";
import { Experience } from "@/sections/Experience";
import { Clients } from "@/sections/Clients";
import { Responsibilities } from "@/sections/Responsibilities";
import { Expertise } from "@/sections/Expertise";
import { Credentials } from "@/sections/Credentials";
import { Contact, Footer } from "@/sections/Contact";

export function App() {
  useReveal();

  return (
    <div className="app-background min-h-screen">
      <a
        href="#rolam"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Ugrás a tartalomra
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Delivery />
        <AiFirst />
        <Experience />
        <Clients />
        <Responsibilities />
        <Expertise />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
