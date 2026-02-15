import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Factory, HardHat, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center border-b-4 border-foreground overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/quarry-bg.jpg" 
            alt="Quarry" 
            className="w-full h-full object-cover filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-foreground/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary px-4 py-1 mb-6 transform -rotate-2 shadow-[4px_4px_0px_0px_white]">
              <span className="font-heading font-bold uppercase text-foreground tracking-widest text-sm">Industrial Grade Supply Chain</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white uppercase leading-tight mb-6 drop-shadow-lg">
              Construction Materials <br/>
              <span className="text-primary">Delivered fast.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-xl font-light">
              The seamless marketplace connecting certified quarries, trusted transporters, and construction sites.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/buyer/catalog">
                <Button size="lg" className="h-16 px-8 text-xl font-heading uppercase tracking-wide bg-primary text-foreground hover:bg-white border-2 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all">
                  Order Sand Now <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/become-seller">
                <Button size="lg" variant="outline" className="h-16 px-8 text-xl font-heading uppercase tracking-wide text-white border-2 border-white bg-transparent hover:bg-white hover:text-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] transition-all">
                  Become a Partner
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About / Process Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-foreground/10 pb-8">
            <div>
              <h2 className="font-heading text-4xl font-bold uppercase mb-2">How It Works</h2>
              <p className="text-muted-foreground">Streamlined logistics for the construction industry.</p>
            </div>
            <div className="hidden md:block text-right">
              <p className="font-mono text-sm text-muted-foreground">SYSTEM_STATUS: ONLINE</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Factory, 
                title: "1. Source", 
                desc: "Choose from 50+ types of certified sand from top-rated quarries." 
              },
              { 
                icon: Truck, 
                title: "2. Transport", 
                desc: "Select the right vehicle for your load. Real-time fleet tracking included." 
              },
              { 
                icon: HardHat, 
                title: "3. Build", 
                desc: "Timely delivery to your construction site with digital proof of delivery." 
              }
            ].map((step, i) => (
              <Card key={i} className="border-2 border-foreground rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 flex items-center justify-center border-2 border-primary mb-6">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold uppercase mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Role Selection Section (Alternative Entry) */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-0 border-4 border-primary">
            <div className="p-12 border-b-4 md:border-b-0 md:border-r-4 border-primary hover:bg-white/5 transition-colors group cursor-pointer relative overflow-hidden">
               <Link href="/buyer/catalog">
                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowRight className="h-8 w-8 text-primary" />
                 </div>
                 <h3 className="font-heading text-4xl font-bold uppercase mb-4 group-hover:text-primary transition-colors">I Need Sand</h3>
                 <p className="text-gray-400 mb-8 max-w-md">Browse our extensive catalog of river sand, M-sand, and aggregates. Direct from quarries to your site.</p>
                 <ul className="space-y-2 text-sm text-gray-500 font-mono">
                   <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 50+ Varieties</li>
                   <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Instant Quotes</li>
                   <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Live Tracking</li>
                 </ul>
               </Link>
            </div>
            
            <div className="p-12 hover:bg-white/5 transition-colors group cursor-pointer relative overflow-hidden">
               <Link href="/become-seller">
                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowRight className="h-8 w-8 text-primary" />
                 </div>
                 <h3 className="font-heading text-4xl font-bold uppercase mb-4 group-hover:text-primary transition-colors">I Supply / Transport</h3>
                 <p className="text-gray-400 mb-8 max-w-md">Join our network of verified suppliers and logistics providers. Grow your business with consistent orders.</p>
                 <ul className="space-y-2 text-sm text-gray-500 font-mono">
                   <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Guaranteed Payments</li>
                   <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Route Optimization</li>
                   <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Digital Documentation</li>
                 </ul>
               </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
