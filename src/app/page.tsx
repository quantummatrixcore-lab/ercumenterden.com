import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import EcosystemDashboard from "@/components/sections/EcosystemDashboard";
import FounderStory from "@/components/sections/FounderStory";
import Manifesto from "@/components/sections/Manifesto";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-ink selection:bg-cyan-neon/30 selection:text-cyan-neon">
      <Nav />
      <main className="flex-grow">
        <Hero />
        <EcosystemDashboard />
        <FounderStory />
        <Manifesto />
      </main>
      <Footer />
    </div>
  );
}
