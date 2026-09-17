import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PortfolioSections } from "@/components/PortfolioSections";
import { Footer } from "@/components/Footer";
import { GlassLighting } from "@/components/GlassLighting";
export default function Home() {
  return (
    <>
      <GlassLighting />
      <Navbar />
      <main>
        <Hero />
        <PortfolioSections />
      </main>
      <Footer />
    </>
  );
}
