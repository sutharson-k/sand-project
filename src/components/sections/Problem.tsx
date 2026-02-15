import { AlertTriangle, TrendingUp, AlertOctagon, Clock } from 'lucide-react';

const problems = [
  {
    icon: TrendingUp,
    title: 'High Transportation Costs',
    description: 'Construction projects suffer from inflated costs due to distant sand suppliers, increasing logistics expenses by up to 40%.',
  },
  {
    icon: AlertTriangle,
    title: 'Unverified Sources',
    description: 'No quality assurance leads to inconsistent sand grades, causing structural integrity issues and project delays.',
  },
  {
    icon: AlertOctagon,
    title: 'Opaque Pricing & Payment Risks',
    description: 'Hidden charges, middlemen commissions, and payment fraud plague the traditional sand supply chain.',
  },
  {
    icon: Clock,
    title: 'Delayed Deliveries',
    description: 'Unreliable suppliers cause construction timeline disruptions, leading to cost overruns and penalties.',
  },
];

export function Problem() {
  return (
    <section id="problem" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">The Challenge</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Urban construction faces a{' '}
            <span className="text-destructive">sand crisis</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The traditional sand supply chain is broken. Builders face daily challenges that impact project timelines, costs, and quality.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group relative bg-background rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-background rounded-2xl border border-border/50 shadow-sm">
          {[
            { value: '40%', label: 'Cost Increase' },
            { value: '30%', label: 'Quality Issues' },
            { value: '25%', label: 'Delivery Delays' },
            { value: '60%', label: 'Payment Risks' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-bold text-destructive mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}