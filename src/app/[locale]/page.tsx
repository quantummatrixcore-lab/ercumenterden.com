import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Ecosystem from '@/components/Ecosystem';
import Manifesto from '@/components/Manifesto';
import WorkTimeline from '@/components/WorkTimeline';
import Signals from '@/components/Signals';
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
      <Contact />
      <footer className="py-8 text-center text-sm text-white/40 border-t border-white/5">
        &copy; {new Date().getFullYear()} Sovereign AI Holding. {t('footer')}
      </footer>
    </main>
  );
}
