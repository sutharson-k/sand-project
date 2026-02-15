import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Truck, MapPin, Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b-4 border-primary bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="bg-primary p-2 border-2 border-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Truck className="h-6 w-6 text-foreground" />
            </div>
            <span className="font-heading text-2xl font-bold uppercase tracking-wider">Sand<span className="text-primary">Market</span></span>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-heading uppercase text-lg tracking-wide">
          <Link href="/"><a className="hover:text-primary hover:underline decoration-4 underline-offset-4 transition-all">Home</a></Link>
          <Link href="/buyer/catalog"><a className="hover:text-primary hover:underline decoration-4 underline-offset-4 transition-all">Catalog</a></Link>
          <Link href="/become-seller"><a className="hover:text-primary hover:underline decoration-4 underline-offset-4 transition-all">Partners</a></Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/buyer/tracking">
            <Button variant="outline" className="hidden md:flex font-heading uppercase tracking-wide border-2 border-foreground hover:bg-secondary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              <MapPin className="mr-2 h-4 w-4" /> Track Order
            </Button>
          </Link>
          <Button size="icon" variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 border-t-8 border-primary">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-primary p-1 border border-background">
              <Truck className="h-5 w-5 text-foreground" />
            </div>
            <span className="font-heading text-xl font-bold uppercase">SandMarket</span>
          </div>
          <p className="text-muted-foreground">
            The world's most reliable digital marketplace for construction aggregates. Sourced, transported, and delivered with precision.
          </p>
        </div>
        
        <div>
          <h4 className="font-heading text-lg font-bold uppercase mb-4 text-primary">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/buyer/catalog">Browse Sand</Link></li>
            <li><Link href="/become-seller">Supplier Portal</Link></li>
            <li><Link href="/become-seller">Transporter Portal</Link></li>
            <li><Link href="/buyer/tracking">Live Tracking</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold uppercase mb-4 text-primary">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Carrers</li>
            <li>Legal & Compliance</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold uppercase mb-4 text-primary">Contact</h4>
          <p className="text-sm text-muted-foreground mb-2">1-800-SAND-NOW</p>
          <p className="text-sm text-muted-foreground">support@sandmarket.demo</p>
          <div className="mt-4 p-4 border border-muted/20 bg-muted/5 rounded-none">
            <p className="text-xs text-primary font-bold uppercase">Certified Quality</p>
            <p className="text-xs text-muted-foreground">ISO 9001:2015 Compliant</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-muted/20 text-center text-xs text-muted-foreground">
        © 2024 SandMarket Demo. All rights reserved.
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-body text-foreground">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
