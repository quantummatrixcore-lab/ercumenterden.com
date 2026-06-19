import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import ThesisBand from "@/components/sections/ThesisBand";
import Metrics from "@/components/sections/Metrics";
import Portfolio from "@/components/sections/Portfolio";
import Methodology from "@/components/sections/Methodology";
import Manifesto from "@/components/sections/Manifesto";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <Hero />
        <ThesisBand />
        <Metrics />
        <Portfolio />
        <Methodology />
        <Manifesto />
      </main>
      <Footer />
    </div>
  );
}
