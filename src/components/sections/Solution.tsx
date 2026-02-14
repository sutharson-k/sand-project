import { MapPin, FileCheck, Lock, MapPinned, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Nearby Crushers',
    description: 'Connect with verified urban crushers within 50km radius, reducing transportation costs by up to 40% and carbon footprint.',
    color: 'bg-primary',
  },
  {
    icon: FileCheck,
    title: 'Batch Quality Certification',
    description: 'Every sand batch comes with lab-tested quality certificates. Know your M-sand grade before you buy.',
    color: 'bg-accent',
  },
  {
    icon: Lock,
    title: 'Escrow Payment Protection',
    description: 'Your money is held securely until delivery is confirmed. Zero payment risk, complete peace of mind.',
    color: 'bg-leaf',
  },
  {
    icon: MapPinned,
    title: 'Real-time Tracking',
    description: 'Track your sand delivery from crusher to construction site with GPS-enabled live updates.',
    color: 'bg-sand-dark',
  },
];

export function Solution() {
  return (
    <section id="features" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">The Solution</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            SmartSand{' '}
            <span className="gradient-text">fixes it</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive platform that transforms sand procurement with transparency, quality assurance, and security.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-secondary/30 rounded-2xl p-6 border border-border/50 hover:border-accent/30 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Check Badge */}
              <div className="mt-4 flex items-center gap-2 text-accent">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs font-medium">Verified & Secured</span>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Join 500+ construction companies already using SmartSand
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-background flex items-center justify-center"
                >
                  <span className="text-xs font-medium text-foreground">{String.fromCharCode(64 + i)}</span>
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">and more...</span>
          </div>
        </div>
      </div>
    </section>
  );
}