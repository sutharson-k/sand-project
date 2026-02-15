import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Solution } from '@/components/sections/Solution';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Differentiators } from '@/components/sections/Differentiators';
import { Team } from '@/components/sections/Team';
import { Roadmap } from '@/components/sections/Roadmap';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Differentiators />
        <Team />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;