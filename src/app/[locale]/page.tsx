import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Ecosystem from '@/components/Ecosystem';
import Manifesto from '@/components/Manifesto';
import WorkTimeline from '@/components/WorkTimeline';
import Signals from '@/components/Signals';
import Writing from '@/components/Writing';
import Speaking from '@/components/Speaking';
import Contact from '@/components/Contact';
import { getTranslations } from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations();
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Ecosystem />
      <Manifesto />
      <WorkTimeline />
      <Signals />
      <Writing />
      <Speaking />
      <Contact />
      <footer className="py-12 border-t border-white/5 text-center text-sm text-white/40 flex flex-col items-center gap-6">
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/ercumenterden" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://github.com/quantummatrixcore-lab" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-xs font-medium">
          <a href="https://alparai.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ALPAR AI</a>
          <span className="text-white/20">&bull;</span>
          <a href="https://decashub.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">DecasHub</a>
        </div>
        <div>
          &copy; {new Date().getFullYear()} Sovereign AI Holding. {t('footer')}
        </div>
      </footer>
    </main>
  );
}
