import { Search, Building2, CreditCard, PackageCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Select Sand Type & Quantity',
    description: 'Choose from M-sand, P-sand, or river sand. Specify your exact quantity requirements and delivery location.',
  },
  {
    number: '02',
    icon: Building2,
    title: 'Choose Verified Crushers',
    description: 'Browse certified crushers with quality certificates, ratings, and transparent pricing. Compare and select the best.',
  },
  {
    number: '03',
    icon: CreditCard,
    title: 'Pay via Escrow',
    description: 'Secure your payment in escrow. Your funds are protected and only released after successful delivery confirmation.',
  },
  {
    number: '04',
    icon: PackageCheck,
    title: 'Track & Confirm Delivery',
    description: 'Monitor your sand delivery in real-time. Inspect quality on arrival and confirm receipt to release payment.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Simple Process</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How it{' '}
            <span className="gradient-text">works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Four simple steps to get certified sand delivered to your construction site with complete transparency.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-border via-accent/50 to-border" />
          
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-background rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif text-4xl font-bold text-muted/50 group-hover:text-accent/30 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow (Mobile/Tablet) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4">
                    <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Visualization */}
        <div className="mt-16 hidden lg:block">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-accent border-4 border-background shadow-md" />
                {index < steps.length - 1 && (
                  <div className="w-48 h-0.5 bg-gradient-to-r from-accent to-accent/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}