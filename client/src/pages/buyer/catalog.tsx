import { SAND_TYPES } from "@/lib/data";
import Layout from "@/components/layout";
import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Filter } from "lucide-react";

export default function BuyerCatalog() {
  return (
    <Layout>
      <div className="bg-secondary/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <div>
              <h1 className="font-heading text-4xl font-bold uppercase mb-2">Material Catalog</h1>
              <p className="text-muted-foreground">Select the type of sand required for your project.</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-2 border-foreground rounded-none font-heading uppercase">
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
              <Button className="bg-primary text-foreground border-2 border-foreground rounded-none font-heading uppercase hover:bg-primary/90 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all">
                Bulk Order
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SAND_TYPES.map((sand) => (
              <Link key={sand.id} href={`/buyer/sand/${sand.id}`}>
                <Card className="group cursor-pointer border-2 border-foreground rounded-none overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(255,100,0,1)] hover:-translate-y-1 transition-all duration-200">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={sand.image} 
                      alt={sand.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-foreground text-background rounded-none font-mono text-xs border border-white">
                        In Stock
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-heading text-xl font-bold uppercase truncate pr-2 group-hover:text-primary transition-colors">
                        {sand.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 mb-4 text-yellow-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`h-3 w-3 ${i < Math.floor(sand.rating) ? "fill-current" : "text-gray-300"}`} />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1 font-mono">({sand.rating})</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {sand.description}
                    </p>
                  </CardContent>
                  <CardFooter className="p-5 pt-0 flex justify-between items-center border-t border-dashed border-gray-200 mt-auto bg-gray-50/50">
                    <div>
                      <span className="text-xs text-muted-foreground uppercase block font-bold">Price Estimate</span>
                      <span className="font-heading text-lg font-bold">${sand.pricePerTon}/ton</span>
                    </div>
                    <Button size="sm" className="bg-foreground text-background rounded-none hover:bg-primary hover:text-foreground transition-colors uppercase font-bold text-xs tracking-wider">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
