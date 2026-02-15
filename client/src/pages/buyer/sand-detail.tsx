import { useRoute, Link } from "wouter";
import { SAND_TYPES } from "@/lib/data";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Check, ShieldCheck, Truck, Ruler } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function SandDetail() {
  const [match, params] = useRoute("/buyer/sand/:id");
  
  if (!match) return <NotFound />;
  
  const sandId = parseInt(params.id);
  const sand = SAND_TYPES.find(s => s.id === sandId);
  
  if (!sand) return <NotFound />;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <Link href="/buyer/catalog">
          <a className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 font-mono text-sm uppercase tracking-wider group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Catalog
          </a>
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square border-4 border-foreground overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)]">
              <img 
                src={sand.image} 
                alt={sand.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
               {[1,2,3].map((_, i) => (
                 <div key={i} className="aspect-square border-2 border-muted overflow-hidden cursor-pointer hover:border-primary transition-colors">
                   <img src={sand.image} className="w-full h-full object-cover opacity-80 hover:opacity-100" />
                 </div>
               ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-primary text-foreground rounded-none text-xs font-bold px-2 py-1 uppercase">Best Seller</Badge>
              <Badge variant="outline" className="rounded-none text-xs font-bold px-2 py-1 uppercase">ISO Certified</Badge>
            </div>
            
            <h1 className="font-heading text-5xl font-bold uppercase mb-4 text-foreground">{sand.name}</h1>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl font-mono font-bold text-primary">${sand.pricePerTon}</span>
              <span className="text-muted-foreground uppercase font-bold text-sm">/ Per Ton (Avg.)</span>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed border-l-4 border-primary pl-4">
              {sand.description} Used extensively in construction, landscaping, and industrial applications. 
              Sourced directly from verified quarries with stringent quality control.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex gap-3">
                <div className="bg-secondary p-2 h-fit">
                   <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                   <h4 className="font-bold uppercase text-sm mb-1">Quality Certified</h4>
                   <p className="text-xs text-muted-foreground">Lab tested for purity and grain size.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-secondary p-2 h-fit">
                   <Truck className="h-5 w-5" />
                </div>
                <div>
                   <h4 className="font-bold uppercase text-sm mb-1">Fast Delivery</h4>
                   <p className="text-xs text-muted-foreground">Available for immediate dispatch.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-secondary p-2 h-fit">
                   <Ruler className="h-5 w-5" />
                </div>
                <div>
                   <h4 className="font-bold uppercase text-sm mb-1">Standard Grade</h4>
                   <p className="text-xs text-muted-foreground">Consistent particle distribution.</p>
                </div>
              </div>
            </div>

            <Separator className="mb-8" />

            <div className="flex gap-4">
              <Link href={`/buyer/dealer/${sand.id}`} className="flex-1">
                <Button className="w-full h-14 text-lg font-heading uppercase tracking-wide bg-foreground text-background hover:bg-primary hover:text-foreground border-2 border-transparent hover:border-foreground transition-all shadow-none hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  Find Dealers
                </Button>
              </Link>
              <Button variant="outline" className="h-14 px-6 border-2 border-muted hover:border-foreground transition-colors">
                 Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
