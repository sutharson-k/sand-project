import { Building2, Brain, Leaf, Flag, Rocket, Target } from 'lucide-react';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Platform Launch',
    status: 'completed',
    items: [
      'Core platform development',
      'Crusher verification system',
      'Escrow payment integration',
      'Beta testing with 50+ builders',
    ],
    icon: Rocket,
  },
  {
    phase: 'Phase 2',
    title: 'Government Partnerships',
    status: 'in-progress',
    items: [
      'Government approvals & licensing',
      'PPP models with state governments',
      'Integration with PWD systems',
      'Expansion to 5 major cities',
    ],
    icon: Building2,
  },
  {
    phase: 'Phase 3',
    title: 'AI-Powered Quality',
    status: 'upcoming',
    items: [
      'AI-based sand quality analysis',
      'Predictive delivery optimization',
      'Automated certification',
      'Smart recommendations',
    ],
    icon: Brain,
  },
  {
    phase: 'Phase 4',
    title: 'Green Initiative',
    status: 'upcoming',
    items: [
      'Green incentives for eco crushers',
      'Carbon footprint tracking',
      'Sustainable mining partnerships',
      'ESG compliance certification',
    ],
    icon: Leaf,
  },
];

const milestones = [
  { year: '2024', title: 'Platform Launch', icon: Flag },
  { year: '2025', title: 'Government PPP', icon: Building2 },
  { year: '2026', title: 'AI Integration', icon: Brain },
  { year: '2027', title: 'Pan-India Scale', icon: Target },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Target className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Vision</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Future{' '}
            <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our journey to revolutionize sand procurement across India with technology, transparency, and sustainability.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg mb-3">
                    <milestone.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="font-serif text-lg font-bold text-foreground">{milestone.year}</span>
                  <span className="text-xs text-muted-foreground">{milestone.title}</span>
                </div>
                {index < milestones.length - 1 && (
                  <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-accent to-primary mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Phase Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <div
              key={phase.phase}
              className={`group relative bg-secondary/30 rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 ${
                phase.status === 'completed'
                  ? 'border-accent/30 bg-accent/5'
                  : phase.status === 'in-progress'
                  ? 'border-primary/30 bg-primary/5'
                  : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {phase.phase}
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    phase.status === 'completed'
                      ? 'bg-accent/20 text-accent'
                      : phase.status === 'in-progress'
                      ? 'bg-primary/20 text-primary'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {phase.status === 'completed'
                    ? 'Completed'
                    : phase.status === 'in-progress'
                    ? 'In Progress'
                    : 'Upcoming'}
                </span>
              </div>

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  phase.status === 'completed'
                    ? 'bg-accent'
                    : phase.status === 'in-progress'
                    ? 'bg-primary'
                    : 'bg-muted'
                }`}
              >
                <phase.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                {phase.title}
              </h3>
              <ul className="space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}