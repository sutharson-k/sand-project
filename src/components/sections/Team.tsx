import { GraduationCap, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  { name: 'Dhivagar S', role: 'Co-Founder & CEO', initials: 'DS' },
  { name: 'Gokul M', role: 'Co-Founder & CTO', initials: 'GM' },
  { name: 'Bharath S', role: 'Head of Operations', initials: 'BS' },
  { name: 'Jeevan Ragav J', role: 'Head of Product', initials: 'JR' },
  { name: 'Gokul Kannan M', role: 'Lead Developer', initials: 'GK' },
];

const mentor = {
  name: 'Dr. P. Josephin Shermila',
  role: 'Faculty Mentor',
  title: 'Professor, Department of Civil Engineering',
  initials: 'PJ',
};

export function Team() {
  return (
    <section id="team" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Team</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet the minds behind{' '}
            <span className="gradient-text">SmartSand</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A passionate team of engineers, developers, and innovators dedicated to transforming India&apos;s construction industry.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative bg-background rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-white shadow-md group-hover:scale-105 transition-transform">
                {member.initials}
              </div>

              {/* Info */}
              <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-accent font-medium mb-3">{member.role}</p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-8 h-8 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </button>
                <button className="w-8 h-8 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </button>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Mentor Section */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-background rounded-2xl p-8 border border-border/50 shadow-sm">
            <div className="text-center mb-6">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Faculty Mentor</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Mentor Avatar */}
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-leaf to-accent flex items-center justify-center text-3xl font-bold text-white shadow-lg shrink-0">
                {mentor.initials}
              </div>

              {/* Mentor Info */}
              <div className="text-center sm:text-left">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  {mentor.name}
                </h3>
                <p className="text-accent font-medium mb-1">{mentor.role}</p>
                <p className="text-sm text-muted-foreground">{mentor.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}