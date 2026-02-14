import { CheckCircle2, XCircle, Award, Shield, MapPin, Building2 } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Batch Quality Certificate',
    smartsand: true,
    tnsand: false,
    others: false,
    description: 'Lab-tested certification for every batch',
  },
  {
    feature: 'Escrow Payment Protection',
    smartsand: true,
    tnsand: false,
    others: false,
    description: 'Secure payment release only after delivery',
  },
  {
    feature: 'Real-time GPS Tracking',
    smartsand: true,
    tnsand: false,
    others: false,
    description: 'Live tracking from crusher to site',
  },
  {
    feature: 'Verified Private Crushers Only',
    smartsand: true,
    tnsand: false,
    others: 'partial',
    description: 'Rigorous verification process',
  },
  {
    feature: 'Transparent Pricing',
    smartsand: true,
    tnsand: false,
    others: 'partial',
    description: 'No hidden charges or middlemen',
  },
  {
    feature: 'Digital Documentation',
    smartsand: true,
    tnsand: false,
    others: false,
    description: 'Complete digital record keeping',
  },
];

const highlights = [
  {
    icon: Award,
    title: 'Batch Certification',
    description: 'Every sand batch comes with a lab-tested quality certificate, not just source verification.',
  },
  {
    icon: Shield,
    title: 'Payment Protection',
    description: 'Industry-first escrow system that protects buyers until delivery is confirmed.',
  },
  {
    icon: MapPin,
    title: 'Live Tracking',
    description: 'GPS-enabled tracking gives you real-time visibility of your sand delivery.',
  },
  {
    icon: Building2,
    title: 'Verified Network',
    description: 'Only government-approved, ISO-certified private crushers on our platform.',
  },
];

export function Differentiators() {
  return (
    <section id="differentiators" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Why Choose Us</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What makes us{' '}
            <span className="gradient-text">different</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            SmartSand isn&apos;t just another sand supplier. We&apos;re revolutionizing the entire supply chain with technology and trust.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-20 overflow-hidden rounded-2xl border border-border/50 bg-background shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50 border-b border-border/50">
                  <th className="text-left px-6 py-4 font-serif text-sm font-semibold text-foreground">
                    Feature
                  </th>
                  <th className="text-center px-6 py-4 font-serif text-sm font-semibold text-accent">
                    <div className="flex items-center justify-center gap-2">
                      <Award className="w-4 h-4" />
                      SmartSand
                    </div>
                  </th>
                  <th className="text-center px-6 py-4 font-serif text-sm font-semibold text-muted-foreground">
                    TNsand
                  </th>
                  <th className="text-center px-6 py-4 font-serif text-sm font-semibold text-muted-foreground">
                    Generic Apps
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr
                    key={item.feature}
                    className={`border-b border-border/30 hover:bg-muted/20 transition-colors ${
                      index % 2 === 0 ? 'bg-background' : 'bg-muted/10'
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-foreground text-sm">{item.feature}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.smartsand === true ? (
                        <CheckCircle2 className="w-5 h-5 text-accent mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.tnsand === true ? (
                        <CheckCircle2 className="w-5 h-5 text-muted-foreground mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.others === true ? (
                        <CheckCircle2 className="w-5 h-5 text-muted-foreground mx-auto" />
                      ) : item.others === 'partial' ? (
                        <span className="text-xs text-muted-foreground">Partial</span>
                      ) : (
                        <XCircle className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className="group relative bg-secondary/30 rounded-2xl p-6 border border-border/50 hover:border-accent/30 shadow-sm hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <highlight.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {highlight.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}