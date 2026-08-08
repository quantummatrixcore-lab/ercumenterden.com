import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ecosystem from "@/components/Ecosystem";
import Manifesto from "@/components/Manifesto";
import WorkTimeline from "@/components/WorkTimeline";
import Signals from "@/components/Signals";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Ecosystem />
      <Manifesto />
      <WorkTimeline />
      <Signals />
      <Contact />
      <footer className="py-8 text-center text-sm text-white/40 border-t border-white/5">
        &copy; {new Date().getFullYear()} Sovereign AI Holding. All rights reserved.
      </footer>
    </main>
  );
}
