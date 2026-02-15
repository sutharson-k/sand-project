import { useRoute, Link } from "wouter";
import { TRUCKS, DEALERS } from "@/lib/data";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Info, Weight } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function SelectTransport() {
  const [match, params] = useRoute("/buyer/transport/:dealerId");
  
  if (!match) return <NotFound />;

  return (
    <Layout>
       <div className="bg-muted/20 min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="font-heading text-3xl font-bold uppercase mb-2">Logistics</h1>
            <p className="text-muted-foreground">Choose a vehicle suitable for your order volume.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TRUCKS.map((truck) => (
              <Card key={truck.id} className="border-2 border-muted hover:border-primary transition-colors duration-200 rounded-none overflow-hidden group">
                <div className="h-40 bg-gray-200 relative">
                  <img src={truck.image} alt={truck.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                  <div className="absolute top-2 right-2 bg-foreground text-background text-xs font-bold px-2 py-1 uppercase">
                    {truck.capacity}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold uppercase mb-2">{truck.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <Weight className="h-4 w-4 mr-2" /> Max Load: {truck.capacity}
                  </div>
                  
                  <div className="flex items-end justify-between mb-6">
                     <div>
                       <p className="text-xs text-muted-foreground uppercase">Est. Transport</p>
                       <p className="font-mono text-2xl font-bold text-primary">${truck.price}</p>
                     </div>
                  </div>

                  <Link href={`/buyer/order/${truck.id}`}>
                    <Button className="w-full bg-foreground text-background hover:bg-primary hover:text-foreground font-heading uppercase tracking-wide rounded-none transition-colors">
                      Select <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
