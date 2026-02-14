import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Truck, Shield, Clock } from 'lucide-react';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft delay-300" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">India&apos;s First Digital Sand Platform</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                We make every{' '}
                <span className="gradient-text">grain of sand</span>{' '}
                count.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                India&apos;s first platform for certified, escrow-protected sand supply from verified urban crushers. Build with confidence, source with transparency.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-base shadow-glow hover:shadow-lg transition-all group"
              >
                Order Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="border-2 border-primary/30 hover:border-primary/60 text-foreground font-semibold px-8 py-6 text-base hover:bg-primary/5 transition-all"
              >
                Become a Supplier
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-accent" />
                <span>Verified Crushers</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-accent" />
                <span>Real-time Tracking</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Building2 className="w-4 h-4 text-accent" />
                <span>Quality Certified</span>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in delay-200">
            {/* Main Illustration Container */}
            <div className="relative w-full max-w-lg">
              {/* Background Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-secondary/50 to-sand-medium/30 blur-2xl" />
              </div>

              {/* Sand Particles Animation */}
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-sand-dark/40 animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${3 + Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>

              {/* Central Construction Illustration */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Building Icon */}
                <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-primary to-earth-brown flex items-center justify-center shadow-2xl mb-6 transform hover:scale-105 transition-transform duration-500">
                  <Building2 className="w-24 h-24 text-primary-foreground" />
                </div>

                {/* Truck Icon */}
                <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-accent to-leaf flex items-center justify-center shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                  <Truck className="w-16 h-16 text-accent-foreground" />
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">Certified</p>
                      <p className="text-[10px] text-muted-foreground">ISO Standard</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-20 -left-8 bg-white rounded-xl p-3 shadow-lg animate-float delay-500">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">Live Track</p>
                      <p className="text-[10px] text-muted-foreground">Real-time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}