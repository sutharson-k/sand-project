import { useRoute, Link } from "wouter";
import { DEALERS, SAND_TYPES } from "@/lib/data";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, Star, Truck } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function SelectDealer() {
  const [match, params] = useRoute("/buyer/dealer/:sandId");
  
  if (!match) return <NotFound />;
  const sandId = parseInt(params.sandId);
  const sand = SAND_TYPES.find(s => s.id === sandId);

  if (!sand) return <NotFound />;

  return (
    <Layout>
       <div className="bg-muted/20 min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="font-heading text-3xl font-bold uppercase mb-2">Select a Supplier</h1>
            <p className="text-muted-foreground">Available dealers for <span className="font-bold text-foreground">{sand.name}</span> in your region.</p>
          </div>

          <div className="space-y-4">
            {DEALERS.map((dealer) => (
              <Card key={dealer.id} className="border-2 border-transparent hover:border-primary transition-colors duration-200 rounded-none shadow-sm hover:shadow-md">
                <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
                  {/* Avatar/Logo Placeholder */}
                  <div className="w-16 h-16 bg-secondary flex items-center justify-center font-heading font-bold text-xl border border-muted-foreground/20">
                    {dealer.name.substring(0,2).toUpperCase()}
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-heading text-xl font-bold uppercase mb-1">{dealer.name}</h3>
                    <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground mb-2">
                       <span className="flex items-center"><MapPin className="h-3 w-3 mr-1" /> {dealer.location}</span>
                       <span className="flex items-center"><Star className="h-3 w-3 mr-1 text-yellow-500 fill-yellow-500" /> {dealer.rating}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-none font-bold uppercase">Verified</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-none font-bold uppercase">Instant Load</span>
                    </div>
                  </div>

                  <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-dashed border-gray-200 pt-4 md:pt-0 md:pl-6 w-full md:w-auto">
                    <p className="text-sm text-muted-foreground mb-1">Price per ton</p>
                    <p className="font-mono text-3xl font-bold text-foreground mb-4">${dealer.price}</p>
                    <Link href={`/buyer/transport/${dealer.id}`}>
                      <Button className="w-full md:w-auto bg-primary text-foreground font-heading uppercase tracking-wide hover:bg-primary/90 rounded-none">
                        Select Dealer <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
